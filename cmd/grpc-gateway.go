package cmd

import (
	"github.com/duc-cnzj/execit/internal/app"
	"github.com/duc-cnzj/execit/internal/app/bootstrappers"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
	"github.com/spf13/cobra"
)

var ServerBootstrappers = []contracts.Bootstrapper{
	&bootstrappers.PluginsBootstrapper{},
	&bootstrappers.I18nBootstrapper{},
	&bootstrappers.AuthBootstrapper{},
	&bootstrappers.UploadBootstrapper{},
	&bootstrappers.DBBootstrapper{},
	&bootstrappers.ApiGatewayBootstrapper{},
	&bootstrappers.PprofBootstrapper{},
	&bootstrappers.GrpcBootstrapper{},
	&bootstrappers.MetricsBootstrapper{},
	&bootstrappers.OidcBootstrapper{},
	&bootstrappers.TracingBootstrapper{},
	&bootstrappers.K8sBootstrapper{},
	&bootstrappers.AppBootstrapper{},
}

var apiGatewayCmd = &cobra.Command{
	Use:   "serve",
	Short: "start execit server use grpc.",
	Run: func(cmd *cobra.Command, args []string) {
		app := app.NewApplication(config.Init(cfgFile), app.WithBootstrappers(ServerBootstrappers...))
		if err := app.Bootstrap(); err != nil {
			xlog.Fatal(err)
		}
		<-app.Run().Done()
		app.Shutdown()
	},
}
