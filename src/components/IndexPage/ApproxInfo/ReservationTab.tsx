import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

import useTab from "../../../hooks/useTab";
import ASCard from "./card/ASCard";
import BusCard from "./card/BusCard";
import GymCard from "./card/GymCard";
import OutCard from "./card/OutCard";

function ReservationTab() {
  const tabProps = useTab(0);
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs indicatorColor="primary" {...tabProps}>
          <Tab label="버스" />
          <Tab label="A/S" />
          <Tab label="외박/외출" />
          <Tab label="체육관" />
        </Tabs>
      </Box>
      <Box>
        <BusCard></BusCard>
        <OutCard></OutCard>
        <ASCard></ASCard>
        <GymCard></GymCard>
      </Box>
    </>
  );
}

export default ReservationTab;
