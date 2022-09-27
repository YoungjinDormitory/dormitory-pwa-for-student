import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../utils/query/query/user";

import useQueryOption from "./useQueryOption";

export default function useCheckUser() {
  const { option, token } = useQueryOption();
  const { data, isLoading } = useQuery(
    ["getUser", token],
    ({ queryKey }) => useGetUser(queryKey[1]),
    option
  );
  return { data, isLoading };
}
