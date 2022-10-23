import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { reloadComments } from "../../../client";
import { useInput, useModal, useQueryOption } from "../../../hooks";
import { mDeleteComment, mUpdateComment } from "@utils/query/mutation/board";
import DeleteModal from "../DeleteModal";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
interface Props {
  ip: string;
  comment_id: number;
  create_date: Date;
  content: string;
  std_id: string;
  myId: string;
}

export default function CommentCard({
  ip,
  create_date,
  content,
  comment_id,
  std_id,
  myId,
}: Props) {
  const { option, token } = useQueryOption();
  const deleteModal = useModal();
  const updateCard = useModal();
  const updateContent = useInput(content);

  const { mutate: updateComment } = useMutation(
    ["updateComment"],
    mUpdateComment,
    {
      ...option,
      onSuccess: () => {
        reloadComments();
      },
    }
  );

  const { mutate: deleteComment } = useMutation(
    ["deleteComment"],
    mDeleteComment,
    {
      ...option,
      onSuccess: () => {
        reloadComments();
      },
    }
  );

  return (
    <>
      <Box width="100%">
        <Box display="flex" justifyContent={"space-between"}>
          <Box display="flex">
            <Typography mr="5px" variant="caption">
              익명( {ip} )
            </Typography>
            <Typography variant="caption">
              {dayjs(create_date).fromNow()}
            </Typography>
          </Box>

          {myId && myId === String(std_id) && (
            <Box display="flex">
              <Button
                size="small"
                color="inherit"
                onClick={() =>
                  updateCard.open ? updateCard.onClose() : updateCard.onOpen()
                }>
                <Typography variant="caption">수정</Typography>
              </Button>
              <Button
                size="small"
                color="inherit"
                onClick={() => deleteModal.onOpen()}>
                <Typography variant="caption">삭제</Typography>
              </Button>
            </Box>
          )}
        </Box>
        <Box p={2}>
          <Typography variant="caption">{content}</Typography>
        </Box>
      </Box>
      {myId && myId === String(std_id) && (
        <>
          <Box pl={4} display={`${updateCard.open ? "flex" : "none"}`}>
            <SubdirectoryArrowRightIcon sx={{ mt: 2 }} />
            <Box flex="1">
              <Typography variant="caption">댓글 수정</Typography>
              <Box display="flex">
                <OutlinedInput
                  multiline
                  fullWidth
                  rows={3}
                  {...updateContent}
                  placeholder="내용을 입력하세요..."></OutlinedInput>
                <Button
                  variant="contained"
                  color="disable"
                  sx={{ boxShadow: "none" }}
                  onClick={() => {
                    token &&
                      updateComment({
                        comment_id,
                        content: updateContent.value,
                        token,
                      });
                    updateCard.onClose();
                  }}>
                  제출
                </Button>
              </Box>
            </Box>
          </Box>
          <DeleteModal
            {...deleteModal}
            submit={() =>
              token &&
              deleteComment({
                comment_id: comment_id,
                token,
              })
            }
          />
        </>
      )}
    </>
  );
}
