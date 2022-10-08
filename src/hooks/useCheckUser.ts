import { useQuery } from "@tanstack/react-query";
import { useGetUser } from "../utils/query/query/user";

import useQueryOption from "./useQueryOption";
/**
 *  description 유저 정보를 확인하는 훅입니다.
 */
export default function useCheckUser() {
  const { option, token } = useQueryOption();
  const { data, isLoading } = useQuery(
    ["getUser", token],
    ({ queryKey }) => useGetUser(queryKey[1]),
    option
  );
  return { data, isLoading };
}
