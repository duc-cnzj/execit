package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type AppBootstrapper struct{}

func (a *AppBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	// 预加载插件
	plugins.GetWsSender()
	plugins.GetPicture()

	app.RegisterAfterShutdownFunc(func(app contracts.ApplicationInterface) {
		app.ReleaseAllKubeClient()
		xlog.Info("release all kube client")
	})

	return nil
}
