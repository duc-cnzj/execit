package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/plugins"
)

type PluginsBootstrapper struct{}

func (a *PluginsBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	app.SetPlugins(plugins.GetPlugins())

	return nil
}
