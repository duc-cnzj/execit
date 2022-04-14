package bootstrappers

import (
	"context"
	"net/http"
	"net/http/pprof"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
)

type PprofBootstrapper struct{}

func (p *PprofBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	if app.Config().ProfileEnabled {
		app.AddServer(&pprofRunner{})
	}

	return nil
}

type pprofRunner struct{}

func (p *pprofRunner) Run(ctx context.Context) error {
	xlog.Info("[Server]: start pprofRunner runner.")
	mux := http.NewServeMux()
	mux.HandleFunc("/debug/pprof/", pprof.Index)
	mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
	mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
	mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
	mux.HandleFunc("/debug/pprof/trace", pprof.Trace)
	go func() {
		xlog.Info("Starting pprof server on localhost:6060.")
		if err := http.ListenAndServe("localhost:6060", mux); err != nil && err != http.ErrServerClosed {
			xlog.Error(err)
		}
	}()

	return nil
}

func (p *pprofRunner) Shutdown(ctx context.Context) error {
	xlog.Info("[Server]: shutdown pprofRunner runner.")

	return nil
}
