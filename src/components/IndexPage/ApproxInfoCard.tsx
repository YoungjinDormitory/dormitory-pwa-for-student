import { Box, Card, Tab, Tabs } from "@mui/material";
import { lazy, useState, Suspense } from "react";
import CommunityTab from "./ApproxInfo/CommunityTab";
import NoticeTab from "./ApproxInfo/NoticeTab";

function ApproxInfoCard() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ReservationTab = lazy(() => import("./ApproxInfo/ReservationTab"));

  return (
    <Card
      sx={{
        m: "10px",
      }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          indicatorColor="primary"
          variant="fullWidth"
          value={value}
          onChange={handleChange}>
          <Tab label="최근 예약" />
          <Tab label="공지사항" />
          <Tab label="뜨는 글들" />
        </Tabs>
      </Box>
      <Suspense fallback="hi">
        {value === 0 && <ReservationTab />}
        {value === 1 && <NoticeTab />}
        {value === 2 && <CommunityTab />}
      </Suspense>
    </Card>
  );
}

export default ApproxInfoCard;
