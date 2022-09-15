import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";

function MealCard() {
  return (
    <Card
      sx={{
        m: "10px",
      }}>
      <CardContent>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{
            fontWeight: 700,
          }}
          gutterBottom>
          오늘의 식단
        </Typography>
        <Divider />
        <Grid container>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              sx={{
                fontWeight: 700,
              }}>
              아침
            </Typography>
            <Divider />
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <Typography key={idx} textAlign={"center"} gutterBottom>
                소고기 무국
              </Typography>
            ))}
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              sx={{
                fontWeight: 700,
              }}>
              점심
            </Typography>
            <Divider />
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <Typography key={idx} textAlign={"center"} gutterBottom>
                소고기 무국
              </Typography>
            ))}
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              sx={{
                fontWeight: 700,
              }}>
              저녁
            </Typography>
            <Divider />
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <Typography key={idx} textAlign={"center"} gutterBottom>
                소고기 무국
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MealCard;
