package proxyidgen

import (
	"fmt"

	"github.com/duc-cnzj/execit/internal/contracts"
	"github.com/duc-cnzj/execit/internal/utils/md5"
)

func GenProxyID(proxypod contracts.ProxyPod) string {
	return md5.Md5(fmt.Sprintf("%d-%s-%s-%s", proxypod.ClusterId, proxypod.Namespace, proxypod.Pod, proxypod.Port))
}
