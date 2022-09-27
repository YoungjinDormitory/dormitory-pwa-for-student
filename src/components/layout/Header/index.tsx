import menuMap from "@data/menuMapData.json";
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

import useCheckUser from "../../../hooks/useCheckUser";
import MenuCreator from "./MenuCreator";

/**
 *
 * @description DefaultLayout의 Header입니다.
 */
function Header() {
  const navigate = useNavigate();
  const { data, isLoading } = useCheckUser();

  console.log(data, isLoading);
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
                <IconButton
                  sx={{
                    display: {
                      sm: "flex",
                    },
                  }}>
                  <Avatar src="asset/avatar.png"></Avatar>
                  <Typography sx={{ ml: 3, fontSize: 12 }}>
                    {data.data.std_name}
                  </Typography>
                </IconButton>
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
