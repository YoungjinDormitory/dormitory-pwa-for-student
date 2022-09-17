import useInput from "@hooks/useInput";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
function Login() {
  const idProps = useInput("");
  const passwordProps = useInput("");

  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const changeType = () => {
    setPasswordType(() => (passwordType === "text" ? "password" : "text"));
  };

  return (
    <Box
      display={"flex"}
      padding={3}
      flexDirection={"column"}
      maxWidth={"400px"}
      boxShadow={"10px 10px 5px #F6F6F6"}
      justifyContent="center"
      alignItems="center"
      margin="auto">
      {/* 로고 */}
      <img src="asset/logo.png"></img>

      <Typography
        variant="subtitle1"
        sx={{ letterSpacing: "5px", fontWeight: "bold" }}
        gutterBottom>
        로그인
      </Typography>

      <Divider variant="middle" />

      {/* 아이디 박스 */}
      <FormControl
        fullWidth
        sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
        <InputLabel>학번</InputLabel>
        <OutlinedInput {...idProps} label={"학번"} fullWidth />
      </FormControl>

      {/* 비밀번호 박스 */}
      <FormControl
        fullWidth
        sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
        <InputLabel>패스워드</InputLabel>
        <OutlinedInput
          {...passwordProps}
          type={passwordType}
          label={"패스워드"}
          endAdornment={
            /* 패스워드 type 상태 표시 아이콘 */
            <IconButton onClick={changeType}>
              {passwordType === "password" && <VisibilityOutlinedIcon />}
              {passwordType === "text" && <VisibilityOffOutlinedIcon />}
            </IconButton>
          }
          fullWidth
        />
      </FormControl>

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
          to="/findAccount"
          style={{ textDecoration: "none", display: "flex" }}>
          <KeyboardArrowLeftOutlinedIcon fontSize="small" />
          <Typography variant="caption">비밀번호 찾기</Typography>
        </Link>
        <Link
          to="/findAccount"
          style={{ textDecoration: "none", display: "flex" }}>
          <Typography variant="caption">회원가입</Typography>
          <KeyboardArrowRightOutlinedIcon fontSize="small" />
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
