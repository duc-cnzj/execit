package services

import (
	"context"
	"errors"
	"fmt"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"

	"github.com/duc-cnzj/execit-client/event"
	"github.com/duc-cnzj/execit-client/rbac"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/scopes"
	trans "github.com/duc-cnzj/execit/internal/translator"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		rbac.RegisterRBACServer(s, new(rbacsvc))
	})
	RegisterEndpoint(rbac.RegisterRBACHandlerFromEndpoint)
}

type rbacsvc struct {
	rbac.UnimplementedRBACServer
}

func (r *rbacsvc) List(ctx context.Context, request *rbac.ListRequest) (*rbac.ListResponse, error) {
	var (
		page     = int(request.Page)
		pageSize = int(request.PageSize)
		perms    []models.UserPermission
		count    int64
		res      []*rbac.UserPermission
	)

	fn := func(db *gorm.DB) *gorm.DB {
		if request.State != rbac.State__ {
			db = db.Where("`state` = ?", request.State)
		}
		if request.Email != "" {
			db = db.Where("`email` LIKE ?", "%"+request.Email+"%")
		}
		return db
	}
	if err := app.DB().Scopes(scopes.Paginate(&page, &pageSize), fn).Order("`id` DESC").Find(&perms).Error; err != nil {
		return nil, err
	}
	app.DB().Model(&models.UserPermission{}).Scopes(fn).Count(&count)
	for _, perm := range perms {
		res = append(res, perm.ProtoTransform())
	}

	return &rbac.ListResponse{
		Page:     int64(page),
		PageSize: int64(pageSize),
		Items:    res,
		Count:    count,
	}, nil
}

func (r *rbacsvc) NotApprovedReason(ctx context.Context, request *rbac.NotApprovedReasonRequest) (*rbac.NotApprovedReasonResponse, error) {
	user := MustGetUser(ctx)
	var p models.UserPermission
	if app.DB().Where("`email` = ? and `subject_id` = ? and `permission` = ? and `state` in ?", user.Email, request.SubjectId, request.Permission, []rbac.State{rbac.State_Revoked, rbac.State_Rejected}).Last(&p).Error == nil {
		return &rbac.NotApprovedReasonResponse{Reason: p.Reason}, nil
	}
	return &rbac.NotApprovedReasonResponse{Reason: ""}, nil
}

func (r *rbacsvc) ApplyFor(ctx context.Context, request *rbac.ApplyForRequest) (*rbac.ApplyForResponse, error) {
	var p models.UserPermission
	user := MustGetUser(ctx)
	if app.DB().Where("`email` = ? and `card_id` = ? and `state` = ? and `permission` = ?", user.Email, request.SubjectId, rbac.State_Request, request.Permission).First(&p).Error == nil {
		return &rbac.ApplyForResponse{Permission: p.ProtoTransform()}, nil
	}
	var desc string
	switch request.Permission {
	case rbac.Permission_Card:
		var c = &models.Card{ID: int(request.SubjectId)}
		app.DB().Preload("Cluster").First(&c)
		desc = fmt.Sprintf("card prmission cluster: %s type: %s namespace: %s name: %s", c.Cluster.Name, c.Type, c.Namespace, c.Name)
	default:
		return nil, status.Error(codes.Unimplemented, trans.RTrans("not support {{.Type}}", map[string]any{"Type": request.Permission.String()}, MustGetLang(ctx)))
	}
	m := &models.UserPermission{
		Username:    user.Name,
		Email:       user.Email,
		Permission:  request.Permission,
		SubjectID:   request.SubjectId,
		State:       rbac.State_Request,
		Description: desc,
	}
	if err := app.DB().Create(&m).Error; err != nil {
		return nil, err
	}
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Create, fmt.Sprintf("ApplyFor permission '%s' desc: '%s'", m.Permission.String(), p.Description))

	return &rbac.ApplyForResponse{Permission: m.ProtoTransform()}, nil
}

func (r *rbacsvc) Approve(ctx context.Context, request *rbac.ApproveRequest) (*rbac.ApproveResponse, error) {
	var p models.UserPermission
	if err := app.DB().Where("`id` = ?", request.Id).First(&p).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.NotFound, trans.T("id not found", MustGetLang(ctx)))
		}
	}
	if p.State != rbac.State_Request && p.State != rbac.State_Approved {
		return nil, status.Error(codes.FailedPrecondition, trans.T("state error", MustGetLang(ctx)))
	}
	if p.State == rbac.State_Request {
		app.DB().Model(&p).Update("State", rbac.State_Approved)
	}
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Update, fmt.Sprintf("Approve permission '%s' desc: '%s'", p.Permission.String(), p.Description))

	return &rbac.ApproveResponse{Permission: p.ProtoTransform()}, nil
}

func (r *rbacsvc) Reject(ctx context.Context, request *rbac.RejectRequest) (*rbac.RejectResponse, error) {
	var p models.UserPermission
	if err := app.DB().Where("`id` = ?", request.Id).First(&p).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.NotFound, trans.T("id not found", MustGetLang(ctx)))
		}
	}
	if p.State != rbac.State_Request && p.State != rbac.State_Rejected {
		return nil, status.Error(codes.FailedPrecondition, trans.T("state error", MustGetLang(ctx)))
	}
	if p.State == rbac.State_Request {
		app.DB().Model(&p).Updates(map[string]any{
			"State":  rbac.State_Rejected,
			"Reason": request.Reason,
		})
	}

	AuditLog(MustGetUser(ctx).Name, event.ActionType_Update, fmt.Sprintf("Reject permission '%s' desc: '%s', reason: '%s'", p.Permission.String(), p.Description, request.Reason))

	return &rbac.RejectResponse{Permission: p.ProtoTransform()}, nil
}

func (r *rbacsvc) Revoke(ctx context.Context, request *rbac.RevokeRequest) (*rbac.RevokeResponse, error) {
	var p models.UserPermission
	if err := app.DB().Where("`id` = ?", request.Id).First(&p).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Error(codes.NotFound, trans.T("id not found", MustGetLang(ctx)))
		}
	}
	if p.State != rbac.State_Request {
		app.DB().Model(&p).Updates(map[string]any{
			"State":  rbac.State_Revoked,
			"Reason": request.Reason,
		})
	}
	AuditLog(MustGetUser(ctx).Name, event.ActionType_Update, fmt.Sprintf("Revoke permission '%s' desc: '%s', reason: '%s'", p.Permission.String(), p.Description, request.Reason))

	return &rbac.RevokeResponse{Permission: p.ProtoTransform()}, nil
}
