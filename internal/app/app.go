package app

import (
	"context"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	v12 "k8s.io/api/apps/v1"
	"k8s.io/apimachinery/pkg/api/meta"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/client-go/informers"
	"k8s.io/client-go/kubernetes"
	appsv1 "k8s.io/client-go/listers/apps/v1"
	v1 "k8s.io/client-go/listers/core/v1"
	restclient "k8s.io/client-go/rest"
	kubeCache "k8s.io/client-go/tools/cache"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/metrics/pkg/client/clientset/versioned"

	"github.com/duc-cnzj/execit/internal/app/bootstrappers"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/app/instance"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/database"
	"github.com/duc-cnzj/execit/internal/event/events"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type Hook string

const (
	BeforeRunHook  Hook = "before_run"
	BeforeDownHook Hook = "before_down"
	AfterDownHook  Hook = "after_down"
)

var _ contracts.ApplicationInterface = (*Application)(nil)

var DefaultBootstrappers = []contracts.Bootstrapper{
	&bootstrappers.PluginsBootstrapper{},
	&bootstrappers.I18nBootstrapper{},
	&bootstrappers.AuthBootstrapper{},
	&bootstrappers.UploadBootstrapper{},
	&bootstrappers.DBBootstrapper{},
	&bootstrappers.ApiGatewayBootstrapper{},
	&bootstrappers.PprofBootstrapper{},
	&bootstrappers.GrpcBootstrapper{},
	&bootstrappers.MetricsBootstrapper{},
	&bootstrappers.OidcBootstrapper{},
	&bootstrappers.TracingBootstrapper{},
	&bootstrappers.AppBootstrapper{},
}

type emptyMetrics struct{}

func (e *emptyMetrics) IncWebsocketConn() {
}

func (e *emptyMetrics) DecWebsocketConn() {
}

type Application struct {
	done          context.Context
	doneFunc      func()
	config        *config.Config
	dbManager     contracts.DBManager
	dispatcher    contracts.DispatcherInterface
	metrics       contracts.Metrics
	servers       []contracts.Server
	bootstrappers []contracts.Bootstrapper

	k8sMu      sync.RWMutex
	k8sClients map[string]contracts.K8s

	hooksMu sync.RWMutex
	hooks   map[Hook][]contracts.Callback

	plugins      map[string]contracts.PluginInterface
	oidcProvider contracts.OidcConfig
	uploader     contracts.Uploader
	auth         contracts.AuthInterface
}

func (app *Application) ReleaseKubeClient(name string) error {
	app.k8sMu.Lock()
	defer app.k8sMu.Unlock()
	if client, ok := app.k8sClients[name]; ok {
		delete(app.k8sClients, name)
		close(client.Done())
	}
	return nil
}

func (app *Application) ReleaseAllKubeClient() error {
	app.k8sMu.Lock()
	defer app.k8sMu.Unlock()
	for s, client := range app.k8sClients {
		delete(app.k8sClients, s)
		close(client.Done())
	}
	return nil
}

func (app *Application) LoadKubeClient(name string, kubeConfig []byte) (contracts.K8s, error) {
	app.k8sMu.Lock()
	defer app.k8sMu.Unlock()
	sClient := app.k8sClients[name]
	if sClient != nil {
		return sClient, nil
	}
	client, restConfig, err := NewKubeClient(kubeConfig)
	if err != nil {
		return nil, err
	}

	metrics, err := versioned.NewForConfig(restConfig)
	if err != nil {
		return nil, err
	}
	ch := make(chan struct{})
	informer := informers.NewSharedInformerFactory(client, 0)
	kc := &k8sClient{
		client:                  client,
		metricsClient:           metrics,
		restConfig:              restConfig,
		informer:                informer,
		done:                    ch,
		podLister:               informer.Core().V1().Pods().Lister(),
		podListerSynced:         informer.Core().V1().Pods().Informer().HasSynced,
		deploymentLister:        informer.Apps().V1().Deployments().Lister(),
		deploymentListerSynced:  informer.Apps().V1().Deployments().Informer().HasSynced,
		statefulSetLister:       informer.Apps().V1().StatefulSets().Lister(),
		statefulSetListerSynced: informer.Apps().V1().StatefulSets().Informer().HasSynced,
	}
	informer.Apps().V1().Deployments().Informer().AddEventHandler(&kubeCache.ResourceEventHandlerFuncs{
		DeleteFunc: onDelete(name),
	})
	informer.Apps().V1().StatefulSets().Informer().AddEventHandler(&kubeCache.ResourceEventHandlerFuncs{
		DeleteFunc: onDelete(name),
	})
	kc.Informer().Start(ch)
	kubeCache.WaitForCacheSync(wait.NeverStop, kc.DeploymentListerSynced(), kc.PodListerSynced(), kc.StatefulSetListerSynced())
	app.k8sClients[name] = kc
	return kc, nil
}

func onDelete(clusterName string) func(obj any) {
	return func(obj any) {
		var (
			ob runtime.Object
			t  string
		)
		switch o := obj.(type) {
		case *v12.Deployment:
			ob = o
			t = "Deployment"
		case *v12.StatefulSet:
			ob = o
			t = "StatefulSet"
		default:
			return
		}
		accessor, _ := meta.Accessor(ob)
		var cu models.Cluster
		if app.DB().Where("`name` = ?", clusterName).First(&cu).Error == nil {
			var ca models.Card
			if app.DB().Where("`cluster_id` = ? and `namespace` = ? and `name` = ? and `type` = ?", cu.ID, accessor.GetNamespace(), accessor.GetName(), t).First(&ca).Error == nil {
				app.DB().Delete(&ca)
				xlog.Warningf("delete card cluster_id %d namespace %s name %s type %s", ca.ClusterID, ca.Namespace, ca.Name, ca.Type)
				app.Event().Dispatch(events.EventCardDeleted, events.EventCardDeletedData{
					Card: &ca,
				})
			}
		}
	}
}

func (app *Application) Auth() contracts.AuthInterface {
	return app.auth
}

func (app *Application) SetAuth(auth contracts.AuthInterface) {
	app.auth = auth
}

func (app *Application) SetUploader(uploader contracts.Uploader) {
	app.uploader = uploader
}

func (app *Application) Uploader() contracts.Uploader {
	return app.uploader
}

func (app *Application) Oidc() contracts.OidcConfig {
	return app.oidcProvider
}

func (app *Application) SetOidc(provider contracts.OidcConfig) {
	app.oidcProvider = provider
}

func (app *Application) SetMetrics(metrics contracts.Metrics) {
	app.metrics = metrics
}

func (app *Application) Metrics() contracts.Metrics {
	return app.metrics
}

func (app *Application) GetPluginByName(name string) contracts.PluginInterface {
	return app.plugins[name]
}

func (app *Application) SetPlugins(plugins map[string]contracts.PluginInterface) {
	app.plugins = plugins
}

func (app *Application) GetPlugins() map[string]contracts.PluginInterface {
	return app.plugins
}

func (app *Application) Done() <-chan struct{} {
	return app.done.Done()
}

func (app *Application) EventDispatcher() contracts.DispatcherInterface {
	return app.dispatcher
}

func (app *Application) SetEventDispatcher(dispatcher contracts.DispatcherInterface) {
	app.dispatcher = dispatcher
}

func NewApplication(config *config.Config, opts ...contracts.Option) contracts.ApplicationInterface {
	var mustBooted = []contracts.Bootstrapper{
		&bootstrappers.LogBootstrapper{},
		&bootstrappers.EventBootstrapper{},
	}

	doneCtx, cancelFunc := context.WithCancel(context.Background())
	app := &Application{
		bootstrappers: DefaultBootstrappers,
		config:        config,
		done:          doneCtx,
		doneFunc:      cancelFunc,
		hooks:         make(map[Hook][]contracts.Callback),
		servers:       []contracts.Server{},
		metrics:       &emptyMetrics{},
		k8sClients:    make(map[string]contracts.K8s),
	}

	app.dbManager = database.NewManager(app)

	for _, opt := range opts {
		opt(app)
	}

	instance.SetInstance(app)

	for _, bootstrapper := range mustBooted {
		if err := bootstrapper.Bootstrap(app); err != nil {
			xlog.Fatal(err)
		}
	}

	return app
}

func (app *Application) Bootstrap() error {
	for _, bootstrapper := range app.bootstrappers {
		if err := bootstrapper.Bootstrap(app); err != nil {
			return err
		}
	}

	return nil
}

func (app *Application) Config() *config.Config {
	return app.config
}

func (app *Application) DBManager() contracts.DBManager {
	return app.dbManager
}

func (app *Application) IsDebug() bool {
	return app.config.Debug
}

func (app *Application) AddServer(server contracts.Server) {
	app.servers = append(app.servers, server)
}

func (app *Application) Run() context.Context {
	sig := make(chan os.Signal, 2)
	ch, cancel := context.WithCancel(context.TODO())
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)

	go func() {
		s1 := <-sig
		cancel()
		xlog.Warningf("Receive system signal %v, execute ctrl+c again to force quit!", s1.String())
		s2 := <-sig
		xlog.Warningf("Received the %v signal, perform a forced exit!", s2.String())
		os.Exit(1)
	}()

	app.RunServerHooks(BeforeRunHook)

	for _, server := range app.servers {
		if err := server.Run(context.Background()); err != nil {
			xlog.Fatal(err)
		}
	}

	return ch
}

