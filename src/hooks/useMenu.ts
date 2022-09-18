import { useState } from "react";

/**
 * @description - MUI의 Menu 컴포넌트를 제어하는 hook 입니다.
 */
export default function useMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, handleOpen, handleClose, open };
}
