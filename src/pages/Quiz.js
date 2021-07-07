import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import QuizWrap from "../components/QuizWrap";
import bg from "../data/background.jpg";

const Quiz = (props) => {
  return (
    <Wrap>
      <QuizWrap {...props} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  /* height: 100vh; */
  /* max-width: 375px; */
  background-image: url(${bg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

export default Quiz;
