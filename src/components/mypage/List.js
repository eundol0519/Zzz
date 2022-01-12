import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";

import path from "../../static/images/mypage/arrow_R_W.svg";
import { Icon } from "../../elements";

const List = (props) => {
  const { _onClick, children, icon, src } = props;
  return (
    <ListBox onClick={_onClick}>
      <ListTitle>
        <Icon src={icon} marginR="10px"></Icon>
        {children}
      </ListTitle>
      <Icon src={src ? src : path}></Icon>
    </ListBox>
  );
};
List.defaultProps = {
  children: null,
  _onClick: () => {},
};

const ListBox = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 ${({ theme }) => theme.paddings.xxxxl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
const ListTitle = styled.div`
  display: flex;
  align-items: center;
`;

export default List;
