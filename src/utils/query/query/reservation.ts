import request from "../../service/request";

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
