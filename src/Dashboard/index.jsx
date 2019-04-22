import React from "react";
import styled from "styled-components";

import Card from "./Card";
import commentIcon from "../assets/comment-cloud.svg";
import unansweredCommentIcon from "../assets/unanswered-comment.svg";
import updateIcon from "../assets/update.svg";
import starIcon from "../assets/star.svg";

const S = {};
S.Dashboard = styled.section`
  display: flex;
  margin: -2px;
  margin-bottom: 36px;
`;

const Dashboard = () => (
  <S.Dashboard>
    <Card number={165} description="отзывов" icon={commentIcon} />
    <Card
      number={21}
      description="неотвеченный отзыв"
      icon={unansweredCommentIcon}
    />
    <Card number={50} description="обновлений" icon={updateIcon} />
    <Card number={4.5} description="средний рейтинг" icon={starIcon} />
  </S.Dashboard>
);

export default Dashboard;
