import { Dayjs } from "dayjs";
import { useCallback, useState } from "react";

/**
 *
 * @param {Dayjs | undefined} cV - cV보다 나중의 시간대면 값이 세팅되지 않는다.
 *
 * @description @mui/x-date-pickers의 DatePicker  라이브러리에 의존적인 hook입니다.
 * DatePicker에 필요한 property들을 리턴해 줍니다
 */
export default function useTimePicker(cV?: Dayjs | null) {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [compareValue, setCompareValue] = useState<Dayjs | null>(null);

  // DatePicker 유효 값 검사 함수
  const validation = useCallback(() => {
    if (value?.isAfter(compareValue)) {
      return false;
    }
    return true;
  }, [value, compareValue]);

  const onChange = (newValue: Dayjs | null) => {
    if (compareValue) {
      if (validation() == false) {
        return;
      }
    }
    setValue(() => newValue);
  };

  return { value, onChange };
}
