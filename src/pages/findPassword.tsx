import { Box, Button, Typography } from "@mui/material";
import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import useTimer from "../hooks/useTimer";
import crypto from "crypto";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mChangePassword, mfindPassword } from "../utils/query/mutation/user";
import { useNavigate } from "react-router-dom";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";

const TIMEOUT_MSG = "시간 제한 끝. 재발급 받아주세요";

function generateRandomCode(n: number): string {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}

// FindPassword 비밀번호 찾기 페이지
function FindPassword() {
  const emailProps = useInput("", "이메일");
  const codeProps = useInput("", "6자리 코드");
  const newPasswordProps = useInput("", "비밀번호");
  const confirmPasswordProps = useInput("", "비밀번호 확인");

  const navigate = useNavigate();
  const [code, setCode] = useState<string>();
  const [step, setStep] = useState({
    one: false,
    two: false,
  });

  const timer = useTimer({
    m: 3,
    s: 0,
  });

  useEffect(() => {
    setCode(generateRandomCode(6));
  }, []);

  useEffect(() => {
    if (code === codeProps.value) {
      setStep((prev) => ({ ...prev, one: true, two: true }));
    }
  }, [codeProps.value]);

  const { mutate: sendMail } = useMutation(["sendMail"], mfindPassword, {
    onSuccess: () => setStep((prev) => ({ ...prev, one: true })),
  });
  const { mutate: changePw } = useMutation(["changePw"], mChangePassword, {
    onSuccess: () => navigate("/login"),
  });

  const checkPassword = () => {
    return newPasswordProps.value === confirmPasswordProps.value;
  };
  return (
    <>
      <LoginBox.Title title="비밀번호 찾기" />

      {!step.one && !step.two && (
        <>
          <Typography variant="caption" gutterBottom>
            회원 가입 시 등록한 이메일 주소를 입력해주세요
          </Typography>
          <NormalOutlinedInput {...emailProps} />
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Button
              onClick={() => {
                code &&
                  sendMail({
                    e_mail: emailProps.value,
                    hash: code,
                  });
              }}>
              전송
            </Button>
          </Box>
        </>
      )}

      {step.one && !step.two && (
        <>
          <Typography variant="caption" gutterBottom>
            회원 가입 시 등록한 이메일로 6자리 코드를 보내드렸습니다.
          </Typography>
          <NormalOutlinedInput {...codeProps} />
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Typography variant="caption">
              {timer.time && (
                <>
                  <span>유효시간 :</span>
                  <span
                    style={{
                      padding: 3,
                      backgroundColor: "beige",
                      fontWeight: "bold",
                    }}>
                    {timer.time}
                  </span>
                </>
              )}
              {!timer.time && <span>{TIMEOUT_MSG}</span>}
            </Typography>
            <Button
              onClick={() => {
                sendMail({
                  e_mail: emailProps.value,
                  hash: code!,
                });
              }}>
              재전송
            </Button>
          </Box>
        </>
      )}
      {step.one && step.two && (
        <>
          <Typography variant="caption" gutterBottom>
            새 비밀번호 설정
          </Typography>
          <PasswordOutlinedInput {...newPasswordProps} />
          <PasswordOutlinedInput
            {...confirmPasswordProps}
            validator={checkPassword}
          />
          <Button
            onClick={() => {
              if (checkPassword()) {
                changePw({
                  password: newPasswordProps.value,
                  e_mail: emailProps.value,
                });
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
