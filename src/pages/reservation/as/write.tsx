import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Input,
  OutlinedInput,
  Typography,
} from "@mui/material";

function Write() {
  return (
    <Grid container maxWidth={"md"} margin={"auto"}>
      <Grid xs={12} item borderBottom={3} borderColor={"#BBDEFB"}>
        <Typography variant="h6" sx={{ p: 2, fontWeight: 700 }}>
          A/S 신청
        </Typography>
      </Grid>
      <Grid xs={12} item sx={{ p: 2 }}>
        <FormControl fullWidth>
          <OutlinedInput placeholder="제목을 입력하세요..."></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item sx={{ p: 2 }}>
        <FormControl fullWidth>
          <OutlinedInput
            multiline
            maxRows={15}
            rows={15}
            placeholder="내용을 입력하세요..."></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item sx={{ p: 2 }}>
        <Box display={"flex"} justifyContent={"end"}>
          <Button variant="contained">취소</Button>
          <Button variant="contained" sx={{ ml: 2 }}>
            제출
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Write;
