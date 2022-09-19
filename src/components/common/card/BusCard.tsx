import { Card, CardContent, Typography } from "@mui/material";

function BusCard() {
  return (
    <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
          버스 예약
        </Typography>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : 2022-09-21
        </Typography>
        <Typography>출발지 : 글로벌 캠퍼스</Typography>
        <Typography>종착지 : 복현캠퍼스</Typography>

        <Typography>출발시간 : 07:45</Typography>
        <Typography>도착예정시간 : 09:00</Typography>
      </CardContent>
    </Card>
  );
}

export default BusCard;
