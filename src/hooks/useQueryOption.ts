import { useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "../components/common/CognitoAuthorityChecker";
import request from "../utils/service/request";

/**
 *
 * @description - refreshToken요청사항이 있는 쿼리 옵션 hook입니다.
 */

export default function useQueryOption() {
  const [token, setToken] = useState<string>();
  const auth = useContext(AuthContext);

  useLayoutEffect(() => {
    auth.getAccessToken().then((res: any) => {
      setToken(res.jwtToken);
    });
  }, []);

  const option = {
    retry: (failureCount: number, error: any) => {
      if (
        error.response.data === "Authorization Error" &&
        error.response.status === 401
      ) {
        // 인증 에러가 발생하면
        // refresh token 과 함께 서버로 보냄
      }
      return false;
    },
    refetchOnWindowFocus: false,
  };

  return { option, token };
}
