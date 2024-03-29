package utils

import (
	"fmt"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/xlog"

	v1 "k8s.io/api/core/v1"
)

func IsPodRunning(kubeClient contracts.K8s, namespace, podName string) (running bool, notRunningReason string) {
	podInfo, err := kubeClient.PodLister().Pods(namespace).Get(podName)
	if err != nil {
		return false, err.Error()
	}

	if podInfo.Status.Phase == v1.PodRunning {
		return true, ""
	}

	for _, status := range podInfo.Status.ContainerStatuses {
		return false, fmt.Sprintf("%s %s", status.State.Waiting.Reason, status.State.Waiting.Message)
	}

	return false, "pod not running."
}

func K8sClientByClusterID[T ~int | ~int8 | ~int32 | ~int64](id T) contracts.K8s {
	var c = models.Cluster{ID: int(id)}
	app.DB().First(&c)
	client, err := app.App().LoadKubeClient(c.Name, []byte(c.KubeConfig), c.Namespace)
	if err != nil {
		xlog.Error(err)
	}
	return client
}
