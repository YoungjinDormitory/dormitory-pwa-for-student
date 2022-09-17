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

interface Props {
  sourceMap: {
    title: string;
    subTitle?: Array<string>;
  };
}

/**
 * @param {Props} sourceMap
 * @description Header에서 쓰는 메뉴 들을 만드는 컴포넌트 입니다
 * {title : string, subTitle : Array<string>}
 * 의 객체로 이루어진 포맷의 데이터를 주면 메뉴를 만들어 줍니다.
 */
function MenuCreator({ sourceMap }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <NavItem>
      <Button fullWidth onClick={handleClick} onMouseEnter={handleClick}>
        <Typography color={"black"}>{sourceMap.title}</Typography>
      </Button>
      {sourceMap.subTitle && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}>
          {sourceMap.subTitle.map((subTitle, idx) => (
            <MenuItem key={idx} sx={{ width: "200px" }} onClick={handleClose}>
              <ListItemText sx={{ textAlign: "center" }}>
                {subTitle}
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
