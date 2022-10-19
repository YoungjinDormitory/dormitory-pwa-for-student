import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { getNotice } from "../../../utils/query/query/board";

function NoticeTab() {
  const { data } = useQuery(["getNotice", "1", "2"], getNotice, {
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();
  return (
    <>
      {data?.data.map((el: any) => (
        <Box
          key={el.notice_id}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/board/notice/detail?id=" + el.notice_id);
          }}>
          <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{ fontWeight: 700 }}>
                [공지]{el.title}
              </Typography>
              <Typography sx={{ textAlign: "end" }} variant="subtitle2">
                날짜 : {dayjs(el.create_date).format("YYYY-MM-DD")}
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                {el.content}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default NoticeTab;
