import useModal from "@hooks/useModal";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import RadioModal from "../../../components/common/RadioModal";
import Reservation from "../../../components/reservation";
import useInput from "../../../hooks/useInput";

function Write() {
  const { onOpen: openStartModal, ...startModalProps } = useModal();
  const { onOpen: openEndModal, ...endModalProps } = useModal();
  const start = useInput("");
  const end = useInput("");
  return (
    <Reservation>
      {/* Title */}
      <Reservation.Title title="버스 신청  " />
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
          textAlign={"center"}
          border={1}
          borderColor={"gainsboro"}>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              출발지
            </Typography>
          </div>
          <Divider />
          {/* 모달 핸들러 */}
          <Button sx={{ flex: 1 }} onClick={openStartModal}>
            {start.value}
          </Button>
          {/* 모달 */}
          <RadioModal {...startModalProps} title="출발지">
            <RadioModal.List
              {...start}
              onClose={startModalProps.onClose}
              source={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></RadioModal.List>
          </RadioModal>
        </Box>
        {/* 중간 화살표 */}
        <ForwardOutlinedIcon color="primary" />
        {/* 도착지 버튼 상자 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"40%"}
          height={100}
          textAlign={"center"}
          border={1}
          borderColor={"gainsboro"}>
          <div>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              도착지
            </Typography>
          </div>
          <Divider />
          {/* 모달 핸들러 */}
          <Button sx={{ flex: 1 }} onClick={openEndModal}>
            {end.value}
          </Button>
          {/* 모달 */}
          <RadioModal {...endModalProps} title="도착지">
            <RadioModal.List
              {...end}
              onClose={endModalProps.onClose}
              source={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></RadioModal.List>
          </RadioModal>
        </Box>
      </Grid>
    </Reservation>
  );
}

export default Write;
