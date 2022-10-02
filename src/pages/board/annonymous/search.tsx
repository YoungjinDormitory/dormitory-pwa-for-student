import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DesctopBoard from "../../../components/board/DesctopBoard";
import MobileBoard from "../../../components/board/MobileBoard";
import qsToJson from "../../../utils/helper/qsToJson";
import { getSearchedAnnonymous } from "../../../utils/query/query/board";
import request from "../../../utils/service/request";

function Search() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const qsJson = qsToJson(location.search);

  // 쿼리스트링에 해당하는 페이지와 뷰 카운트 변수
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentViewCount, setCurrentViewCount] = useState<number>(10);
  const [maxPage, setMaxPage] = useState(1);

  const { data } = useQuery(
    [
      "getSearchedAnnonymouseInfo",
      String(currentPage),
      String(currentViewCount),
      qsJson.content,
    ],
    getSearchedAnnonymous,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  useEffect(() => {
    request
      .get("/bulletin/search/count", {
        params: { keyword: qsJson.content },
      })
      .then((res) => {
        if (res.data % currentViewCount) {
          setMaxPage(res.data / currentViewCount);
        }
        setMaxPage(parseInt(String(res.data / currentViewCount)) + 1);
      });
  }, [currentViewCount]);

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

  const props = {
    data: data?.data,
    currentViewCount,
    currentPage,
    maxPage,
  };

  return (
    <>
      {/* 데스크탑 환경 */}
      {!matches && <DesctopBoard {...props} keyword={qsJson.content} />}
      {/* 모바일 환경 */}
      {matches && <MobileBoard {...props} keyword={qsJson.content} />}
    </>
  );
}

export default Search;
