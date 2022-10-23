import { Box, Button, Typography } from "@mui/material";
import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import useTimer from "../hooks/useTimer";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../utils/service/UserPool";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// FindPassword 비밀번호 찾기 페이지
function FindPassword() {
  const navigate = useNavigate();

  const idProps = useInput("", "본인 학번");
  const codeProps = useInput("", "6자리 코드");
  const newPasswordProps = useInput("", "비밀번호");
  const confirmPasswordProps = useInput("", "비밀번호 확인");

  const forgotPassword = (Username: string) => {
    const user = new CognitoUser({ Username, Pool: UserPool });
    user.forgotPassword({
      onSuccess(res) {
        setStep((prev) => ({ ...prev, one: true }));
      },
      onFailure(err) {
        alert("요청이 보내지지 않았습니다. 조금 후에 다시 요청해주세요.");
      },
    });
  };

  const confirmForgotPassword = (Username: string) => {
    const user = new CognitoUser({ Username, Pool: UserPool });
    user.confirmPassword(codeProps.value, newPasswordProps.value, {
      onSuccess(res) {
        alert("성공!");
        navigate("/login");
      },
      onFailure(err) {
        alert("코드가 달라 이메일을 재전송하였습니다.");
        forgotPassword(idProps.value);
      },
    });
  };
  const [step, setStep] = useState({
    one: false,
  });

  return (
    <>
      <LoginBox.Title title="비밀번호 찾기" />

      {!step.one && (
        <>
          <Typography variant="caption" gutterBottom>
            본인 학번을 입력해주세요.
          </Typography>
          <NormalOutlinedInput {...idProps} />
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Button
              onClick={() => {
                if (idProps.value.length == 7) {
                  forgotPassword(idProps.value);
                } else {
                  alert("정확한 본인의 학번을 입력해주세요");
                }
              }}>
              전송
            </Button>
          </Box>
        </>
      )}

      {step.one && (
        <>
          <Typography variant="caption" gutterBottom>
            이메일에 도착한 코드와 새 비밀번호를 입력해주세요.
          </Typography>
          <PasswordOutlinedInput {...newPasswordProps} />
          <PasswordOutlinedInput
            {...confirmPasswordProps}
            validator={(v) => newPasswordProps.value === v}
          />
          <NormalOutlinedInput {...codeProps} />
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Typography variant="caption">
              이메일이 아직도착하지 않으셨습니까?
            </Typography>
            <Button>재전송</Button>
          </Box>
          <Button
            onClick={() => {
              if (newPasswordProps.value === confirmPasswordProps.value) {
                confirmForgotPassword(idProps.value);
              }
            }}>
            제출
          </Button>
        </>
      )}
    </>
  );
}

export default FindPassword;
