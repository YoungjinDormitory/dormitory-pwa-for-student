import request from "../../service/request";

export function getMeal() {
  return request.get("/menu");
}
