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

/**
 * @description - 모바일 전용 게시판 컴포넌트 입니다.
 */
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
      {/* 게시판 */}
      {data.map((el) => (
        <Suspense key={el.bulletin_id} fallback={<BoardSuspenseCard />}>
          <BoardCard {...el} />
        </Suspense>
      ))}
      {/* 게시판 툴바 */}
      <BoardToolBar
        keyword={keyword}
        currentPage={currentPage}
        currentViewCount={currentViewCount}
        maxPage={maxPage}
      />
    </div>
  );
}
