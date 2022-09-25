import axios from "axios";

// axios 인스턴스 생성
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  withCredentials: true,
});

export default request;
