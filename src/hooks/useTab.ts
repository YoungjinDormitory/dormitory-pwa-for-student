import { useState } from "react";
/**
 * @param  {number} initailTab - 몇번째 탭을 처음으로 보여줄지 정하는 숫자 입니다
 *
 * @description MUI의 Tab컴포넌트의 형식에 맞게짠 hooks입니다.
 */
export default function useTab(initailTab: number) {
  const [value, setTab] = useState(initailTab);
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    newTab: number
  ) => {
    setTab(newTab);
  };

  return { value, onChange };
}
