import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// 404 에러 페이지
function Error_404() {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}>
      <Box textAlign={"center"}>
        <Typography
          variant="h4"
          align="center"
          color="red"
          sx={{ fontWeight: "bold" }}>
          404 Error
        </Typography>
        <Typography align="center" variant="caption">
          없는 페이지 입니다
        </Typography>
        <Typography>
          돌이 가실려면 <Link to={"/"}>이곳</Link>을 클릭해주세요
        </Typography>
      </Box>
    </Box>
  );
}

export default Error_404;
