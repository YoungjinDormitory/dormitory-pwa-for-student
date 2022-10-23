import { createContext, useState } from "react";
import { IModalContext } from "../types/context.interface";

const ModalContext = createContext<IModalContext | null>(null);
/**
 * @description - 모달에 정보를 프로바이더를 리턴 해주는 훅입니다.
 */
export default function useModalContext(action: (v: any) => unknown) {
  const [value, setValue] = useState<string>("");
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const submit = () => {
    action(value);
  };

  return {
    Provider: ModalContext.Provider,
    ctx: ModalContext,
    value,
    onChange,
    submit,
  };
}
