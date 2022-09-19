import { createTheme, ThemeProvider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { DefaultLayout, LoginBox } from "./components/layout";
import DynamicRouter from "./Router";

// 로그인, 회원가입, 비밀번호찾기
const LOGIN_LAYOUT_URL = ["/login", "/signup", "/findPassword"];

const theme = createTheme({
  palette: {
    disable: {
      main: "#EDEDED",
      dark: "#9E9E9E",
    },
  },
});

function App() {
  const location = useLocation();

  // 레이아웃이 없는 단독페이지
  if (LOGIN_LAYOUT_URL.includes(location.pathname)) {
    return (
      <LoginBox>
        <DynamicRouter />
      </LoginBox>
    );
  }

  // 레이아웃에 의존적인 페이지
  return (
    <DefaultLayout>
      <ThemeProvider theme={theme}>
        <DynamicRouter />
      </ThemeProvider>
    </DefaultLayout>
  );
}

export default App;
