import { AxiosRequestConfig, HeadersDefaults } from "axios";
import request from "../../service/request";
import config from "../config";

request.defaults.headers = config().headers as unknown as HeadersDefaults;

// ==========================================================================================

export async function mDeleteAs(id: string) {
  return await request.delete(`/as?id=${id}`);
}

export async function mUpdateAs(id: string) {
  return await request.put(`/as?id=${id}`);
}

export async function mCreateAs() {
  return await request.post("/as", {});
}

// ==========================================================================================

export async function mDeleteBus(id: string) {
  return await request.delete(`/bus?id=${id}`);
}

export async function mUpdateBus(id: string) {
  return await request.put(`/bus?id=${id}`);
}

export async function mCreateBus() {
  return await request.post("/bus", {});
}

// ==========================================================================================

export async function mDeleteGym(id: string) {
  return await request.delete(`/gym?id=${id}`);
}

export async function mUpdateGym(id: string) {
  return await request.put(`/gym?id=${id}`);
}

export async function mCreateGym() {
  return await request.post("/gym");
}

// ==========================================================================================

export async function mDeleteOut(id: string) {
  return await request.delete(`/out?id=${id}`);
}

export async function mUpdateOut(id: string) {
  return await request.put(`/out?id=${id}`);
}

export async function mCreateOut() {
  return await request.post("/out");
}
