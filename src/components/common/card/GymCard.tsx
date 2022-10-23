import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { reloadGymItem } from "../../../client";
import useModal from "../../../hooks/useModal";
import useQueryOption from "../../../hooks/useQueryOption";
import { IGymItem } from "../../../types/reservation.interface";
import { mDeleteGym } from "../../../utils/query/mutation/reservation";
import DeleteModal from "../DeleteModal";

function GymCard(props: IGymItem) {
  const deleteModal = useModal();

  const navigate = useNavigate();
  const { option, token } = useQueryOption();

  const { mutate: deleteGymItem } = useMutation(["deleteAs"], mDeleteGym, {
    ...option,
    onSuccess() {
      reloadGymItem();
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
            체육관
          </Typography>
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <IconButton onClick={deleteModal.onOpen}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : {dayjs(props.date).format("YYYY-MM-DD")}
        </Typography>
        <Typography>시작 시간 : {props.start_time}</Typography>
        <Typography>종료 예정 시간 : {props.end_time}</Typography>
      </CardContent>
      <DeleteModal
        {...deleteModal}
        submit={() => {
          token &&
            deleteGymItem({
              hlth_id: props.hlth_id,
              token,
            });
        }}
      />
    </Card>
  );
}

export default GymCard;
