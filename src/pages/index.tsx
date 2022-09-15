import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import MainImage from "../components/layout/MainImage";

function Home() {
  return (
    <>
      <MainImage />
      <Grid container>
        <Grid xs={12} md={4} item>
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
                  {[0, 1, 2, 3, 4].map(() => (
                    <Typography textAlign={"center"} gutterBottom>
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
                  {[0, 1, 2, 3, 4].map(() => (
                    <Typography textAlign={"center"} gutterBottom>
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
                  {[0, 1, 2, 3, 4].map(() => (
                    <Typography textAlign={"center"} gutterBottom>
                      소고기 무국
                    </Typography>
                  ))}
                  <Divider />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={2} item></Grid>
        <Grid xs={12} md={6} item>
          <Card
            sx={{
              m: "10px",
            }}>
            asdf
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
