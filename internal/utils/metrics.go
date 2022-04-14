package utils

import (
	"fmt"

	"k8s.io/metrics/pkg/apis/metrics/v1beta1"

	"github.com/dustin/go-humanize"
	"k8s.io/apimachinery/pkg/api/resource"
)

func GetCpuAndMemory(list []v1beta1.PodMetrics) (string, string) {
	return analyseMetricsToCpuAndMemory(list)
}

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

func analyseMetricsToCpuAndMemory(list []v1beta1.PodMetrics) (string, string) {
	var cpu, memory *resource.Quantity

	for _, item := range list {
		for _, container := range item.Containers {
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
	}

	var cpuStr, memoryStr string = "0 m", "0 MB"

	if cpu != nil {
		cpuStr = fmt.Sprintf("%d m", cpu.MilliValue())
	}
	if memory != nil {
		asInt64, _ := memory.AsInt64()
		memoryStr = humanize.Bytes(uint64(asInt64))
	}

	return cpuStr, memoryStr
}
