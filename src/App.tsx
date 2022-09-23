import { createTheme, ThemeProvider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { DefaultLayout, LoginBox } from "./components/layout";
import useAuthContext from "./hooks/useAuthContext";
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
  typography: {
    fontFamily: "SCDream",
  },
});

function App() {
  const location = useLocation();
  const { Provider: AuthProvider, value } = useAuthContext();

  // 레이아웃이 없는 단독페이지
  if (LOGIN_LAYOUT_URL.includes(location.pathname)) {
    return (
      <AuthProvider value={value}>
        <ThemeProvider theme={theme}>
          <LoginBox>
            <DynamicRouter />
          </LoginBox>
        </ThemeProvider>
      </AuthProvider>
    );
  }

  // 레이아웃에 의존적인 페이지
  // Auth 상태에 의존적인 페이지
  return (
    <AuthProvider value={value}>
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <DynamicRouter />
        </DefaultLayout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
