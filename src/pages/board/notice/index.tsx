import { useMediaQuery, useTheme } from "@mui/material";
import DesctopBoard from "../../../components/board/DesctopBoard";
import MobileBoard from "../../../components/board/MobileBoard";

function Notice() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* 데스크탑 환경 */}
      {!matches && <DesctopBoard />}
      {/* 모바일 환경 */}
      {matches && <MobileBoard />}
    </>
  );
}

export default Notice;
