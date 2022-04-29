package auth

import (
	"context"
	"errors"
	"fmt"

	"github.com/duc-cnzj/execit-client/auth"
	"github.com/duc-cnzj/execit-client/rbac"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	"google.golang.org/grpc"
)

func UnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp any, err error) {
		if authorizeInterface, ok := info.Server.(contracts.AuthorizeInterface); ok {
			ctx, err = authorizeInterface.Authorize(ctx, info.FullMethod)
			if err != nil {
				return nil, err
			}
		}

		return handler(ctx, req)
	}
}

func StreamServerInterceptor() grpc.StreamServerInterceptor {
	return func(srv any, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		var (
			newCtx context.Context
			err    error
		)
		if authorizeInterface, ok := srv.(contracts.AuthorizeInterface); ok {
			newCtx, err = authorizeInterface.Authorize(ss.Context(), info.FullMethod)
			if err != nil {
				return err
			}
			wrapped := grpc_middleware.WrapServerStream(ss)
			wrapped.WrappedContext = newCtx

			return handler(srv, wrapped)
		}

		return handler(srv, ss)
	}
}

type CtxTokenInfo struct{}

func GetUserPermissions(email string) []*auth.Permission {
	var cardIds []string
	var ups []*models.UserPermission
	app.DB().Where("`email` = ? and `state` = ? and `permission` = ?", email, rbac.State_Approved, rbac.Permission_Card).Find(&ups)
	for _, up := range ups {
		cardIds = append(cardIds, fmt.Sprintf("%d", up.SubjectID))
	}

	return []*auth.Permission{
		{
			Permission: rbac.Permission_Card,
			Items:      cardIds,
		},
		{Permission: rbac.Permission_ClusterAdd, Items: []string{}},
		{Permission: rbac.Permission_ClusterDelete, Items: []string{}},
		{Permission: rbac.Permission_ClusterView, Items: []string{}},
		{Permission: rbac.Permission_FileDownload, Items: []string{}},
		{Permission: rbac.Permission_FileUpload, Items: []string{}},
		{Permission: rbac.Permission_FileDownload, Items: []string{}},
		{Permission: rbac.Permission_EventView, Items: []string{}},
	}
}

func SetUser(ctx context.Context, info *contracts.UserInfo) context.Context {
	return context.WithValue(ctx, &CtxTokenInfo{}, info)
}

func GetUser(ctx context.Context) (*contracts.UserInfo, error) {
	if info, ok := ctx.Value(&CtxTokenInfo{}).(*contracts.UserInfo); ok {
		return info, nil
	}

	return nil, errors.New("user not found")
}

func MustGetUser(ctx context.Context) *contracts.UserInfo {
	info, _ := ctx.Value(&CtxTokenInfo{}).(*contracts.UserInfo)
	return info
}
