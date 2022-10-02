import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { client } from "./client";

import Board from "./components/board";
import { DefaultLayout, LoginBox } from "./components/layout";
import useAuthContext from "./hooks/useAuthContext";
import DynamicRouter from "./Router";

// 로그인, 회원가입, 비밀번호찾기
const LOGIN_LAYOUT_URL = ["/login", "/signup", "/findPassword"];

const NOTICE_LAYOUT_URL = [
  "/notice",
  "/annonymous",
  "/hot",
  "/annonymous/search",
];

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

  // 레이아웃이 없는 단독페이지
  if (LOGIN_LAYOUT_URL.includes(location.pathname)) {
    return (
      <ThemeProvider theme={theme}>
        <LoginBox>
          <DynamicRouter />
        </LoginBox>
      </ThemeProvider>
    );
  }

  if (NOTICE_LAYOUT_URL.includes(location.pathname.slice(6))) {
    return (
      <ThemeProvider theme={theme}>
        <DefaultLayout>
          <Board>
            <Board.Title path={location.pathname} />
            <Board.Navigator />
            <DynamicRouter></DynamicRouter>
          </Board>
        </DefaultLayout>
      </ThemeProvider>
    );
  }

  // 레이아웃에 의존적인 페이지
  // Auth 상태에 의존적인 페이지
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <DynamicRouter />
      </DefaultLayout>
    </ThemeProvider>
  );
}

const AppWrapper = () => {
  const { Provider: AuthProvider, ctx, value } = useAuthContext();

  return (
    <QueryClientProvider client={client}>
      <AuthProvider value={value}>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
