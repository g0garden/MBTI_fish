import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import {questions, dic, incrementDicElement} from "../data/questions";

import QuizFrame from "../components/QuizFrame";

const Quiz = (props) => {

  const data = questions.map((d, idx) => {return {...d, idx: idx}});

  console.log(data);

  const [index, incrementIndex] = useState(1);
 
  const goToNextPage = () => {
    if (index === 12) {
      window.alert("That's enough!");
      getType(Object.values(dic));
      return;
    }
    incrementIndex(index + 1);
  }
  // const dispatch = useDispatch();

  const getType = (arr) => {
    const types = ["E", "I", "N", "S", "T", "F", "P", "J"]
    let answer = [];
    
    for (let i = 0; i < arr.length; i+=2) {
      if (arr[i] > arr[i+1]) {
        answer.push(types[i]);
        continue;
      }
      answer.push(types[i+1]);
    }
    console.log(answer.join(""));
  }

  console.log(dic);

  return (<>
  <button onClick={()=> props.history.replace("/")}>Home</button>
  <QuizFrame data={data[index-1]} next={goToNextPage} index={index} increment={incrementDicElement}/>
  </>);
};

export default Quiz;
