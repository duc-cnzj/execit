package models

import (
	"time"

	"gorm.io/gorm"
	restclient "k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

type Cluster struct {
	ID int `json:"id" gorm:"primaryKey;"`

	Name       string `json:"key" gorm:"size:255;not null;default:'';"`
	KubeConfig string `json:"kube_config" gorm:"type:text"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

func (c Cluster) ClusterConfig() *restclient.Config {
	cc, _ := clientcmd.NewClientConfigFromBytes([]byte(c.KubeConfig))
	r, _ := cc.ClientConfig()
	return r
}
