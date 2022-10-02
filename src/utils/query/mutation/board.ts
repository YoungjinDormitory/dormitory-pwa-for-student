import { IToken } from "../../../types/query.interface";
import request from "../../service/request";

interface IBulletin extends IToken {
  [key: string]: any;
  bulletin_id?: number;
  title: string;
  content: string;
  images: (File | undefined)[];
  // 삭제해야할 이미지의 primary key
}

interface IBulletinOption extends IToken {
  bulletin_id: number;
}

/**
 * @description - 게시판 삭제 함수
 */
export function mDeleteBulletin({ bulletin_id, token }: IBulletinOption) {
  return request.post(
    `/bulletin/delete`,
    {
      bulletin_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}

/**
 * @description - 게시판 조회수 올리는 함수
 */
export function mViewBulletin({ bulletin_id }: IBulletinOption) {
  return request.post(`/bulletin/view`, {
    bulletin_id,
  });
}

/**
 * @description - 게시판 조회수 올리는 함수
 */
export function mClickHot({ bulletin_id, token }: IBulletinOption) {
  return request.post(
    `/bulletin/hot`,
    {
      bulletin_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}

/**
 * @description - 게시판 업데이트 함수
 */

export function mUpdateBulletin({
  token,
  ...body
}: IBulletin & { should_delete_img?: Array<number> }) {
  const formData = new FormData();

  Object.keys(body).forEach((el) => {
    if (typeof body[el] === "object") {
      body[el].forEach((v: File) => {
        formData.append(el, v);
      });
    } else formData.append(el, body[el] as Blob);
  });

  return request.post("/bulletin/update", formData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token ? token : "",
    },
  });
}

/**
 * @description - 게시판 생성 함수
 */
export function mCreateBulletin({ token, ...body }: IBulletin) {
  const formData = new FormData();

  Object.keys(body).forEach((el) => {
    if (typeof body[el] === "object") {
      body[el].forEach((v: File) => {
        formData.append(el, v);
      });
    } else formData.append(el, body[el] as Blob);
  });

  return request.post("/bulletin/create", formData, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token ? token : "",
    },
  });
}

/**
 * @description - 댓글 생성함수
 */

interface IComment extends IToken {
  comment_id: number;
  content: string;
  bulletin_id: number;
}

export function mCreateComment({ token, ...body }: Partial<IComment>) {
  return request.post("/comment/create", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

/**
 * @description - 댓글 업데이트함수
 */

export function mUpdateComment({ token, ...body }: Partial<IComment>) {
  return request.post("/comment/update", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

/**
 * @description - 댓글 삭제함수
 */

export function mDeleteComment({ token, ...body }: Partial<IComment>) {
  return request.post("/comment/delete", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}
