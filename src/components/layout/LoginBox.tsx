import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { IProps } from "../../types/props.interface";

interface Props extends IProps {}

/**
 * @description 유저 로그인에 관련된 레이아웃을 처리하는 컴포넌트 입니다.
 */
function LoginBox({ children }: Props) {
  const navigate = useNavigate();
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
      <img src="asset/logo.png" onClick={() => navigate("/")}></img>
      {children}
    </Box>
  );
}

/**
 *
 * @param {string} title
 * @description LoginBox 컴포넌트의 타이틀 컴포넌트 입니다.
 */
LoginBox.Title = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="subtitle1"
      sx={{ letterSpacing: "5px", fontWeight: "bold" }}
      gutterBottom>
      {title}
    </Typography>
  );
};

export default LoginBox;
