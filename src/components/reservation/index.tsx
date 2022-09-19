import { Grid } from "@mui/material";
import { IProps } from "../../types/props.interface";
import Title from "./Title";

interface Props extends IProps {}

export default function Reservation({ children }: Props) {
  return (
    <Grid height={"100%"} maxWidth={"md"} margin={"auto"}>
      {children}
    </Grid>
  );
}

Reservation.Title = Title;
