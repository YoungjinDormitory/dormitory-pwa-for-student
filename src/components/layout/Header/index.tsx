import menuMap from "@data/menuMapData.json";
import useCheckUser from "@hooks/useCheckUser";
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
import { useNavigate } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import MenuCreator from "./MenuCreator";
import { useMutation } from "@tanstack/react-query";
import { mLogout } from "../../../utils/query/mutation/user";

/**
 *
 * @description DefaultLayout의 Header입니다.
 */
function Header() {
  const navigate = useNavigate();
  const { data } = useCheckUser();
  const { mutate: logout } = useMutation(["userLogour"], mLogout, {
    onSuccess: () => navigate(0),
  });

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
              {data?.data && (
                <Box display="flex" justifyContent={"end"}>
                  <Avatar src="asset/avatar.png"></Avatar>
                  <Typography
                    variant="caption"
                    sx={{ ml: 3, fontSize: 12, my: "auto" }}>
                    {data.data.std_name}
                  </Typography>
                  <IconButton color="error">
                    <PowerSettingsNewIcon
                      onClick={() => {
                        logout();
                      }}
                    />
                  </IconButton>
                </Box>
              )}
              {!data?.data && (
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
