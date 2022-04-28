import ajax from "./ajax";
import pb from "./compiled"

export function clusterList({page, page_size}: pb.cluster.ListRequest) {
  return ajax.get<pb.cluster.ListResponse>(`/api/clusters?page=${page}&page_size=${page_size}`);
}

export function clusterCreate({name, kube_config, namespace}: pb.cluster.CreateRequest) {
  return ajax.post<pb.cluster.CreateResponse>(`/api/clusters`, {name, kube_config, namespace});
}

export function clusterShow(cluster_id: number) {
  return ajax.get<pb.cluster.ShowResponse>(`/api/clusters/${cluster_id}`);
}

export function clusterDelete(cluster_id: number) {
  return ajax.delete<pb.cluster.DeleteResponse>(`/api/clusters/${cluster_id}`);
}