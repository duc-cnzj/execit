import ajax from "./ajax";
import pb from "./compiled"

export function cardAll() {
  return ajax.get<pb.CardAllResponse>(`/api/all_cards`);
}

export function cardList({page, page_size}: pb.CardListRequest) {
  return ajax.get<pb.CardListResponse>(`/api/cards?page=${page}&page_size=${page_size}`);
}

export function cardCreate({cluster_id, name, namespace, type}: pb.CardCreateRequest) {
  return ajax.post<pb.CardCreateResponse>(`/api/cards`, {cluster_id, name, namespace, type});
}

export function cardShow(card_id: number) {
  return ajax.get<pb.CardShowResponse>(`/api/cards/${card_id}`);
}

export function cardDelete(card_id: number) {
  return ajax.delete<pb.CardDeleteResponse>(`/api/cards/${card_id}`);
}
export function cardAllContainers(card_id: number) {
  return ajax.get<pb.CardAllContainersResponse>(`/api/cards/${card_id}/all_containers`);
}