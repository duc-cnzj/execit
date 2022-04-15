package bootstrappers

import (
	"github.com/duc-cnzj/execit/internal/contracts"
	trans "github.com/duc-cnzj/execit/internal/translator"
)

type I18nBootstrapper struct{}

func (a *I18nBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	trans.Init()
	return nil
}
