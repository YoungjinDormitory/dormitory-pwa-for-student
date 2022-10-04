import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IBoardItem } from "../../../types/board.interface";
import { getComments } from "../../../utils/query/query/board";
import { LocalFireDepartmentOutlinedIcon } from "../../icon";

export default function BoardCard(data: IBoardItem) {
  const navigate = useNavigate();

  const path = useMemo(() => {
    if (location.pathname === "/notice") {
      return location.pathname;
    }
    return "/board/annonymous";
  }, [location.pathname]);

  const { data: comments } = useQuery(
    ["getComments", String(data.bulletin_id)],
    getComments,
    { refetchOnMount: false, refetchOnWindowFocus: false }
  );

  return (
    <Box
      onClick={() =>
        navigate(path + "/detail?id=" + data.bulletin_id, {
          state: data,
        })
      }
      sx={{
        cursor: "pointer",
      }}
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
          <Grid item>
            {data.title}[{comments?.data.count}]
          </Grid>
        </Grid>
        <Grid container pl={2} spacing={2}>
          <Grid item>
            <Typography variant="caption">
              {dayjs(data.create_date).format("YYYY/MM/DD")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{data.std_id}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
