import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text, Grid, Button } from "../elements/";

const Main = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  // number to increment to
  // duration of count in seconds
  const number = "5000";

  // number displayed by component
  const [count, setCount] = useState("0");

  // const goToPage = (page) => {
  //   history.push(`/${page}`);
  // }

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, 2]);

  return (
    <Grid textAlign="center">
      <Grid margin="150px auto 30px auto">
        <Text size="40px" bold lineHeight="120%">
          수면 아래
          <br />
          나의 본 모습은?
        </Text>
      </Grid>

      <Text size="18px">나도 모르는 나의 무의식 테스트</Text>
      <Button margin="220px auto auto" onClick={() => history.push('/quiz')}>START</Button>

      <Text size="20px" margin="10px">
        지금까지
        <br />
        {count}명이 확인했어요!
      </Text>
    </Grid>
  );
};

export default Main;
