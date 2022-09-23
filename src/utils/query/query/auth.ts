import request from "../../service/request";

const PREFIX = "/auth";

export async function login() {
  const result = await request.post(PREFIX + "/login");
  return result;
}

export async function restoreAccessToken() {
  const result = await request.get(PREFIX + "/restoreAccessToken");
}

export async function logout() {
  const result = request.delete(PREFIX + "/logout");
  return result;
}
