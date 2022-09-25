import request from "../../service/request";

export async function getUser() {
  const result = await request.get("/user");
  return result;
}
const PREFIX = "/auth";

export async function restoreAccessToken() {
  const result = await request.get(PREFIX + "/restoreAccessToken");
}
