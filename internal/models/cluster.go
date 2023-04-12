package models

import (
	"time"

	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	restclient "k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

type Cluster struct {
	ID int `json:"id" yaml:"id" gorm:"primaryKey;"`

	Name       string `json:"key" yaml:"name" gorm:"size:255;not null;default:'';"`
	KubeConfig string `json:"kube_config" yaml:"kube_config" gorm:"type:text"`
	Namespace  string `json:"namespace" yaml:"namespace" gorm:"size:70;not null;default:''"`

	CreatedAt time.Time      `json:"created_at" yaml:"-"`
	UpdatedAt time.Time      `json:"updated_at" yaml:"-"`
	DeletedAt gorm.DeletedAt `json:"deleted_at" yaml:"-"`
}

func (c Cluster) PrettyYaml() string {
	out, _ := yaml.Marshal(c)
	return string(out)
}

func (c Cluster) ClusterConfig() *restclient.Config {
	cc, _ := clientcmd.NewClientConfigFromBytes([]byte(c.KubeConfig))
	r, _ := cc.ClientConfig()
	return r
}
