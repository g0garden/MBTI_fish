import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import {questions} from "../data/questions";

import QuizFrame from "../components/QuizFrame";

const Quiz = (props) => {

  const data = questions.map((d, idx) => {return {...d, idx: idx}});

  console.log(data);

//   function shuffleArray(arr) {
//     let currentIndex = arr.length,  randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [arr[currentIndex], arr[randomIndex]] = [
//       arr[randomIndex], arr[currentIndex]];
//   }
// }

// shuffleArray(data);

// console.log(data);

  const [index, incrementIndex] = useState(1);
 
  const goToNextPage = () => {
    if (index === 12) {
      window.alert("That's enough!");
      return;
    }
    incrementIndex(index + 1);
  }
  // const dispatch = useDispatch();

  return (<><QuizFrame data={data[index-1]} next={goToNextPage} index={index}/></>);
};

export default Quiz;
