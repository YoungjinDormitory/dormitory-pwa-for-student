import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient();

export const reloadAsItem = () => {
  client.invalidateQueries(["asInfo"]);
};
