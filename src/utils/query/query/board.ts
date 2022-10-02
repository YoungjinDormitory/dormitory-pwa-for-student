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
export function getHot({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/hot`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
    },
  });
}

export function getSearchedAnnonymous({
  queryKey,
}: {
  queryKey: Partial<string[]>;
}) {
  return request.get(`/bulletin/search`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
      keyword: queryKey[3],
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
