import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements/";
import {CheckOutlined} from "@ant-design/icons";

const QuizFrame = (props) => {
  let questionNum = "";

  if (props.index < 10) {
    questionNum = "0" + props.index?.toString();
  }
  else {
    questionNum = props.index?.toString();
  }

  return (<Grid textAlign="center">
  <Grid margin="150px auto 100px auto">
    <Text size="100px" bold lineHeight="120%">{questionNum}</Text>
    <br/>
    <Text size="30px" bold>{props.data?.question}</Text>
  </Grid>
  <QuestionBox>
    <Button align padding="0 20px" size="24px" 
    onClick={()=> {
      props?.next(); 
      props?.increment(props.data?.answers.a.type);}}>
        <CheckOutlined /> 
        {props.data?.answers.a.res}
    </Button>
    <Button align padding="0 20px" size="24px" 
    onClick={()=> {
      props?.next(); 
      props?.increment(props.data?.answers.b.type);}}>
        <CheckOutlined /> 
        {props.data?.answers.b.res}
    </Button>
  </QuestionBox>
</Grid>);
};

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export default QuizFrame;
