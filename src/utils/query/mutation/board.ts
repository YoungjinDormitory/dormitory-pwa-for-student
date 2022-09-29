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
    formData.append(el, body[el]);
  });
  return request.post("/bulletin/create", formData, {
    headers: {
      Authorization: token ? token : "",
      "Content-Type": "multipart/form-data",
    },
  });
}
