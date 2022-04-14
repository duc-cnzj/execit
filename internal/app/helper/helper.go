package app

import (
	"github.com/duc-cnzj/execit/internal/app/instance"
	"github.com/duc-cnzj/execit/internal/config"
	"github.com/duc-cnzj/execit/internal/contracts"
	"gorm.io/gorm"
)

func App() contracts.ApplicationInterface {
	return instance.App()
}

func Auth() contracts.AuthInterface {
	return App().Auth()
}

func Oidc() contracts.OidcConfig {
	return App().Oidc()
}

func Config() *config.Config {
	return App().Config()
}

func DB() *gorm.DB {
	return App().DBManager().DB()
}

func Uploader() contracts.Uploader {
	return App().Uploader()
}

func Event() contracts.DispatcherInterface {
	return App().EventDispatcher()
}

func Metrics() contracts.Metrics {
	return App().Metrics()
}
