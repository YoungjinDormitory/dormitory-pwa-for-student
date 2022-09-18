import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import NavCard from "../../../components/common/NavCard";

// 외출/외박 네비게이션 페이지
function Outing() {
  const location = useLocation();

  return (
    <Box
      maxWidth={"sm"}
      margin="auto"
      minHeight={"100%"}
      border={1}
      borderColor="gainsboro">
      <Box sx={{ borderBottom: 1, borderBottomColor: "gainsboro" }}>
        <Typography variant="h6" sx={{ p: "10px", fontWeight: 700 }}>
          외출/외박
        </Typography>
      </Box>
      <NavCard
        forwardIcon="CreateOutlinedIcon"
        backwardIcon="ArrowForwardOutlinedIcon"
        to={location.pathname + "/write"}
        title="외출/외박 신청"
        description="A/S 작성은 이곳에서"
      />
      <NavCard
        forwardIcon="ChromeReaderModeOutlinedIcon"
        backwardIcon="ArrowForwardOutlinedIcon"
        to={location.pathname + "/lookup"}
        title="외출/외박 조회"
        description="A/S 조회는 이곳에서"
      />
    </Box>
  );
}

export default Outing;
