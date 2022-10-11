import { IToken } from "../../../types/query.interface";
import request from "../../service/request";

// ==========================================================================================
/**
 * @description 로그인 요청 함수
 */
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

/**
 * @description - 로그아웃 요청 함수
 */
export function mLogout() {
  return request.post("/logout");
}

// ==========================================================================================
interface ChangeRoom extends IToken {
  token: string;
  room_num: number;
}

/**
 * @deprecated
 * @rdescription - 방 바꾸기 요청함수
 */
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
/**
 * @description - 회원가입 요청 함수
 */
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

/**
 * @description - 비밀번호 찾기 위해 인증을 보내는 함수
 */
export function mfindPassword(body: { e_mail: string; hash: string }) {
  return request.post("/find/pw", body);
}

/**
 * @description - 비밀번호 바꾸기 함수
 */
export function mChangePassword(body: { e_mail: string; password: string }) {
  return request.post("/change/pw", body);
}

// ==========================================================================================

export function mSendHashToEmail(body: { e_mail: string; hash: string }) {
  return request.post("/sendMail", body);
}
