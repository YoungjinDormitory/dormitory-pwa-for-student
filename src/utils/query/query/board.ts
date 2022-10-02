import request from "../../service/request";

export function getNotice(page: number | string, limit: number | string) {
  return request.get(`/bulletin/notice?page=${page}&limit=${limit}`);
}

export function getAnnonymous({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/bulletin`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
    },
  });
}
export function getAnnonymousDetail({
  queryKey,
}: {
  queryKey: Partial<string[]>;
}) {
  return request.get(`/bulletin/detail`, {
    params: {
      bulletin_id: queryKey[1],
    },
  });
}

export function getAnnonymousImage({
  queryKey,
}: {
  queryKey: Partial<string[]>;
}) {
  return request.get(`/bulletin/image`, {
    params: {
      bulletin_id: queryKey[1],
    },
  });
}

export function getHot(page: number | string, limit: number | string) {
  return request.get(`/bulletin/hot?page=${page}&limit=${limit}`);
}

/**
 * @description - 댓글 조회
 */
export function getComments({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get("/comment", {
    params: {
      bulletin_id: queryKey[1],
    },
  });
}
