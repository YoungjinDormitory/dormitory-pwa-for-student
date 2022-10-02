import { Box, Button, Grid, OutlinedInput, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useInput, useModal, useQueryOption } from "../../hooks";
import { mCreateComment, mDeleteComment } from "@utils/query/mutation/board";
import { getComments } from "@utils/query/query/board";
import { useEffect, useState } from "react";
import axios from "axios";
import { reloadComments } from "../../client";
import "dayjs/locale/ko";
import * as relT from "dayjs/plugin/relativeTime";
import DeleteModal from "../common/DeleteModal";
import CommentCard from "../common/card/CommentCard";
dayjs.locale("ko");

dayjs.extend(relT);

interface Props {
  bulletinId: number;
}

export default function Comments({ bulletinId }: Props) {
  const { option, token } = useQueryOption();
  const [ip, setIp] = useState("");
  const content = useInput("");

  const { mutate: submit } = useMutation(["createComment"], mCreateComment, {
    ...option,
    onSuccess: () => {
      content.onChange("");
      reloadComments();
    },
  });

  const { data: comments } = useQuery(
    ["getComments", String(bulletinId)],
    getComments,
    { refetchOnMount: false, refetchOnWindowFocus: false }
  );

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
    content: content.value,
    bulletin_id: bulletinId,
    ip,
    token,
  };

  return (
    <>
      <Grid item xs={12} p={2}>
        <Typography>댓글 {comments?.data.count}개</Typography>
        <Box display="flex">
          <OutlinedInput
            multiline
            fullWidth
            rows={3}
            {...content}
            placeholder="내용을 입력하세요..."></OutlinedInput>
          <Button
            variant="contained"
            color="disable"
            sx={{ boxShadow: "none" }}
            onClick={() => {
              submit(variables);
            }}>
            제출
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} p={2}>
        {comments?.data.rows.map((el: any, idx: number) => (
          <CommentCard {...el} key={el.comment_id + idx} />
        ))}
      </Grid>
    </>
  );
}
