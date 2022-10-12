import request from "../../service/request";

/**
 *
 * @param page
 * @param limit
 * @description 공지사항 정보 얻는 함수
 */
export function getNotice({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/notice`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
    },
  });
}

/**
 * @description 익명 게시판 정보 얻는 함수
 */
export function getAnnonymous({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/bulletin`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
    },
  });
}

/**
 * @description - 핫 게시판 정보 얻는 함수
 */
export function getHot({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/hot`, {
    params: {
      page: queryKey[1],
      limit: queryKey[2],
    },
  });
}

/**
 * @description - 검색 조회 정보 얻는 함수
 */
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

/**
 * @description - 게시판 자세히 보기 함수
 */
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

/**
 * @description - 게시판 자세히 보기 함수
 */
export function getNoticeDetail({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/notice/detail`, {
    params: {
      notice_id: queryKey[1],
    },
  });
}

/**
 * @description - 게시판 이미지 얻는 함수
 */
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
