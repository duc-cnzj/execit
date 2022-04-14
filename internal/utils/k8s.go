package utils

import (
	"context"
	"fmt"

	app "github.com/duc-cnzj/execit/internal/app/helper"
	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/models"
	"github.com/duc-cnzj/execit/internal/xlog"

	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
)

func IsPodRunning(kubeClient kubernetes.Interface, namespace, podName string) (running bool, notRunningReason string) {
	podInfo, err := kubeClient.CoreV1().Pods(namespace).Get(context.TODO(), podName, metav1.GetOptions{})
	if err != nil {
		return false, err.Error()
	}

	if podInfo.Status.Phase == v1.PodRunning {
		return true, ""
	}

	if podInfo.Status.Phase == v1.PodFailed && podInfo.Status.Reason == "Evicted" {
		return false, fmt.Sprintf("delete po %s when evicted in namespace %s!", podName, namespace)
	}

	for _, status := range podInfo.Status.ContainerStatuses {
		return false, fmt.Sprintf("%s %s", status.State.Waiting.Reason, status.State.Waiting.Message)
	}

	return false, "pod not running."
}

func K8sClientByClusterID[T ~int | ~int8 | ~int32 | ~int64](id T) *contracts.K8sClient {
	var c = models.Cluster{ID: int(id)}
	app.DB().First(&c)
	client, err := app.App().LoadKubeClient(c.Name, []byte(c.KubeConfig))
	if err != nil {
		xlog.Error(err)
	}
	return client
}
