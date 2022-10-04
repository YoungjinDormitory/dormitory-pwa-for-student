import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getHot } from "../../../utils/query/query/board";
import BoardCard from "../../common/card/BoardCard";

function CommunityTab() {
  const navigate = useNavigate();

  const { data } = useQuery(["getHotInfo", "1", "2"], getHot, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <>
      {data?.data.map((el: any) => {
        return <BoardCard {...el} />;
      })}
      <Box p={1} textAlign="center" borderTop={1} borderColor="gainsboro">
        <Typography
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/board/hot");
          }}>
          더 보러가기 {"->"}
        </Typography>
      </Box>
    </>
  );
}

export default CommunityTab;
