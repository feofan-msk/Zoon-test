import React from "react";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import Companies from "./Companies";

const S = {};
S.App = styled.div`
  padding: 28px 64px 72px;
  background: white;
`;

const App = ({ companies }) => (
  <S.App>
    <Dashboard />

    <Companies companies={companies} />
  </S.App>
);

export default App;
