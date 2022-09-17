import { Button } from "@mui/material";

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

      <Button color="primary" variant="contained" fullWidth>
        회원가입
      </Button>
    </>
  );
}

export default SignUp;
