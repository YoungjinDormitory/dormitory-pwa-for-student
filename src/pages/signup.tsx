import { Button, IconButton, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import { eMailValidation, hpNumValidation } from "../utils/helper/validation";
import { mSendHashToEmail, mSignUp } from "../utils/query/mutation/user";
import generateRandomCode from "../utils/helper/generateRandomCode";
import UserPool from "../utils/service/userPool";

//SignUp 회원 가입 페이지
function SignUp() {
  const [code, setCode] = useState<string>("");
  const [emailCertificate, setEmailCertificate] = useState<boolean>(false);

  //회원가입에 필요한 state들
  const idProps = useInput("", "학번");
  const nameProps = useInput("", "이름");
  const emailProps = useInput("", "이메일");
  const codeProps = useInput("", "전송 받은 6자리 코드를 입력해주세요");
  const phNumProps = useInput("", "핸드폰 번호");
  const roomNumProps = useInput("", "방 번호");
  const passwordProps = useInput("", "패스워드");
  const confirmPasswordProps = useInput("", "패스워드 확인");

  const navigate = useNavigate();
  const { mutate } = useMutation(["signup"], mSignUp, {
    onError: () => alert("네트워크 에러"),
    onSuccess: () => {
      alert("관리자 승인후 로그인 가능합니다.");
      navigate("/login");
    },
  });
  const { mutate: send } = useMutation(["sendMail"], mSendHashToEmail, {
    onSuccess: (_, v) => {
      setCode(v.hash);
    },
  });

  const onSubmit = () => {
    console.log(UserPool);
    UserPool.signUp(
      idProps.value,
      passwordProps.value,
      [
        { Name: "name", Value: nameProps.value } as any,
        { Name: "email", Value: emailProps.value } as any,
        {
          Name: "phone_number",
          Value: "+82" + phNumProps.value.slice(1).replaceAll("-", ""),
        } as any,
        { Name: "custom:room_num", Value: roomNumProps.value } as any,
      ],
      null as any,
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      }
    );
  };

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
      checkPassword() &&
      emailCertificate
    ) {
      mutate({
        std_id: idProps.value,
        std_name: nameProps.value,
        password: passwordProps.value,
        ph_num: phNumProps.value,
        room_num: roomNumProps.value,
        e_mail: emailProps.value,
      });
    } else {
      alert("입력이 누락된 정보가 있습니다.");
    }
  };

  // 이메일로 입력받으 코드 validation
  const checkCode = () => {
    if (codeProps.value === code) {
      setEmailCertificate(true);
      return true;
    }
    return false;
  };

  // 이메일로 코드 만들어서 보내기
  const sendMail = () => {
    const c = generateRandomCode(6);
    if (eMailValidation(emailProps.value)) {
      send({
        e_mail: emailProps.value,
        hash: c,
      });
    } else {
      alert("Email validation failed");
    }
  };

  return (
    <>
      <LoginBox.Title title="회원 가입" />

      <NormalOutlinedInput {...idProps} />
      <NormalOutlinedInput {...nameProps} />
      <NormalOutlinedInput
        {...emailProps}
        disabled={emailCertificate}
        validator={() => eMailValidation(emailProps.value)}
        hintMessage={"이메일 형식을 확인해주세요 *@g.yju.ac.kr"}
        endAdornment={
          !emailCertificate && (
            <IconButton onClick={sendMail}>
              <SendOutlinedIcon />
            </IconButton>
          )
        }
      />
      {emailCertificate && (
        <Typography variant="caption" color="blue">
          이메일 인증성공!
        </Typography>
      )}
      {code && !emailCertificate && (
        <NormalOutlinedInput
          validator={checkCode}
          hintMessage={
            <Typography variant="caption">
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={sendMail}>
                재전송
              </span>{" "}
              하시겠습니까?
            </Typography>
          }
          {...codeProps}
        />
      )}

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
            onSubmit();
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