func (app *Application) Shutdown() {
	app.doneFunc()
	app.RunServerHooks(BeforeDownHook)

	wg := &sync.WaitGroup{}
	for _, server := range app.servers {
		wg.Add(1)
		go func(server contracts.Server) {
			defer wg.Done()
			ctx, cancel := context.WithTimeout(context.TODO(), 5*time.Second)
			defer cancel()
			if err := server.Shutdown(ctx); err != nil {
				xlog.Error(err)
			}
		}(server)
	}
	wg.Wait()

	app.RunServerHooks(AfterDownHook)

	xlog.Info("server graceful shutdown.")
}

func (app *Application) RegisterAfterShutdownFunc(fn contracts.Callback) {
	app.hooksMu.Lock()
	defer app.hooksMu.Unlock()
	app.hooks[AfterDownHook] = append(app.hooks[AfterDownHook], fn)
}

func (app *Application) RegisterBeforeShutdownFunc(fn contracts.Callback) {
	app.hooksMu.Lock()
	defer app.hooksMu.Unlock()
	app.hooks[BeforeDownHook] = append(app.hooks[BeforeDownHook], fn)
}

func (app *Application) RunServerHooks(hook Hook) {
	app.hooksMu.RLock()
	defer app.hooksMu.RUnlock()
	wg := sync.WaitGroup{}
	for _, cb := range app.hooks[hook] {
		wg.Add(1)
		go func(cb contracts.Callback) {
			defer wg.Done()
			cb(app)
		}(cb)
	}
	wg.Wait()
}

