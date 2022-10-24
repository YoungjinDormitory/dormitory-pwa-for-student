import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullWindowCircular from "../components/common/FullWindowCircular";
import NormalOutlinedInput from "../components/common/NormalOutlinedInput";
import PasswordOutlinedInput from "../components/common/PasswordOutlinedInput";
import { LoginBox } from "../components/layout";
import useInput from "../hooks/useInput";
import { eMailValidation, hpNumValidation } from "../utils/helper/validation";
import { mSignUp } from "../utils/query/mutation/user";
import UserPool from "../utils/service/UserPool";

//SignUp 회원 가입 페이지
function SignUp() {
  const [circularVisible, setCircularVisible] = useState<boolean>(false);
  const { mutate } = useMutation(["signup"], mSignUp, {
    onSuccess: () => {
      alert("인증 메일을 보냈습니다.");
      navigate("/login");
    },
  });

  //회원가입에 필요한 state들
  const idProps = useInput("", "학번");
  const nameProps = useInput("", "이름");
  const emailProps = useInput("", "이메일");
  const phNumProps = useInput("", "핸드폰 번호");
  const roomNumProps = useInput("", "방 번호");
  const passwordProps = useInput("", "패스워드");
  const confirmPasswordProps = useInput("", "패스워드 확인");

  const navigate = useNavigate();

  const onSubmit = async () => {
    setCircularVisible(true);
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
        setCircularVisible(false);
        if (err) {
        } else {
          mutate({
            std_id: idProps.value,
            std_name: nameProps.value,
            password: passwordProps.value,
            ph_num: phNumProps.value,
            room_num: roomNumProps.value,
            e_mail: emailProps.value,
          });
        }
      }
    );
  };
  const comparePassword = (targetV: string) => {
    return targetV === passwordProps.value;
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

  const passwordValidation = (value: string) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(value);
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
      <PasswordOutlinedInput
        {...passwordProps}
        validator={passwordValidation}
      />
      <PasswordOutlinedInput
        {...confirmPasswordProps}
        validator={comparePassword}
      />

      <Button
        color="primary"
        onClick={() => {
          if (
            comparePassword(confirmPasswordProps.value) &&
            passwordValidation(passwordProps.value)
          ) {
            onSubmit();
          }
        }}
        variant="contained"
        fullWidth>
        회원가입
      </Button>
      <FullWindowCircular visible={circularVisible} />
    </>
  );
}

export default SignUp;
