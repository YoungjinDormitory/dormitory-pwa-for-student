import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { reloadOutingItem } from "../../../client";
import useModal from "../../../hooks/useModal";
import useQueryOption from "../../../hooks/useQueryOption";
import { IOutItem } from "../../../types/reservation.interface";
import { mDeleteOut } from "../../../utils/query/mutation/reservation";
import DeleteModal from "../DeleteModal";

function OutCard(props: IOutItem) {
  const deleteModal = useModal();

  const navigate = useNavigate();
  const { option, token } = useQueryOption();

  const { mutate: deleteOutItem } = useMutation(["deleteAs"], mDeleteOut, {
    ...option,
    onSuccess() {
      reloadOutingItem();
    },
  });

  const moveToUpdate = () => {
    navigate("/reservation/outing/update", {
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
            외출 외박
          </Typography>
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <IconButton onClick={deleteModal.onOpen}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <IconButton onClick={moveToUpdate}>
              <CreateOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography>
          {"출발 일 :" + dayjs(props.start_date).format("YYYY-MM-DD")}
        </Typography>
        <Typography>
          {"도착 예정일 :" + dayjs(props.end_date).format("YYYY-MM-DD")}
        </Typography>
      </CardContent>
      <DeleteModal
        {...deleteModal}
        submit={() =>
          deleteOutItem({
            stayout_id: props.stayout_id,
            token,
          })
        }
      />
    </Card>
  );
}

export default OutCard;
