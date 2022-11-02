package bootstrappers

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit/frontend"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	e "github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/grpc/services"
	"github.com/duc-cnzj/execit/internal/middlewares"
	"github.com/duc-cnzj/execit/internal/models"
	proxy2 "github.com/duc-cnzj/execit/internal/proxy"
	"github.com/duc-cnzj/execit/internal/proxy/proxyidgen"
	"github.com/duc-cnzj/execit/internal/socket"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
	"github.com/duc-cnzj/execit/third_party/doc/data"

	swagger_ui "github.com/duc-cnzj/execit/third_party/doc/swagger-ui"
	"github.com/dustin/go-humanize"
	"github.com/gorilla/mux"
	grpc_opentracing "github.com/grpc-ecosystem/go-grpc-middleware/tracing/opentracing"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/opentracing/opentracing-go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/encoding/protojson"
	"gorm.io/gorm"
	"k8s.io/apimachinery/pkg/util/net"
)

type ApiGatewayBootstrapper struct{}

func (a *ApiGatewayBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	app.AddServer(&apiGateway{endpoint: fmt.Sprintf("localhost:%s", app.Config().GrpcPort)})
	app.RegisterAfterShutdownFunc(func(app contracts.ApplicationInterface) {
		t := time.NewTimer(5 * time.Second)
		defer t.Stop()
		ch := make(chan struct{}, 1)
		go func() {
			socket.Wait.Wait()
			ch <- struct{}{}
		}()
		select {
		case <-ch:
			xlog.Info("[Websocket]: all socket connection closed")
		case <-t.C:
			xlog.Warningf("[Websocket]: Waiting for timeout, not waiting for all socket connections to exit, there are currently %v connections remaining.", socket.Wait.Count())
		}
	})

	return nil
}

type apiGateway struct {
	endpoint string
	server   *http.Server
}

func (a *apiGateway) Run(ctx context.Context) error {
	xlog.Infof("[Server]: start apiGateway runner at %s.", a.endpoint)

	router := mux.NewRouter()

	gmux := runtime.NewServeMux(
		runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers:  true,
				UseProtoNames:   true,
				EmitUnpopulated: true,
			},
			UnmarshalOptions: protojson.UnmarshalOptions{
				DiscardUnknown: true,
			},
		}))

	opts := []grpc.DialOption{
		grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(MaxRecvSize)),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithChainUnaryInterceptor(
			grpc_opentracing.UnaryClientInterceptor(grpc_opentracing.WithFilterFunc(middlewares.TracingIgnoreFn), grpc_opentracing.WithTracer(opentracing.GlobalTracer())),
			middlewares.In18nUnaryClientInterceptor(),
		),
		grpc.WithChainStreamInterceptor(
			middlewares.I18nStreamClientInterceptor(),
		),
	}

	for _, f := range services.RegisteredEndpoints() {
		if err := f(ctx, gmux, a.endpoint, opts); err != nil {
			return err
		}
	}

	handFile(gmux)
	router.HandleFunc("/ping", func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Content-Type", "text/plain; charset=utf-8")
		writer.Write([]byte("pong"))
	})
	serveWs(router)
	serveProxy(router)
	frontend.LoadFrontendRoutes(router)
	LoadSwaggerUI(router)
	router.PathPrefix("/").Handler(gmux)

	s := &http.Server{
		Addr: ":" + app.Config().AppPort,
		Handler: middlewares.I18n(
			middlewares.TracingWrapper(
				middlewares.RouteLogger(
					middlewares.AllowCORS(
						router,
					),
				),
			),
		),
	}

	a.server = s

	go func(s *http.Server) {
		xlog.Info("api-gateway start at ", s.Addr)
		if err := s.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			xlog.Error(err)
		}
	}(s)

	return nil
}

func serveProxy(r *mux.Router) {
	fn := func(writer http.ResponseWriter, request *http.Request) {
		var (
			muxvars      = mux.Vars(request)
			clusterID, _ = strconv.Atoi(muxvars["cluster_id"])
			namespace    = muxvars["namespace"]
			pod          = muxvars["pod"]
			port         = muxvars["port"]
		)

		HandleProxy(contracts.ProxyPod{
			ClusterId: int64(clusterID),
			Namespace: namespace,
			Pod:       pod,
			Port:      port,
		}, writer, request)
	}

	r.HandleFunc("/proxy/clusters/{cluster_id:[0-9]+}/namespace/{namespace}/pod/{pod}/port/{port:[0-9]+}", func(writer http.ResponseWriter, request *http.Request) {
		request.URL.Path += "/"
		fn(writer, request)
	})
	r.HandleFunc("/proxy/clusters/{cluster_id:[0-9]+}/namespace/{namespace}/pod/{pod}/port/{port:[0-9]+}/{rest:.*}", fn)
	app.App().SetProxyManager(proxy2.NewProxyManager())
	app.ProxyManager().Check()
	app.App().RegisterAfterShutdownFunc(func(app contracts.ApplicationInterface) {
		xlog.Info("[PROXY]: close all")
		app.ProxyManager().CloseAll()
		time.Sleep(1 * time.Second)
	})
}

func HandleProxy(pod contracts.ProxyPod, w http.ResponseWriter, req *http.Request) {
	id := proxyidgen.GenProxyID(pod)
	prepend := pod.Url()
	port, err := app.ProxyManager().GetPortByID(id)
	if err != nil {
		http.Error(w, "service not ready", http.StatusNotFound)
		return
	}

	app.ProxyManager().Visit(id)

	parse, _ := url.Parse(fmt.Sprintf("http://127.0.0.1:%s/", port))
	rp := httputil.NewSingleHostReverseProxy(parse)
	rp.Transport = &proxy2.Transport{
		Scheme:      req.URL.Scheme,
		Host:        req.URL.Host,
		PathPrepend: prepend,
	}
	newReq := req.WithContext(req.Context())
	newReq.Header = net.CloneHeader(req.Header)
	newReq.Host = req.Host
	newReq.URL.Path = strings.TrimPrefix(newReq.URL.Path, prepend)
	xlog.Debugf("a: '%s' \n b: '%s' \n c: '%s", req.URL.Path, prepend, newReq.URL.Path)
	rp.ServeHTTP(w, newReq)
}

