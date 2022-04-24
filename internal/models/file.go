package models

import (
	"time"

	app "github.com/duc-cnzj/execit/internal/app/helper"

	"github.com/duc-cnzj/execit/internal/xlog"
	"gorm.io/gorm"
)

type File struct {
	ID int `json:"id" gorm:"primaryKey;"`

	Path     string `json:"path" gorm:"size:255;not null;"`
	Size     uint64 `json:"size" gorm:"not null;default:0;"`
	Username string `json:"username" gorm:"size:255;not null;default:'';"`

	ClusterID     int    `json:"cluster_id" gorm:"not null;default:0;"`
	Namespace     string `json:"namespace" gorm:"size:100;not null;default:'';"`
	Pod           string `json:"pod" gorm:"size:100;not null;default:'';"`
	Container     string `json:"container" gorm:"size:100;not null;default:'';"`
	ContainerPath string `json:"container_path" gorm:"size:255;not null;default:'';"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

func (f *File) DeleteFile() {
	if f.Path == "" {
		return
	}
	app.DB().Delete(f)
	if err := app.Uploader().Delete(f.Path); err != nil {
		xlog.Errorf("[File]: delete file err: '%s'", err.Error())
	}
	xlog.Debugf("[File]: deleted '%s' ", f.Path)
}
