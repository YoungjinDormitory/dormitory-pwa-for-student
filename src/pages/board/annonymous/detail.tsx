import DeleteModal from "@common/DeleteModal";
import { useCheckUser, useModal, useQueryOption } from "@hooks/index";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useMutation, useQueries } from "@tanstack/react-query";
import {
  mClickHot,
  mDeleteBulletin,
  mViewBulletin,
} from "@utils/query/mutation/board";
import {
  getAnnonymousDetail,
  getAnnonymousImage,
} from "@utils/query/query/board";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { reloadCurrentBulletin } from "../../../client";
import Comments from "../../../components/board/Comments";
import { LocalFireDepartmentOutlinedIcon } from "../../../components/icon";

// 게시판 상세보기 페이지
function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const deleteModal = useModal();
  const { option, token } = useQueryOption();
  const { data } = useCheckUser();

  // 게시판 정보와 이미지 쿼리
  const [{ data: detail }, { data: image }] = useQueries({
    queries: [
      {
        queryKey: ["getAnnonymousDetail", location.state.bulletin_id],
        queryFn: getAnnonymousDetail,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["getAnnonymousImage", location.state.bulletin_id],
        queryFn: getAnnonymousImage,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    ],
  });

  // 업데이트 페이지로 이동
  const moveToUpdate = () => {
    navigate("/board/annonymous/update", {
      state: { detail: detail?.data, image: image?.data },
    });
  };

  // 게시판 삭제 mutation
  const { mutate: deleteBulletinItem } = useMutation(
    ["deleteBulletinItem"],
    mDeleteBulletin,
    {
      ...option,
      onSuccess: () => navigate(-1),
    }
  );

  // 게시판 조회수 올려주는 mutation
  const { mutate: view } = useMutation(["viewBulletin"], mViewBulletin);
  const { mutate: clickHot } = useMutation(["clickHot"], mClickHot, {
    ...option,
    onSuccess: () => reloadCurrentBulletin(),
    onError: () => alert("이전에 한번이상 누르셨습니다."),
  });

  useEffect(() => {
    view({
      bulletin_id: location.state.bulletin_id,
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
            <Typography mr="10px">{detail?.data.std_name} </Typography>
            <Typography mr="10px">{dayjs().format("YYYY-MM-DD")}</Typography>
            <Typography>댓글:0개</Typography>
          </Box>
          {data && data.data.std_id === detail?.data.std_id && (
            <Box display="flex" letterSpacing={1}>
              <IconButton onClick={deleteModal.onOpen}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton onClick={moveToUpdate}>
                <CreateOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
        {image &&
          image.data.map((el: any, idx: string) => {
            return (
              <Grid item xs={12} p={2} key={idx}>
                <img src={el.path}></img>
              </Grid>
            );
          })}
        <Grid item xs={12} p={2}>
          <Typography variant="caption">{detail?.data.content}</Typography>
        </Grid>
        <Grid item xs={12} borderBottom={1} pb={2} borderColor="gainsboro">
          <Box display="flex" alignItems={"center"} justifyContent={"center"}>
            <Box border={1} borderRadius={2} borderColor="gainsboro">
              <IconButton
                onClick={() => {
                  clickHot({
                    bulletin_id: location.state.bulletin_id,
                    token,
                  });
                }}>
                <LocalFireDepartmentOutlinedIcon></LocalFireDepartmentOutlinedIcon>
                <Typography variant="caption">{detail?.data.hot}</Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Comments
          bulletinId={detail?.data.bulletin_id}
          myId={data?.data.std_id}
        />
      </Grid>
      <DeleteModal
        {...deleteModal}
        submit={() =>
          deleteBulletinItem({
            bulletin_id: detail?.data.bulletin_id,
            token,
          })
        }
      />
    </>
  );
}

export default Detail;
