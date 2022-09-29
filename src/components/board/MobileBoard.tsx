import { Toolbar, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { lazy, Suspense } from "react";
import BoardSuspenseCard from "../common/card/BoardSuspenseCard";
import { IBoardItem } from "../../types/board.interface";

interface Props {
  currentPage: number;
  currentViewCount: number;
  maxPage: number;
  data: Array<IBoardItem>;
}

export default function MobileBoard({
  currentPage,
  currentViewCount,
  maxPage,
  data = [],
}: Props) {
  const BoardCard = lazy(() => import("../common/card/BoardCard"));
  return (
    <div style={{ width: "100%", marginBottom: "48px" }}>
      {data.map((el) => (
        <Suspense key={el.bulletin_id} fallback={<BoardSuspenseCard />}>
          <BoardCard {...el} />
        </Suspense>
      ))}

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
          {currentPage} / {maxPage}
        </Typography>
        <ArrowForwardIosOutlinedIcon />
      </Toolbar>
    </div>
  );
}
