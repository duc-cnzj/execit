package bootstrappers

import (
	"context"
	"net/http"
	"os"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/xlog"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type MetricsBootstrapper struct{}

type metricsRunner struct{}

func (m *metricsRunner) Run(ctx context.Context) error {
	mux := http.NewServeMux()
	xlog.Info("[Server]: metrics running at :9091/metrics")
	mux.Handle("/metrics", promhttp.Handler())
	go func() {
		http.ListenAndServe(":9091", mux)
	}()
	return nil
}

func (m *metricsRunner) Shutdown(ctx context.Context) error {
	return nil
}

func (m *MetricsBootstrapper) Bootstrap(app contracts.ApplicationInterface) error {
	conns := prometheus.NewGaugeVec(prometheus.GaugeOpts{
		Namespace: "execit",
		Subsystem: "websocket",
		Name:      "connections",
		Help:      "current websocket connections",
	}, []string{"hostname"})
	prometheus.MustRegister(conns)

	hostname, _ := os.Hostname()
	xlog.Debugf("[Metrics]: hostname %v", hostname)
	app.SetMetrics(&metrics{ws: conns, hostname: hostname})
	app.AddServer(&metricsRunner{})

	return nil
}

type metrics struct {
	ws       *prometheus.GaugeVec
	hostname string
}

func (m *metrics) IncWebsocketConn() {
	m.WebsocketConn().With(prometheus.Labels{"hostname": m.hostname}).Inc()
}

func (m *metrics) DecWebsocketConn() {
	m.WebsocketConn().With(prometheus.Labels{"hostname": m.hostname}).Dec()
}

func (m *metrics) WebsocketConn() *prometheus.GaugeVec {
	return m.ws
}
