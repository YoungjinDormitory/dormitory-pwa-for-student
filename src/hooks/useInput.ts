import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

/**
 * @param  {string} initialValue - useInput의 초깃값
 *
 * @description input 태그에 쓰기위해 만든 hooks
 * @description value와 onChange property를 담당
 */

export default function useInput(initialValue: string, label?: string) {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | string
      | SelectChangeEvent
  ) => {
    if (typeof e === "string") setValue(e);
    else setValue(() => e.target.value);
  };
  if (label) return { value, onChange, label };

  return { value, onChange };
}
