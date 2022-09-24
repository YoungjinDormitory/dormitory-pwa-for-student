import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";

//SignUp 회원 가입 페이지
function SignUp() {
  const idProps = useInput("", "학번");
  const nameProps = useInput("", "이름");
  const emailProps = useInput("", "이메일");
  const passwordProps = useInput("", "패스워드");
  const confirmPasswordProps = useInput("", "패스워드 확인");

  const { mutate: signup } = useMutation([""], () => {
    return axios.post("http://localhost:8000/singup", {
      std_id: idProps.value,
      std_name: nameProps.value,
      password: passwordProps.value,
      ph_num: "111-1111-1111",
      room_num: 702,
      e_mail: emailProps.value,
    });
  });

  const checkPassword = () => {
    return passwordProps.value === confirmPasswordProps.value;
  };

  return (
    <>
      <LoginBox.Title title="회원 가입" />

      <NormalOutlinedInput {...idProps} />
      <NormalOutlinedInput {...nameProps} />
      <NormalOutlinedInput {...emailProps} />
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
