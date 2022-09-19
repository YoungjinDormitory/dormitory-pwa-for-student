import { useEffect, useRef } from "react";

/**
 * @param  {()=>unknown} cb 타이머에서 실행할 콜백함수
 * @param  {number=1000} interval 콜백함수의 interval
 *
 * @description 주기적인 작업을 하기위해 만들어진 hooks입니다.
 */
export default function useInterval(
  cb: () => unknown,
  interval: number = 1000
) {
  const saveCb = useRef(cb);

  useEffect(() => {
    saveCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const timerId = setInterval(() => {
      saveCb.current();
    }, interval);

    return () => clearInterval(timerId);
  });
}
