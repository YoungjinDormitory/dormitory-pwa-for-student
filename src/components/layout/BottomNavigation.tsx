import useTab from "@hooks/useTab";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import bottomNavMap from "@utils/bottomNavMapData.json";
import { Suspense, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import iconLoader from "../icon/helper";

/**
 *
 * @description 모바일 화면에서만 보이는 BottomTabNav 컴포넌트입니다.
 */
function AppNav() {
  const tabProps = useTab(0);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    bottomNavMap.forEach((el, index) => {
      if (location.pathname.startsWith(el.to)) {
        tabProps.onChange(null, index);
      }
    });
  }, [location.pathname]);

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
        {bottomNavMap.map((el, idx) => {
          const { label, to, icon } = el;
          const Icon = iconLoader(icon);
          return (
            <BottomNavigationAction
              key={idx}
              label={label}
              onClick={() => {
                navigate(to);
              }}
              icon={
                <Suspense>
                  <Icon />
                </Suspense>
              }
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}

export default AppNav;
