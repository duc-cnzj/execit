package contracts

import (
	"context"

	"k8s.io/client-go/informers"
	appsv1 "k8s.io/client-go/listers/apps/v1"
	v1 "k8s.io/client-go/listers/core/v1"

	"github.com/coreos/go-oidc/v3/oidc"
	"golang.org/x/oauth2"
	"k8s.io/client-go/kubernetes"
	restclient "k8s.io/client-go/rest"
	"k8s.io/metrics/pkg/client/clientset/versioned"

	"github.com/duc-cnzj/execit/internal/config"
)

type Callback func(ApplicationInterface)

type Metrics interface {
	IncWebsocketConn()
	DecWebsocketConn()
}

type Server interface {
	Run(context.Context) error
	Shutdown(context.Context) error
}

type Bootstrapper interface {
	Bootstrap(ApplicationInterface) error
}

type K8s interface {
	Client() kubernetes.Interface
	MetricsClient() versioned.Interface
	RestConfig() *restclient.Config
	Informer() informers.SharedInformerFactory
	Done() chan struct{}
	PodLister() v1.PodLister
	PodListerSynced() func() bool
	DeploymentLister() appsv1.DeploymentLister
	DeploymentListerSynced() func() bool
	StatefulSetLister() appsv1.StatefulSetLister
	StatefulSetListerSynced() func() bool
}

type K8sClient struct {
	Client                  kubernetes.Interface
	MetricsClient           versioned.Interface
	RestConfig              *restclient.Config
	Informer                informers.SharedInformerFactory
	Done                    chan struct{}
	PodLister               v1.PodLister
	PodListerSynced         func() bool
	DeploymentLister        appsv1.DeploymentLister
	DeploymentListerSynced  func() bool
	StatefulSetLister       appsv1.StatefulSetLister
	StatefulSetListerSynced func() bool
}

type OidcConfigItem struct {
	Provider           *oidc.Provider
	Config             oauth2.Config
	EndSessionEndpoint string
}
type OidcConfig map[string]OidcConfigItem

type Option func(ApplicationInterface)

type ApplicationInterface interface {
	IsDebug() bool

	SetMetrics(Metrics)
	Metrics() Metrics

	Auth() AuthInterface
	SetAuth(AuthInterface)

	SetUploader(Uploader)
	Uploader() Uploader

	Bootstrap() error
	Config() *config.Config

	DBManager() DBManager

	Oidc() OidcConfig
	SetOidc(OidcConfig)

	AddServer(Server)
	Run() context.Context
	Shutdown()

	Done() <-chan struct{}

	BeforeServerRunHooks(Callback)
	RegisterBeforeShutdownFunc(Callback)
	RegisterAfterShutdownFunc(Callback)

	EventDispatcher() DispatcherInterface
	SetEventDispatcher(DispatcherInterface)

	SetPlugins(map[string]PluginInterface)
	GetPlugins() map[string]PluginInterface
	GetPluginByName(string) PluginInterface

	ReleaseKubeClient(name string) error
	ReleaseAllKubeClient() error
	LoadKubeClient(name string, kubeConfig []byte) (K8s, error)
}
