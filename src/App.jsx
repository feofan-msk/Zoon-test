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
  breakpoints: ["30em", "60em"],
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
};

const App = ({ companies }) => (
  <ThemeProvider theme={theme}>
    <S.App pt={[3, null, 5]} px={[3, null, 6]}>
      <Dashboard />

      <Companies companies={companies} />
    </S.App>
  </ThemeProvider>
);

export default App;
