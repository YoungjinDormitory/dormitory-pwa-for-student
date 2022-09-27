import { Box, Grid, Typography } from "@mui/material";
import { LocalFireDepartmentOutlinedIcon } from "../../icon";

export default function BoardSuspenseCard() {
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
          <Typography
            variant="caption"
            width={20}
            sx={{ backgroundColor: "gainsboro" }}></Typography>
        </Box>
      </Box>
      <Box flex={1}>
        <Grid container m={1.5} spacing={2} alignContent={"center"}>
          <Grid item width={40} sx={{ backgroundColor: "gainsboro" }}></Grid>
        </Grid>
        <Grid container mt={1} ml={1.5} spacing={2}>
          <Grid item width={50} sx={{ backgroundColor: "gainsboro" }}></Grid>
          <Grid
            item
            width={20}
            ml={2}
            sx={{ backgroundColor: "gainsboro" }}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
