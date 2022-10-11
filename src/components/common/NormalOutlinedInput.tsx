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
  return (
    <FormControl
      fullWidth
      sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput {...props} fullWidth />
      {props.value && props.validator && !props.validator() && (
        <Typography variant="caption" color="error">
          {props.hintMessage}
        </Typography>
      )}
    </FormControl>
  );
}
