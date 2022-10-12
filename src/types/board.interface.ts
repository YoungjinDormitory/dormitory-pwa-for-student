export interface IBoardItem {
  bulletin_id: string;
  content: string;
  create_date: Date;
  hot: number;
  std_id: string;
  title: string;
  views: number;
  ip?: string;
  notice_id?: string;
}
