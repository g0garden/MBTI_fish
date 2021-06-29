import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import QuizFrame from "../components/QuizFrame";

const Quiz = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (<><QuizFrame/></>);
};

export default Quiz;
