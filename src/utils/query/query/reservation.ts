import request from "../../service/request";

/**
 * @description - 본인 외출/외박 정보 얻는 함수
 */
export function getOutingInfo({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/stayout`, {
    headers: {
      Authorization: queryKey[1]!,
    },
    params: {
      limit: queryKey[2],
      start_date: queryKey[3],
      end_date: queryKey[4],
    },
  });
}

/**
 * @description - 본인 체육관 예약 정보 얻는 함수
 */
export function getGymInfo({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/hlth`, {
    headers: {
      Authorization: queryKey[1]!,
    },
    params: {
      limit: queryKey[2],
      start_date: queryKey[3],
      end_date: queryKey[4],
    },
  });
}

/**
 * @description - 본인 버스 정보 얻는 함수
 */
export function getBusInfo({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/bus`, {
    headers: {
      Authorization: queryKey[1]!,
    },
    params: {
      limit: queryKey[2],
      start_date: queryKey[3],
      end_date: queryKey[4],
    },
  });
}

/**
 * @description - 본인 AS 정보 얻는 함수
 */
export function getASInfo({ queryKey }: { queryKey: Partial<string[]> }) {
  return request.get(`/as`, {
    headers: {
      Authorization: queryKey[1]!,
    },
    params: {
      limit: queryKey[2],
      start_date: queryKey[3],
      end_date: queryKey[4],
    },
  });
}
