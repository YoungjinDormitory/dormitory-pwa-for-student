import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { reloadBusItem } from "../../../client";
import { useModal, useQueryOption } from "../../../hooks";
import { IBusItem } from "../../../types/reservation.interface";
import { mDeleteBus } from "../../../utils/query/mutation/reservation";
import DeleteModal from "../DeleteModal";

function BusCard(data: IBusItem) {
  const deleteModal = useModal();
  const { option, token } = useQueryOption();

  const navigate = useNavigate();

  const { mutate: deleteBusItem } = useMutation(["deleteAs"], mDeleteBus, {
    ...option,
    onSuccess() {
      reloadBusItem();
    },
  });

  return (
    <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
            버스 예약
          </Typography>
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <IconButton onClick={deleteModal.onOpen}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : {dayjs(data.bus_date).format("YYYY-MM-DD")}
        </Typography>
        <Typography>출발지 : {data.bus_stop}</Typography>
        <Typography>
          방향 :
          {data.bus_way === 0
            ? "복현캠퍼스 -> 영어마을"
            : "영어마을 -> 복현캠퍼스"}
        </Typography>

        <Typography>출발시간 : {data.bus_time}</Typography>
      </CardContent>
      <DeleteModal
        {...deleteModal}
        submit={() =>
          deleteBusItem({
            bus_req_id: data.bus_req_id,
            token,
          })
        }
      />
    </Card>
  );
}

export default BusCard;
