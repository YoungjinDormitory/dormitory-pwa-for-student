import { Box, Grid, Typography } from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { border } from "@mui/system";
function Setting() {
  return (
    <Grid maxWidth={"md"} margin="auto" container>
      <Grid
        item
        xs={12}
        sx={{ borderBottom: 1, borderBottomColor: "gainsboro" }}
        px={2}>
        <Typography variant="h6" sx={{ p: "10px", fontWeight: 700 }}>
          설정
        </Typography>
      </Grid>
      <Grid item xs={12} borderBottom={1} borderColor="gainsboro">
        <Box display="flex" p={2}>
          <Box>
            <img src="asset/avatar.png" width={40}></img>
            <Typography>이름</Typography>
          </Box>
          <Box ml={2}>
            <Box display="flex">
              <Typography>호실 : </Typography>
              <Typography>702</Typography>
            </Box>
            <Box display="flex">
              <Typography>이메일 : </Typography>
              <Typography>smg20004@g.yjp.ac.kr</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} p={2} display="flex" flexWrap="wrap">
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          width={100}
          height={100}
          border={1}
          borderRadius={2}
          borderColor="gainsboro">
          <Box textAlign={"center"}>
            <ApartmentOutlinedIcon></ApartmentOutlinedIcon>
            <Typography>호실 변경</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Setting;
