import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";
import request from "../../service/request";
import config from "../config";

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

mLogin.onSuccess = (res: AxiosResponse<any, any>) => {
  const { ctx } = useAuthContext();
  const contextValue = useContext(ctx);
  contextValue?.setToken(res.data.accessToken);
  const navigate = useNavigate();
  navigate("/");
};

// ==========================================================================================

export async function mLogout() {
  return request.post("/logout", {}, config() as AxiosRequestConfig);
}

mLogout.Succcess = () => {
  const { ctx } = useAuthContext();
  const contextValue = useContext(ctx);
  contextValue?.setToken("");
  const navigate = useNavigate();
  navigate("/");
};

// ==========================================================================================

interface ISignUp {
  std_id: string;
  std_name: string;
  password: string;
  ph_num: string;
  room_num: string;
  e_mail: string;
}
export async function mSignUp(body: ISignUp) {
  const { std_id, std_name, password, ph_num, room_num, e_mail } = body;
  return await request.post("/signup", {
    std_id,
    std_name,
    password,
    ph_num,
    room_num,
    e_mail,
  });
}

// ==========================================================================================
