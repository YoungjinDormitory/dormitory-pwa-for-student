import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProps } from "../../types/props.interface";
import { AuthContext } from "./CognitoAuthorityChecker";

interface Props extends IProps {}

/**
 * @description 권한 확인용 래퍼 컴포넌트 입니다.
 */
export default function AuthorityChecker({ children }: Props) {
  const { getUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    authCheck();
  }, []);

  const authCheck = async () => {
    try {
      await getUserData();
    } catch (err) {
      alert("권한이 없습니다.");
      navigate(-1);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <></>;
  } else {
    return <>{children}</>;
  }
}
