import useDatePicker from "@hooks/useDatePicker";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import Reservation from "../../../components/reservation";

function Write() {
  const startDateParams = useDatePicker();
  const endDateParams = useDatePicker(startDateParams);

  // submit 하는 함수
  const submit = () => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Reservation>
        {/* Title */}
        <Reservation.Title title="외출/외박 신청 " />

        <Grid xs={12} md={6} p={2} item sx={{ textAlign: "center" }}>
          <Box boxShadow={"0px 2px 0px 1px gainsboro"} height={100}>
            <Typography variant={"subtitle2"} gutterBottom>
              시작 일자
            </Typography>
            <DatePicker
              minDate={dayjs()}
              {...startDateParams}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
            />
          </Box>
        </Grid>

        <Grid xs={12} md={6} p={2} item sx={{ textAlign: "center" }}>
          <Box boxShadow={"0px 2px 0px 1px gainsboro"} height={100}>
            <Typography variant={"subtitle2"} gutterBottom>
              종료 일자
            </Typography>
            <DatePicker
              minDate={dayjs()}
              {...endDateParams}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
            />
          </Box>
        </Grid>

        <Grid xs={12} p={2} item>
          <Button variant="contained" fullWidth>
            제출
          </Button>
        </Grid>
      </Reservation>
    </LocalizationProvider>
  );
}

export default Write;
