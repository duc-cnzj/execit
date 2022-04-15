package utils

import (
	"k8s.io/metrics/pkg/apis/metrics/v1beta1"

	"k8s.io/apimachinery/pkg/api/resource"
)

func GetCpuAndMemoryQuantity(pod v1beta1.PodMetrics) (cpu *resource.Quantity, memory *resource.Quantity) {
	for _, container := range pod.Containers {
		if cpu == nil {
			cpu = container.Usage.Cpu()
		} else {
			cpu.Add(*container.Usage.Cpu())
		}

		if memory == nil {
			memory = container.Usage.Memory()
		} else {
			memory.Add(*container.Usage.Memory())
		}
	}

	return cpu, memory
}
