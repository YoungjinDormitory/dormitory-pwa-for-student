import useTab from "@hooks/useTab";
import { Box, Card, Tab, Tabs } from "@mui/material";
import { lazy, Suspense, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuthContext } from "../../hooks";

function ApproxInfoCard() {
  const tabProps = useTab(0);
  const { ctx } = useAuthContext();
  const authInfo = useContext(ctx);

  const ReservationTab = lazy(() => import("./ApproxInfo/ReservationTab"));
  const NoticeTab = lazy(() => import("./ApproxInfo/NoticeTab"));
  const CommunityTab = lazy(() => import("./ApproxInfo/CommunityTab"));
  return (
    <Card
      sx={{
        m: "10px",
      }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs indicatorColor="primary" variant="fullWidth" {...tabProps}>
          <Tab label="최근 예약" />
          <Tab label="공지사항" />
          <Tab label="뜨는 글들" />
        </Tabs>
      </Box>
      <Suspense fallback={<CircularProgress />}>
        {tabProps.value === 0 && <ReservationTab />}
        {tabProps.value === 1 && <NoticeTab />}
        {tabProps.value === 2 && <CommunityTab />}
      </Suspense>
    </Card>
  );
}

export default ApproxInfoCard;
