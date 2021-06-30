import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text, Grid, Button } from "../elements/";
import {CheckOutlined} from "@ant-design/icons";

const QuizFrame = (props) => {
  const dispatch = useDispatch();
  let questionNum = "";

  console.log(props);


  if (props.index < 10) {
    questionNum = "0" + props.index.toString();
  }
  else {
    questionNum = props.index.toString();
  }

  useEffect(() => {}, []);

  return (<Grid textAlign="center">
  <Grid margin="150px auto 100px auto">
    <Text size="100px" bold lineHeight="120%">{questionNum}</Text>
    <br/>
    <Text size="30px" bold>{props.data.question}</Text>
  </Grid>
  <QuestionBox>
    <Button align padding="0 20px" size="24px" onClick={props.next}><CheckOutlined /> {props.data.answers[0].a}</Button>
    <Button align padding="0 20px" size="24px" onClick={props.next}><CheckOutlined /> {props.data.answers[1].b}</Button>
  </QuestionBox>
</Grid>);
};

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export default QuizFrame;
