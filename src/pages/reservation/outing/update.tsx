import useDatePicker from "@hooks/useDatePicker";
import useQueryOption from "@hooks/useQueryOption";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMutation } from "@tanstack/react-query";
import { mUpdateOut } from "@utils/query/mutation/reservation";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";

function Update() {
  const location = useLocation();

  const startDateParams = useDatePicker(
    undefined,
    dayjs(location.state.start_date)
  );

  const endDateParams = useDatePicker(
    startDateParams,
    dayjs(location.state.end_date)
  );
  const { option, token } = useQueryOption();
  const navigate = useNavigate();

  const { mutate: submit } = useMutation(["updateOut"], mUpdateOut, {
    ...option,
    onSuccess: () => {
      navigate("/reservation/outing/lookup");
    },
  });

  const variables = {
    stayout_id: location.state.stayout_id,
    start_date: startDateParams.value?.format("YYYY-MM-DD")!,
    end_date: endDateParams.value?.format("YYYY-MM-DD")!,
    token,
  };

  // submit 하는 함수

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
          <Button
            variant="contained"
            onClick={() => {
              if (variables.start_date && variables.end_date) {
                submit(variables);
              } else {
                alert("값을 입력해주세요");
              }
            }}
            fullWidth>
            제출
          </Button>
        </Grid>
      </Reservation>
    </LocalizationProvider>
  );
}

export default Update;
