import React from "react";
import styled from "styled-components";

import Card from "./Card";

const S = {};
S.Card = styled(Card)`
  & + & {
    margin-top: 10px;
  }
`;

const Companies = ({ companies }) => {
  return (
    <section>
      {companies.map(company => (
        <S.Card
          isLoading={company.isLoading}
          title={company.title}
          statuses={company.statuses}
          tags={company.tags}
          rating={company.rating}
          comments={company.comments}
          needActions={company.needActions}
          updates={company.updates}
          key={company.title}
        />
      ))}
    </section>
  );
};

export default Companies;
