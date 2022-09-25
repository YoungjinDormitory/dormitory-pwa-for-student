import { Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalFireDepartmentOutlinedIcon } from "../../icon";

export default function BoardCard() {
  return (
    <Box
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
          <Typography variant="caption">1000</Typography>
        </Box>
      </Box>
      <Box flex={1}>
        <Grid container p={2} spacing={2}>
          <Grid item>제목[댓글수]</Grid>
        </Grid>
        <Grid container pl={2} spacing={2}>
          <Grid item>{dayjs().format("YYYY/MM/DD")}</Grid>
          <Grid item>작성자</Grid>
        </Grid>
      </Box>
    </Box>
  );
}
