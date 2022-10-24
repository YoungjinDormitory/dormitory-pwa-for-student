import { GymCard } from "@common/card";
import useDatePicker from "@hooks/useDatePicker";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useQuery } from "@tanstack/react-query";

import Reservation from "../../../components/reservation";
import useQueryOption from "../../../hooks/useQueryOption";
import { IAsItem, IGymItem } from "../../../types/reservation.interface";
import { getGymInfo } from "../../../utils/query/query/reservation";

// 체육관 조회 페이지
function LookUp() {
  const startDateProps = useDatePicker();
  const endDateProps = useDatePicker(startDateProps);
  const { option, token } = useQueryOption();

  const { data } = useQuery(
    [
      "gymInfo",
      token,
      undefined,
      startDateProps.value?.format("YYYY-MM-DD"),
      endDateProps.value?.format("YYYY-MM-DD"),
    ],
    getGymInfo,
    option
  );

  console.log(data);

  return (
    <Reservation>
      <Reservation.Title title="체육관 조회" />
      <Grid
        xs={12}
        textAlign={"center"}
        sx={{ m: 2 }}
        boxShadow={"0px 2px 0px 1px gainsboro"}
        item>
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...startDateProps}
              renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
            />
            <Typography variant="body2" sx={{ mr: 2 }}>
              to
            </Typography>
            <DatePicker
              {...endDateProps}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      {data?.data.map((el: IGymItem, idx: number) => (
        <Grid item xs={12} key={el.hlth_id + idx}>
          <GymCard {...el} />
        </Grid>
      ))}
    </Reservation>
  );
}

export default LookUp;
