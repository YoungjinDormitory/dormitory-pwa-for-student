import axios from "axios";
import { useContext } from "react";
import useAuthContext from "../../hooks/useAuthContext";

// axios 인스턴스 생성
const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default request;
