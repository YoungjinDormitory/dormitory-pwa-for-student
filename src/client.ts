import { QueryClient } from "@tanstack/react-query";

export const client = new QueryClient();

export const reloadAsItem = () => {
  client.invalidateQueries(["asInfo"]);
};
export const reloadOutingItem = () => {
  client.invalidateQueries(["outingInfo"]);
};
export const reloadGymItem = () => {
  client.invalidateQueries(["gymInfo"]);
};
