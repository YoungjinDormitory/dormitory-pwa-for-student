import { Grid } from "@mui/material";
import { IProps } from "../../types/props.interface";
import AuthorityChecker from "../common/AuthorityChecker";
import Title from "./Title";

interface Props extends IProps {}

/**
 * @description 예약 페이지를 위해 만든 디자인, Grid컴포넌트를 쓰고있음
 * */
export default function Reservation({ children }: Props) {
  return (
    <AuthorityChecker>
      <Grid maxWidth={"md"} margin={"auto"} container>
        {children}
      </Grid>
    </AuthorityChecker>
  );
}

Reservation.Title = Title;
