import { IToken } from "../../../types/query.interface";
import request from "../../service/request";

interface IBulletin extends IToken {
  [key: string]: any;
  title: string;
  content: string;
  images: (File | undefined)[];
}

export function mDeleteBulletin(id: string) {
  return request.delete(`/bulletin?id=${id}`);
}

export function mUpdateBulletin(id: string) {
  return request.put(`/bulletin?id=${id}`);
}

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
