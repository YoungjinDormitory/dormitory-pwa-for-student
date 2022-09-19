import { Box, Card, CardContent, Typography } from "@mui/material";

function ASCard() {
  return (
    <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
            AS예약
          </Typography>
          <Typography variant="body2" color="green">
            진행중
          </Typography>
        </Box>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : 2022-09-21
        </Typography>
        <Typography>제목 : 수도 고장</Typography>
        <Typography>설명 : 아니 여기 수도 고장남..</Typography>
      </CardContent>
    </Card>
  );
}

export default ASCard;
