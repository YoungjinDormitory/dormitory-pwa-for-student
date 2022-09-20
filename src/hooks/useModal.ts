import { useState } from "react";

/**
 * @description MUI의 Modal 컴포넌트에 의존하는 hooks입니다.
 * @return open - 모달의 status, onClose - 모달 닫힘 관리 함수, onOpen - 모달 열림함수
 */
export default function useModal() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { open, onOpen, onClose };
}
