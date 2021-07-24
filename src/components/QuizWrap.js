import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dic, incrementDicElement, resetDic } from "../data/questionsFB";
import QuizFrame from "../components/QuizFrame";
import { api as quizActions } from "../redux-toolkit/modules/qnaList";
import { api as fishActions } from "../redux-toolkit/modules/fishList";
import { api as userActions } from "../redux-toolkit/modules/users";
import { Spin } from "antd";

const QuizWrap = (props) => {
  const history = props.history;
  const dispatch = useDispatch();
  const is_loading = useSelector((state) => state.qnaList.is_loading);
  const qna_list = useSelector((state) => state.qnaList.qna_list);

  useEffect(() => {
    dispatch(quizActions.getQnaListFB());
  }, []);

  const [index, incrementIndex] = useState(1);

  if (index === 1) {
    resetDic();
  }

  if (sessionStorage.getItem("type") && index !== 12) {
    sessionStorage.removeItem("type");
  }

  //console.log(index);

  const goToNextPage = () => {
    if (index === 12) {
      window.alert("결과보기");
      //goToResultPage();
      getType(Object.values(dic));
      return;
      // console.log(fish_result, fish_result.name);
      // return
    }
    incrementIndex(index + 1);
  };

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
    let resultType = answer.join("");
    //유저의 타입에 맞는 물고기 유형 FB에서 불러오기

    // 결과를 얻는 동시에 세션에다가 MBTI 타입을 저장해준다.
    sessionStorage.setItem("fish", resultType);
    dispatch(fishActions.getOneFishFB(resultType));
    dispatch(userActions.addUserTypeFB(resultType)); //FB에 해당타입 카운트+1
  };

  // const goToResultPage = () => {
  //   history.push("/result/:fishname");
  // };

  return (
    <>
      {is_loading ? (
        <SpinWrap>
          <Spin />
        </SpinWrap>
      ) : (
        <>
          {/* <button onClick={() => history.replace("/")}>Home</button> */}
          <ProgressBar>
            <Progressing index={index} />
          </ProgressBar>
          {qna_list && <QuizFrame data={qna_list[index - 1]} next={goToNextPage} index={index} increment={incrementDicElement} />}
        </>
      )}
    </>
  );
};

const SpinWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 80%;
  height: 20px;
  background: rgb(117, 21, 196);
  border-radius: 12px;
  position: relative;
  margin: 0 auto;
`;

const Progressing = styled.div`
  position: absolute;
  height: 20px;
  width: ${(props) => (props.index ? `${(props.index / 12) * 100}%` : "0%")};
  background: yellow;
  border-radius: 12px;
`;

export default QuizWrap;
