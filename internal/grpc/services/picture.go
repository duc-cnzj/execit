package services

import (
	"context"

	"google.golang.org/grpc"

	"github.com/duc-cnzj/execit-client/picture"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		picture.RegisterPictureServer(s, new(PictureSvc))
	})
	RegisterEndpoint(picture.RegisterPictureHandlerFromEndpoint)
}

type PictureSvc struct {
	picture.UnimplementedPictureServer
}

func (p *PictureSvc) Background(ctx context.Context, req *picture.BackgroundRequest) (*picture.BackgroundResponse, error) {
	one, err := plugins.GetPicture().Get(ctx, req.Random)
	if err != nil {
		return nil, err
	}

	return &picture.BackgroundResponse{
		Url:       one.Url,
		Copyright: one.Copyright,
	}, nil
}

func (p *PictureSvc) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	xlog.Debug("client is calling method:", fullMethodName)
	return ctx, nil
}
