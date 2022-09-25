import { Box, Button, Grid, OutlinedInput, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LocalFireDepartmentOutlinedIcon } from "../../../components/icon";
import SubdirectoryArrowRightOutlinedIcon from "@mui/icons-material/SubdirectoryArrowRightOutlined";
function Detail() {
  return (
    <>
      <Grid maxWidth={"md"} margin={"auto"} container>
        <Grid item xs={12} mt={5} p={2}>
          <Typography variant="h6">제목</Typography>
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
            <Typography mr="10px">작성자 </Typography>
            <Typography mr="10px">{dayjs().format("DD/MM/YYYY")}</Typography>
            <Typography>댓글:0개</Typography>
          </Box>
          <Box display="flex" letterSpacing={1}>
            <Typography mr="10px">삭제</Typography>
            <Typography mr="10px">수정</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} p={2}>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            deserunt omnis dolorum voluptate saepe dignissimos voluptas illum ex
            ratione nobis totam dicta magnam quasi sit qui laudantium ut. Modi,
            ipsam?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloribus, deserunt omnis dolorum voluptate saepe dignissimos
            voluptas illum ex ratione nobis totam dicta magnam quasi sit qui
            laudantium ut. Modi, ipsam?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Doloribus, deserunt omnis dolorum voluptate saepe
            dignissimos voluptas illum ex ratione nobis totam dicta magnam quasi
            sit qui laudantium ut. Modi, ipsam?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloribus, deserunt omnis dolorum
            voluptate saepe dignissimos voluptas illum ex ratione nobis totam
            dicta magnam quasi sit qui laudantium ut. Modi, ipsam?
          </Typography>
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
              <Typography variant="caption">1000</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} p={2}>
          <Typography>댓글</Typography>
          <Box display="flex">
            <OutlinedInput
              multiline
              fullWidth
              rows={3}
              placeholder="내용을 입력하세요..."></OutlinedInput>
            <Button
              variant="contained"
              color="disable"
              sx={{ boxShadow: "none" }}>
              제출
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} p={2}>
          <Box display="flex">
            {/* <SubdirectoryArrowRightOutlinedIcon /> */}
            <Box>
              <Box display="flex" justifyContent={"space-between"}>
                <Box display="flex">
                  <Typography mr="5px">작성자</Typography>
                  <Typography>작성일</Typography>
                </Box>
                <Box display="flex">
                  <Typography>수정</Typography>
                  <Typography ml="5px   ">삭제</Typography>
                </Box>
              </Box>
              <Box p={2}>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  obcaecati quidem recusandae, at non accusantium, ex dolorem ab
                  molestiae rem incidunt expedita in! Corrupti quae minima fugit
                  perspiciatis nobis blanditiis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
