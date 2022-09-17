import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import menuMap from "@utils/menuMapData.json";
import MenuCreator from "./MenuCreator";

function Header() {
  const navigate = useNavigate();
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
              {/* <IconButton
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}>
                <Avatar src="asset/avatar.png"></Avatar>
                <Typography sx={{ ml: 3, fontSize: 12 }}>
                  어서오세요 익명님!
                </Typography>
              </IconButton> */}
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                color="primary">
                로그인
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Header;
