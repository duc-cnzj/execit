package models

import (
	"time"

	cc "github.com/duc-cnzj/execit-client/container"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"

	"gorm.io/gorm"
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

func (c Card) GetItems() ([]*cc.ContainerItem, error) {
	var subItems []*cc.ContainerItem

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
				subItems = append(subItems, &cc.ContainerItem{
					ClusterId: int64(c.ClusterID),
					Namespace: c.Namespace,
					Pod:       pod.Name,
					Container: container.Name,
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
				subItems = append(subItems, &cc.ContainerItem{
					ClusterId: int64(c.ClusterID),
					Namespace: c.Namespace,
					Pod:       pod.Name,
					Container: container.Name,
				})
			}
		}
	}
	return subItems, nil
}
