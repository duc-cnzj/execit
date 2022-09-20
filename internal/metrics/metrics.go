/*
	Google SRE 定义了四个需要监控的关键指标。延迟（Latency），流量（Traffic），错误（Errors）和饱和度（Saturation）。
	正如google sre 所讨论的，如果您只能衡量服务的四个指标，请关注这四个指标。

	延迟 Latency
	> 延迟是服务处理传入请求和发送响应所用时间的度量。测量服务延迟有助于及早发现服务的缓慢。

	流量 Traffic
	> 流量可以更好地理解服务需求。通常称为服务 QPS（每秒查询数），流量是服务请求量的度量。此信号可帮助您决定何时需要扩大服务规模以应对不断增长的客户需求，或缩小服务规模以提高成本效益。

	错误 Errors
	> 错误是对客户端请求失败的度量。这些故障可以根据响应代码（HTTP 5XX 错误）轻松识别。
	> 在某些情况下，由于错误的结果数据或违反了约定，响应被认为是错误的。例如，您可能会收到HTTP 200 响应，但返回的数据不完整，或者响应时间超出了约定的 SLA。因此，除了响应码之外，可能还需要其他机制（代码逻辑）来捕获错误。

	饱和度 Saturation
	> 饱和度是服务器资源利用率的度量。这个信号告诉你服务资源的状态以及它们有多“满”。
	> 这些资源包括内存、cpu、网络 I/O 等。在资源利用率达到 100% 之前，服务性能也会缓慢下降。因此，有一个利用率目标很重要。延迟的增加是饱和度的一个很好的指标；测量延迟99线 有助于及早发现饱和度。
*/
package metrics

import (
	"github.com/duc-cnzj/execit/version"

	"github.com/prometheus/client_golang/prometheus"
)

const system = "execit"

var appVersion = version.GetVersion().String()

var (
	WebsocketConnectionsCount = prometheus.NewGauge(prometheus.GaugeOpts{
		Subsystem:   system,
		Name:        "websocket_connections",
		Help:        "当前 websocket 连接数",
		ConstLabels: prometheus.Labels{"version": appVersion},
	})

	ProxyConnections = prometheus.NewGauge(prometheus.GaugeOpts{
		Subsystem:   system,
		Name:        "proxy_connections",
		Help:        "当前 proxy 代理数",
		ConstLabels: prometheus.Labels{"version": appVersion},
	})
)

func init() {
	prometheus.MustRegister(WebsocketConnectionsCount)
	prometheus.MustRegister(ProxyConnections)
}
