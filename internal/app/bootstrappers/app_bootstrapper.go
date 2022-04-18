package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/plugins"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type AppBootstrapper struct{}

func (a *AppBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	// 预加载插件
	plugins.GetWsSender()
	plugins.GetPicture()

	app.BeforeServerRunHooks(func(app contracts.ApplicationInterface) {
		var cus []models.Cluster
		app.DBManager().DB().Find(&cus)
		for _, cluster := range cus {
			if _, err := app.LoadKubeClient(cluster.Name, []byte(cluster.KubeConfig), cluster.Namespace); err != nil {
				xlog.Error(err)
			}
		}
	})
	app.RegisterAfterShutdownFunc(func(app contracts.ApplicationInterface) {
		app.ReleaseAllKubeClient()
		xlog.Info("release all kube client")
	})

	return nil
}