func (a *apiGateway) Shutdown(ctx context.Context) error {
	defer xlog.Info("[Server]: shutdown api-gateway runner.")
	if a.server == nil {
		return nil
	}

	return a.server.Shutdown(ctx)
}

func handFile(gmux *runtime.ServeMux) {
	gmux.HandlePath("POST", "/api/files", func(w http.ResponseWriter, r *http.Request, pathParams map[string]string) {
		if req, ok := authenticated(r); ok {
			handleBinaryFileUpload(w, req)
			return
		}
		http.Error(w, "Unauthenticated", http.StatusUnauthorized)
	})
	gmux.HandlePath("GET", "/api/download_file/{id}", func(w http.ResponseWriter, r *http.Request, pathParams map[string]string) {
		idstr, ok := pathParams["id"]
		if !ok {
			http.Error(w, "missing id", http.StatusBadRequest)
			return
		}
		id, err := strconv.Atoi(idstr)
		if err != nil {
			http.Error(w, "bad id", http.StatusBadRequest)
			return
		}
		if req, ok := authenticated(r); ok {
			handleDownload(w, req, id)
			return
		}
		http.Error(w, "Unauthenticated", http.StatusUnauthorized)
	})
}

func handleDownload(w http.ResponseWriter, r *http.Request, fid int) {
	var fil = &models.File{ID: fid}
	if err := app.DB().First(&fil).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			http.NotFound(w, r)
			return
		}
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	fileName := filepath.Base(fil.Path)

	user := r.Context().Value(authCtx{}).(*contracts.UserInfo)
	e.AuditLog(user.Name,
		event.ActionType_Download,
		fmt.Sprintf("Download file '%s', size %s",
			fil.Path, humanize.Bytes(fil.Size)), nil, nil)
	open, err := os.Open(fil.Path)
	if err != nil {
		xlog.Error(err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	defer open.Close()

	download(w, fileName, open)
}

func download(w http.ResponseWriter, filename string, reader io.Reader) {
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Header().Set("Content-Disposition", fmt.Sprintf(`attachment; filename="%s"`, url.QueryEscape(filename)))
	w.Header().Set("Expires", "0")
	w.Header().Set("Content-Transfer-Encoding", "binary")
	w.Header().Set("Access-Control-Expose-Headers", "*")

	if _, err := io.Copy(w, bufio.NewReaderSize(reader, 1024*1024*5)); err != nil {
		xlog.Error(err)
		http.Error(w, "internal error", http.StatusInternalServerError)
	}
}

func authenticated(r *http.Request) (*http.Request, bool) {
	if verifyToken, b := app.Auth().VerifyToken(r.Header.Get("Authorization")); b {
		return r.WithContext(context.WithValue(r.Context(), authCtx{}, verifyToken.UserInfo)), true
	}

	return nil, false
}

func handleBinaryFileUpload(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseMultipartForm(int64(app.Config().MaxUploadSize())); err != nil {
		http.Error(w, fmt.Sprintf("failed to parse form: %s", err.Error()), http.StatusBadRequest)
		return
	}

	f, h, err := r.FormFile("file")
	if err != nil {
		http.Error(w, fmt.Sprintf("failed to get file 'attachment': %s", err.Error()), http.StatusBadRequest)
		return
	}
	defer f.Close()

	info := r.Context().Value(authCtx{}).(*contracts.UserInfo)

	var uploader contracts.Uploader = app.Uploader()
	// 某个用户/那天/时间/文件名称
	put, err := uploader.Disk("users").Put(
		fmt.Sprintf("%s/%s/%s/%s",
			info.Name,
			time.Now().Format("2006-01-02"),
			fmt.Sprintf("%s-%s", time.Now().Format("15-04-05"), utils.RandomString(20)),
			h.Filename), f)
	if err != nil {
		http.Error(w, fmt.Sprintf("failed to upload file %s", err.Error()), http.StatusInternalServerError)
		return
	}

	file := models.File{Path: put.Path(), Username: info.Name, Size: put.Size()}
	app.DB().Create(&file)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	var res = struct {
		ID int `json:"id"`
	}{
		ID: file.ID,
	}
	marshal, _ := json.Marshal(&res)
	w.Write(marshal)
}

func serveWs(mux *mux.Router) {
	ws := socket.NewWebsocketManager()
	mux.HandleFunc("/api/ws_info", ws.Info)
	mux.HandleFunc("/ws", ws.Ws)
}

type ExportProject struct {
	DefaultBranch string `json:"default_branch"`
	Name          string `json:"name"`
	GitProjectId  int    `json:"git_project_id"`
	Enabled       bool   `json:"enabled"`
	GlobalEnabled bool   `json:"global_enabled"`
	GlobalConfig  string `json:"global_config"`
}

func LoadSwaggerUI(mux *mux.Router) {
	subrouter := mux.PathPrefix("").Subrouter()
	subrouter.Use(middlewares.HttpCache)

	subrouter.Handle("/doc/swagger.json",
		http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			w.Write(data.SwaggerJson)
		}),
	)

	subrouter.PathPrefix("/docs/").Handler(
		http.StripPrefix("/docs/", http.FileServer(http.FS(swagger_ui.SwaggerUI))),
	)
}

type authCtx struct{}
