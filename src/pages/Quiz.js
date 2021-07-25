import React from "react";
import styled from "styled-components";
import QuizWrap from "../components/QuizWrap";
import bg from "../data/images/bg_qna.png";
import Container from "../elements/Container";
import Theme from "../shared/theme";

const Quiz = (props) => {
  if (sessionStorage.getItem("type") !== null) {
    sessionStorage.removeItem("type");
  }

  return (
    <Container>
      <Wrap>
        <QuizWrap {...props} />
      </Wrap>
    </Container>
  );
};

const FFFF = styled.div`
  width: 100vw;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrap = styled.div`
  height: 100vh;
  margin: auto;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 18px 20px;
  @media only screen and (min-width: 1025px) {
    // background-size: contain;
    max-width: 500px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 120px 100px;
  }

  @media only screen and (max-width: 750px) {
    padding: 18px 20px;
  }

  overflow: hidden;
`;

export default Quiz;
