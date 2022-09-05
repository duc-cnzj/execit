import ajax from "./ajax";
import pb from "./compiled"

export function cardAll(owned: boolean) {
  return ajax.get<pb.card.AllResponse>(`/api/all_cards?owned=${owned}`);
}

export function cardList({page, page_size}: pb.card.ListRequest) {
  return ajax.get<pb.card.ListResponse>(`/api/cards?page=${page}&page_size=${page_size}`);
}

export function cardCreate({cluster_id, name, namespace, type}: pb.card.CreateRequest) {
  return ajax.post<pb.card.CreateResponse>(`/api/cards`, {cluster_id, name, namespace, type});
}

export function cardShow(card_id: number) {
  return ajax.get<pb.card.ShowResponse>(`/api/cards/${card_id}`);
}

export function cardDelete(card_id: number) {
  return ajax.delete<pb.card.DeleteResponse>(`/api/cards/${card_id}`);
}
export function cardAllContainers(card_id: number) {
  return ajax.get<pb.card.AllContainersResponse>(`/api/cards/${card_id}/all_containers`);
}