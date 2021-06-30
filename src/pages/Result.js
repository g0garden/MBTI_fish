import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import Fish from "../components/Fish";

import {firestore} from "../shared/firebase";
import { Text, Grid, Button } from "../elements/";

const Result = (props) => {
  const dispatch = useDispatch();
  //
  useEffect(() => {}, []);

  const shareButton = useRef();

  if (typeof navigator.share === "undefined") {
    // 공유하기 버튼을 지원하지 않는 경우에 대한 폴백 처리
    shareButton.hidden = true;
  }

  shareButton.addEventListener("click", async () => {
    try {
      await navigator.share({
        title: "수면 아래 내 모습은?",
        text: "수면 아래 내 모습은 어떤 모습일지 확인해보세요!",
        url: `https://localhost:3000/`,
      });
      console.log("공유 성공");
    } catch (e) {
      console.log("공유 실패");
    }
  });

  return (
    <>
      <br />
      <Fish />
      <div>페북</div>
      <div ref={shareButton}>공유하기</div>
    </>

  );
};

export default Result;
