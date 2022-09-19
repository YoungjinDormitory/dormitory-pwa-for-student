import { Divider, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
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
