import { Box, Grid, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNoticeDetail } from "@utils/query/query/board";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mViewNotice } from "../../../utils/query/mutation/board";

// 게시판 상세보기 페이지
function Detail() {
  const location = useLocation();
  // 게시판 정보와 이미지 쿼리
  const { data: detail } = useQuery({
    queryKey: ["getNotice", location.state.notice_id],
    queryFn: getNoticeDetail,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  // 게시판 조회수 올려주는 mutation
  const { mutate: view } = useMutation(["viewBulletin"], mViewNotice);

  useEffect(() => {
    view({
      notice_id: location.state.notice_id,
    });
  }, []);

  return (
    <>
      <Grid maxWidth={"md"} margin={"auto"} container>
        <Grid item xs={12} mt={5} p={2}>
          <Typography variant="h6">{detail?.data.title}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          pl={2}
          display="flex"
          justifyContent={"space-between"}
          borderBottom={1}
          pb={2}
          borderColor="gainsboro">
          <Box display="flex" letterSpacing={1}>
            <Typography mr="10px">
              {detail?.data.hasOwnProperty("adm_id")
                ? "관리자"
                : detail?.data.std_name}{" "}
            </Typography>
            <Typography mr="10px">{dayjs().format("YYYY-MM-DD")}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          p={2}
          minHeight={400}
          borderBottom={1}
          pb={2}
          borderColor="gainsboro">
          <Typography
            variant="caption"
            sx={{
              wordBreak: "break-all",
            }}>
            {detail?.data.content}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
