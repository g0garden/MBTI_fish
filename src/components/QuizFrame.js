import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text, Grid, Button } from "../elements/";
import {CheckOutlined} from "@ant-design/icons";

const QuizFrame = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (<Grid textAlign="center">
  <Grid margin="150px auto 100px auto">
    <Text size="100px" bold lineHeight="120%">01</Text>
    <br/>
    <Text size="30px" bold>질문</Text>
  </Grid>
  <QuestionBox>
    <Button align padding="0 20px" size="24px"><CheckOutlined /> 담다디담</Button>
    <Button align padding="0 20px" size="24px"><CheckOutlined /> 디디리담</Button>
  </QuestionBox>
</Grid>);
};

const QuestionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export default QuizFrame;
