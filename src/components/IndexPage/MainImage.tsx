import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SchoolImg from "/asset/school2.jfif";

function MainImage() {
  return (
    <ImageBox
      sx={{
        display: { xs: "none", sm: "block" },
      }}>
      <Grid
        container
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}>
        <Grid md={8} item>
          <TextBox>
            <Typography
              gutterBottom
              color={"white"}
              variant="h3"
              sx={{
                fontWeight: "700",
              }}>
              대학을 넘어
            </Typography>
            <Typography
              gutterBottom
              color={"white"}
              variant="h3"
              sx={{
                fontWeight: "700",
              }}>
              한국을 넘어
            </Typography>
            <Typography
              gutterBottom
              color={"white"}
              variant="h3"
              sx={{
                fontWeight: "700",
              }}>
              이제 세계로
            </Typography>
            <Typography
              gutterBottom
              color={"white"}
              variant="h3"
              sx={{
                fontWeight: "700",
              }}>
              영진이 가면 길이 됩니다
            </Typography>
          </TextBox>
        </Grid>
        <Grid md={4} item>
          <TextBox>
            <Typography
              gutterBottom
              color={"white"}
              variant="h2"
              sx={{
                fontWeight: "700",
              }}>
              글로벌 영진 !
            </Typography>
          </TextBox>
        </Grid>
      </Grid>
    </ImageBox>
  );
}

export default MainImage;

const ImageBox = styled(Box)`
  width: 100%;
  min-height: 760px;
  background-image: url(${SchoolImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const TextBox = styled("div")`
  height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
