import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { shuffled_array as questions,dic, incrementDicElement} from "../data/questionsFB";
import QuizFrame from "../components/QuizFrame";
import bg from "../data/background.jpg";
import {api as quizActions } from "../redux-toolkit/modules/qnaList";
import {api as fishActions} from "../redux-toolkit/modules/fishList";
import {api as userActions} from "../redux-toolkit/modules/users";

const Quiz = ({props, history}) => {

  const dispatch = useDispatch();
  const question_data = useSelector((state) => state.qnaList.question);

  useEffect(() => {
    //Q&A_List FB에서 불러오기
    dispatch(quizActions.getQuestionAX());
  },[]);

  const [index, incrementIndex] = useState(1);

  const goToNextPage = () => {
    if (index === 12) {
      window.alert("결과보기")
      goToResultPage()
      getType(Object.values(dic));
      return;
    }
    incrementIndex(index + 1);
  };

  const goToResultPage = () =>{
    history.replace('/result')
  }

  const getType = (arr) => {
    const types = ["E", "I", "N", "S", "T", "F", "P", "J"];
    let answer = [];

    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] > arr[i + 1]) {
        answer.push(types[i]);
        continue;
      }
      answer.push(types[i + 1]);
    }
    let resultType = answer.join("")
    //유저의 타입에 맞는 물고기 유형 FB에서 불러오기
    dispatch(fishActions.getFishAX(resultType))
    dispatch(userActions.addUserType(resultType))
  };

  return (
    <Wrap>
      <button onClick={() => props.history.replace("/")}>Home</button>
      {question_data && <QuizFrame data={question_data[index - 1]} next={goToNextPage} index={index} increment={incrementDicElement} />}
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
