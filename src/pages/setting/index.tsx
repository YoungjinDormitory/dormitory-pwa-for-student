import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/common/CognitoAuthorityChecker";
import { changeUserRoom } from "../../utils/query/aws/user";
import SettingCard from "../../components/common/card/SettingCard";
import ModalContainer from "../../components/common/ModalContainer";
import { useModal, useModalContext } from "../../hooks";

function CloudIcon() {
  return <img src="asset/cloud.ico" width={24} height={24}></img>;
}

function Setting() {
  const [name, setName] = useState("");
  const [currentRoom, setCurrentRoom] = useState();
  const CRModal = useModal();
  const {
    Provider: CRProvider,
    ctx,
    ...value
  } = useModalContext(changeUserRoom);

  const { getUserData, logout } = useContext(AuthContext);

  useEffect(() => {
    getUserData().then((data: any) => {
      const nameObj = data.UserAttributes.filter(
        (el: any) => el.Name === "name"
      );
      const roomNumObj = data.UserAttributes.filter(
        (el: any) => el.Name === "custom:room_num"
      );
      setCurrentRoom(roomNumObj[0].Value);
      setName(nameObj[0].Value);
    });
  }, []);

  return (
    <>
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
          {!name && (
            <Box display="flex" p={2} m="auto">
              <Typography>로그인 후 이용해 주세요.</Typography>
            </Box>
          )}
          {name && (
            <Box display="flex" p={2}>
              <Box textAlign={"center"}>
                <IconButton>
                  <img src="asset/avatar.png" width={40}></img>
                </IconButton>

                <Typography>{name}</Typography>
              </Box>
              <Box ml={2} my={"auto"}>
                <Box display="flex">
                  <Typography>호실 : </Typography>
                  <Typography>{currentRoom}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
        {name && (
          <Grid item xs={12} p={2} display="flex" flexWrap="wrap">
            <SettingCard
              Icon={DoorBackOutlinedIcon}
              text={"방 번호 변경"}
              action={CRModal.onOpen}
            />
            <SettingCard
              Icon={CloudIcon}
              text={"클라우드 이동"}
              action={() => {
                window.open(import.meta.env.VITE_NAS_CLOUD_LINK);
              }}
            />
            <SettingCard
              Icon={PowerSettingsNewIcon}
              text={"로그아웃"}
              action={logout}
              color="red"
            />
          </Grid>
        )}
      </Grid>
      <CRProvider value={value}>
        <ModalContainer ctx={ctx} {...CRModal} title={"방 번호 변경"}>
          <Box
            textAlign="center"
            p={2}
            display={"flex"}
            flexDirection={"column"}>
            <TextField
              onChange={(e) => value.onChange(e.target.value)}
              value={value.value}
              inputProps={{ maxLength: 4 }}
            />
            <Typography variant="caption" color="red">
              정확한 호수를 입력하지 않으면 서비스 제공에 불이익이 갈 수
              있습니다.
            </Typography>
          </Box>
        </ModalContainer>
      </CRProvider>
    </>
  );
}

export default Setting;
