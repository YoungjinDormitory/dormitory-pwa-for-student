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
        <BottomNavigationAction label="메인" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="관리" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="게시판" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="설정" icon={<RestoreOutlined />} />
      </BottomNavigation>
    </Paper>
  );
}

export default AppNav;
