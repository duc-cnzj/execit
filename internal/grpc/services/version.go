package services

import (
	"context"

	"google.golang.org/grpc"

	"github.com/duc-cnzj/execit-client/version"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
	v "github.com/duc-cnzj/execit/version"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		version.RegisterVersionServer(s, new(VersionSvc))
	})
	RegisterEndpoint(version.RegisterVersionHandlerFromEndpoint)
}

type VersionSvc struct {
	version.UnsafeVersionServer
}

func (*VersionSvc) Version(ctx context.Context, request *version.Request) (*version.Response, error) {
	vv := v.GetVersion()

	return &version.Response{
		Version:        vv.Version,
		BuildDate:      vv.BuildDate,
		GitBranch:      vv.GitBranch,
		GitCommit:      vv.GitCommit,
		GitTag:         vv.GitTag,
		GoVersion:      vv.GoVersion,
		Compiler:       vv.Compiler,
		Platform:       vv.Platform,
		KubectlVersion: vv.KubectlVersion,
		GitRepo:        vv.GitRepo,
	}, nil
}

func (*VersionSvc) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	xlog.Debug("client is calling method:", fullMethodName)
	return ctx, nil
}
