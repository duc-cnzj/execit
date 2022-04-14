package bootstrappers

import (
	"errors"

	"github.com/duc-cnzj/execit/internal/adapter"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type LogBootstrapper struct{}

func (a *LogBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	switch app.Config().LogChannel {
	case "", "logrus":
		xlog.SetLogger(adapter.NewLogrusLogger(app))
	case "zap":
		xlog.SetLogger(adapter.NewZapLogger(app))
	default:
		return errors.New("log channel not exists: " + app.Config().LogChannel)
	}
	xlog.Debug("LogBootstrapper booted!")

	return nil
}
