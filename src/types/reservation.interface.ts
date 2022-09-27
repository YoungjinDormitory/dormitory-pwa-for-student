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
