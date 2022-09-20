import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

interface Props {
  source: Array<any>;
  onChange: (newValue: string) => void;
  value: string;
  onClose?: () => void;
}

/**
 * @description 라디오 버튼으로 구성된 리스트 입니다. RadioModal 의 구성요소로도 쓰임
 */
export default function RadioList({ source, onChange, value, onClose }: Props) {
  const [cV, setCV] = useState<string>(value);

  useEffect(() => {
    console.log("Mount");
    return () => submit();
  }, []);

  const submit = useCallback(() => {
    onChange(cV);
    onClose && onClose();
  }, [cV]);

  return (
    <Box sx={{ width: "100%", height: 400, overflow: "auto" }}>
      {source.map((_, idx: number) => (
        <ListItem key={idx}>
          <ListItemButton
            onClick={() => {
              setCV(String(idx));
            }}>
            <ListItemIcon>
              {cV === String(idx) && (
                <RadioButtonCheckedOutlinedIcon color="primary" />
              )}
              {cV != String(idx) && (
                <RadioButtonUncheckedOutlinedIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText primary={`Item 1`} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
}
