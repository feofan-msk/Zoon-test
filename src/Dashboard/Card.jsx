import React from "react";
import styled from "styled-components";
import { Box } from "@rebass/grid";

const S = {};
S.Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-right: 80px;

  border-radius: 4px;
  background-color: #4a0594;
  background-image: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: top 18px right 18px;
  color: #ffffff;
  overflow-wrap: break-word;
  cursor: pointer;
`;

S.Title = styled.h4`
  margin: 0 0 4px;
  font-size: 25px;
  font-weight: 700;
`;

S.Description = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
`;

const Card = props => {
  const { icon, number, description } = props;
  return (
    <S.Card {...props} background={icon}>
      <S.Title>{number}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default Card;
