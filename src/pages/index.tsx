import { Box, Grid } from "@mui/material";
import {
  ApproxInfoCard,
  MainImage,
  MealCarousel,
} from "../components/IndexPage";
import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.locale("ko");

// Home 인덱스 페이지
function Home() {
  return (
    <>
      <MainImage />
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center">
        <Grid container maxWidth={"xl"}>
          <Grid xs={12} md={4} item>
            <MealCarousel />
          </Grid>
          <Grid xs={12} md={2} item></Grid>
          <Grid xs={12} md={6} item>
            <ApproxInfoCard></ApproxInfoCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
