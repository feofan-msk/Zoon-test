import React from "react";
import styled from "styled-components";

import MenuIcon from "./MenuIcon";

const S = {};
S.MenuIcon = styled(MenuIcon)`
  box-sizing: content-box;
  padding: 6px;
  z-index: 1;
  position: relative;

  :hover path {
    fill: #5a39a7;
  }
`;
S.Menu = styled.div`
  position: relative;
`;
S.Children = styled.div`
  position: absolute;
  top: 42px;
  right: -32px;

  visibility: hidden;

  ${S.MenuIcon}:hover+&, :hover {
    visibility: visible;
  }
`;

const Menu = ({ children }) => (
  <S.Menu>
    <S.MenuIcon />
    <S.Children>{children}</S.Children>
  </S.Menu>
);

export default Menu;
