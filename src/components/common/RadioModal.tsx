import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { Context, useContext } from "react";

import type { IModalContext } from "../../types/context.interface";
import RadioList from "./RadioList";

import type { IProps } from "../../types/props.interface";
interface Props extends IProps {
  open: boolean;
  onClose: () => void;
  title: string;
  ctx?: Context<IModalContext | null>;
}

/**
 * @description 라디오 리스트가 주 컨텐츠인 모달을 쓸때 이용하는
 */
export default function RadioModal({
  title,
  children,
  ctx,
  open,
  onClose,
}: Props) {
  const v = ctx && useContext(ctx);

  const submit = () => {
    v && v.submit();
    onClose();
  };

  const close = () => {
    v && v.onChange("");
    onClose();
  };

  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
        }}>
        <Typography variant="h6" p={2}>
          {title}
        </Typography>
        <Divider></Divider>
        {children}
        <Box display="flex" justifyContent={"end"}>
          <Button onClick={submit} color="primary">
            확인
          </Button>
          <Button onClick={onClose} color="error">
            취소
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

/**
 * @description 라디오 버튼으로 구성된 리스트 입니다. RadioModal 의 구성요소로도 쓰임
 */
RadioModal.List = RadioList;
