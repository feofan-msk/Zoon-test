import React, { Component } from "react";
import styled, { css } from "styled-components";

import tickIcon from "../assets/tick.svg";
import processingIcon from "../assets/processing.svg";
import StarIcon from "./StarIcon";

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
  margin-bottom: 20px;
`;

S.Tag = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #e6ecf2;

  color: #222222;
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

S.Rating = styled.span`
  margin-left: 4px;
  font-size: 13px;
  line-height: 20px;
  color: #bbbcc4;
  font-weight: 400;

  ${props =>
    props.isRated &&
    css`
      color: #ffaa30;
      font-weight: 700;
    `}
`;

S.Comments = styled.span`
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;

  ::before {
    content: "\00a0\00a0•\00a0\00a0";
  }
`;

class Card extends Component {
  render() {
    return (
      <S.Card className={this.props.className}>
        <S.Title>{this.props.title}</S.Title>

        {this.props.statuses.map(status => (
          <S.Status key={status}>{status}</S.Status>
        ))}

        <br />

        <S.TagsList>
          {this.props.tags.map(tag => (
            <S.Tag isLoading={tag.isLoading} key={tag.text}>
              {tag.text}
            </S.Tag>
          ))}
        </S.TagsList>

        <StarIcon fill={this.props.rating ? "#ffaa30" : "#cedae6"} />

        <S.Rating isRated={!!this.props.rating}>
          {this.props.rating
            ? `${this.props.rating} из 5`
            : "Портал без рейтинга"}
        </S.Rating>

        {this.props.comments && (
          <S.Comments>
            {this.props.comments[0]} отзывов, {this.props.comments[1]}{" "}
            неотвеченных
          </S.Comments>
        )}
      </S.Card>
    );
  }
}

export default Card;
