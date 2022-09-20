import ajax from "./ajax";
import pb from "./compiled"

export function isPodRunning({ namespace, pod, cluster_id }: pb.container.IsPodRunningRequest) {
  return ajax.post<pb.container.IsPodRunningResponse>(`/api/containers/pod_running_status`, { namespace, pod, cluster_id });
}

export function isPodExists({ cluster_id, namespace, pod }: pb.container.IsPodExistsRequest) {
  return ajax.post<pb.container.IsPodExistsResponse>(`/api/containers/pod_exists`, { namespace, pod, cluster_id });
}

export function newProxy({ cluster_id, namespace, pod, port }: pb.container.ProxyRequest) {
  return ajax.post<pb.container.ProxyResponse>(`/api/containers/proxies`, { cluster_id, namespace, pod, port });
}