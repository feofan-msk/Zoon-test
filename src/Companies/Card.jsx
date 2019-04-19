import React, { Component } from "react";
import styled, { css } from "styled-components";

import tickIcon from "../assets/tick.svg";
import processingIcon from "../assets/processing.svg";

const S = {};
S.Card = styled.div`
  padding: 16px 18px 12px 30px;
  border-radius: 4px;
  border: 1px solid #e6ecf2;
  background-color: #ffffff;
  border-left: 4px solid #5a39a7;
`;

S.Title = styled.h3`
  display: inline-block;
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
`;

S.Status = styled.span`
  color: #bbbcc4;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;

  ::before {
    content: "\00a0\00a0•\00a0\00a0";
  }
`;

S.TagsList = styled.div`
  display: flex;
`;

S.Tag = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #e6ecf2;

  color: #222222;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;

  ::before {
    display: inline-block;
    content: "";
    width: 12px;
    height: 12px;
    margin-right: 4px;

    background-image: url(${tickIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }

  & + & {
    margin-left: 10px;
  }

  ${props =>
    props.isLoading &&
    css`
      ::before {
        background-image: url(${processingIcon});
      }
    `}
`;

class Card extends Component {
  render() {
    return (
      <S.Card className={this.props.className}>
        <S.Title>{this.props.title}</S.Title>

        {this.props.statuses.map(status => (
          <S.Status>{status}</S.Status>
        ))}

        <br />

        <S.TagsList>
          {this.props.tags.map(tag => (
            <S.Tag isLoading={tag.isLoading}> {tag.text} </S.Tag>
          ))}
        </S.TagsList>
      </S.Card>
    );
  }
}

export default Card;
