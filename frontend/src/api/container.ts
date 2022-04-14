import ajax from "./ajax";
import pb from "./compiled"

export function isPodRunning({namespace, pod, cluster_id}: pb.ContainerIsPodRunningRequest) {
  return ajax.post<pb.ContainerIsPodRunningResponse>(`/api/containers/pod_running_status`, {namespace, pod, cluster_id});
}

export function isPodExists({cluster_id, namespace, pod}: pb.ContainerIsPodExistsRequest) {
  return ajax.post<pb.ContainerIsPodExistsResponse>(`/api/containers/pod_exists`, {namespace, pod, cluster_id});
}