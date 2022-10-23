import menuMap from "@data/menuMapData.json";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../common/CognitoAuthorityChecker";
import MenuCreator from "./MenuCreator";

/**
 *
 * @description DefaultLayout의 Header입니다.
 */
function Header() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const { getUserData, logout } = useContext(AuthContext);

  useEffect(() => {
    getUserData().then((data: any) => {
      const nameObj = data.UserAttributes.filter(
        (el: any) => el.Name === "name"
      )[0];
      setName(nameObj.Value);
    });
  }, []);

  return (
    <AppBar color="transparent" position="static" elevation={3}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            xs={5}
            md={3}
            sx={{
              cursor: "pointer",
            }}
            item>
            <img
              src="asset/logo.png"
              onClick={() => {
                navigate("/");
              }}
              height={64}
              alt="logo"></img>
          </Grid>
          <Grid
            xs={0}
            md={5}
            item
            display={{
              xs: "none",
              sm: "block",
            }}>
            {menuMap.map((el, idx) => (
              <MenuCreator key={idx} sourceMap={el} />
            ))}
          </Grid>
          <Grid xs={2} item></Grid>
          <Grid
            xs={5}
            md={2}
            item
            sx={{
              m: "auto",
            }}>
            <Box
              sx={{
                textAlign: "end",
              }}>
              {name && (
                <Box display="flex" justifyContent={"end"}>
                  <IconButton>
                    <Avatar src="asset/cloud.ico"></Avatar>
                  </IconButton>
                  <Typography
                    variant="caption"
                    sx={{ ml: 3, fontSize: 12, my: "auto" }}>
                    {name}
                  </Typography>
                  <IconButton onClick={logout} color="error">
                    <PowerSettingsNewIcon />
                  </IconButton>
                </Box>
              )}
              {!name && (
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  color="primary">
                  로그인
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Header;
