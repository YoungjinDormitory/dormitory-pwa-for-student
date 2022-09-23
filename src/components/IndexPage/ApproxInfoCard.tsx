import { Box, Card, Tab, Tabs } from "@mui/material";
import { lazy, Suspense } from "react";

import useTab from "@hooks/useTab";
import CommunityTab from "./ApproxInfo/CommunityTab";
import NoticeTab from "./ApproxInfo/NoticeTab";

function ApproxInfoCard() {
  const tabProps = useTab(0);

  const ReservationTab = lazy(() => import("./ApproxInfo/ReservationTab"));

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
      <Suspense fallback="hi">
        {tabProps.value === 0 && <ReservationTab />}
        {tabProps.value === 1 && <NoticeTab />}
        {tabProps.value === 2 && <CommunityTab />}
      </Suspense>
    </Card>
  );
}

export default ApproxInfoCard;
