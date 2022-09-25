import { useContext } from "react";
import useAuthContext from "../../hooks/useAuthContext";

const config = () => {
  const { ctx } = useAuthContext();
  const value = useContext(ctx);
  return {
    headers: {
      Authorization: value?.token,
    },
  };
};

export default config;
