import { Box, CircularProgress, Paper, Typography } from "@mui/material";

export default function FullWindowCircular({ visible }: { visible: boolean }) {
  return (
    <Paper
      sx={{
        position: "absolute",
        inset: "0px",
        backgroundColor: "rgba(0,0,0,0.1)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: visible ? "flex" : "none",
      }}>
      <CircularProgress />
      <Typography variant="caption"> 로딩중입니다..</Typography>
    </Paper>
  );
}
