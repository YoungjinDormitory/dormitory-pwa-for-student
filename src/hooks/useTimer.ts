import { useEffect, useRef, useState } from "react";
import useInterval from "./useInterval";

interface initailTime {
  m: number;
  s: number;
}

/**
 *
 * @param {initailTime} initailTime Obj
 * @description 타임 string 을 반환하는 타이머 Hooks 입니다. 해당 Hooks는 분단위까지만 됩니다.
 *
 */
export default function useTimer({ m = 0, s = 0 }: Partial<initailTime>) {
  const [minute, setMinute] = useState(m);
  const [second, setSecond] = useState(s);
  const [time, setTime] = useState<string | undefined>(minute + " : " + second);

  useInterval(() => {
    setSecond(() => {
      if (minute === 0 && second === 0) {
        return 0;
      }
      if (second === 0) {
        return 59;
      }
      return second - 1;
    });
    setMinute(() => {
      if (minute == 0) {
        return 0;
      }
      if (second == 0) {
        return minute - 1;
      }
      return minute;
    });
  });

  useEffect(() => {
    if (minute === 0 && second === 0) {
      setTime(() => undefined);
    } else {
      setTime(() => minute + " : " + second);
    }
  }, [second, minute]);

  const reset = () => {
    setMinute(() => m);
    setSecond(() => s);
  };

  return { time, reset };
}
