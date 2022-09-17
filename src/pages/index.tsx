import { Box, Grid } from "@mui/material";

import { ApproxInfoCard, MainImage, MealCard } from "../components/IndexPage";

// 필요 api 주소
// GET /user
// GET /meal
// GET /bus?offset=2
// GET / as?offset=2
// GET /out?offset=2
//GET /gym?offset=2
// GET /buletin/hot?offset=2

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
            <MealCard></MealCard>
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
