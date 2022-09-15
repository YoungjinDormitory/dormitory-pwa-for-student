import AppNav from "./BottomNavigation";
import Header from "./Header";

import type { IProps } from "../../../types/props.interface";
interface Props extends IProps {}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <AppNav />
    </>
  );
}

export default Layout;
