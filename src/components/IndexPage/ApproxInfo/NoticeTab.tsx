import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

function NoticeTab() {
  return (
    <Box>
      <Card sx={{ width: "90%", mx: "30px", my: "10px" }}>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" sx={{ fontWeight: 700 }}>
            *공지 생활관 입주 정보
          </Typography>
          <Typography sx={{ textAlign: "end" }} variant="subtitle2">
            날짜 : 2022-09-21
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
            impedit maiores hic accusamus possimus a quia, veritatis vitae
            beatae sequi nemo quibusdam dolor, quos exercitationem sapiente
            deleniti nobis ullam!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NoticeTab;
