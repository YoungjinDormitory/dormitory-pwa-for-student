import request from "../../service/request";

/**
 * @description - 유저정보 얻는 함수
 */
export function useGetUser(accessToken?: string) {
  return request.get("/user", {
    headers: {
      Authorization: accessToken ? accessToken : "",
    },
  });
}

/**
 * @description - ACCESS_TOKEN 재발급 함수
 */
export async function restoreAccessToken() {
  const result = await request.get("/restoreAccessToken");
  return result;
}
