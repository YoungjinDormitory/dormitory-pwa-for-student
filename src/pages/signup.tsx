import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import { eMailValidation, hpNumValidation } from "../utils/helper/validation";
import { mSignUp } from "../utils/query/mutation/user";

//SignUp 회원 가입 페이지
function SignUp() {
  //회원가입에 필요한 state들
  const idProps = useInput("", "학번");
  const nameProps = useInput("", "이름");
  const emailProps = useInput("", "이메일");
  const phNumProps = useInput("", "핸드폰 번호");
  const roomNumProps = useInput("", "방 번호");
  const passwordProps = useInput("", "패스워드");
  const confirmPasswordProps = useInput("", "패스워드 확인");

  const navigate = useNavigate();
  const { mutate } = useMutation(["signup"], mSignUp, {
    onError: () => alert("네트워크 에러"),
    onSuccess: () => navigate("/login"),
  });

  // 패스워드 일치 체크 함수
  const checkPassword = () => {
    return passwordProps.value === confirmPasswordProps.value;
  };

  // 휴대폰 하이폰 입력
  useLayoutEffect(() => {
    if (phNumProps.value.length === 10) {
      phNumProps.onChange(
        phNumProps.value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
    }
    if (phNumProps.value.length === 13) {
      phNumProps.onChange(
        phNumProps.value
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phNumProps.value]);

  // 회원가입함수
  const signup = () => {
    if (
      hpNumValidation(phNumProps.value) &&
      eMailValidation(emailProps.value) &&
      checkPassword()
    ) {
      mutate({
        std_id: idProps.value,
        std_name: nameProps.value,
        password: passwordProps.value,
        ph_num: phNumProps.value,
        room_num: roomNumProps.value,
        e_mail: emailProps.value,
      });
    }
  };

  return (
    <>
      <LoginBox.Title title="회원 가입" />

      <NormalOutlinedInput {...idProps} />
      <NormalOutlinedInput {...nameProps} />
      <NormalOutlinedInput
        {...emailProps}
        validator={() => eMailValidation(emailProps.value)}
        hintMessage={"이메일 형식을 확인해주세요 *@g.yju.ac.kr"}
      />
      <NormalOutlinedInput
        value={phNumProps.value}
        onChange={(e) => {
          if (hpNumValidation(e.target.value)) {
            phNumProps.onChange(e);
          }
        }}
        label={phNumProps.label}
      />
      <NormalOutlinedInput {...roomNumProps} />
      <PasswordOutlinedInput {...passwordProps} />
      <PasswordOutlinedInput
        {...confirmPasswordProps}
        validator={checkPassword}
      />

      <Button
        color="primary"
        onClick={() => {
          if (checkPassword()) {
            signup();
          }
        }}
        variant="contained"
        fullWidth>
        회원가입
      </Button>
    </>
  );
}

export default SignUp;
