import React, { Component } from "react";
import styled from "styled-components";

const S = {};
S.Card = styled.div`
  flex: 1 1 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 14px 16px 26px;
  border-radius: 4px;
  background-color: #4a0594;
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

S.Icon = styled.img`
  align-self: flex-start;
`;

class Card extends Component {
  render() {
    return (
      <S.Card>
        <div>
          <S.Title>{this.props.number}</S.Title>
          <S.Description>{this.props.description}</S.Description>
        </div>

        <S.Icon src={this.props.icon} alt="card icon" />
      </S.Card>
    );
  }
}

export default Card;
