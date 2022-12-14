import { HeadersDefaults } from "axios";
import { IToken } from "../../../types/query.interface";
import request from "../../service/request";

// ==========================================================================================

interface deleteAS extends IToken {
  as_id: number;
}

export async function mDeleteAs({ as_id, token }: deleteAS) {
  return await request.post(
    `/as/delete`,
    {
      as_id: as_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}

interface IAs extends IToken {
  as_id?: string;
  title: string;
  content: string;
  vst_check: boolean;
}

export async function mUpdateAs({ token, ...body }: IAs) {
  return await request.post("/as/update", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

export async function mCreateAs({ token, ...body }: IAs) {
  return await request.post("/as/create", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

// ==========================================================================================

interface deleteBus extends IToken {
  bus_req_id: number;
}
export async function mDeleteBus({ bus_req_id, token }: deleteBus) {
  return await request.post(
    `/bus/delete`,
    {
      bus_req_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}

interface IBus extends IToken {
  bus_date: Date;
  bus_way: string;
  bus_stop: string;
  bus_time: string;
}

export async function mCreateBus({ token, ...body }: IBus) {
  return await request.post("/bus/create", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

// ==========================================================================================

interface deleteGym extends IToken {
  hlth_id: number;
}

export async function mDeleteGym({ hlth_id, token }: deleteGym) {
  return await request.post(
    `/hlth/delete`,
    {
      hlth_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}

interface IGym extends IToken {
  stayout_id?: number;
  date: string;
  start_time: string;
  end_time: string;
}

export async function mUpdateGym({ token, ...body }: IGym) {
  return await request.put(`/hlth/update`, body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

export async function mCreateGym({ token, ...body }: IGym) {
  return await request.post("/hlth/create", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

// ==========================================================================================

interface deleteOut extends IToken {
  stayout_id: number;
}

export async function mDeleteOut({ token, stayout_id }: deleteOut) {
  return await request.post(
    `/stayout/delete`,
    {
      stayout_id,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
}
interface IOut extends IToken {
  stayout_id?: number;
  start_date: string;
  end_date: string;
}

export async function mUpdateOut({ token, ...body }: IOut) {
  return await request.post(`/stayout/update`, body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}

export async function mCreateOut({ token, ...body }: IOut) {
  return await request.post("/stayout/create", body, {
    headers: {
      Authorization: token ? token : "",
    },
  });
}
