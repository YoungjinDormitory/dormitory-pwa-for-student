import { createContext } from "react";
import UserPool from "../../utils/service/UserPool";
import type { IProps } from "../../types/props.interface";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";

interface Props extends IProps {}
const AuthContext = createContext<any>({});

function CognitoAuthorityChecker({ children }: Props) {
  const navigate = useNavigate();

  // getUserData 함수는 AWS Cognito 에서 유저의 정보를 뺴오는 함수입니다.
  const getUserData = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession(
          (err: Error | null, session: CognitoUserSession | null) => {
            if (err) {
              reject(err);
            } else if (session) {
              user.getUserAttributes((err, data) => {
                if (err) {
                  reject(err);
                }
                resolve(data);
              });
            }
          }
        );
      } else {
        reject();
      }
    });
  };

  // authenticate 함수는 유저의 로그인을 도와주는 함수입니다.
  const authenticate = async (Username: string, Password: string) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("success", data);
          navigate("/");
        },
        onFailure: (error) => {
          console.log("error", error);
          reject(error);
        },
        newPasswordRequired: (data) => {
          console.log("new Password required", data);
          resolve(data);
        },
      });
    });
  };

  // 로그아웃 함수 입니다.
  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      console.log("hi~");
      navigate(0);
    }
  };
  return (
    <AuthContext.Provider value={{ authenticate, getUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { CognitoAuthorityChecker, AuthContext };
