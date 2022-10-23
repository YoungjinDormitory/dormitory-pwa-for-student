import { createContext, useState } from "react";
import UserPool from "../../utils/service/UserPool";
import type { IProps } from "../../types/props.interface";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import FullWindowCircular from "./FullWindowCircular";

interface Props extends IProps {}
const AuthContext = createContext<any>({});

function CognitoAuthorityChecker({ children }: Props) {
  const navigate = useNavigate();

  const [circularVisible, setCircularVisible] = useState(false);

  // getUserData 함수는 AWS Cognito 에서 유저의 정보를 뺴오는 함수입니다.
  const getUserData = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession(
          (err: Error | null, session: CognitoUserSession | null) => {
            if (err) {
              reject(err);
            }
            user.getUserData((err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            });
          }
        );
      } else {
        reject();
      }
    });
  };

  // getAccessToken 함수는 AWS Cognito 에서 유저의 accessToken을 가져오는 함수 입니다.
  const getAccessToken = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err: Error | null, session: CognitoUserSession) => {
          if (err) {
            user.refreshSession(
              session.getRefreshToken(),
              (err: Error | null, session: CognitoUserSession) => {
                if (err) {
                  reject(err);
                }
                resolve(session.getAccessToken());
              }
            );
          }
          resolve(session.getAccessToken());
        });
      }
    });
  };

  // authenticate 함수는 유저의 로그인을 도와주는 함수입니다.
  const authenticate = async (Username: string, Password: string) => {
    setCircularVisible(true);
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          setCircularVisible(false);
          navigate("/");
        },
        onFailure: (error) => {
          setCircularVisible(false);
          reject(error);
        },
        newPasswordRequired: (data) => {
          setCircularVisible(false);
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
    <AuthContext.Provider
      value={{ authenticate, getUserData, logout, getAccessToken }}>
      {children}
      <FullWindowCircular visible={circularVisible} />
    </AuthContext.Provider>
  );
}

export { CognitoAuthorityChecker, AuthContext };
