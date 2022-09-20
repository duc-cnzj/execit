package models

import (
	"fmt"
	"time"

	"gorm.io/gorm"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"

	cc "github.com/duc-cnzj/execit-client/container"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
)

type Card struct {
	ID int `json:"id" gorm:"primaryKey;"`

	Type      string `json:"type" gorm:"size:50;not null;default:''"`
	Namespace string `json:"namespace" gorm:"size:50;not null;default:''"`
	Name      string `json:"name" gorm:"size:255;not null;default:''"`
	ClusterID int    `json:"cluster_id" gorm:"index;not null;default:0"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`

	Cluster Cluster
}

func (c Card) GetItems() ([]*cc.Item, error) {
	var subItems []*cc.Item

	client, err := app.App().LoadKubeClient(c.Cluster.Name, []byte(c.Cluster.KubeConfig), c.Cluster.Namespace)
	if err != nil {
		return nil, err
	}
	switch c.Type {
	case "Deployment":
		deployment, err := client.DeploymentLister().Deployments(c.Namespace).Get(c.Name)
		if err != nil {
			return nil, err
		}
		asMap, _ := metav1.LabelSelectorAsMap(deployment.Spec.Selector)
		list, _ := client.PodLister().Pods(c.Namespace).List(labels.SelectorFromSet(asMap))
		for _, pod := range list {
			for _, container := range pod.Spec.Containers {
				subItems = append(subItems, &cc.Item{
					ClusterId: int64(c.ClusterID),
					Namespace: c.Namespace,
					Pod:       pod.Name,
					Container: container.Name,
					Proxies:   c.getContainerPorts(pod.Name, container),
				})
			}
		}
	case "StatefulSet":
		statefulSet, err := client.StatefulSetLister().StatefulSets(c.Namespace).Get(c.Name)
		if err != nil {
			return nil, err
		}
		asMap, _ := metav1.LabelSelectorAsMap(statefulSet.Spec.Selector)
		list, _ := client.PodLister().Pods(c.Namespace).List(labels.SelectorFromSet(asMap))
		for _, pod := range list {
			for _, container := range pod.Spec.Containers {
				subItems = append(subItems, &cc.Item{
					ClusterId: int64(c.ClusterID),
					Namespace: c.Namespace,
					Pod:       pod.Name,
					Container: container.Name,
					Proxies:   c.getContainerPorts(pod.Name, container),
				})
			}
		}
	}
	return subItems, nil
}

func (c Card) getContainerPorts(pod string, container v1.Container) (proxyInfos []*cc.ProxyInfo) {
	for _, port := range container.Ports {
		if port.Protocol == "TCP" {
			portStr := fmt.Sprintf("%d", port.ContainerPort)
			proxyInfos = append(proxyInfos, &cc.ProxyInfo{
				Url: contracts.ProxyPod{
					ClusterId: int64(c.ClusterID),
					Namespace: c.Namespace,
					Pod:       pod,
					Port:      portStr,
				}.Url(),
				Port: portStr,
				Name: port.Name,
			})
		}
	}
	return
}
