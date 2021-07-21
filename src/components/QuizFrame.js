import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements/";
import { CheckOutlined } from "@ant-design/icons";
import bg from "../data/background.png";

const QuizFrame = (props) => {
  let questionNum = "";

  if (props.index < 10) {
    questionNum = "0" + props.index?.toString();
  } else {
    questionNum = props.index?.toString();
  }

  return (
    <Grid textAlign="center">
      <Grid margin="150px auto 100px auto">
        <Text size="100px" bold lineHeight="120%">
          {questionNum}
        </Text>
        <br />
        <Text size="30px" bold>
          {props.data?.question}
        </Text>
      </Grid>
      <QuestionBox>
        <Button
          align
          padding="0 20px"
          size="17px"
          onClick={() => {
            props?.next();
            props?.increment(props.data?.answers.a.type);
          }}
        >
          <CheckOutlined className="question" />
          {props.data?.answers.a.res}
        </Button>
        <Button
          align
          padding="0 20px"
          size="17px"
          onClick={() => {
            props?.next();
            props?.increment(props.data?.answers.b.type);
          }}
        >
          <CheckOutlined className="question" />
          {props.data?.answers.b.res}
        </Button>
      </QuestionBox>
    </Grid>
  );
};

const QuizWrap = styled.div`
  width: 100vw;
  /* height: 100vh; */
  /* max-width: 375px; */
  background-image: url(${bg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default QuizFrame;
