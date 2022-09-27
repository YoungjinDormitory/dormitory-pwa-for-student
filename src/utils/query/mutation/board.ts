import { HeadersDefaults } from "axios";
import request from "../../service/request";

export function mDeleteBulletin(id: string) {
  return request.delete(`/bulletin?id=${id}`);
}

export function mUpdateBulletin(id: string) {
  return request.put(`/bulletin?id=${id}`);
}

export function mCreateBulletin() {
  return request.post("/bulletin");
}
