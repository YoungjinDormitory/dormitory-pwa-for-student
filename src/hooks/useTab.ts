import { useState } from "react";

function useTab(initailTab: number) {
  const [value, setTab] = useState(initailTab);
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    newTab: number
  ) => {
    setTab(newTab);
  };

  return { value, onChange };
}

export default useTab;
