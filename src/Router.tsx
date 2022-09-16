import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error_404 from "./pages/error/404";

const modules = import.meta.glob("/src/pages/**/*.tsx");
const routes = Object.keys(modules).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "") // prefix削除
    .replace(/\[\.{3}.+\]/, "*") //
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: lazy(modules[route] as any) };
});

const DynamicRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Suspense
                fallback={
                  <Box
                    sx={{
                      display: "flex",
                      minHeight: "100vh",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <CircularProgress />
                  </Box>
                }>
                <Component />
              </Suspense>
            }
          />
        );
      })}
      <Route path="/*" element={<Error_404></Error_404>}></Route>
    </Routes>
  );
};

export default DynamicRouter;
