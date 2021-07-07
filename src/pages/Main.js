import React from "react";
import styled from "styled-components";
import { Text, Button } from "../elements/";
import bg from "../data/background.jpg";

const Main = ({ history }) => {

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
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  // height: 100vh;
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
