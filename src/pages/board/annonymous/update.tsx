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
import { mUpdateBulletin } from "@utils/query/mutation/board";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Reservation from "../../../components/reservation";

function Update() {
  const location = useLocation();
  const titleProps = useInput(location.state.detail.title);
  const contentProps = useInput(location.state.detail.content);
  const imageProps = useImageInput();

  const imageRef = useRef<HTMLInputElement>(null);

  //삭제해야할 이미지의 primarykey 배열
  const [shouldDeleteImages, setShouldDeleteImages] = useState<Array<number>>(
    []
  );
  const navigate = useNavigate();

  const { option, token } = useQueryOption();

  const { mutate: submit } = useMutation(["updateBulletin"], mUpdateBulletin, {
    ...option,
    onSuccess: () => navigate("/board/annonymous"),
  });

  const variables = {
    bulletin_id: location.state.detail.bulletin_id,
    title: titleProps.value,
    content: contentProps.value,
    images: imageProps.value,
    should_delete_img: shouldDeleteImages,
    token,
  };

  const cancel = () => {
    navigate(-1);
  };

  return (
    <Reservation>
      <Reservation.Title title="게시글 수정" />
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
        {location.state.image.map((el: any, idx: number) => {
          if (shouldDeleteImages.includes(el.image_id)) {
            return <span key={"none" + idx}></span>;
          }
          return (
            <IconButton
              key={"image" + idx}
              onClick={() => {
                setShouldDeleteImages((prev) => [...prev, el.image_id]);
              }}>
              <img src={el.path} width={40}></img>
            </IconButton>
          );
        })}
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
            onClick={() => submit(variables)}>
            제출
          </Button>
        </Box>
      </Grid>
    </Reservation>
  );
}

export default Update;
