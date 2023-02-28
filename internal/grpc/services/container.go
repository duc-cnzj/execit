package services

import (
	"bufio"
	"bytes"
	"context"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/dustin/go-humanize"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/remotecommand"

	"github.com/duc-cnzj/execit-client/container"
	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/rbac"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/auth"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	trans "github.com/duc-cnzj/execit/internal/translator"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		container.RegisterContainerSvcServer(s, new(ContainerSvc))
	})
	RegisterEndpoint(container.RegisterContainerSvcHandlerFromEndpoint)
}

type ContainerSvc struct {
	container.UnsafeContainerSvcServer
}

func (c *ContainerSvc) Proxy(ctx context.Context, request *container.ProxyRequest) (*container.ProxyResponse, error) {
	var (
		pod = contracts.ProxyPod{
			ClusterId: request.ClusterId,
			Namespace: request.Namespace,
			Pod:       request.Pod,
			Port:      request.Port,
		}
	)
	_, isNew, err := app.ProxyManager().Add(pod)
	if err != nil {
		return nil, err
	}

	if isNew {
		AuditLog(MustGetUser(ctx).Name,
			event.ActionType_Create,
			fmt.Sprintf("[PROXY]: user '%s' create web proxy, cluster_id: '%v', namespace: '%v', pod: '%v', port: '%v' ", MustGetUser(ctx).Name, pod.ClusterId, pod.Namespace, pod.Pod, pod.Port))
	}

	return &container.ProxyResponse{Success: true}, nil
}

func (c *ContainerSvc) IsPodRunning(_ context.Context, request *container.IsPodRunningRequest) (*container.IsPodRunningResponse, error) {
	running, reason := utils.IsPodRunning(utils.K8sClientByClusterID(request.ClusterId), request.GetNamespace(), request.GetPod())

	return &container.IsPodRunningResponse{Running: running, Reason: reason}, nil
}

func (c *ContainerSvc) IsPodExists(_ context.Context, request *container.IsPodExistsRequest) (*container.IsPodExistsResponse, error) {
	_, err := utils.K8sClientByClusterID(request.ClusterId).PodLister().Pods(request.Namespace).Get(request.Pod)
	if err != nil && apierrors.IsNotFound(err) {
		return &container.IsPodExistsResponse{Exists: false}, nil
	}

	return &container.IsPodExistsResponse{Exists: true}, nil
}

func (c *ContainerSvc) Exec(request *container.ExecRequest, server container.ContainerSvc_ExecServer) error {
	k8sClient := utils.K8sClientByClusterID(request.ClusterId)
	running, reason := utils.IsPodRunning(k8sClient, request.Namespace, request.Pod)
	if !running {
		return errors.New(reason)
	}

	if request.Container == "" {
		pod, _ := k8sClient.PodLister().Pods(request.Namespace).Get(request.Pod)
		for _, co := range pod.Spec.Containers {
			request.Container = co.Name
			xlog.Debug("Use the first container: ", co.Name)
			break
		}
	}

	peo := &v1.PodExecOptions{
		Stdin:     true,
		Stdout:    true,
		Stderr:    true,
		TTY:       false,
		Container: request.Container,
		Command:   request.Command,
	}

	req := k8sClient.Client().CoreV1().
		RESTClient().
		Post().
		Namespace(request.Namespace).
		Resource("pods").
		SubResource("exec").
		Name(request.Pod)

	params := req.VersionedParams(peo, scheme.ParameterCodec)
	exec, err := remotecommand.NewSPDYExecutor(k8sClient.RestConfig(), "POST", params.URL())
	if err != nil {
		return err
	}

	rw := newExecReaderWriter(1024 * 1024)
	defer rw.Close()

	go func() {
		defer rw.Close()
		defer utils.HandlePanic("Exec")
		if err := exec.Stream(remotecommand.StreamOptions{
			Stdin:             rw,
			Stdout:            rw,
			Stderr:            rw,
			Tty:               false,
			TerminalSizeQueue: nil,
		}); err != nil {
			xlog.Error(err)
			return
		}
	}()

	for {
		select {
		case msg, ok := <-rw.ch:
			if !ok {
				return nil
			}
			if err := server.Send(&container.ExecResponse{
				Data: msg,
			}); err != nil {
				return err
			}
		case <-server.Context().Done():
			return server.Context().Err()
		}
	}
}

