import { Toolbar, Typography } from "@mui/material";
import BoardCard from "../common/card/BoardCard";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function MobileBoard() {
  return (
    <div style={{ width: "100%", marginBottom: "48px" }}>
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <Toolbar
        variant="dense"
        sx={{
          position: "fixed",
          width: "100%",
          backgroundColor: "gainsboro",
          bottom: "56px",
        }}>
        <ArrowBackIosOutlinedIcon />
        <Typography variant="caption" letterSpacing={2}>
          0/2
        </Typography>
        <ArrowForwardIosOutlinedIcon />
      </Toolbar>
    </div>
  );
}
