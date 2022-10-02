import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  IconButton,
  Paper,
  Slider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useModal } from "../../../hooks";

interface IBoardToolBar {
  currentPage: number;
  currentViewCount: number;
  maxPage: number;
  keyword?: string;
}

export default function BoardToolBar({
  currentPage,
  currentViewCount,
  maxPage,
  keyword,
}: IBoardToolBar) {
  const navigate = useNavigate();
  const sliderCard = useModal();

  return (
    <Toolbar
      variant="dense"
      sx={{
        position: "fixed",
        width: "100%",
        backgroundColor: "gainsboro",
        bottom: "56px",
      }}>
      <Box>
        <IconButton
          disabled={currentPage - 1 <= 0}
          onClick={() => {
            navigate(
              location.pathname +
                `?page=${currentPage - 1}&viewCount=${currentViewCount}` +
                `${keyword ? "&content=" + keyword : ""}`
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
                `?page=${currentPage + 1}&viewCount=${currentViewCount}` +
                `${keyword ? "&content=" + keyword : ""}`
            );
          }}>
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
      </Box>
      <Paper
        sx={{
          display: sliderCard.open ? "block" : "none",
          position: "absolute",
          width: "60%",
          marginBottom: "112px",
          textAlign: "center",
        }}>
        <Slider
          sx={{ width: "90%" }}
          size="small"
          onChange={(event, value) => {
            navigate(
              location.pathname +
                `?page=${currentPage}&viewCount=${value}` +
                `${keyword ? "&content=" + keyword : ""}`
            );
          }}
          defaultValue={currentViewCount}
          min={10}
          max={20}
          step={5}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Paper>
      <IconButton
        onClick={() =>
          sliderCard.open ? sliderCard.onClose() : sliderCard.onOpen()
        }>
        <Typography variant="caption">{currentViewCount}개로 보기</Typography>
      </IconButton>
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </Toolbar>
  );
}
