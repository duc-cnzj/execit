package bootstrappers

import (
	"context"
	"net/http"

	"github.com/duc-cnzj/execit/internal/contracts"
	_ "github.com/duc-cnzj/execit/internal/metrics"
	"github.com/duc-cnzj/execit/internal/xlog"

	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type MetricsBootstrapper struct{}

func (m *MetricsBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	app.AddServer(&metricsRunner{port: "9001"})

	return nil
}

type metricsRunner struct {
	port string
}

func (m *metricsRunner) Run(ctx context.Context) error {
	mux := http.NewServeMux()
	xlog.Infof("[Server]: metrics running at :%s/metrics", m.port)
	mux.Handle("/metrics", promhttp.Handler())
	go func() {
		http.ListenAndServe(":"+m.port, mux)
	}()
	return nil
}

func (m *metricsRunner) Shutdown(ctx context.Context) error {
	return nil
}
