import { useModal, useQueryOption } from "@hooks/index";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useMutation, useQueries } from "@tanstack/react-query";
import {
  getAnnonymousDetail,
  getAnnonymousImage,
} from "@utils/query/query/board";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import Comments from "../../../components/board/Comments";

import DeleteModal from "../../../components/common/DeleteModal";
import { LocalFireDepartmentOutlinedIcon } from "../../../components/icon";
import { mDeleteBulletin } from "../../../utils/query/mutation/board";

// 게시판 상세보기 페이지
function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const deleteModal = useModal();
  const { option, token } = useQueryOption();

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

  const moveToUpdate = () => {
    navigate("/board/annonymous/update", {
      state: { detail: detail?.data, image: image?.data },
    });
  };

  const { mutate: deleteBulletinItem } = useMutation(
    ["deleteBulletinItem"],
    mDeleteBulletin,
    {
      ...option,
      onSuccess: () => navigate(-1),
    }
  );

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
          <Box display="flex" letterSpacing={1}>
            <IconButton onClick={deleteModal.onOpen}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <IconButton onClick={moveToUpdate}>
              <CreateOutlinedIcon />
            </IconButton>
          </Box>
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
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems="center"
              p={1}
              border={1}
              borderColor="gainsboro">
              <LocalFireDepartmentOutlinedIcon></LocalFireDepartmentOutlinedIcon>
              <Typography variant="caption">{detail?.data.hot}</Typography>
            </Box>
          </Box>
        </Grid>
        <Comments bulletinId={detail?.data.bulletin_id} />
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
