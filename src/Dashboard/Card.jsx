import React from "react";
import styled from "styled-components";

const S = {};
S.Card = styled.div`
  flex: 1 1 25%;

  padding: 16px 14px 16px 26px;
  border-radius: 4px;
  background-color: #4a0594;
  background-image: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: top 18px right 18px;
  color: #ffffff;
  overflow-wrap: anywhere;
  cursor: pointer;

  & + & {
    margin-left: 5px;
  }
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

const Card = ({ number, icon, description }) => (
  <S.Card background={icon}>
    <S.Title>{number}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Card>
);

export default Card;
