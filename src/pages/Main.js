import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Text, Grid, Button } from "../elements/";

const Main = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Grid textAlign="center">
      <Grid margin="100px auto 30px auto">
        <Text size="40px" bold lineHeight="120%">
          수면 아래
          <br />
          나의 본 모습은?
        </Text>
      </Grid>

      <Text size="18px">나도 모르는 나의 무의식 테스트</Text>
      <Button margin="250px auto auto">START</Button>
    </Grid>
  );
};

export default Main;
