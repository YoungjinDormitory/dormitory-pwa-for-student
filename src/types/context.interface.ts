import { Dispatch, SetStateAction } from "react";

export interface IModalContext {
  value: string;
  onChange: (v: string) => void;
  submit: () => void;
}

export interface IAuthContext {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}
