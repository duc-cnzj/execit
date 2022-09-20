package proxy

import (
	"errors"
	"fmt"
	"net/http"
	"sync"
	"time"

	"github.com/duc-cnzj/execit/internal/metrics"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/proxy/proxyidgen"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"

	"k8s.io/client-go/tools/portforward"
	"k8s.io/client-go/transport/spdy"
)

type Conn struct {
	contracts.ProxyPod
	rdyChan  chan struct{}
	doneChan chan struct{}
	port     string
}

type proxyManager struct {
	sync.RWMutex
	idToConnections map[string]*Conn
	podToID         map[contracts.ProxyPod]string
	idToPod         map[string]contracts.ProxyPod

	visitMu sync.RWMutex
	visits  map[string]time.Time
}

func NewProxyManager() *proxyManager {
	return &proxyManager{
		idToConnections: map[string]*Conn{},
		podToID:         map[contracts.ProxyPod]string{},
		idToPod:         map[string]contracts.ProxyPod{},
		visits:          map[string]time.Time{},
	}
}

func (p *proxyManager) Check() {
	ticker := time.NewTicker(1 * time.Minute)
	go func() {
		xlog.Debug("[PROXY]: checker start")
		defer xlog.Debug("[PROXY]: checker exit")
		defer utils.HandlePanic("pm check")

		for {
			select {
			case <-ticker.C:
				fn := func() {
					p.visitMu.Lock()
					defer p.visitMu.Unlock()
					for id, t := range p.visits {
						if time.Now().After(t.Add(30 * time.Minute)) {
							xlog.Warning("[PROXY]: delete id: ", id)
							p.Delete(id)
							delete(p.visits, id)
						}
					}
				}
				fn()
			case <-app.App().Done():
				return
			}
		}
	}()
}

func (p *proxyManager) Add(proxypod contracts.ProxyPod) (id string, new bool, err error) {
	id, found := func() (string, bool) {
		p.RLock()
		defer p.RUnlock()
		id, ok := p.podToID[proxypod]
		return id, ok
	}()
	if found {
		return id, false, nil
	}

	p.Lock()
	defer p.Unlock()
	client := utils.K8sClientByClusterID(proxypod.ClusterId)
	running, reason := utils.IsPodRunning(client, proxypod.Namespace, proxypod.Pod)
	if !running {
		return "", false, errors.New("[PROXY]: pod not running: " + reason)
	}
	req := client.
		Client().
		CoreV1().
		RESTClient().
		Post().
		Resource("pods").
		Namespace(proxypod.Namespace).
		Name(proxypod.Pod).
		SubResource("portforward")

	transport, upgrader, _ := spdy.RoundTripperFor(utils.K8sClientByClusterID(proxypod.ClusterId).RestConfig())
	dialer := spdy.NewDialer(upgrader, &http.Client{Transport: transport}, "POST", req.URL())
	freePort, _ := config.GetFreePort()
	xlog.Debugf("[PROXY]: freePort: %v port: %v", freePort, proxypod.Port)

	var newID = proxyidgen.GenProxyID(proxypod)
	var conn = &Conn{
		ProxyPod: proxypod,
		rdyChan:  make(chan struct{}),
		doneChan: make(chan struct{}, 1),
		port:     fmt.Sprintf("%d", freePort),
	}

	fw, err := portforward.NewOnAddresses(dialer, []string{"127.0.0.1"}, []string{fmt.Sprintf("%d:%s", freePort, proxypod.Port)}, conn.doneChan, conn.rdyChan, nil, nil)
	if err != nil {
		xlog.Error(err)
		return "", false, err
	}
	p.idToConnections[newID] = conn
	p.idToPod[newID] = proxypod
	p.podToID[proxypod] = newID
	go func() {
		defer p.Delete(newID)
		defer xlog.Debug("[PROXY]: ForwardPorts exit: " + newID)
		defer utils.HandlePanic("ForwardPorts")
		if err := fw.ForwardPorts(); err != nil {
			xlog.Error(err)
		}
	}()

	func() {
		p.visitMu.Lock()
		defer p.visitMu.Unlock()
		p.visits[newID] = time.Now()
	}()

	metrics.ProxyConnections.Inc()
	return newID, true, nil
}

func (p *proxyManager) CloseAll() error {
	p.Lock()
	defer p.Unlock()
	for _, id := range p.podToID {
		if err := p.delete(id); err != nil {
			xlog.Error(err)
		}
	}
	return nil
}

func (p *proxyManager) Delete(id string) error {
	p.Lock()
	defer p.Unlock()
	return p.delete(id)
}

func (p *proxyManager) delete(id string) error {
	pod, ok := p.idToPod[id]
	if !ok {
		return errors.New("[PROXY]: not found: " + id)
	}
	delete(p.idToPod, id)
	delete(p.podToID, pod)
	conn, ok := p.idToConnections[id]
	if !ok {
		return errors.New("[PROXY]: not found: " + id)
	}
	close(conn.doneChan)
	delete(p.idToConnections, id)
	metrics.ProxyConnections.Dec()
	return nil
}

func (p *proxyManager) Visit(id string) {
	p.visitMu.Lock()
	defer p.visitMu.Unlock()
	p.visits[id] = time.Now()
}

func (p *proxyManager) GetPortByID(id string) (string, error) {
	p.RLock()
	defer p.RUnlock()
	conn, ok := p.idToConnections[id]
	if ok {
		return conn.port, nil
	}

	return "", errors.New("[PROXY]: not found")
}
