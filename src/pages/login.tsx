import NormalOutlinedInput from "@common/NormalOutlinedInput";
import PasswordOutlinedInput from "@common/PasswordOutlinedInput";
import useInput from "@hooks/useInput";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { LoginBox } from "../components/layout";
import useAuthContext from "../hooks/useAuthContext";
import { mLogin } from "../utils/query/mutation/user";
import { CognitoUserPool } from "amazon-cognito-identity-js";

import { AuthContext } from "../components/common/CognitoAuthorityChecker";

// Login 로그인페이지
function Login() {
  const idProps = useInput("", "학번");
  const passwordProps = useInput("", "패스워드");

  // AuthContext
  const { ctx } = useAuthContext();
  const contextValue = useContext(ctx);
  const navigate = useNavigate();

  const [hintMessage, setHintMessage] = useState<boolean>(false);

  //로그인 뮤테이션
  const { mutate: login } = useMutation(["login"], mLogin, {
    onSuccess: (res) => {
      contextValue?.setToken(res.data.accessToken);
      navigate("/");
    },
    onError: () => setHintMessage(true),
    retry: () => {
      return false;
    },
  });

  const { authenticate } = useContext(AuthContext);

  // AWS Cognito
  const onSubmit = async () => {
    await authenticate(idProps.value, passwordProps.value);
  };

  return (
    <>
      <LoginBox.Title title="로그인" />

      {hintMessage && (
        <Typography color="red" variant="caption" gutterBottom>
          아이디 또는 패스워드를 확인해주세요
        </Typography>
      )}

      {/* 아이디 박스 */}
      <NormalOutlinedInput {...idProps} />

      {/* 비밀번호 박스 */}
      <PasswordOutlinedInput {...passwordProps} />

      <Button
        color="primary"
        onClick={() => {
          /*           login({
            std_id: idProps.value,
            password: passwordProps.value,
          }); */
          onSubmit();
        }}
        variant="contained"
        fullWidth>
        제출
      </Button>

      {/* 유틸리티 링크 */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{ mt: 1 }}>
        <Link
          to="/findPassword"
          style={{ textDecoration: "none", display: "flex" }}>
          <KeyboardArrowLeftOutlinedIcon fontSize="small" />
          <Typography variant="caption">비밀번호 찾기</Typography>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", display: "flex" }}>
          <Typography variant="caption">회원가입</Typography>
          <KeyboardArrowRightOutlinedIcon fontSize="small" />
        </Link>
      </Box>
    </>
  );
}

export default Login;
