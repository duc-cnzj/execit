package contracts

import "fmt"

type ProxyPod struct {
	ClusterId int64
	Namespace string
	Pod       string
	Port      string
}

func (p ProxyPod) Url() string {
	return fmt.Sprintf("/proxy/clusters/%v/namespace/%s/pod/%s/port/%s/", p.ClusterId, p.Namespace, p.Pod, p.Port)
}

type ProxyManagerInterface interface {
	Add(ProxyPod) (string, bool, error)
	GetPortByID(id string) (string, error)

	Visit(id string)
	Check()
	CloseAll() error
}
