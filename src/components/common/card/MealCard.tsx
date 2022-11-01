import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";
import { IMealItem } from "../../../types/meal.interface";

interface Props {
  data: IMealItem;
}

function MealCard({ data }: Props) {
  const [breakfastArr, setBreakFastArr] = useState<Array<string>>();
  const [lunchArr, setLunchArr] = useState<Array<string>>();
  const [dinnerArr, setDinnerArr] = useState<Array<string>>();

  useLayoutEffect(() => {
    setBreakFastArr(data.breakfast.split("\n"));
    setLunchArr(data.lunch.split("\n"));
    setDinnerArr(data.dinner.split("\n"));
  }, []);

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
          {dayjs(data.date).format("MM월 DD일 ddd요일")} 식단
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
            <Divider sx={{ mb: "10px" }} />
            {breakfastArr?.map((item: string, idx: number) => (
              <Typography
                key={String(idx)}
                variant={"body2"}
                textAlign={"center"}
                gutterBottom>
                {item}
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
            <Divider sx={{ mb: "10px" }} />
            {lunchArr?.map((item: string, idx: number) => (
              <Typography
                key={String(idx)}
                variant={"body2"}
                textAlign={"center"}
                gutterBottom>
                {item}
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
            <Divider sx={{ mb: "10px" }} />
            {dinnerArr?.map((item: string, idx: number) => (
              <Typography
                key={String(idx)}
                variant={"body2"}
                textAlign={"center"}
                gutterBottom>
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MealCard;
