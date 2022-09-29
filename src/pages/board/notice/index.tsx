import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";

import DesctopBoard from "../../../components/board/DesctopBoard";
import MobileBoard from "../../../components/board/MobileBoard";
import useQueryOption from "../../../hooks/useQueryOption";
import qsToJson from "../../../utils/helper/qsToJson";
import { getAnnonymous } from "../../../utils/query/query/board";

function Notice() {
  // 쿼리스트링에 해당하는 페이지와 뷰 카운트 변수
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentViewCount, setCurrentViewCount] = useState<number>(10);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { data } = useQuery(["getAnnonymouseInfo"], getAnnonymous);
  // 렌더링 되기전에 여러 변수를 초기화 시켜주는 훅
  useLayoutEffect(() => {
    const qsObj = qsToJson(location.search);
    const page = Number(qsObj?.page);
    const viewCount = Number(qsObj?.viewCount);
    if (!isNaN(page)) {
      setCurrentPage(page);
    }
    if (!isNaN(viewCount)) {
      setCurrentViewCount(viewCount);
    }
  }, [location.search]);
  return (
    <>
      {/* 데스크탑 환경 */}
      {/*       {!matches && (
        <DesctopBoard
          currentViewCount={currentViewCount}
          currentPage={currentPage}
        />
      )} */}
      {/* 모바일 환경 */}
      {/*       {matches && <MobileBoard />} */}
    </>
  );
}

export default Notice;
