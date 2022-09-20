package proxy

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/duc-cnzj/execit/internal/proxy/proxyidgen"
	"github.com/duc-cnzj/execit/internal/utils"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
	v1 "k8s.io/api/core/v1"
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
	ticker := time.NewTicker(5 * time.Second)
	go func() {
		xlog.Info("check start")
		defer xlog.Info("check exit")
		defer utils.HandlePanic("pm check")

		for {
			select {
			case <-ticker.C:
				fn := func() {
					p.visitMu.Lock()
					defer p.visitMu.Unlock()
					for id, t := range p.visits {
						if time.Now().After(t.Add(30 * time.Minute)) {
							xlog.Info("delete id: ", id)
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

func (p *proxyManager) Add(proxypod contracts.ProxyPod) (string, error) {
	id, found := func() (string, bool) {
		p.RLock()
		defer p.RUnlock()
		id, ok := p.podToID[proxypod]
		return id, ok
	}()
	if found {
		return id, nil
	}

	p.Lock()
	defer p.Unlock()
	id, ok := p.podToID[proxypod]
	if ok {
		return id, nil
	}
	client := utils.K8sClientByClusterID(proxypod.ClusterId)
	running, reason := utils.IsPodRunning(client, proxypod.Namespace, proxypod.Pod)
	if !running {
		return "", errors.New("pod not running: " + reason)
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
	xlog.Warningf("freePort: %v port: %v", freePort, proxypod.Port)

	var newID = proxyidgen.GenProxyID(proxypod)
	var conn = &Conn{
		ProxyPod: proxypod,
		rdyChan:  make(chan struct{}),
		doneChan: make(chan struct{}, 1),
		port:     fmt.Sprintf("%d", freePort),
	}

	fw, err := portforward.NewOnAddresses(dialer, []string{"127.0.0.1"}, []string{fmt.Sprintf("%d:%s", freePort, proxypod.Port)}, conn.doneChan, conn.rdyChan, os.Stdout, os.Stderr)
	if err != nil {
		log.Fatal(err)
	}
	p.idToConnections[newID] = conn
	p.idToPod[newID] = proxypod
	p.podToID[proxypod] = newID
	go func() {
		defer p.Delete(newID)
		defer xlog.Warning("ForwardPorts exit: " + newID)
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

	return newID, nil
}

func (p *proxyManager) Delete(id string) error {
	p.Lock()
	defer p.Unlock()
	pod, ok := p.idToPod[id]
	if !ok {
		return errors.New("not found: " + id)
	}
	delete(p.idToPod, id)
	delete(p.podToID, pod)
	conn, ok := p.idToConnections[id]
	if !ok {
		return errors.New("not found: " + id)
	}
	close(conn.doneChan)
	delete(p.idToConnections, id)
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

	return "", errors.New("not found")
}

func (p *proxyManager) GetPodByID(id string) (contracts.ProxyPod, error) {
	p.RLock()
	defer p.RUnlock()
	po, ok := p.idToPod[id]
	if ok {
		return po, nil
	}

	return contracts.ProxyPod{}, errors.New("not found")
}

func FindDefaultContainer(pod *v1.Pod) *v1.Container {
	if name := pod.Annotations["kubectl.kubernetes.io/default-container"]; len(name) > 0 {
		for _, co := range pod.Spec.Containers {
			if name == co.Name {
				return &co
			}
		}
	}

	for _, co := range pod.Spec.Containers {
		return &co
	}

	return nil
}
