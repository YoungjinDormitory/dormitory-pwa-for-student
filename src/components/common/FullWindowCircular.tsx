import { CircularProgress, Paper, Typography } from "@mui/material";
import { useState } from "react";

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
        display: visible ? "block" : "none",
      }}>
      <CircularProgress />
      <Typography variant="caption"> 로딩중입니다..</Typography>
    </Paper>
  );
}
