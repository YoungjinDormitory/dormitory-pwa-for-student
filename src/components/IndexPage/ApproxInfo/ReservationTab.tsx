import { BusCard, OutCard, ASCard, GymCard } from "@common/card";
import useTab from "@hooks/useTab";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import useQueryOption from "../../../hooks/useQueryOption";
import {
  IAsItem,
  IGymItem,
  IOutItem,
} from "../../../types/reservation.interface";
import {
  getASInfo,
  getGymInfo,
  getOutingInfo,
} from "../../../utils/query/query/reservation";

function ReservationTab() {
  const tabProps = useTab(0);
  const { option, token } = useQueryOption();

  const { data: AsItem } = useQuery(["asInfo", token, "2"], getASInfo, option);

  const { data: OutItem } = useQuery(
    ["outingInfo", token, "2"],
    getOutingInfo,
    option
  );

  const { data: GymItem } = useQuery(
    ["gymInfo", token, "2"],
    getGymInfo,
    option
  );

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs indicatorColor="primary" {...tabProps}>
          <Tab label="A/S" />
          <Tab label="버스" />
          <Tab label="외출/외박" />
          <Tab label="체육관" />
        </Tabs>
      </Box>
      <Box>
        {tabProps.value === 0 &&
          AsItem?.data.map((el: IAsItem) => (
            <ASCard key={el.as_id} {...el}></ASCard>
          ))}
        {tabProps.value === 1 && <BusCard></BusCard>}
        {tabProps.value === 2 &&
          OutItem?.data.map((el: IOutItem) => (
            <OutCard key={el.stayout_id} {...el}></OutCard>
          ))}
        {tabProps.value === 3 &&
          GymItem?.data.map((el: IGymItem) => (
            <GymCard key={el.hlth_id} {...el}></GymCard>
          ))}
      </Box>
    </>
  );
}

export default ReservationTab;
