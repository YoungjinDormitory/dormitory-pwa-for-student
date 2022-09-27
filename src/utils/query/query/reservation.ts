import { AxiosRequestConfig } from "axios";
import request from "../../service/request";

export function getOutingInfo(limit: number) {
  return request.get(`/out?limit=${limit}`);
}

export function getGymInfo(limit: number) {
  return request.get(`/gym?limit=${limit}`);
}

export function getBusInfo(limit: number) {
  return request.get(`/bus?limit=${limit}`);
}

export function getASInfo({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/as?limit=${queryKey[2]}`, {
    headers: {
      Authorization: queryKey[1]!,
    },
  });
}
