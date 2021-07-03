import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Text, Grid, Button } from "../elements/";
import bg from "../data/background.jpg";
import {api as fishActions} from "../redux-toolkit/modules/fishList";
import { firestore } from "../shared/firebase";

const Result = (props) => {
  const fishResult_data = useSelector((state) => state.fishList.fishOneResult)

  useEffect(() => {
    //console.log("찍히는걸까?", fishResult_data)
  },[]);

  const shareButton = useRef();

  if (typeof navigator.share === "undefined") {
    // 공유하기 버튼을 지원하지 않는 경우에 대한 폴백 처리
    shareButton.hidden = true;
  }

  // shareButton.addEventListener("click", async () => {
  //   try {
  //     await navigator.share({
  //       title: "수면 아래 내 모습은?",
  //       text: "수면 아래 내 모습은 어떤 모습일지 확인해보세요!",
  //       url: `https://localhost:3000/`,
  //     });
  //     console.log("공유 성공");
  //   } catch (e) {
  //     console.log("공유 실패");
  //   }
  // });

  return (
    <Wrap>
      <br />
      { fishResult_data && <Fish FishOneType={fishResult_data}/>}
      <Other></Other>
      <div>페북</div>
      {/* <Button ref={shareButton}>공유하기</Button> */}
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

const Other = styled.div``;

export default Result;
