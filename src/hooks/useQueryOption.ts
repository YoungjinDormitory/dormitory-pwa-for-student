import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import request from "../utils/service/request";
import useAuthContext from "./useAuthContext";

/**
 *
 * @description - refreshToken요청사항이 있는 쿼리 옵션 hook입니다.
 */

export default function useQueryOption() {
  const { ctx } = useAuthContext();
  const auth = useContext(ctx);

  const option = {
    retry: (failureCount: number, error: any) => {
      if (
        error.response.data === "Authorization Error" &&
        error.response.status === 401
      ) {
        // 인증 에러가 발생하면
        // refresh token 과 함께 서버로 보냄
        request.get("/restoreAccessToken").then((res: any) => {
          auth?.setToken(res.data.accessToken);
        });
      }
      return false;
    },
    refetchOnWindowFocus: false,
  };
  const token = auth?.token;

  return { option, token };
}
