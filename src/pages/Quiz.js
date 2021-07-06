import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dic, incrementDicElement} from "../data/questionsFB";
import QuizFrame from "../components/QuizFrame";
import bg from "../data/background.jpg";
import {api as quizActions } from "../redux-toolkit/modules/qnaList";
import {api as fishActions} from "../redux-toolkit/modules/fishList";
import {api as userActions} from "../redux-toolkit/modules/users";
import { Spin } from 'antd';

const Quiz = ({props, history}) => {
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.qnaList.is_loading);
  const qna_list = useSelector((state) => state.qnaList.qna_list);

  useEffect(() => {
    dispatch(quizActions.getQnaListFB());
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
    dispatch(fishActions.getOneFishFB(resultType))
    dispatch(userActions.addUserTypeFB(resultType)) //FB에 해당타입 카운트+1
  };

  return (
    <Wrap>
      {is_loading ? <><Spin /></> : <>
      <button onClick={() => history.replace("/")}>Home</button>
      <ProgressBar><Progressing index={index}/></ProgressBar>
      {question_data && <QuizFrame data={question_data[index - 1]} next={goToNextPage} index={index} increment={incrementDicElement} />}</>}
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

const ProgressBar = styled.div`
width: 80vw;
height: 20px;
background: white;
border-radius: 12px;
position: relative;
margin: 0 auto;
`;

const Progressing = styled.div`
position: absolute;
height: 20px;
width: ${(props) => props.index > 0 ? `${(props.index / 12) * 100}%` : "0%"};
background: blue;
border-radius: 12px;
`;
export default Quiz;
