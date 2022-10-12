import { useImageInput, useInput, useQueryOption } from "@hooks/index";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { mCreateBulletin } from "@utils/query/mutation/board";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";

function Write() {
  const titleProps = useInput("");
  const contentProps = useInput("");
  const imageProps = useImageInput();

  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [ip, setIp] = useState("");

  const { option, token } = useQueryOption();

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => {
        const currentIp = res.data.ip.split(".");

        const ipArr = [currentIp[2], currentIp[3]];
        setIp(ipArr.join("."));
      })
      .catch((err) => {});
  }, []);
  const variables = {
    title: titleProps.value,
    content: contentProps.value,
    images: imageProps.value,
    ip,
    token,
  };

  const { mutate: submit } = useMutation(["createBulletin"], mCreateBulletin, {
    ...option,
    onSuccess: () => {
      navigate("/board/annonymous");
    },
  });

  const cancel = () => {
    navigate(-1);
  };

  return (
    <Reservation>
      <Reservation.Title title="게시글 작성" />
      <Grid xs={12} item px={2} textAlign={"end"}>
        <IconButton
          onClick={() => {
            imageRef && imageRef.current?.click();
          }}
          color="primary"
          sx={{
            border: 1,
            borderRadius: 1,
          }}>
          <ImageOutlinedIcon />
        </IconButton>
        <input
          style={{ display: "none" }}
          ref={imageRef}
          type="file"
          accept="image/*"
          onChange={imageProps.onChange}
          multiple={false}
        />
        {imageProps.previewImgArr.map((el, idx) => {
          return (
            el && (
              <IconButton
                key={"image" + idx}
                onClick={() => imageProps.removeImageItem(idx)}>
                <img src={el} width={40}></img>
              </IconButton>
            )
          );
        })}
      </Grid>
      <Grid xs={12} item p={2}>
        <FormControl fullWidth>
          <OutlinedInput
            placeholder="제목을 입력하세요..."
            {...titleProps}></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item p={2}>
        <FormControl fullWidth>
          <OutlinedInput
            multiline
            rows={15}
            placeholder="내용을 입력하세요..."
            {...contentProps}></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid xs={12} item p={2}>
        <Box display={"flex"} justifyContent={"end"}>
          <Button onClick={cancel} variant="contained" color="disable">
            취소
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() =>
              titleProps.value && contentProps.value && submit(variables)
            }>
            제출
          </Button>
        </Box>
      </Grid>
    </Reservation>
  );
}

export default Write;
