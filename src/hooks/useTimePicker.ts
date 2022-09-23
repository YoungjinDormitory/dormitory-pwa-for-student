import { Dayjs } from "dayjs";
import { useCallback, useEffect, useState } from "react";

interface ITimePicker {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

/**
 *
 * @param {useTimePicker} comObj - 비교대상 객체를 받는다.
 *
 * @description @mui/x-date-pickers의 DatePicker  라이브러리에 의존적인 hook입니다.
 * DatePicker에 필요한 property들을 리턴해 줍니다
 */
export default function useTimePicker(comObj?: ITimePicker): ITimePicker {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [compareValue, setCompareValue] = useState<Dayjs | null>();

  // 비교 대상의 값이 바뀌면 compareValue변수에 대입
  useEffect(() => {
    setCompareValue(() => comObj?.value);
  }, [comObj?.value]);

  // DatePicker 유효 값 검사 함수
  const validation = useCallback(
    (v: Dayjs) => {
      if (!compareValue) {
        alert("시작 날짜를 지정해주세요");
        return false;
      }
      if (!v.isAfter(compareValue)) {
        alert("시작 날짜 이후의 날짜를 선택해 주세요");
        return false;
      }
      return true;
    },
    [value, compareValue]
  );

  // DatePicker의 onChange property
  const onChange = (newValue: Dayjs | null) => {
    // 유효하지 않으면 값을 반환하지 않고 리턴
    if (comObj) {
      if (validation(newValue!) == false) {
        return;
      }
    }
    setValue(() => newValue);
  };

  return { value, onChange };
}
