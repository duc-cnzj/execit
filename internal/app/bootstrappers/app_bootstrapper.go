package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/plugins"
)

type AppBootstrapper struct{}

func (a *AppBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	// 预加载插件
	plugins.GetWsSender()
	plugins.GetPicture()

	return nil
}
