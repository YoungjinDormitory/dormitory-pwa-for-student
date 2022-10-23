import useInput from "@hooks/useInput";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  OutlinedInput,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";
import useCheckBox from "../../../hooks/useCheckBox";
import useQueryOption from "../../../hooks/useQueryOption";
import { mCreateAs } from "@utils/query/mutation/reservation";

// AS의 신청 페이지 입니다
function Write() {
  const titleProps = useInput("");
  const contentProps = useInput("");

  const absenceCheck = useCheckBox(false);
  const { option, token } = useQueryOption();
  const navigate = useNavigate();

  // A/S 신청 함수
  const { mutate: submit } = useMutation(["createAs"], mCreateAs, {
    ...option,
    onSuccess: () => {
      navigate(-1);
    },
  });

  // mutation에 필요한 값들
  const variables = {
    title: titleProps.value,
    content: contentProps.value,
    vst_check: absenceCheck.checked,
    token,
  };

  // 취소 함수
  const cancel = () => {
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
        <Box>
          <FormGroup>
            <FormControlLabel
              label="부재중 방문 동의"
              control={<Checkbox {...absenceCheck} />}
            />
          </FormGroup>
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          <Button onClick={cancel} variant="contained" color="disable">
            취소
          </Button>
          <Button
            onClick={() => {
              token && submit(variables);
            }}
            variant="contained"
            sx={{ ml: 2 }}>
            제출
          </Button>
        </Box>
      </Grid>
    </Reservation>
  );
}

export default Write;
