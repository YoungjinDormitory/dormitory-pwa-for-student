import request from "../../service/request";

export function useGetUser(accessToken?: string) {
  return request.get("/user", {
    headers: {
      Authorization: accessToken ? accessToken : "",
    },
  });
}
const PREFIX = "/auth";

export async function restoreAccessToken() {
  const result = await request.get("/restoreAccessToken");
  return result;
}
