package services

import (
	"context"
	"fmt"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"k8s.io/metrics/pkg/apis/metrics/v1beta1"

	"github.com/duc-cnzj/execit-client/metrics"
	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/utils"
	"github.com/duc-cnzj/execit/internal/xlog"
	"github.com/dustin/go-humanize"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func init() {
	RegisterServer(func(s grpc.ServiceRegistrar, app contracts.ApplicationInterface) {
		metrics.RegisterMetricsServer(s, new(MetricsSvc))
	})
	RegisterEndpoint(metrics.RegisterMetricsHandlerFromEndpoint)
}

type MetricsSvc struct {
	metrics.UnsafeMetricsServer
}

var (
	tickDuration = 5 * time.Second
	timeSpan     = 5 * time.Second * 30
	length       = timeSpan / tickDuration
)

var now = func() string {
	return time.Now().Format("15:04:05")
}

func (m *MetricsSvc) TopPod(ctx context.Context, request *metrics.TopPodRequest) (*metrics.TopPodResponse, error) {
	k8sClient := utils.K8sClientByClusterID(request.ClusterId)
	podMetrics, err := k8sClient.MetricsClient().MetricsV1beta1().PodMetricses(request.Namespace).Get(context.TODO(), request.Pod, metav1.GetOptions{})
	if err != nil {
		running, reason := utils.IsPodRunning(k8sClient, request.Namespace, request.Pod)
		if !running {
			return nil, status.Error(codes.NotFound, reason)
		}
		return nil, err
	}

	return m.metrics(podMetrics), nil
}

func (m *MetricsSvc) StreamTopPod(request *metrics.TopPodRequest, server metrics.Metrics_StreamTopPodServer) error {
	k8sClient := utils.K8sClientByClusterID(request.ClusterId)

	ticker := time.NewTicker(tickDuration)
	defer ticker.Stop()
	defer xlog.Debug("ProjectByID exit")

	fn := func() error {
		podMetrics, err := k8sClient.MetricsClient().MetricsV1beta1().PodMetricses(request.Namespace).Get(context.TODO(), request.Pod, metav1.GetOptions{})
		if err != nil {
			running, _ := utils.IsPodRunning(k8sClient, request.Namespace, request.Pod)
			if running {
				return nil
			}
			return err
		}

		if err := server.Send(m.metrics(podMetrics)); err != nil {
			xlog.Error(err)
			return err
		}
		return nil
	}

	if err := fn(); err != nil {
		return err
	}
	for {
		select {
		case <-server.Context().Done():
			return server.Context().Err()
		case <-ticker.C:
			if err := fn(); err != nil {
				return err
			}
		case <-app.App().Done():
			return nil
		}
	}
}

func (m *MetricsSvc) metrics(podMetrics *v1beta1.PodMetrics) *metrics.TopPodResponse {
	cpu, memory := utils.GetCpuAndMemoryQuantity(*podMetrics)
	cpuM := cpu.MilliValue()
	var HumanizeCpu string = fmt.Sprintf("%v m", float64(cpu.MilliValue()))
	if cpuM > 1000 {
		HumanizeCpu = fmt.Sprintf("%.3f", float64(cpu.MilliValue())/1000)
	}
	asInt64, _ := memory.AsInt64()

	return &metrics.TopPodResponse{
		Cpu:            float64(cpu.MilliValue()),
		Memory:         float64(memory.ScaledValue(3)),
		HumanizeCpu:    HumanizeCpu,
		HumanizeMemory: humanize.Bytes(uint64(asInt64)),
		Time:           now(),
		Length:         int64(length),
	}
}
