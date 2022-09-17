import { Box } from "@mui/system";

import AppNav from "./BottomNavigation";
import Header from "./Header";

import type { IProps } from "../../../types/props.interface";
interface Props extends IProps {}

/**
 * @description 기본적인 레이아웃 처리 컴포넌트 입니다
 */
function DefaultLayout({ children }: Props) {
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

export default DefaultLayout;
