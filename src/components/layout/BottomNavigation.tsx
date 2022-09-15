import { RestoreOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

function AppNav() {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", sm: "none" },
      }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          position: "static",
          bottom: 0,
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Recents" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="Favorites" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="Nearby" icon={<RestoreOutlined />} />
      </BottomNavigation>
    </Paper>
  );
}

export default AppNav;
