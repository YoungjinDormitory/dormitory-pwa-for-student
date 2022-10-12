import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import { getNotice } from "../../../utils/query/query/board";

function NoticeTab() {
  const { data } = useQuery(["getNotice", "1", "2"], getNotice, {
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <>
      {data?.data.map((el: any) => (
        <Box>
          <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{ fontWeight: 700 }}>
                [공지]{el.title}
              </Typography>
              <Typography sx={{ textAlign: "end" }} variant="subtitle2">
                날짜 : {el.create_date}
              </Typography>
              <Typography>{el.content}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default NoticeTab;
