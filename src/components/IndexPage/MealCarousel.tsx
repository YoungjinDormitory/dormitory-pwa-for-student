import { Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Carousel from "react-material-ui-carousel";
import { IMealItem } from "../../types/meal.interface";
import { getMeal } from "../../utils/query/query/meal";
import { MealCard } from "../common/card";
import CircularProgress from "@mui/material/CircularProgress";

export default function MealCarousel() {
  const { data } = useQuery(["getMeal"], getMeal);

  if (!data) {
    return (
      <Paper
        sx={{
          m: "10px",
          height: "267px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress />
        <Typography variant="caption"> 로딩중입니다..</Typography>
      </Paper>
    );
  }

  return (
    <Carousel sx={{ minHeight: "267px" }}>
      {data?.data.map((el: IMealItem) => (
        <MealCard data={el} />
      ))}
    </Carousel>
  );
}
