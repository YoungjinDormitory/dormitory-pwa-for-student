import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { IModalContext } from "../types/context.interface";

const ModalContext = createContext<IModalContext | null>(null);

export default function useModalContext(
  setState: Dispatch<SetStateAction<string>> | ((str: string) => void)
) {
  const [value, setValue] = useState<string>("");
  const onChange = (newValue: string) => {
    setValue((value) => newValue);
  };
  const submit = () => {
    setState(value);
  };

  return {
    Provider: ModalContext.Provider,
    ctx: ModalContext,
    value,
    onChange,
    submit,
  };
}
