import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";
import { IToken } from "../../../types/query.interface";
import request from "../../service/request";

// ==========================================================================================
interface ILogin {
  std_id: string;
  password: string;
}
export async function mLogin(body: ILogin) {
  const { std_id, password } = body;

  return await request.post("/login", {
    std_id,
    password,
  });
}

// ==========================================================================================

export function mLogout() {
  return request.post("/logout");
}

// ==========================================================================================
interface ChangeRoom extends IToken {
  token: string;
  room_num: number;
}

export function mChangeRoom({ token, ...body }: ChangeRoom) {
  return request.post("/logout", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

// ==========================================================================================

interface ISignUp {
  std_id: string;
  std_name: string;
  password: string;
  ph_num: string;
  room_num: string;
  e_mail: string;
}
export function mSignUp(body: ISignUp) {
  const { std_id, std_name, password, ph_num, room_num, e_mail } = body;
  return request.post("/signup", {
    std_id,
    std_name,
    password,
    ph_num,
    room_num,
    e_mail,
  });
}

// ==========================================================================================

export function mfindPassword(body: { e_mail: string; hash: string }) {
  return request.post("/find/pw", body);
}

export function mChangePassword(body: { e_mail: string; password: string }) {
  return request.post("/change/pw", body);
}
