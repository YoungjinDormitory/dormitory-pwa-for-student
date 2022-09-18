import {
  Button,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

interface Props {
  sourceMap: {
    title: string;
    sub?: Array<{
      title: string;
      to: string;
    }>;
    to?: string;
  };
}

/**
 * @param {Props} sourceMap
 * @description Header에서 쓰는 메뉴 들을 만드는 컴포넌트 입니다
 * {title : string, subTitle : Array<string>}
 * 의 객체로 이루어진 포맷의 데이터를 주면 메뉴를 만들어 줍니다.
 */
function MenuCreator({ sourceMap }: Props) {
  const { handleOpen, handleClose, open, anchorEl } = useMenu();
  const navigate = useNavigate();

  return (
    <NavItem>
      <Button
        fullWidth
        onClick={sourceMap.to ? () => navigate(sourceMap.to!) : () => {}}
        onMouseEnter={handleOpen}>
        <Typography color={"black"}>{sourceMap.title}</Typography>
      </Button>
      {sourceMap.sub && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}>
          {sourceMap.sub.map((sub, idx) => (
            <MenuItem
              key={idx}
              sx={{ width: "200px" }}
              onClick={sub.to ? () => navigate(sub.to!) : () => {}}>
              <ListItemText sx={{ textAlign: "center" }}>
                {sub.title}
              </ListItemText>
            </MenuItem>
          ))}
        </Menu>
      )}
    </NavItem>
  );
}
export default MenuCreator;

const NavItem = styled(Box)`
  display: inline-block;
  width: 33%;
  margin: auto;
  text-align: center;
  line-height: 64px;
`;
