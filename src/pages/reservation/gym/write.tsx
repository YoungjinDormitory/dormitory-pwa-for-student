import useDatePicker from "@hooks/useDatePicker";
import useTab from "@hooks/useTab";
import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  StaticTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";
import useQueryOption from "../../../hooks/useQueryOption";
import { mCreateGym } from "../../../utils/query/mutation/reservation";

function Write() {
  const date = useDatePicker();

  const tab = useTab(0);

  const startTime = useDatePicker();
  const endTime = useDatePicker(startTime);

  const [spendTime, setSpendTime] = useState({
    h: 0,
    m: 0,
  });

  const timeCompare = () => {
    if (endTime.value && startTime.value) {
      let m = endTime.value?.minute() - startTime.value?.minute();
      let h = endTime.value?.hour() - startTime.value.hour();
      if (m < 0) {
        m = m + 60;
        h -= 1;
      }
      return {
        h,
        m,
      };
    }
    return {
      h: 0,
      m: 0,
    };
  };

  useLayoutEffect(() => {
    if (endTime.value && startTime.value) {
      setSpendTime((prev) => {
        return Object.assign({}, prev, timeCompare());
      });
    }
  }, [startTime.value, endTime.value]);

  const navigate = useNavigate();
  const { option, token } = useQueryOption();
  const { mutate: submit } = useMutation(["createGym"], mCreateGym, {
    ...option,
    onSuccess: () => {
      navigate("/reservation/gym/lookup");
    },
  });

  const variables = {
    date: date.value?.format("YYYY-MM-DD")!,
    start_time: startTime.value?.format("HH:mm")!,
    end_time: endTime.value?.format("HH:mm")!,
    token,
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Reservation>
        <Reservation.Title title={"체육관 신청"} />
        <Grid item xs={12} p={2} sx={{ textAlign: "center" }}>
          <Box boxShadow={"0px 2px 0px 1px gainsboro"} height={100}>
            <Typography variant="subtitle2">신청 날짜</Typography>
            <DatePicker
              {...date}
              minDate={dayjs()}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} p={2} sx={{ textAlign: "center" }}>
          <Box>
            {tab.value === 0 && (
              <StaticTimePicker
                displayStaticWrapperAs="mobile"
                orientation="landscape"
                toolbarTitle="시작 시간"
                {...startTime}
                disableMaskedInput={true}
                minutesStep={5}
                minTime={dayjs("9:30", "HH:MM")}
                maxTime={dayjs("22:00", "HH:MM")}
                ampm={false}
                componentsProps={{
                  actionBar: {
                    actions: [],
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
            {tab.value === 1 && (
              <StaticTimePicker
                displayStaticWrapperAs="mobile"
                orientation="landscape"
                toolbarTitle="끝 시간"
                {...endTime}
                ampm={false}
                minTime={dayjs("10:00", "HH:MM")}
                maxTime={dayjs("22:59", "HH:MM")}
                disableMaskedInput={true}
                minutesStep={5}
                componentsProps={{
                  actionBar: {
                    actions: [],
                  },
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            )}
          </Box>
          <Tabs {...tab}>
            <Tab label="시작" />
            <Tab label="끝" />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={4} p={2} textAlign={"center"}>
          <Typography gutterBottom>시작시간</Typography>
          <Box>{startTime.value?.format("HH:mm")}</Box>
        </Grid>
        <Grid item xs={12} sm={4} p={2} textAlign={"center"}>
          <Typography gutterBottom>종료시간</Typography>
          <Box>{endTime.value?.format("HH:mm")}</Box>
        </Grid>
        <Grid item xs={12} sm={4} p={2} textAlign={"center"}>
          <Typography gutterBottom>소요시간</Typography>
          <Box>
            {spendTime.h} 시간 {spendTime.m}분
          </Box>
        </Grid>
        <Grid item xs={12} p={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              if (
                variables.date &&
                variables.end_time &&
                variables.start_time
              ) {
                token && submit(variables);
              }
            }}>
            제출
          </Button>
        </Grid>
      </Reservation>
    </LocalizationProvider>
  );
}

export default Write;
