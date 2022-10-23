import RadioModal from "@common/RadioModal";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  useTimePicker,
  useToggleButton,
  useModal,
  useInput,
  useModalContext,
  useQueryOption,
} from "@hooks/index";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Reservation from "../../../components/reservation";
import { useEffect, useState } from "react";
import request from "../../../utils/service/request";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { mCreateBus } from "../../../utils/query/mutation/reservation";
import { useNavigate } from "react-router-dom";

function Write() {
  const [busInfo, setBusInfo] = useState<any>();
  const [busTime, setBusTime] = useState<Array<string>>([]);
  const [endBusStop, setEndBusStop] = useState<Array<string>>([]);

  // modal control 변수
  const { onOpen: openStartModal, ...startModalProps } = useModal();
  const { onOpen: openEndModal, ...endModalProps } = useModal();

  // submit할 변수들
  const date = useTimePicker();
  const direction = useToggleButton("");
  const time = useToggleButton("");
  const start = useInput("");
  const end = useInput("");

  // 시작지 모달 제어 hook
  const {
    Provider: SRadioModalProvider,
    ctx: startCtx,
    ...startValue
  } = useModalContext(start.onChange);

  // 도착지 모달 제어 hook
  const {
    Provider: ERadioModalProvider,
    ctx: endCtx,
    ...endValue
  } = useModalContext(end.onChange);

  const canClickEnd = () => {
    return (
      start.value &&
      direction.value != undefined &&
      date.value != undefined &&
      time.value
    );
  };

  const navigate = useNavigate();
  const { option, token } = useQueryOption();
  const { mutate: submit } = useMutation(["createBusRequest"], mCreateBus, {
    ...option,
    onSuccess: () => {
      navigate("/reservation/bus/lookup");
    },
  });

  // 버스 예약관련 정보 불러오기
  useEffect(() => {
    request.get(`/businfo`).then((res) => setBusInfo(res.data));
  }, []);

  // time toggle button 출력
  useEffect(() => {
    if (
      start.value &&
      direction.value != undefined &&
      date.value != undefined
    ) {
      end.onChange("");
      const day = dayjs(date.value).day();
      const dayType = [0, 6].includes(day) ? 1 : 0;

      const busTimeArr = busInfo
        ?.filter(
          (el: any) =>
            start.value === el.bus_stop &&
            direction.value == el.type &&
            dayType == el.bus_date
        )
        .map((el: any) => el.bus_time);
      setBusTime(busTimeArr);
    }
  }, [start.value, direction.value, date.value]);

  // 도착지 설정
  useEffect(() => {
    const day = dayjs(date.value).day();
    const dayType = [0, 6].includes(day) ? 1 : 0;

    if (
      start.value &&
      direction.value != undefined &&
      date.value != undefined &&
      time.value
    ) {
      const times = busInfo.filter((el: any) => {
        return (
          start.value === el.bus_stop &&
          direction.value == el.type &&
          time.value == el.bus_time
        );
      })[0].bus_times;
      console.log(times);
      setEndBusStop(() => {
        return busInfo
          .filter((el: any) => {
            return (
              direction.value == el.type &&
              dayType == el.bus_date &&
              dayjs(el.bus_time, "hh:mm:ss").isAfter(
                dayjs(time.value, "hh:mm:ss")
              ) &&
              times === el.bus_times
            );
          })
          .map((el: any) => el.bus_stop);
      });
    }
  }, [time.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Reservation>
        {/* Title */}
        <Reservation.Title title="버스 신청  " />
        <Grid xs={12} p={2} item>
          <Typography
            variant="subtitle2"
            component={"div"}
            sx={{ fontWeight: "bold" }}
            textAlign={"center"}>
            탑승일
          </Typography>
          <Box display={"flex"}>
            <DatePicker
              {...date}
              minDate={dayjs().add(1, "day")}
              renderInput={(params) => (
                <TextField {...params} sx={{ mr: 2, flex: 1 }} />
              )}
            />
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Divider />
        </Grid>
        <Grid xs={12} p={2} item>
          <Typography
            variant="subtitle2"
            component={"div"}
            sx={{ fontWeight: "bold" }}
            textAlign={"center"}>
            방면
          </Typography>
          <Box display={"flex"}>
            <ToggleButtonGroup
              exclusive
              {...direction}
              sx={{ mt: 2, m: "auto" }}>
              {[0, 1].map((el, idx) => (
                <ToggleButton key={idx} value={el}>
                  {el === 0
                    ? "복현캠퍼스 -> 영어마을"
                    : "영어마을 -> 복현캠퍼스"}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Grid>

        <Grid xs={12} item>
          <Divider />
        </Grid>
        <Grid
          xs={12}
          p={2}
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          item>
          {/* 출발지 버튼 상자 */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"40%"}
            height={100}
            textAlign={"center"}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              출발지
            </Typography>
            {/* 모달 핸들러 */}
            <Button sx={{ flex: 1 }} onClick={openStartModal}>
              {start.value}
            </Button>
            {/* 모달 */}
            <SRadioModalProvider value={startValue}>
              <RadioModal {...startModalProps} ctx={startCtx} title="출발지">
                <RadioModal.List
                  ctx={startCtx}
                  source={[
                    ...new Set(busInfo?.map((el: any) => el.bus_stop)),
                  ]}></RadioModal.List>
              </RadioModal>
            </SRadioModalProvider>
          </Box>
          {/* 중간 화살표 */}
          <ForwardOutlinedIcon color="primary" />
          {/* 도착지 버튼 상자 */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"40%"}
            height={100}
            textAlign={"center"}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              도착지
            </Typography>
            {/* 모달 핸들러 */}
            <Button
              sx={{ flex: 1 }}
              onClick={() => {
                if (canClickEnd()) {
                  openEndModal();
                } else {
                  alert("다른 모든 값들을 먼저 입력해주세요");
                }
              }}>
              {end.value}
            </Button>
            {/* 모달 */}
            <ERadioModalProvider value={endValue}>
              <RadioModal {...endModalProps} ctx={endCtx} title="도착지">
                <RadioModal.List
                  ctx={endCtx}
                  source={[...new Set(endBusStop)]}></RadioModal.List>
              </RadioModal>
            </ERadioModalProvider>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Divider />
        </Grid>
        <Grid xs={12} p={2} item>
          <Typography
            variant="subtitle2"
            component={"div"}
            sx={{ fontWeight: "bold" }}
            textAlign={"center"}>
            시간 선택
          </Typography>
          <Box width={"100%"} textAlign={"center"}>
            <ToggleButtonGroup exclusive {...time} sx={{ mt: 2 }}>
              {busTime &&
                [...new Set(busTime)].map((el: any, idx: number) => (
                  <ToggleButton key={String(idx)} value={el}>
                    <Typography variant="caption">{el}</Typography>
                  </ToggleButton>
                ))}
            </ToggleButtonGroup>
          </Box>
        </Grid>
        <Grid xs={12} p={2} item>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              if (end.value && canClickEnd()) {
                token &&
                  submit({
                    bus_date: date.value!.toDate(),
                    bus_stop: start.value,
                    bus_time: time.value,
                    bus_way: direction.value,
                    token,
                  });
              }
            }}>
            확인
          </Button>
        </Grid>
      </Reservation>
    </LocalizationProvider>
  );
}

export default Write;
