import AppNav from "./BottomNavigation";
import Header from "./Header";
import Main from "./Main";

import type { IProps } from "@type/props.interface";
interface Props extends IProps {}

/**
 * @description 기본적인 레이아웃 처리 컴포넌트 입니다
 */
function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <AppNav />
    </>
  );
}

export default DefaultLayout;
