import { useQuery } from "@tanstack/react-query";
import Carousel from "react-material-ui-carousel";
import { IMealItem } from "../../types/meal.interface";
import { getMeal } from "../../utils/query/query/meal";
import { MealCard } from "../common/card";

export default function MealCarousel() {
  const { data } = useQuery(["getMeal"], getMeal);
  return (
    <Carousel>
      {data?.data.map((el: IMealItem) => (
        <MealCard data={el} />
      ))}
    </Carousel>
  );
}
