import { Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Carousel from "react-material-ui-carousel";
import { IMealItem } from "../../types/meal.interface";
import { getMeal } from "../../utils/query/query/meal";
import { MealCard } from "../common/card";
import CircularProgress from "@mui/material/CircularProgress";

const initailValue = {
  menu_id: "test",
  breakfast: "현미찰밥\n소고기뭇국\n간장된장조림\n고추불고기\n배추김치",
  lunch: "흰쌀밥\n미역국\n간장된장조림\n제육불고기\n배추김치",
  dinner: "흰쌀밥\n설렁탕\n만두\n야채모둠\n깍두기",
  date: new Date(),
  adm_id: null,
};

export default function MealCarousel() {
  const { data, isLoading } = useQuery(["getMeal"], getMeal);
  console.log(data?.data.length, isLoading);
  if (!data && isLoading) {
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
  } else if (data?.data.length === 0 && !isLoading) {
    return <MealCard data={initailValue} />;
  }

  return (
    <Carousel sx={{ minHeight: "267px" }}>
      {data?.data.map((el: IMealItem) => (
        <MealCard data={el} />
      ))}
    </Carousel>
  );
}
