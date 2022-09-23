import request from "../../service/request";

export async function getUser() {
  const result = await request.get("/user");
  return result;
}
