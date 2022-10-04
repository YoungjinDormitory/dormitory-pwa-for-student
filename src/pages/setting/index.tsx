import { Box, Grid, IconButton, Typography } from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { useCheckUser } from "../../hooks";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { mChangeRoom, mLogout } from "../../utils/query/mutation/user";

function Setting() {
  const { data: user } = useCheckUser();
  const navigate = useNavigate();
  const { mutate: logout } = useMutation(["userLogour"], mLogout, {
    onSuccess: () => navigate(0),
  });

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
        {!user && (
          <Box display="flex" p={2} m="auto">
            <Typography>로그인 후 이용해 주세요.</Typography>
          </Box>
        )}
        {user && (
          <Box display="flex" p={2}>
            <Box textAlign={"center"}>
              <img src="asset/avatar.png" width={40}></img>
              <Typography>{user?.data.std_name}</Typography>
            </Box>
            <Box ml={2} my={"auto"}>
              <Box display="flex">
                <Typography>호실 : </Typography>
                <Typography>{user?.data.room_num}</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Grid>
      {user && (
        <Grid item xs={12} p={2} display="flex" flexWrap="wrap">
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            width={100}
            height={100}
            border={1}
            borderRadius={2}
            m={1}
            borderColor="gainsboro">
            <IconButton
              sx={{ flex: 1, borderRadius: 1 }}
              onClick={() => logout()}>
              <Box textAlign={"center"} color="red">
                <PowerSettingsNewIcon />
                <Typography>로그아웃</Typography>
              </Box>
            </IconButton>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default Setting;
