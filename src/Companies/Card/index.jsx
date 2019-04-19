import React, { Component } from "react";
import styled, { css } from "styled-components";

import tickIcon from "../../assets/tick.svg";
import processingIcon from "../../assets/processing.svg";
import StarIcon from "./StarIcon";
import bellIcon from "../../assets/bell.svg";
import Menu from "./Menu";

const S = {};
S.Card = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 18px 12px 30px;

  border-radius: 4px;
  border: 1px solid #e6ecf2;
  background-color: #ffffff;
  border-left: 4px solid #cedae6;

  ${props =>
    props.isActive &&
    css`
      border-left: 4px solid #5a39a7;
    `}
`;

S.Text = styled.span`
  color: #bbbcc4;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

S.Title = styled.h3`
  display: inline-block;
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  color: #bbbcc4;

  ${props =>
    props.isActive &&
    css`
      color: #222222;
    `};
`;

S.Status = styled(S.Text)`
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

S.Rating = styled(S.Text)`
  margin-left: 4px;

  ${props =>
    props.isRated &&
    css`
      color: #ffaa30;
      font-weight: 700;
    `}
`;

S.Comments = styled(S.Text)`
  color: #222222;

  ::before {
    content: "\00a0\00a0•\00a0\00a0";
  }
`;

S.RightSide = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
`;

S.Badge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: #ffaa30;

  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;

  ::before {
    display: inline-block;
    content: "";
    width: 12px;
    height: 16px;
    margin-right: 4px;

    background-image: url(${bellIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

S.UpdateMessage = styled.p`
  color: #694caf;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

S.Tooltip = styled.div`
  padding: 10px 20px;
  border: 1px solid #e8e8e8;
  background-color: #ffffff;
  border-radius: 3px;

  color: #694caf;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  cursor: pointer;

  ::after {
    content: " ";
    position: absolute;
    bottom: 97%;
    right: 29px;
    border-width: 11px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

  ::before {
    content: " ";
    position: absolute;
    bottom: 100%;
    right: 29px;
    border-width: 11px;
    border-style: solid;
    border-color: transparent transparent #e8e8e8 transparent;
  }
`;

S.CardStatus = styled.p`
  margin: 0;
  color: #bbbcc4;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange() {
    this.setState(({ isActive }) => ({
      isActive: !isActive
    }));
  }

  render() {
    return (
      <S.Card
        className={this.props.className}
        isActive={this.state.isActive && !this.props.isLoading}
      >
        <div>
          <S.Title isActive={this.state.isActive}>{this.props.title}</S.Title>

          {this.state.isActive ? (
            <span>
              {this.props.statuses &&
                this.props.statuses.map(status => (
                  <S.Status key={status}>{status}</S.Status>
                ))}

              <br />

              <S.TagsList>
                {this.props.tags &&
                  this.props.tags.map(tag => (
                    <S.Tag isLoading={tag.isLoading} key={tag.text}>
                      {tag.text}
                    </S.Tag>
                  ))}
              </S.TagsList>

              {this.props.isLoading ? (
                <S.Text>Поиск заведений: 15 из 78…</S.Text>
              ) : (
                <span>
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
                </span>
              )}
            </span>
          ) : (
            <S.CardStatus>Площадка отключена</S.CardStatus>
          )}
        </div>

        <S.RightSide>
          <Menu>
            <S.Tooltip onClick={this.handleStatusChange}>
              {this.state.isActive ? "Отключить" : "Включить"}
            </S.Tooltip>
          </Menu>

          {this.state.isActive && (
            <div>
              {!!this.props.updates && (
                <S.UpdateMessage>
                  {this.props.updates} обновления
                </S.UpdateMessage>
              )}

              {this.props.needActions && <S.Badge>Требует действий</S.Badge>}
            </div>
          )}
        </S.RightSide>
      </S.Card>
    );
  }
}

export default Card;
