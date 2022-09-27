import { ASCard } from "@common/card";
import useDatePicker from "@hooks/useDatePicker";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

import Reservation from "../../../components/reservation";
import useQueryOption from "../../../hooks/useQueryOption";
import { IAsItem } from "../../../types/reservation.interface";
import { getASInfo } from "../../../utils/query/query/reservation";

// AS 조회 페이지
function LookUp() {
  const startDateProps = useDatePicker();
  const endDateProps = useDatePicker(startDateProps);
  const { option, token } = useQueryOption();

  const { data } = useQuery(["asInfo", token], getASInfo, option);

  // 데이터 검색 함수
  const searchData = useCallback(() => {
    if (startDateProps.value && endDateProps.value) {
    }
  }, []);

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
      </Grid>
      {data?.data.map((el: IAsItem) => (
        <Grid item xs={12}>
          <ASCard data={el} />
        </Grid>
      ))}
    </Reservation>
  );
}

export default LookUp;
