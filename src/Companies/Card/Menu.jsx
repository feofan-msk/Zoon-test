import React, { Component } from "react";
import styled from "styled-components";

import MenuIcon from "./MenuIcon";

const S = {};
S.MenuIcon = styled(MenuIcon)`
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

class Menu extends Component {
  render() {
    return (
      <S.Menu>
        <S.MenuIcon />
        <S.Children>{this.props.children}</S.Children>
      </S.Menu>
    );
  }
}

export default Menu;
