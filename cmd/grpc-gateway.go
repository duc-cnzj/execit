package cmd

import (
	"github.com/duc-cnzj/execit/internal/app"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/xlog"
	"github.com/spf13/cobra"
)

var apiGatewayCmd = &cobra.Command{
	Use:   "serve",
	Short: "start execit server use grpc.",
	Run: func(cmd *cobra.Command, args []string) {
		app := app.NewApplication(config.Init(cfgFile))
		if err := app.Bootstrap(); err != nil {
			xlog.Fatal(err)
		}
		<-app.Run().Done()
		app.Shutdown()
	},
}
