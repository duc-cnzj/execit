import ajax from "./ajax";
import pb from "./compiled";

export function rbacList(obj: pb.rbac.ListRequest) {
  return ajax.get<pb.rbac.ListResponse>(`/api/rbac/permissions`, {
    params: obj,
  });
}

export function rbacApplyFor(obj: pb.rbac.ApplyForRequest) {
  return ajax.post<pb.rbac.ApplyForResponse>(`/api/rbac/permissions`, obj);
}

export function rbacApprove(obj: pb.rbac.ApproveRequest) {
  return ajax.post<pb.rbac.ApproveResponse>(`/api/rbac/permissions/approve`, obj);
}

export function rbacReject(obj: pb.rbac.RejectRequest) {
  return ajax.post<pb.rbac.RejectResponse>(`/api/rbac/permissions/reject`, obj);
}

export function rbacRevoke(obj: pb.rbac.RevokeRequest) {
  return ajax.post<pb.rbac.RevokeResponse>(`/api/rbac/permissions/revoke`, obj);
}
