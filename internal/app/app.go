package app

import (
	"context"
	"fmt"
	"net"
	"net/url"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	appsv1 "k8s.io/api/apps/v1"
	batchv1 "k8s.io/api/batch/v1"
	"k8s.io/apimachinery/pkg/api/meta"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/informers"
	"k8s.io/client-go/kubernetes"
	appsv1lister "k8s.io/client-go/listers/apps/v1"
	corev1 "k8s.io/client-go/listers/batch/v1"
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
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type Hook string

const (
	BeforeRunHook  Hook = "before_run"
	BeforeDownHook Hook = "before_down"
	AfterDownHook  Hook = "after_down"
)

var _ contracts.ApplicationInterface = (*Application)(nil)

type Application struct {
	done          context.Context
	doneFunc      func()
	config        *config.Config
	dbManager     contracts.DBManager
	dispatcher    contracts.DispatcherInterface
	servers       []contracts.Server
	bootstrappers []contracts.Bootstrapper

	proxyManager contracts.ProxyManagerInterface

	k8sMu      sync.RWMutex
	k8sClients map[string]contracts.K8s

	hooksMu sync.RWMutex
	hooks   map[Hook][]contracts.Callback

	plugins      map[string]contracts.PluginInterface
	oidcProvider contracts.OidcConfig
	uploader     contracts.Uploader
	auth         contracts.AuthInterface
}

func (app *Application) ProxyManager() contracts.ProxyManagerInterface {
	return app.proxyManager
}

func (app *Application) SetProxyManager(proxyManager contracts.ProxyManagerInterface) {
	app.proxyManager = proxyManager
}

func (app *Application) ReleaseKubeClient(name string, namespace string) error {
	app.k8sMu.Lock()
	defer app.k8sMu.Unlock()
	key := keyFn(name, namespace)
	if client, ok := app.k8sClients[key]; ok {
		xlog.Warning("ReleaseKubeClient: ", key)
		delete(app.k8sClients, key)
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

func keyFn(name, namespace string) string {
	return fmt.Sprintf("name:%s-namesapce:%s", name, namespace)
}

func (app *Application) LoadKubeClient(name string, kubeConfig []byte, namespace string) (contracts.K8s, error) {
	key := keyFn(name, namespace)

	app.k8sMu.Lock()
	defer app.k8sMu.Unlock()
	sClient := app.k8sClients[key]
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
	informer := informers.NewSharedInformerFactoryWithOptions(client, 0, informers.WithNamespace(namespace))
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
		jobLister:               informer.Batch().V1().Jobs().Lister(),
		jobListerSynced:         informer.Batch().V1().Jobs().Informer().HasSynced,
	}
	informer.Apps().V1().Deployments().Informer().AddEventHandler(&kubeCache.ResourceEventHandlerFuncs{
		DeleteFunc: onDelete(name),
	})
	informer.Apps().V1().StatefulSets().Informer().AddEventHandler(&kubeCache.ResourceEventHandlerFuncs{
		DeleteFunc: onDelete(name),
	})
	kc.Informer().Start(ch)
	kubeCache.WaitForCacheSync(ch, kc.DeploymentListerSynced(), kc.PodListerSynced(), kc.StatefulSetListerSynced(), kc.JobListerSynced())
	app.k8sClients[key] = kc
	return kc, nil
}

func onDelete(clusterName string) func(obj any) {
	return func(obj any) {
		var (
			ob runtime.Object
			t  string
		)
		switch o := obj.(type) {
		case *appsv1.Deployment:
			ob = o
			t = "Deployment"
		case *appsv1.StatefulSet:
			ob = o
			t = "StatefulSet"
		case *batchv1.Job:
			ob = o
			t = "Job"
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

type Option func(*Application)

func WithBootstrappers(bootstrappers ...contracts.Bootstrapper) Option {
	return func(app *Application) {
		app.bootstrappers = bootstrappers
	}
}

func NewApplication(config *config.Config, opts ...Option) contracts.ApplicationInterface {
	var mustBooted = []contracts.Bootstrapper{
		&bootstrappers.LogBootstrapper{},
		&bootstrappers.EventBootstrapper{},
	}

	doneCtx, cancelFunc := context.WithCancel(context.Background())
	app := &Application{
		config:     config,
		done:       doneCtx,
		doneFunc:   cancelFunc,
		hooks:      make(map[Hook][]contracts.Callback),
		servers:    []contracts.Server{},
		k8sClients: make(map[string]contracts.K8s),
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
			defer utils.HandlePanic("RunServerHooks: " + string(hook))
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
func NewKubeClient(kubeconfig []byte) (kubernetes.Interface, *restclient.Config, error) {
	var (
		cc         clientcmd.ClientConfig
		restConfig = &restclient.Config{}
		conn       net.Conn
		k8sUrl     *url.URL
		err        error
		client     kubernetes.Interface
	)
	defer func() {
		xlog.Warningf("new kube client %s", restConfig.Host)
	}()

	cc, err = clientcmd.NewClientConfigFromBytes(kubeconfig)
	if err == nil {
		restConfig, err = cc.ClientConfig()
		if err == nil {
			restConfig.QPS = -1
		}
		k8sUrl, err = url.Parse(restConfig.Host)
		if err != nil {
			return nil, nil, err
		}
		conn, err = net.DialTimeout("tcp", k8sUrl.Host, time.Second*3)
		if err != nil {
			return nil, nil, err
		}
		defer conn.Close()
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
	deploymentLister        appsv1lister.DeploymentLister
	deploymentListerSynced  func() bool
	statefulSetLister       appsv1lister.StatefulSetLister
	statefulSetListerSynced func() bool
	jobLister               corev1.JobLister
	jobListerSynced         func() bool
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

func (k *k8sClient) DeploymentLister() appsv1lister.DeploymentLister {
	return k.deploymentLister
}

func (k *k8sClient) DeploymentListerSynced() func() bool {
	return k.deploymentListerSynced
}

func (k *k8sClient) StatefulSetLister() appsv1lister.StatefulSetLister {
	return k.statefulSetLister
}

func (k *k8sClient) JobLister() corev1.JobLister {
	return k.jobLister
}

func (k *k8sClient) StatefulSetListerSynced() func() bool {
	return k.statefulSetListerSynced
}

func (k *k8sClient) JobListerSynced() kubeCache.InformerSynced {
	return k.jobListerSynced
}
