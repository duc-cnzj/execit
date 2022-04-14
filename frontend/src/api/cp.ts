import ajax from "./ajax";
import pb from "./compiled";

export async function copyToPod({ pod, namespace, container, file_id, cluster_id }: pb.ContainerCopyToPodRequest) {
  return ajax.post<pb.ContainerCopyToPodResponse>(`/api/containers/copy_to_pod`, { cluster_id, pod, namespace, container, file_id });
}