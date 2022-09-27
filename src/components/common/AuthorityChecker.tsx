import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCheckUser from "../../hooks/useCheckUser";
import { IProps } from "../../types/props.interface";

interface Props extends IProps {}

export default function AuthorityChecker({ children }: Props) {
  const { data, isLoading } = useCheckUser();
  console.log(data, isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !data) {
      alert("권한이 없습니다.");
      navigate(-1);
    }
  }, []);

  if (isLoading) {
    return <></>;
  } else {
    return <>{children}</>;
  }
}
