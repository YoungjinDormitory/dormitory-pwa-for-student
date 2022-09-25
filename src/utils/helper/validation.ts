// 휴대폰 번호 유효성 검사
export const hpNumValidation = (value: string) => {
  const regex = /^[0-9\b -]{0,13}$/;
  return regex.test(value);
};

//이메일 유효성 검사
export const eMailValidation = (value: string) => {
  const regex = /[a-z0-9]+@g.yju.ac.kr/;
  return regex.test(value);
};
