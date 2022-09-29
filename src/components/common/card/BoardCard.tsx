import { Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IBoardItem } from "../../../types/board.interface";
import { LocalFireDepartmentOutlinedIcon } from "../../icon";

export default function BoardCard(data: IBoardItem) {
  const navigate = useNavigate();

  const path = useMemo(() => {
    if (location.pathname === "/board/hot") {
      return "/board/annonymous";
    }
    return location.pathname;
  }, [location.pathname]);
  return (
    <Box
      onClick={() =>
        navigate(path + "/detail?id=" + data.bulletin_id, {
          state: data,
        })
      }
      width="100%"
      display="flex"
      height={80}
      borderTop={1}
      borderColor={"gainsboro"}>
      <Box p={2} display="flex" justifyContent={"center"} alignItems="center">
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center">
          <LocalFireDepartmentOutlinedIcon></LocalFireDepartmentOutlinedIcon>
          <Typography variant="caption">{data.hot}</Typography>
        </Box>
      </Box>
      <Box flex={1}>
        <Grid container p={2} spacing={2}>
          <Grid item>{data.title}[댓글수]</Grid>
        </Grid>
        <Grid container pl={2} spacing={2}>
          <Grid item>{dayjs(data.create_date).format("YYYY/MM/DD")}</Grid>
          <Grid item> | </Grid>
          <Grid item>{data.std_id}</Grid>
        </Grid>
      </Box>
    </Box>
  );
}
