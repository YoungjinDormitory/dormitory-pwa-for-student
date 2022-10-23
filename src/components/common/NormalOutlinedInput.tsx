import {
  FormControl,
  InputBaseComponentProps,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface Props {
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  inputProps?: InputBaseComponentProps | undefined;
  validator?: () => boolean;
  hintMessage?: string | ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
}

/**
 * @content 일반적인 input 컴포넌트 입니다.
 */
export default function NormalOutlinedInput(props: Props) {
  const { validator, hintMessage, ...others } = props;
  return (
    <FormControl
      fullWidth
      sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
      <InputLabel>{others.label}</InputLabel>
      <OutlinedInput {...others} fullWidth />
      {others.value && validator && !validator() && (
        <Typography variant="caption" color="error">
          {hintMessage}
        </Typography>
      )}
    </FormControl>
  );
}
