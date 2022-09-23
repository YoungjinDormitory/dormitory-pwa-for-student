import { useState } from "react";
/**
 * @param  {boolean} initailState - 체크박스 default value 입니다
 *
 * @description MUI의 CheckBox 컴포넌트에 의존하는 hook 입니다. 체크 박스 상태 조절역할을 합니다.
 */

export default function useCheckBox(initailState: boolean) {
  const [checked, setChecked] = useState<boolean>(initailState);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: boolean
  ) => {
    setChecked(newValue);
  };

  return { checked, onChange };
}
