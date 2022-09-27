import { HeadersDefaults } from "axios";
import request from "../../service/request";

// ==========================================================================================

type deleteAS = {
  as_id: number;
  token?: string;
};

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

interface IAs {
  as_id?: string;
  title: string;
  content: string;
  vst_check: boolean;
  token?: string;
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

export async function mDeleteBus(id: string) {
  return await request.delete(`/bus?id=${id}`);
}

export async function mUpdateBus(id: string) {
  return await request.put(`/bus?id=${id}`);
}

export async function mCreateBus() {
  return await request.post("/bus", {});
}

// ==========================================================================================

export async function mDeleteGym(id: string) {
  return await request.delete(`/gym?id=${id}`);
}

export async function mUpdateGym(id: string) {
  return await request.put(`/gym?id=${id}`);
}

export async function mCreateGym() {
  return await request.post("/gym");
}

// ==========================================================================================

export async function mDeleteOut(id: string) {
  return await request.delete(`/out?id=${id}`);
}

export async function mUpdateOut(id: string) {
  return await request.put(`/out?id=${id}`);
}

export async function mCreateOut() {
  return await request.post("/out");
}
