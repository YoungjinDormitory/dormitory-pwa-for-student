export interface IAsItem {
  as_id: number;
  content: string;
  request_date: string;
  repair_date?: string;
  title: string;
  vst_check: boolean;
}

export interface IOutItem {
  stayout_id: number;
  end_date: Date;
  start_date: Date;
}

export interface IGymItem {
  hlth_id: number;
  date: string;
  start_time: string;
  end_time: string;
}

export interface IBusItem {
  bus_req_id: number;
  bus_date: Date;
  bus_stop: string;
  bus_time: string;
  bus_way: number;
  std_id: string;
}
