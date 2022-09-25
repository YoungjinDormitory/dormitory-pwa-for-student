import { AxiosRequestConfig } from "axios";
import request from "../../service/request";
import config from "../config";

export function getOutingInfo(limit: number) {
  return request.get(`/out?limit=${limit}`, config() as AxiosRequestConfig);
}

export function getGymInfo(limit: number) {
  return request.get(`/gym?limit=${limit}`, config() as AxiosRequestConfig);
}

export function getBusInfo(limit: number) {
  return request.get(`/bus?limit=${limit}`, config() as AxiosRequestConfig);
}

export function getASInfo(limit: number) {
  return request.get(`/as?limit=${limit}`, config() as AxiosRequestConfig);
}
