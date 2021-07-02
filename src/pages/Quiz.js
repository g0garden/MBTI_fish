import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Text, Grid, Button } from "../elements/";

import { shuffled_array as questions, qnaList_data, dic, incrementDicElement, FB_test } from "../data/questionsFB";

import QuizFrame from "../components/QuizFrame";

import bg from "../data/background.jpg";

const Quiz = (props) => {
  let date = null;

  function setDate(arr) {
    date = arr
  }
  questions.then(resolve => {
    setDate(resolve);
    console.log(date);
  });

  // const data = date.map((d, idx) => {
  //   return { ...d, idx: idx };
  // });

  //console.log(data);

  const [index, incrementIndex] = useState(1);

  const goToNextPage = () => {
    if (index === 12) {
      window.alert("That's enough!");
      getType(Object.values(dic));
      return;
    }
    incrementIndex(index + 1);
  };
  // const dispatch = useDispatch();

  const getType = (arr) => {
    const types = ["E", "I", "N", "S", "T", "F", "P", "J"];
    let answer = [];

    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] > arr[i + 1]) {
        answer.push(types[i]);
        continue;
      }
      answer.push(types[i + 1]);
      console.log("답", answer);
    }
    console.log(answer.join(""));
  };

  console.log(dic);

  return (
    <Wrap>
      <button onClick={() => props.history.replace("/")}>Home</button>
      <QuizFrame data={date[index - 1]} next={goToNextPage} index={index} increment={incrementDicElement} />
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
