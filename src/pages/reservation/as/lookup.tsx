import useDatePicker from "@hooks/useDatePicker";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCallback } from "react";
import { ASCard } from "../../../components/common/card";

import Reservation from "../../../components/reservation";

// AS 조회 페이지
function LookUp() {
  const startDateProps = useDatePicker();
  const endDateProps = useDatePicker(startDateProps);

  // 데이터 검색 함수
  const searchData = useCallback(() => {}, []);

  return (
    <Reservation>
      <Reservation.Title title="A/S 조회" />
      <Grid
        xs={12}
        textAlign={"center"}
        sx={{ m: 2 }}
        boxShadow={"0px 2px 0px 1px gainsboro"}
        item>
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...startDateProps}
              renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
            />
            <Typography variant="body2" sx={{ mr: 2 }}>
              to
            </Typography>
            <DatePicker
              {...endDateProps}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        {/* <Button variant="contained" sx={{ mb: 2 }}>
          검색
        </Button> */}
      </Grid>
      {/*  <Grid xs={12} item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableCell>신청 날짜</TableCell>
              <TableCell>신청 내용</TableCell>
              <TableCell>상태</TableCell>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid> */}
      <Grid item xs={12}>
        <ASCard />
      </Grid>
    </Reservation>
  );
}

export default LookUp;
