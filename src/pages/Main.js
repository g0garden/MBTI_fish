import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text, Grid, Button } from "../elements/";


const Main = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  // number to increment to
  const number = "10";

  const [count, setCount] = useState("0");

  // const goToPage = (page) => {
  //   history.push(`/${page}`);
  // }

  useEffect(() => {
    let start = 0;
    // 숫자가 크면 뒤에 자리 버리고 앞에 3자리수만 변화하도록
    // 12345678 이라면 123 부분만 1, 2, 3 ...122, 123
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // 숫자 증가 초단위 찾기
    // 숫자가 작다면 작은 숫자가 2초내로 천천히 오르고
    // 숫자가 크면 2초내로 빨리 오름
    let incrementTime = (2 / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3)); // 오르는 숫자 + 나머지 자른 숫자
      if (start === end) clearInterval(timer); // 오르던 숫자가 숫자 맨 앞에 자른 3자리 숫자와 같다면 timer 함수 지우기
    }, incrementTime); // 증가 초단위마다 체크하는 setInterval

    // 숫자가 바뀌면 숫자가 다시 오름
  }, [number]);

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

      <Button margin="220px auto auto" onClick={() => history.replace('/quiz')}>START</Button>


      <Text size="20px">
        지금까지
        <br />
        {count}명이 확인했어요!
      </Text>
    </>
  );
};

export default Main;
