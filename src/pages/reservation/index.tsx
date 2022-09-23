import { Typography } from "@mui/material";

import { Box } from "@mui/system";

import { NavCard } from "../../components/common/card";
import reservationMap from "@data/reservationMapData.json";

// 관리 네비게이션 페이지
function ReservationaLink() {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderBottomColor: "gainsboro" }}>
        <Typography variant="h6" sx={{ p: "10px", fontWeight: 700 }}>
          관리
        </Typography>
      </Box>
      {reservationMap.map((props, idx) => {
        return <NavCard key={idx} {...props} />;
      })}
    </>
  );
}

export default ReservationaLink;
