import boardMapData from "@data/boardMapData.json";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navigator() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        item
        xs={12}
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Box>
          {boardMapData.map((el, idx) => {
            return (
              <Button
                key={idx}
                onClick={() => navigate(el.to)}
                variant={location.pathname === el.to ? "contained" : "outlined"}
                sx={{ mr: 1 }}>
                {el.title}
              </Button>
            );
          })}
        </Box>
        {location.pathname != "/board/notice" && (
          <IconButton
            onClick={() => navigate("/board/annonymous/write")}
            color="primary"
            sx={{
              border: 1,
              borderRadius: 2,
            }}>
            <CreateOutlinedIcon />
          </IconButton>
        )}
      </Grid>
    </>
  );
}
