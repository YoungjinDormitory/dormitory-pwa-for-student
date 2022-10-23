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
import { useLocation, useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";
import useCheckBox from "@hooks/useCheckBox";
import useQueryOption from "@hooks/useQueryOption";
import { mUpdateAs } from "@utils/query/mutation/reservation";

// AS의 업데이트 페이지 입니다
function Update() {
  const location = useLocation();

  const titleProps = useInput(location.state.title);
  const contentProps = useInput(location.state.content);

  const absenceCheck = useCheckBox(location.state.vst_check);
  const { option, token } = useQueryOption();
  const navigate = useNavigate();

  // A/S 신청 함수
  const { mutate: submit } = useMutation(["createAs"], mUpdateAs, {
    ...option,
    onSuccess: () => {
      navigate(-1);
    },
  });

  // mutation에 필요한 값들
  const variables = {
    as_id: location.state.as_id,
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

export default Update;
