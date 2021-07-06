import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Button } from "../elements/";
import bg from "../data/background.jpg";
import { api as userActions } from "../redux-toolkit/modules/users";

const Result = (props) => {
  const dispatch = useDispatch();
  const fish_result = useSelector((state) => state.fishList.onefish_result);

  useEffect(() => {
    dispatch(userActions.getTotalUserCntFB());
  }, []);

  //현재 결과페이지의 URL - 도메인/결과 물고기의 usrParam값
  const share_url = "asdf";

  const copyToClipboard = () => {
    let t = document.createElement("textarea");
    t.value = share_url;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    window.alert("주소가 복사되었습니다!");
  };

  useEffect(() => {
    // SDK 사용법에는 Kakao.init~어쩌구로 되어있으나 window 객체 찾아서 설정을 해야함
    window.Kakao.init("e31c489577057b521747d2d2be3ce3d5");
  }, []);

  const sendLink = () => {
    console.log(window.Kakao.isInitialized());
    window.Kakao.Link.sendScrap({
      requestUrl: "https://developers.kakao.com",
    });
  };

  return (
    <Wrap>
      <br />
      {fish_result && <Fish OneFishType={fish_result} />}
      <Other></Other>
      <div>페북</div>

      <Button onClick={copyToClipboard}>공유하기</Button>
      <Button round onClick={sendLink}></Button>
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
