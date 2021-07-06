import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Text, Grid, Button } from "../elements/";
import bg from "../data/background.jpg";
import {api as fishActions} from "../redux-toolkit/modules/fishList";
import {api as userActions} from "../redux-toolkit/modules/users";
import { firestore } from "../shared/firebase";


const Result = (props) => {
  const dispatch = useDispatch();
  const fishResult_data = useSelector((state) => state.fishList.fishOneResult)
  const TotalUserType_data = useSelector((state) => state.users.TotalUsers)

  useEffect(() => {
    dispatch(userActions.getUserTypeCnt());
    console.log("뭔데", TotalUserType_data);
  },[]);

  const share_url = "https://www.notion.so/g0garden/79c1b0ce40c045aea2dbffb34b7a49ea";

  const copyToClipboard = () => {
    let t = document.createElement("textarea");
    t.value = share_url;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    window.alert("주소가 복사되었습니다!");
  };

  const shareButton = useRef();

  // if (typeof navigator.share === "undefined") {
  //   // 공유하기 버튼을 지원하지 않는 경우에 대한 폴백 처리
  //   shareButton.hidden = true;
  // }

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

      <Button ref={shareButton} onClick={copyToClipboard}>
        공유하기
      </Button>

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
