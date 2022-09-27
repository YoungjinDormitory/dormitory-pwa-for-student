import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { IProps } from "../../../types/props.interface";
import iconLoader from "../../icon/helper";

interface Props extends IProps {
  forwardIcon: string;
  title: string;
  backwardIcon?: string;
  description: string;
  to: string;
}

/**
 *
 * @description paging 처리 카드
 */
function NavCard(props: Props) {
  const { forwardIcon, title, description, backwardIcon, to } = props;

  const navigate = useNavigate();
  const ForwardIcon = iconLoader(forwardIcon);
  const BackwardIcon = iconLoader(backwardIcon!);

  return (
    <Card
      sx={{
        display: "flex",
        cursor: "pointer",
        "&:active": {
          backgroundColor: "#BBDEFB",
        },
      }}
      onClick={() => {
        navigate(to);
      }}>
      <Box
        sx={{
          display: "flex",
          flexBasis: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Suspense fallback="hihi~">
          <ForwardIcon />
        </Suspense>
      </Box>
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <CardContent>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </CardContent>
      </Box>
      {BackwardIcon && (
        <Box
          sx={{
            display: "flex",
            flexBasis: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Suspense>
            <BackwardIcon color="primary" />
          </Suspense>
        </Box>
      )}
    </Card>
  );
}

export default NavCard;