func (app *Application) BeforeServerRunHooks(cb contracts.Callback) {
	app.hooksMu.Lock()
	defer app.hooksMu.Unlock()
	app.hooks[BeforeRunHook] = append(app.hooks[BeforeRunHook], cb)
}

// NewKubeClient TODO  metrics: record initialized time
func NewKubeClient(kubeconfig []byte) (client kubernetes.Interface, restConfig *restclient.Config, err error) {
	defer func() {
		xlog.Warningf("new kube client %s", restConfig.Host)
	}()
	var cc clientcmd.ClientConfig
	cc, err = clientcmd.NewClientConfigFromBytes(kubeconfig)
	if err == nil {
		restConfig, err = cc.ClientConfig()
		if err == nil {
			restConfig.QPS = -1
		}
		client, err = kubernetes.NewForConfig(restConfig)
		if err == nil {
			return client, restConfig, err
		}
	}

	return nil, nil, err
}

type k8sClient struct {
	client                  kubernetes.Interface
	metricsClient           versioned.Interface
	restConfig              *restclient.Config
	informer                informers.SharedInformerFactory
	done                    chan struct{}
	podLister               v1.PodLister
	podListerSynced         func() bool
	deploymentLister        appsv1.DeploymentLister
	deploymentListerSynced  func() bool
	statefulSetLister       appsv1.StatefulSetLister
	statefulSetListerSynced func() bool
}

func (k *k8sClient) Client() kubernetes.Interface {
	return k.client
}

func (k *k8sClient) MetricsClient() versioned.Interface {
	return k.metricsClient
}

func (k *k8sClient) RestConfig() *restclient.Config {
	return k.restConfig
}

func (k *k8sClient) Informer() informers.SharedInformerFactory {
	return k.informer
}

func (k *k8sClient) Done() chan struct{} {
	return k.done
}

func (k *k8sClient) PodLister() v1.PodLister {
	return k.podLister
}

func (k *k8sClient) PodListerSynced() func() bool {
	return k.podListerSynced
}

func (k *k8sClient) DeploymentLister() appsv1.DeploymentLister {
	return k.deploymentLister
}

func (k *k8sClient) DeploymentListerSynced() func() bool {
	return k.deploymentListerSynced
}

func (k *k8sClient) StatefulSetLister() appsv1.StatefulSetLister {
	return k.statefulSetLister
}

func (k *k8sClient) StatefulSetListerSynced() func() bool {
	return k.statefulSetListerSynced
}
