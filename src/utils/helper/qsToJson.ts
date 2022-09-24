/**
 * @param  {string} qs - url 상의 쿼리스트링입니다.
 * @desciption - 쿼리스트링을 json 객체로 파싱해주는 함수 입니다.
 */
export default function qsToJson(qs: string) {
  const arr = qs.slice(1).split("&");
  if (!arr[0]) {
    return;
  }
  const list = arr.map((item) => item.split("="));
  const obj = Object.fromEntries(list);
  return obj;
}
