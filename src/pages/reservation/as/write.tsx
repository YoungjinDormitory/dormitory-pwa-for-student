import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import useInput from "@hooks/useInput";
import { useNavigate } from "react-router-dom";
import Reservation from "../../../components/reservation";

// AS의 신청 페이지 입니다
function Write() {
  const titleProps = useInput("");
  const contentProps = useInput("");

  const navigate = useNavigate();
  // A/S 신청 함수
  const submit = () => {};

  // 취소 함수
  const cancle = () => {
    navigate("/reservation/as/lookup");
  };
  return (
    <Reservation>
      <Reservation.Title title="A/S 신청  " />
      <Grid xs={12} item sx={{ p: 2 }}>
        <FormControl fullWidth>
          <OutlinedInput
            placeholder="제목을 입력하세요..."
            {...titleProps}></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item sx={{ p: 2 }}>
        <FormControl fullWidth>
          <OutlinedInput
            multiline
            rows={15}
            placeholder="내용을 입력하세요..."
            {...contentProps}></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item sx={{ p: 2 }}>
        <Box display={"flex"} justifyContent={"end"}>
          <Button onClick={cancle} variant="contained" color="disable">
            취소
          </Button>
          <Button variant="contained" sx={{ ml: 2 }}>
            제출
          </Button>
        </Box>
      </Grid>
    </Reservation>
  );
}

export default Write;
