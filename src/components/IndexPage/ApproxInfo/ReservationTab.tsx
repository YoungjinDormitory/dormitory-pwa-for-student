import { BusCard, OutCard, ASCard, GymCard } from "@common/card";
import useTab from "@hooks/useTab";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";

function ReservationTab() {
  const tabProps = useTab(0);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs indicatorColor="primary" {...tabProps}>
          <Tab label="A/S" />
          <Tab label="버스" />
          <Tab label="체육관" />
          <Tab label="외출/외박" />
        </Tabs>
      </Box>
      <Box>
        {tabProps.value === 0 && <ASCard></ASCard>}
        {tabProps.value === 1 && <BusCard></BusCard>}
        {tabProps.value === 2 && <OutCard></OutCard>}
        {tabProps.value === 3 && <GymCard></GymCard>}
      </Box>
    </>
  );
}

export default ReservationTab;
