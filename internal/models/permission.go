package models

import (
	"time"

	"gorm.io/gorm"
)

type Permission struct {
	ID int `json:"id" gorm:"primaryKey;"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

type UserPermission struct {
	ID int `json:"id" gorm:"primaryKey;"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

type RolePermission struct {
	ID int `json:"id" gorm:"primaryKey;"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

//cluster_add
//cluster_list
//cluster_delete
//
//card_ddd
//card_remove
//
//card:{{id}}
//namespace:{{id}}
//cluster:{{id}}

//card:*
//namespace:*
//cluster:*
