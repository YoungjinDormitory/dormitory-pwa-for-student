import { createContext, useState } from "react";
import { IAuthContext } from "../types/context.interface";
import request from "../utils/service/request";

const AuthContext = createContext<IAuthContext | null>(null);

/**
 * @description - Auth 정보를 나눠주는 프로바이더 훅입니다. 컨텍스트 포함
 */
export default function useAuthContext() {
  const [token, setToken] = useState<string>("");

  return {
    Provider: AuthContext.Provider,
    ctx: AuthContext,
    value: {
      token,
      setToken,
    },
  };
}
