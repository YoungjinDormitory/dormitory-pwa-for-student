import {
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";

interface Props {
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  validator?: () => boolean;
}

/**
 * @description 패스워드를 다루는 input 컴포넌트 입니다
 */

export default function PasswordOutlinedInput({
  label = "패스워드",
  value,
  onChange,
  validator,
}: Props) {
  const props = { label, value, onChange };
  const [passwordType, setPasswordType] = useState<"text" | "password">("text");

  const changeType = () => {
    setPasswordType(() => (passwordType === "text" ? "password" : "text"));
  };
  return (
    <FormControl
      fullWidth
      sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
      <InputLabel error={validator ? !validator() : undefined}>
        {props.label}
      </InputLabel>
      <OutlinedInput
        {...props}
        error={validator ? !validator() : undefined}
        type={passwordType}
        endAdornment={
          /* 패스워드 type 상태 표시 아이콘 */
          <IconButton onClick={changeType}>
            {passwordType === "password" && <VisibilityOutlinedIcon />}
            {passwordType === "text" && <VisibilityOffOutlinedIcon />}
          </IconButton>
        }
        fullWidth
      />
      {validator && !validator() && (
        <Typography variant="caption" color="error">
          비밀번호를 확인해 주세요
        </Typography>
      )}
    </FormControl>
  );
}
