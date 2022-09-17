import { useLocation } from "react-router-dom";
import Layout from "./components/layout";
import DynamicRouter from "./Router";

function App() {
  const location = useLocation();

  if (location.pathname.startsWith("/login")) {
    return <DynamicRouter />;
  }

  return (
    <Layout>
      <DynamicRouter />
    </Layout>
  );
}

export default App;
