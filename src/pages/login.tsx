import NormalOutlinedInput from "@common/NormalOutlinedInput";
import PasswordOutlinedInput from "@common/PasswordOutlinedInput";
import useInput from "@hooks/useInput";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginBox } from "../components/layout";

import { AuthContext } from "../components/common/CognitoAuthorityChecker";

// Login 로그인페이지
function Login() {
  const idProps = useInput("", "학번");
  const passwordProps = useInput("", "패스워드");

  // AuthContext

  const [hintMessage, setHintMessage] = useState<boolean>(false);

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

      <Button color="primary" onClick={onSubmit} variant="contained" fullWidth>
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
