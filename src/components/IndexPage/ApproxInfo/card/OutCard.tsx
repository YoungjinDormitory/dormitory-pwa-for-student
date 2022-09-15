import { Box, Card, CardContent, Typography } from "@mui/material";

function OutCard() {
  return (
    <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
          외출/외박
        </Typography>
        <Typography>출발 일 : 2022-09-14</Typography>
        <Typography>도착 예정일 : 2022-09-16</Typography>
      </CardContent>
    </Card>
  );
}

export default OutCard;
