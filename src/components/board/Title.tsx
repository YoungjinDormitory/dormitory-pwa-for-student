import { Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import boardMapData from "@data/boardMapData.json";
interface Props {
  path: string;
}

export default function Title({ path }: Props) {
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    boardMapData.forEach((el) => {
      if (el.to === path) {
        setTitle(el.title);
      }
    });
  }, [path]);
  return (
    <Grid xs={12} item>
      <Typography variant="h6" sx={{ p: 2, pb: 1, fontWeight: 700 }}>
        {title}
      </Typography>
      <Divider
        sx={{
          width: "10%",
          border: 6,
          borderColor: "#dee2e6",
        }}
      />
    </Grid>
  );
}
