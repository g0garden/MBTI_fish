import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Text, Grid, Button } from "../elements/";

const Quiz = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <Grid margin="150px auto 30px auto">
        <Text size="40px" bold>
          수면 아래
          <br />
          나의 본 모습은?
        </Text>
      </Grid>

      <Text size="18px">나도 모르는 나의 무의식 테스트</Text>
      <Button margin="50px">START</Button>
    </>
  );
};

export default Quiz;
