import AppNav from "./BottomNavigation";
import Header from "./Header";

import type { IProps } from "../../../types/props.interface";
import { Box } from "@mui/system";
interface Props extends IProps {}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box
        sx={{
          pb: 7,
        }}>
        {children}
      </Box>
      <AppNav />
    </>
  );
}

export default Layout;
