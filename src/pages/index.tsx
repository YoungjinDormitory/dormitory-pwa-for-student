import { Grid } from "@mui/material";

import { ApproxInfoCard, MainImage, MealCard } from "../components/IndexPage";

// 필요 api 주소
// GET /user
// GET /meal
// GET /bus?offset=2
// GET / as?offset=2
// GET /out?offset=2
//GET /gym?offset=2
// GET /buletin/hot?offset=2

function Home() {
  return (
    <>
      <MainImage />
      <Grid container>
        <Grid xs={12} md={4} item>
          <MealCard></MealCard>
        </Grid>
        <Grid xs={12} md={2} item></Grid>
        <Grid xs={12} md={6} item>
          <ApproxInfoCard></ApproxInfoCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
