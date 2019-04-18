import React, { Component } from "react";
import styled from "styled-components";

import Dashboard from "./Dashboard";

const S = {};
S.App = styled.div`
  padding: 28px 64px 72px;
  background: white;
`;

class App extends Component {
  render() {
    return (
      <S.App>
        <Dashboard />
      </S.App>
    );
  }
}

export default App;
