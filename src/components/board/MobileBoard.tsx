import { Toolbar, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { lazy, Suspense } from "react";
import BoardSuspenseCard from "../common/card/BoardSuspenseCard";

export default function MobileBoard() {
  const BoardCard = lazy(() => import("../common/card/BoardCard"));
  return (
    <div style={{ width: "100%", marginBottom: "48px" }}>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>
      <Suspense fallback={<BoardSuspenseCard />}>
        <BoardCard />
      </Suspense>

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
