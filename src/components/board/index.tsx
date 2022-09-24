import { Grid } from "@mui/material";
import { IProps } from "../../types/props.interface";
import Navigator from "./Navigator";
import Title from "./Title";

interface Props extends IProps {}

/**
 * @description 예약 페이지를 위해 만든 디자인, Grid컴포넌트를 쓰고있음
 * */
export default function Board({ children }: Props) {
  return (
    <Grid maxWidth={"md"} margin={"auto"} container>
      {children}
    </Grid>
  );
}

Board.Title = Title;
Board.Navigator = Navigator;
