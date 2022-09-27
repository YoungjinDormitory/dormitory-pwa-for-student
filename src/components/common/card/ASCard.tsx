import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { reloadAsItem } from "../../../client";

import useModal from "../../../hooks/useModal";
import useQueryOption from "../../../hooks/useQueryOption";

import type { IAsItem } from "../../../types/reservation.interface";
import { mDeleteAs } from "../../../utils/query/mutation/reservation";

interface Props {
  data: IAsItem;
}

function ASCard({ data }: Props) {
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
      state: data,
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
              {!data.repair_date && "진행중"}
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
          날짜 : {dayjs(data.request_date).format("YYYY/MM/DD")}
        </Typography>
        <Typography>제목 : {data.title}</Typography>
        <Typography>설명 : {data.content}</Typography>
      </CardContent>
      <Modal {...deleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
          }}
          borderRadius={2}>
          <Typography p={2} id="modal-modal-title" variant="subtitle1">
            정말 삭제 하실 건가요?
          </Typography>
          <Box p={1}>
            <Button
              color="error"
              onClick={() => {
                deleteAsItem({
                  as_id: data.as_id,
                  token,
                });
                deleteModal.onClose();
              }}>
              삭제
            </Button>
            <Button color="secondary" onClick={deleteModal.onClose}>
              취소
            </Button>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
}

export default ASCard;
