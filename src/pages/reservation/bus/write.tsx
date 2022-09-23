import RadioModal from "@common/RadioModal";
import useInput from "@hooks/useInput";
import useModal from "@hooks/useModal";
import useModalContext from "@hooks/useModalContext";
import useToggleButton from "@hooks/useToggleButton";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import {
  Box,
  Button,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import Reservation from "../../../components/reservation";

function Write() {
  // modal control 변수
  const { onOpen: openStartModal, ...startModalProps } = useModal();
  const { onOpen: openEndModal, ...endModalProps } = useModal();

  // 날짜 state
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

  const time = useToggleButton("");

  console.log(time);

  return (
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
          <Button sx={{ flex: 1 }}>somthing</Button>
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
                source={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></RadioModal.List>
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
          <Button sx={{ flex: 1 }} onClick={openEndModal}>
            {end.value}
          </Button>
          {/* 모달 */}
          <ERadioModalProvider value={endValue}>
            <RadioModal {...endModalProps} ctx={endCtx} title="도착지">
              <RadioModal.List
                ctx={endCtx}
                source={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></RadioModal.List>
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
            {["09:40", "11:40", "14:00", "16:20", "18:00"].map((el, idx) => (
              <ToggleButton key={idx} value={el}>
                {el}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Grid>
      <Grid p={2}>
        <Button variant="contained" fullWidth>
          확인
        </Button>
      </Grid>
    </Reservation>
  );
}

export default Write;
