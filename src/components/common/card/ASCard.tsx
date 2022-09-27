import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { reloadAsItem } from "../../../client";
import useModal from "../../../hooks/useModal";
import useQueryOption from "../../../hooks/useQueryOption";
import { mDeleteAs } from "../../../utils/query/mutation/reservation";
import DeleteModal from "../DeleteModal";

import type { IAsItem } from "../../../types/reservation.interface";
function ASCard(props: IAsItem) {
  const deleteModal = useModal();

  const { option, token } = useQueryOption();

  const navigate = useNavigate();

  const { mutate: deleteAsItem } = useMutation(["deleteAs"], mDeleteAs, {
    ...option,
    onSuccess() {
      reloadAsItem();
    },
  });

  const moveToUpdate = () => {
    navigate("/reservation/as/update", {
      state: props,
    });
  };

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
            AS예약
          </Typography>
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <Typography variant="body2" color="green">
              {!props.repair_date && "진행중"}
            </Typography>
            <IconButton onClick={deleteModal.onOpen}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <IconButton onClick={moveToUpdate}>
              <CreateOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={{ textAlign: "end" }} variant="subtitle2">
          날짜 : {dayjs(props.request_date).format("YYYY/MM/DD")}
        </Typography>
        <Typography>제목 : {props.title}</Typography>
        <Typography>설명 : {props.content}</Typography>
      </CardContent>
      <DeleteModal
        {...deleteModal}
        submit={() =>
          deleteAsItem({
            as_id: props.as_id,
            token,
          })
        }
      />
    </Card>
  );
}

export default ASCard;
