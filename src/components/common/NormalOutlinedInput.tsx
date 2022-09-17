import {
  FormControl,
  InputBaseComponentProps,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface Props {
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  inputProps?: InputBaseComponentProps | undefined;
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
    </FormControl>
  );
}
