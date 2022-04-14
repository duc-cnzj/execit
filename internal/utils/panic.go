package utils

import (
	"runtime"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/xlog"
)

func HandlePanic(title string) {
	bf := make([]byte, 1024*5)
	runtime.Stack(bf, false)

	err := recover()
	if err != nil {
		xlog.Errorf("[Panic]: title: %v, err: %v --- [%s]", title, err, string(bf))
		if app.App() != nil && app.App().IsDebug() {
			panic(err)
		}
	}
}