func (c *ContainerSvc) CopyToPod(ctx context.Context, request *container.CopyToPodRequest) (*container.CopyToPodResponse, error) {
	k8sClient := utils.K8sClientByClusterID(request.ClusterId)
	if running, reason := utils.IsPodRunning(k8sClient, request.Namespace, request.Pod); !running {
		return nil, status.Error(codes.NotFound, reason)
	}

	var file models.File
	if err := app.DB().First(&file, request.FileId).Error; err != nil {
		return nil, err
	}
	res, err := utils.CopyFileToPod(k8sClient.Client(), k8sClient.RestConfig(), request.Namespace, request.Pod, request.Container, file.Path, "")
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	app.DB().Model(&file).Updates(map[string]any{
		"namespace":      request.Namespace,
		"pod":            request.Pod,
		"container":      request.Container,
		"container_path": res.ContainerPath,
	})

	FileAuditLog(MustGetUser(ctx).Name,
		fmt.Sprintf("Upload file to pod: %s/%s/%s, container path: '%s', size: %s.",
			request.Namespace,
			request.Pod,
			request.Container,
			res.ContainerPath,
			humanize.Bytes(file.Size),
		), file.ID)

	return &container.CopyToPodResponse{
		PodFilePath: res.TargetDir,
		Output:      res.ErrOut,
		FileName:    res.FileName,
	}, err
}

func (c *ContainerSvc) StreamCopyToPod(server container.ContainerSvc_StreamCopyToPodServer) error {
	var (
		fpath         string
		namespace     string
		pod           string
		containerName string
		user          = MustGetUser(server.Context())
		f             *os.File
		disk          = "grpc_upload"
	)
	defer f.Close()

	for {
		recv, err := server.Recv()
		client := utils.K8sClientByClusterID(recv.ClusterId)
		kclient := client.Client()
		if err != nil {
			if err == io.EOF && f != nil {
				stat, _ := f.Stat()
				f.Close()

				file := models.File{Path: f.Name(), Username: user.Name, Size: uint64(stat.Size())}
				app.DB().Create(&file)
				res, err := c.CopyToPod(server.Context(), &container.CopyToPodRequest{
					FileId:    int64(file.ID),
					Namespace: namespace,
					Pod:       pod,
					Container: containerName,
				})
				if err != nil {
					return err
				}
				return server.SendAndClose(&container.StreamCopyToPodResponse{
					Size:        stat.Size(),
					PodFilePath: res.PodFilePath,
					Output:      res.Output,
					Pod:         pod,
					Namespace:   namespace,
					Container:   containerName,
					Filename:    res.FileName,
				})
			}
			if f != nil {
				f.Close()
				app.Uploader().Disk(disk).Delete(f.Name())
			}
			return err
		}
		if fpath == "" {
			pod = recv.Pod
			namespace = recv.Namespace
			if recv.Container == "" {
				pod, err := kclient.CoreV1().Pods(recv.Namespace).Get(context.TODO(), recv.Pod, metav1.GetOptions{})
				if err != nil {
					return err
				}
				for _, co := range pod.Spec.Containers {
					recv.Container = co.Name
					xlog.Debug("Use the first container:", co.Name)
					break
				}
			}
			containerName = recv.Container
			running, reason := utils.IsPodRunning(client, recv.Namespace, recv.Pod)
			if !running {
				return errors.New(reason)
			}

			// 某个用户/那天/时间/文件名称
			// duc/2006-01-02/15-03-04-random-str/xxx.tgz
			p := fmt.Sprintf("%s/%s/%s/%s",
				user.Name,
				time.Now().Format("2006-01-02"),
				fmt.Sprintf("%s-%s", time.Now().Format("15-04-05"), utils.RandomString(20)),
				filepath.Base(recv.GetFileName()))
			fpath = app.Uploader().Disk(disk).AbsolutePath(p)
			err := app.Uploader().Disk(disk).MkDir(filepath.Dir(p), true)
			if err != nil {
				xlog.Error(err)
				return err
			}
			f, err = os.Create(fpath)
			if err != nil {
				xlog.Error(err)
				return err
			}
		}

		f.Write(recv.GetData())
	}
}

func podHasLog(pod *v1.Pod) bool {
	return pod.Status.Phase == v1.PodRunning || pod.Status.Phase == v1.PodSucceeded || pod.Status.Phase == v1.PodFailed
}

