import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Context, useCallback, useContext, useEffect, useState } from "react";

import type { IModalContext } from "../../types/context.interface";

interface Props {
  source: Array<any>;
  ctx?: Context<IModalContext | null>;
}

/**
 * @description 라디오 버튼으로 구성된 리스트 입니다. RadioModal 의 구성요소로도 쓰임
 */
export default function RadioList({ source, ctx }: Props) {
  const v = ctx && useContext(ctx);

  return (
    <Box sx={{ width: "100%", height: 400, overflow: "auto" }}>
      {source.map((_, idx: number) => (
        <ListItem key={idx}>
          <ListItemButton
            onClick={() => {
              v && v.onChange(String(idx));
            }}>
            <ListItemIcon>
              {v && v.value === String(idx) && (
                <RadioButtonCheckedOutlinedIcon color="primary" />
              )}
              {v && v.value != String(idx) && (
                <RadioButtonUncheckedOutlinedIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText primary={`Item ${idx}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );
}
