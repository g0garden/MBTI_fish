import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text, Grid, Button } from "../elements/";
import bg from "../data/background.jpg";

import { api as userActions } from "../redux-toolkit/modules/users";

const Main = ({ history, props }) => {
  const dispatch = useDispatch();
  const userNumbers = useSelector((state) => state.users.TotalUsers);

  useEffect(() => {
    dispatch(userActions.getUserTypeCnt());
  }, []);
  console.log(userNumbers);

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

  let countO = 0;
  ++countO;

  console.log(countO);

  return (
    <Wrap>
      <Title>
        수면 아래
        <br />
        나의 본 모습은?
      </Title>

      <Text size="18px">나도 모르는 나의 무의식 테스트</Text>

      <Button margin="220px auto auto" onClick={() => history.replace("/quiz")}>
        START
      </Button>

      <Text size="20px">
        지금까지
        <br />
        {count}명이 확인했어요! ...
      </Text>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* max-width: 375px; */
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  padding: 20vh 10px 5vh 10px;
  font-size: 40px;
  font-weight: 600;
`;

export default Main;
