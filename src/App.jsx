import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Box } from "@rebass/grid";

import Dashboard from "./Dashboard";
import Companies from "./Companies";

const S = {};
S.App = styled(Box)`
  margin: auto;
  padding-bottom: 72px;
  max-width: 1200px;
`;

const theme = {
  breakpoints: ["60em"]
};

const App = ({ companies }) => (
  <ThemeProvider theme={theme}>
    <S.App pt={[2, 4]} px={[2, 5]}>
      <Dashboard />

      <Companies companies={companies} />
    </S.App>
  </ThemeProvider>
);

export default App;
