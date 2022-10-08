import { Box, Button, Modal, Typography } from "@mui/material";

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  submit: () => void;
}

/**
 *
 * @description 삭제하기위한 모달 컴포넌트 입니다.
 */
export default function DeleteModal({ submit, ...modalController }: Props) {
  return (
    <Modal {...modalController}>
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
              submit();
              modalController.onClose();
            }}>
            삭제
          </Button>
          <Button color="secondary" onClick={modalController.onClose}>
            취소
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
