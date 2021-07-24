import React from "react";
import styled from "styled-components";
import QuizWrap from "../components/QuizWrap";
import bg from "../data/images/bg_qna.png";

const Quiz = (props) => {
  if (sessionStorage.getItem("type") !== null) {
    sessionStorage.removeItem("type");
  }

  return (
    <Wrap>
      <QuizWrap {...props} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 50vw;
  height: 100vh;
  /* max-width: 375px; */
  background-image: url(${bg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  padding: 28px 24px;
  margin: 0 auto;

  @media (max-width: 1024px) { 
    width: 100vw;
  }
`;

export default Quiz;
