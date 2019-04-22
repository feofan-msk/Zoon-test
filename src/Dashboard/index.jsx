import React from "react";
import { Flex } from "@rebass/grid";

import Card from "./Card";
import commentIcon from "../assets/comment-cloud.svg";
import unansweredCommentIcon from "../assets/unanswered-comment.svg";
import updateIcon from "../assets/update.svg";
import starIcon from "../assets/star.svg";

const S = {};

S.Card = props => (
  <Card
    {...props}
    m={1}
    flex={[
      "0 0 calc(100% - 4px)",
      "0 0 calc(50% - 4px)",
      "0 0 calc(25% - 4px)"
    ]}
  />
);

const Dashboard = () => (
  <Flex as="section" m={-1} mb={5} flexWrap={["wrap", null, "nowrap"]}>
    <S.Card number={165} description="отзывов" icon={commentIcon} />
    <S.Card
      number={21}
      description="неотвеченный отзыв"
      icon={unansweredCommentIcon}
    />
    <S.Card number={50} description="обновлений" icon={updateIcon} />
    <S.Card number={4.5} description="средний рейтинг" icon={starIcon} />
  </Flex>
);

export default Dashboard;
