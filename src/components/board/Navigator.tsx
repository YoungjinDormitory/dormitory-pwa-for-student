import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import boardMapData from "@data/boardMapData.json";

export default function Navigator() {
  const navigate = useNavigate();
  return (
    <>
      <Grid item xs={12} p={2}>
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
      </Grid>
    </>
  );
}
