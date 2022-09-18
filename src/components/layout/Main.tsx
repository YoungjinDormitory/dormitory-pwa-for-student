import { Box, BoxProps, styled } from "@mui/material";

const Main = styled(Box)<BoxProps>`
  flex: 1;
  padding-bottom: 2px;
  ${(props: any) => props.theme.breakpoints.down("sm")} {
    padding-bottom: 56px;
  }
`;

export default Main;
