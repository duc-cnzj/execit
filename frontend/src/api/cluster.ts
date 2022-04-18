import ajax from "./ajax";
import pb from "./compiled"

export function clusterList({page, page_size}: pb.ClusterListRequest) {
  return ajax.get<pb.ClusterListResponse>(`/api/clusters?page=${page}&page_size=${page_size}`);
}

export function clusterCreate({name, kube_config, namespace}: pb.ClusterCreateRequest) {
  return ajax.post<pb.ClusterCreateResponse>(`/api/clusters`, {name, kube_config, namespace});
}

export function clusterShow(cluster_id: number) {
  return ajax.get<pb.ClusterShowResponse>(`/api/clusters/${cluster_id}`);
}

export function clusterDelete(cluster_id: number) {
  return ajax.delete<pb.ClusterDeleteResponse>(`/api/clusters/${cluster_id}`);
}