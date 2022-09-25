import request from "../../service/request";

export function getNotice(page: number | string, limit: number | string) {
  return request.get(`/bulletin/notice?page=${page}&limit=${limit}`);
}

export function getAnnonymous(page: number | string, limit: number | string) {
  return request.get(`/bulletin/annonymous?page=${page}&limit=${limit}`);
}

export function getHot(page: number | string, limit: number | string) {
  return request.get(`/bulletin/hot?page=${page}&limit=${limit}`);
}
