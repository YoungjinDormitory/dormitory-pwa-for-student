import { Card, CardContent, Typography } from "@mui/material";

function GymCard() {
  return (
    <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
          체육관
        </Typography>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : 2022-09-21
        </Typography>
        <Typography>시작 시간 : 07:50</Typography>
        <Typography>종료 예정 시간 : 08:50</Typography>
      </CardContent>
    </Card>
  );
}

export default GymCard;
