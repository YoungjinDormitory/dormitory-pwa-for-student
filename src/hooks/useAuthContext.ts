import { createContext, useState } from "react";
import { IAuthContext } from "../types/context.interface";

const AuthContext = createContext<IAuthContext | null>(null);

export default function useAuthContext() {
  const [token, setToken] = useState<string>("");

  return {
    Provider: AuthContext.Provider,
    ctx: AuthContext,
    value: {
      token,
      setToken,
    },
  };
}
