package plugins

import (
	"context"
	"sync"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
)

var pictureOnce = sync.Once{}

type Picture struct {
	Url       string
	Copyright string
}

type PictureInterface interface {
	Get(ctx context.Context, random bool) (*Picture, error)
}

func GetPicture() PictureInterface {
	pcfg := app.Config().PicturePlugin
	p := app.App().GetPluginByName(pcfg.Name)
	pictureOnce.Do(func() {
		if err := p.Initialize(pcfg.GetArgs()); err != nil {
			panic(err)
		}
		app.App().RegisterAfterShutdownFunc(func(applicationInterface contracts.ApplicationInterface) {
			p.Destroy()
		})
	})

	return p.(PictureInterface)
}