func (c *ContainerSvc) ContainerLog(ctx context.Context, request *container.LogRequest) (*container.LogResponse, error) {
	if !auth.HasPermissionFor(MustGetUser(ctx), rbac.Permission_Card, request.CardId) {
		return nil, trans.TToError("forbidden", MustGetLang(ctx))
	}

	client := utils.K8sClientByClusterID(request.ClusterId)
	kclient := client.Client()
	podInfo, err := client.PodLister().Pods(request.Namespace).Get(request.Pod)
	if err != nil || !podHasLog(podInfo) {
		return nil, status.Error(codes.NotFound, trans.T("log not found", MustGetLang(ctx)))
	}

	var limit int64 = 2000
	opt := &v1.PodLogOptions{
		Container: request.Container,
	}
	if podInfo.Status.Phase == v1.PodRunning {
		opt.TailLines = &limit
	}
	logs := kclient.CoreV1().Pods(request.Namespace).GetLogs(request.Pod, opt)
	do := logs.Do(context.Background())
	raw, err := do.Raw()
	if err != nil {
		return nil, err
	}

	return &container.LogResponse{
		Namespace:     request.Namespace,
		PodName:       request.Pod,
		ContainerName: request.Container,
		Log:           string(raw),
	}, nil
}

func (c *ContainerSvc) StreamContainerLog(request *container.LogRequest, server container.ContainerSvc_StreamContainerLogServer) error {
	if !auth.HasPermissionFor(MustGetUser(server.Context()), rbac.Permission_Card, request.CardId) {
		return trans.TToError("forbidden", MustGetLang(server.Context()))
	}
	client := utils.K8sClientByClusterID(request.ClusterId)
	kclient := client.Client()
	podInfo, err := client.PodLister().Pods(request.Namespace).Get(request.Pod)

	if err != nil || !podHasLog(podInfo) {
		return status.Error(codes.NotFound, trans.T("log not found", MustGetLang(server.Context())))
	}
	if podInfo.Status.Phase == v1.PodSucceeded || podInfo.Status.Phase == v1.PodFailed {
		log, err := c.ContainerLog(server.Context(), request)
		if err != nil {
			return err
		}
		scanner := bufio.NewScanner(strings.NewReader(log.Log))
		scanner.Split(bufio.ScanLines)
		for scanner.Scan() {
			server.Send(&container.LogResponse{
				Namespace:     request.Namespace,
				PodName:       request.Pod,
				ContainerName: request.Container,
				Log:           scanner.Text(),
			})
		}
		return scanner.Err()
	}

	var limit int64 = 2000
	logs := kclient.CoreV1().Pods(request.Namespace).GetLogs(request.Pod, &v1.PodLogOptions{
		Follow:    true,
		Container: request.Container,
		TailLines: &limit,
	})
	stream, err := logs.Stream(context.TODO())
	if err != nil {
		return err
	}
	bf := bufio.NewReader(stream)

	ch := make(chan []byte, 100)
	go func() {
		defer func() {
			xlog.Debug("[Stream]:  read exit!")
			close(ch)
		}()
		defer utils.HandlePanic("StreamContainerLog")

		for {
			bytes, err := bf.ReadBytes('\n')
			if err != nil {
				xlog.Debugf("[Stream]: %v", err)
				return
			}
			select {
			case ch <- bytes:
			default:
			}
		}
	}()

	for {
		select {
		case <-app.App().Done():
			stream.Close()
			err := errors.New("server shutdown")
			xlog.Debug("[Stream]: client exit with: ", err)
			return err
		case <-server.Context().Done():
			stream.Close()
			xlog.Debug("[Stream]: client exit with: ", server.Context().Err())
			return server.Context().Err()
		case msg, ok := <-ch:
			if !ok {
				stream.Close()
				return errors.New("[Stream]: channel close")
			}

			if err := server.Send(&container.LogResponse{
				Namespace:     request.Namespace,
				PodName:       request.Pod,
				ContainerName: request.Container,
				Log:           string(msg),
			}); err != nil {
				stream.Close()
				return err
			}
		}
	}
}

type execReaderWriter struct {
	reader   io.Reader
	closedCh chan struct{}
	ch       chan string
}

func (rw *execReaderWriter) IsClosed() bool {
	select {
	case _, ok := <-rw.closedCh:
		if !ok {
			return true
		}
	default:
	}
	return false
}

func (rw *execReaderWriter) Close() error {
	if rw.IsClosed() {
		return nil
	}
	close(rw.ch)
	close(rw.closedCh)

	return nil
}

func newExecReaderWriter(size int) *execReaderWriter {
	return &execReaderWriter{
		reader:   bytes.NewReader(make([]byte, size)),
		closedCh: make(chan struct{}, 1),
		ch:       make(chan string, 100),
	}
}

func (rw *execReaderWriter) Read(p []byte) (int, error) {
	select {
	case <-rw.closedCh:
		return 0, errors.New("closed")
	default:
	}
	return len(p), nil
}

func (rw *execReaderWriter) Write(p []byte) (int, error) {
	select {
	case <-rw.closedCh:
		xlog.Warning("close")
		return 0, errors.New("closed")
	case rw.ch <- string(p):
		return len(p), nil
	}
}
