import axios from "axios";

// axios 인스턴스 생성
const request = axios.create({
  baseURL: "some url",
  timeout: 1000,
  withCredentials: true,
});

export default request;
