import { Box, IconButton, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  Icon:
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
      })
    | (() => JSX.Element);
  text: string;
  color?: string;
  action: () => unknown;
}

export default function SettingCard({
  Icon,
  text,
  action,
  color = "black",
}: Props) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      width={100}
      height={100}
      border={1}
      borderRadius={2}
      m={1}
      borderColor="gainsboro">
      <IconButton sx={{ flex: 1, borderRadius: 1 }} onClick={action}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center"
          color={color}>
          <Icon />
          <Typography variant="caption">{text}</Typography>
        </Box>
      </IconButton>
    </Box>
  );
}
