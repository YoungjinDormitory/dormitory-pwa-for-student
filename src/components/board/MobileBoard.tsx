import { IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { lazy, Suspense } from "react";
import BoardSuspenseCard from "../common/card/BoardSuspenseCard";
import { IBoardItem } from "../../types/board.interface";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        <IconButton
          disabled={currentPage - 1 <= 0}
          onClick={() => {
            navigate(
              location.pathname +
                `?page=${currentPage - 1}&viewCount=${currentViewCount}`
            );
          }}>
          <ArrowBackIosOutlinedIcon />
        </IconButton>

        <Typography variant="caption" letterSpacing={2}>
          {currentPage} / {maxPage}
        </Typography>
        <IconButton
          disabled={currentPage + 1 > maxPage}
          onClick={() => {
            navigate(
              location.pathname +
                `?page=${currentPage + 1}&viewCount=${currentViewCount}`
            );
          }}>
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
      </Toolbar>
    </div>
  );
}
