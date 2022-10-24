import useDatePicker from "@hooks/useDatePicker";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useQuery } from "@tanstack/react-query";

import { OutCard } from "../../../components/common/card";
import Reservation from "../../../components/reservation";
import useQueryOption from "../../../hooks/useQueryOption";
import { IOutItem } from "../../../types/reservation.interface";
import { getOutingInfo } from "../../../utils/query/query/reservation";

// 외출/외박 조회페이지
function LookUp() {
  const startDateProps = useDatePicker();
  const endDateProps = useDatePicker(startDateProps);
  const { option, token } = useQueryOption();

  const { data } = useQuery(
    [
      "outingInfo",
      token,
      undefined,
      startDateProps.value?.format("YYYY-MM-DD"),
      endDateProps.value?.format("YYYY-MM-DD"),
    ],
    getOutingInfo,
    option
  );

  return (
    <Reservation>
      <Reservation.Title title="외박/외출 조회" />
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
      {data?.data.map((el: IOutItem, idx: number) => (
        <Grid item xs={12} key={el.stayout_id + idx}>
          <OutCard {...el} />
        </Grid>
      ))}
    </Reservation>
  );
}

export default LookUp;
