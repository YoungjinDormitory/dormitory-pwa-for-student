import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  alpha,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  Select,
  styled,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import qsToJson from "../../utils/helper/qsToJson";

function createData(
  id: number,
  title: string,
  author: string,
  createAt: string,
  view: number,
  like: number
) {
  return { id, title, author, createAt, view, like };
}

function createDataArr(size: number) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(
      createData(i, "제목" + i, "글쓴이", dayjs().format("DD/MM/YYYY"), 0, 0)
    );
  }
  return arr;
}

const rows = createDataArr(20);

export default function DesctopBoard() {
  // 쿼리스트링에 해당하는 페이지와 뷰 카운트 변수
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentViewCount, setCurrentViewCount] = useState<number>(10);

  // 위치정보와 페이지 이동 훅
  const location = useLocation();
  const navigate = useNavigate();

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>글 번호</TableCell>
              <TableCell align="right">제목</TableCell>
              <TableCell align="right">글쓴이</TableCell>
              <TableCell align="right">작성일</TableCell>
              <TableCell align="right">조회수</TableCell>
              <TableCell align="right">좋아요</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={() => navigate("/board/notice/detail?id=" + row.id)}
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.createAt}</TableCell>
                <TableCell align="right">{row.view}</TableCell>
                <TableCell align="right">{row.like}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: "space-between",
        }}>
        {/* View Count Select 박스 */}
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <FormControl variant="standard">
            <Select value={currentViewCount}>
              {[10, 15, 20].map((el) => {
                return (
                  <MenuItem
                    key={el}
                    onClick={() => {
                      navigate(
                        location.pathname +
                          `?page=${currentPage}&viewCount=${el}`
                      );
                    }}
                    value={String(el)}
                    selected={el === 10}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Typography variant="subtitle2">로 보기</Typography>
        </Box>

        {/* 페이지네이션  */}
        <Pagination
          count={20}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              {...item}
              selected={item.page === currentPage}
              to={`/board/notice?page=${item.page}&viewCount=${currentViewCount}`}
            />
          )}
        />

        {/* 검색 */}
        <Box display="flex">
          <SearchInput
            size={"small"}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Button size="small">검색</Button>
              </InputAdornment>
            }
            placeholder="제목으로 검색..."
          />
        </Box>
      </Toolbar>
    </>
  );
}

const SearchInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    padding: 1,
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
