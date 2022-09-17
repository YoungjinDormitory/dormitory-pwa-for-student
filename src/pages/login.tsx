import useInput from "@hooks/useInput";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import NormalOutlinedInput from "@common/NormalOutlinedInput";
import PasswordOutlinedInput from "@common/PasswordOutlinedInput";
import { LoginBox } from "../components/layout";

// Login 로그인페이지
function Login() {
  const idProps = useInput("", "학번");
  const passwordProps = useInput("", "패스워드");

  return (
    <>
      <LoginBox.Title title="로그인" />

      {/* 아이디 박스 */}
      <NormalOutlinedInput {...idProps} />

      {/* 비밀번호 박스 */}
      <PasswordOutlinedInput {...passwordProps} />

      <Button color="primary" variant="contained" fullWidth>
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
