import { RestoreOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useTab from "../../hooks/useTab";

function AppNav() {
  const tabProps = useTab(0);
  const navigate = useNavigate();

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
        sx={{
          position: "static",
          bottom: 0,
        }}
        {...tabProps}>
        <BottomNavigationAction
          onClick={() => {
            navigate("/");
          }}
          label="메인"
          icon={<RestoreOutlined />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/reservation");
          }}
          label="관리"
          icon={<RestoreOutlined />}
        />
        <BottomNavigationAction label="게시판" icon={<RestoreOutlined />} />
        <BottomNavigationAction label="설정" icon={<RestoreOutlined />} />
      </BottomNavigation>
    </Paper>
  );
}

export default AppNav;
