import React from "react";
import styled from "styled-components";
import { Text, Button } from "../elements/";
import bg from "../data/images/background.png";
import { history } from "../redux-toolkit/configureStore";

const NotFound = () => {
  if (sessionStorage.getItem("type")) {
    sessionStorage.removeItem("type");
  }
  return (
    <Wrap>
      <Title>
        404
        <br />
        Page not found
      </Title>

      <Text size="16px">
        요청하신 페이지는 <br/> 찾을 수 없는  페이지입니다. <br/><br/>
        입력하신 주소가 맞는지 <br/>다시 한 번 확인해주세요.
      </Text>

      <Button margin="100px auto auto" onClick={() => history.replace("/")}>
        처음으로 돌아가기
      </Button>
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
  font-size: 30px;
  font-weight: 600;
`;

export default NotFound;
