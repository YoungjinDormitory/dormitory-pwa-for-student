import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";

import menuMap from "../../../utils/menuMapData.json";
import MenuCreator from "./MenuCreator";

function Header() {
  return (
    <AppBar color="transparent" position="static" elevation={3}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid xs={5} md={3} item>
            <img src="asset/logo.png" height={64} alt="logo"></img>
          </Grid>
          <Grid
            xs={0}
            md={5}
            item
            display={{
              xs: "none",
              sm: "block",
            }}>
            {menuMap.map((el,idx) => (
              <MenuCreator key={idx} sourceMap={el} />
            ))}
          </Grid>
          <Grid xs={2} item></Grid>
          <Grid xs={5} md={2} item>
            <Box
              sx={{
                height: "100%",
                display: "flex",
              }}>
              <IconButton
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
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Header;
