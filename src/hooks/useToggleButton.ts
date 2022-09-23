import { useState } from "react";

/**
 * @param  {string} initialValue - useInput의 초깃값
 *
 * @description input 태그에 쓰기위해 만든 hooks
 * @description value와 onChange property를 담당
 */

export default function useToggleButton(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment);
  };

  return { value, onChange };
}
