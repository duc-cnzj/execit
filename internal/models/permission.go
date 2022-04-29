package models

import (
	"github.com/duc-cnzj/execit-client/rbac"
	"github.com/duc-cnzj/execit/internal/utils/date"

	"time"

	"gorm.io/gorm"
)

type State uint8

type UserPermission struct {
	ID int `json:"id" gorm:"primaryKey;"`

	Username    string          `json:"username"`
	Email       string          `json:"email" gorm:"not null;index;"`
	Permission  rbac.Permission `json:"permission" gorm:"index;"`
	SubjectID   int64           `json:"subject_id"`
	State       rbac.State      `json:"state" gorm:"index;"`
	Reason      string          `json:"reason"`
	Description string          `json:"description"`

	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"deleted_at"`
}

func (p *UserPermission) ProtoTransform() *rbac.UserPermission {
	return &rbac.UserPermission{
		Id:          int64(p.ID),
		Username:    p.Username,
		Email:       p.Email,
		Permission:  p.Permission,
		State:       p.State,
		Reason:      p.Reason,
		SubjectId:   p.SubjectID,
		Description: p.Description,
		CreatedAt:   date.ToRFC3339DatetimeString(&p.CreatedAt),
		UpdatedAt:   date.ToRFC3339DatetimeString(&p.UpdatedAt),
		DeletedAt:   date.ToRFC3339DatetimeString(&p.DeletedAt.Time),
	}
}
