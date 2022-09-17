import { Box, Button, Typography } from "@mui/material";
import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import useTimer from "../hooks/useTimer";

const TIMEOUT_MSG = "시간 제한 끝. 재발급 받아주세요";

// FindPassword 비밀번호 찾기 페이지
function FindPassword() {
  const codeProps = useInput("", "발송된 코드 6자리");

  const timer = useTimer({
    m: 3,
    s: 0,
  });

  const sendMail = () => {
    // do send mail
    timer.reset();
  };

  return (
    <>
      <LoginBox.Title title="비밀번호 찾기" />
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
            sendMail();
          }}>
          재전송
        </Button>
      </Box>
    </>
  );
}

export default FindPassword;
