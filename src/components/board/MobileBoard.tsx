import { lazy, Suspense } from "react";
import BoardSuspenseCard from "../common/card/BoardSuspenseCard";
import { IBoardItem } from "../../types/board.interface";
import BoardToolBar from "../common/toolbar/BoardToolBar";

interface Props {
  currentPage: number;
  currentViewCount: number;
  maxPage: number;
  keyword?: string;
  data: Array<IBoardItem>;
}

export default function MobileBoard({
  currentPage,
  currentViewCount,
  maxPage,
  keyword,
  data = [],
}: Props) {
  const BoardCard = lazy(() => import("../common/card/BoardCard"));

  return (
    <div style={{ width: "100%", marginBottom: "48px" }}>
      {data.map((el) => (
        <Suspense key={el.bulletin_id} fallback={<BoardSuspenseCard />}>
          <BoardCard {...el} />
        </Suspense>
      ))}
      <BoardToolBar
        keyword={keyword}
        currentPage={currentPage}
        currentViewCount={currentViewCount}
        maxPage={maxPage}
      />
    </div>
  );
}
