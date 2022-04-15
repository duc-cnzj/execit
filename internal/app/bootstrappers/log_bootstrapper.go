package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/adapter"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type LogBootstrapper struct{}

func (a *LogBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	xlog.SetLogger(adapter.NewLogrusLogger(app))
	xlog.Debug("LogBootstrapper booted!")

	return nil
}
