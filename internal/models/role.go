package models

import (
	"time"

	"gorm.io/gorm"
)

type Role struct {
	ID int `json:"id" gorm:"primaryKey;"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

type UserRole struct {
	ID int `json:"id" gorm:"primaryKey;"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}
