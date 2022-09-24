import { Box, Typography } from "@mui/material";
import boardMapData from "@data/boardMapData.json";
import { NavCard } from "../../components/common/card";

function Board() {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderBottomColor: "gainsboro" }}>
        <Typography variant="h6" sx={{ p: "10px", fontWeight: 700 }}>
          게시판
        </Typography>
      </Box>
      {boardMapData.map((props, idx) => {
        return <NavCard key={idx} {...props} />;
      })}
    </>
  );
}

export default Board;
