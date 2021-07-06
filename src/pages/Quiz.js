import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dic, incrementDicElement } from "../data/questionsFB";
import QuizWrap from "../components/QuizWrap";
import bg from "../data/background.jpg";
import { api as quizActions } from "../redux-toolkit/modules/qnaList";
import { api as fishActions } from "../redux-toolkit/modules/fishList";
import { api as userActions } from "../redux-toolkit/modules/users";
import { Spin } from "antd";

const Quiz = ({ props, history }) => {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <QuizWrap />
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
