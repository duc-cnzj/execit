package utils

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"path/filepath"

	"k8s.io/client-go/kubernetes"
	restclient "k8s.io/client-go/rest"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/xlog"

	"github.com/dustin/go-humanize"
	"github.com/mholt/archiver/v3"
	v1 "k8s.io/api/core/v1"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/remotecommand"
)

type CopyFileToPodResult struct {
	TargetDir     string
	ErrOut        string
	StdOut        string
	ContainerPath string
	FileName      string
}

func CopyFileToPod(kubeClient kubernetes.Interface, restConfig *restclient.Config, namespace, pod, container, fpath, targetContainerDir string) (*CopyFileToPodResult, error) {
	var (
		errbf, outbf      = bytes.NewBuffer([]byte{}), bytes.NewBuffer([]byte{})
		reader, outStream = io.Pipe()
	)
	if targetContainerDir == "" {
		targetContainerDir = "/tmp"
	}
	st, err := os.Stat(fpath)
	if err != nil {
		xlog.Error(err)
		return nil, err
	}
	if uint64(st.Size()) > app.Config().MaxUploadSize() {
		return nil, fmt.Errorf("the maximum size must not exceed %s, the size of your uploaded file is %s", humanize.Bytes(app.Config().MaxUploadSize()), humanize.Bytes(uint64(st.Size())))
	}

	base := filepath.Base(fpath)
	dir := filepath.Dir(fpath)
	path := filepath.Join(dir, base+".tar.gz")
	xlog.Debugf("[CopyFileToPod]: %v", path)
	if err := archiver.Archive([]string{fpath}, path); err != nil {
		return nil, err
	}
	defer app.Uploader().Delete(path)
	src, err := os.Open(path)
	if err != nil {
		xlog.Error(err)
		return nil, err
	}
	go func(reader *io.PipeReader, outStream *io.PipeWriter, src *os.File) {
		defer func() {
			reader.Close()
			outStream.Close()
			src.Close()
		}()
		defer HandlePanic("CopyFileToPod")

		if _, err := io.Copy(outStream, src); err != nil {
			xlog.Error(err)
		}
	}(reader, outStream, src)

	peo := &v1.PodExecOptions{
		Stdin:     true,
		Stdout:    true,
		Stderr:    true,
		Container: container,
		Command:   []string{"tar", "-zmxf", "-", "-C", targetContainerDir},
	}

	req := kubeClient.CoreV1().
		RESTClient().
		Post().
		Namespace(namespace).
		Resource("pods").
		SubResource("exec").
		Name(pod)
	params := req.VersionedParams(peo, scheme.ParameterCodec)
	exec, err := remotecommand.NewSPDYExecutor(restConfig, "POST", params.URL())
	if err != nil {
		xlog.Error(err)
		return nil, err
	}

	err = exec.Stream(remotecommand.StreamOptions{
		Stdin:  reader,
		Stdout: outbf,
		Stderr: errbf,
	})

	return &CopyFileToPodResult{
		TargetDir:     targetContainerDir,
		ErrOut:        errbf.String(),
		StdOut:        outbf.String(),
		ContainerPath: filepath.Join(targetContainerDir, base),
		FileName:      base,
	}, err
}
