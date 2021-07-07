import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Button } from "../elements/";
import bg from "../data/background.jpg";
import { Spin } from "antd";
import {dic} from "../data/questionsFB"

const Result = (props) => {
  const fish_result = useSelector((state) => state.fishList.onefish_result);
  const is_loaded = useSelector((state) => state.fishList.is_loaded);

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

  // [카카오톡 공유하기]
  // https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#init
  // https://developers.kakao.com/docs/latest/ko/message/common
  // 1. index.html에서 script 불러온다.
  // 2. 필수코드 Kakao.init(javascript key)
  // 3. 링크 공유는 문서에서 카카오 메시지로 되어있고,
  //    많은 템플릿 중 sendScrap의 경우 requestUrl과 링크 보낼 당시 url이 일치해야한다.
  useEffect(() => {
    // SDK 사용법에는 Kakao.init~어쩌구로 되어있으나 window 객체 찾아서 설정을 해야함
    window.Kakao.init("e31c489577057b521747d2d2be3ce3d5");
    // 카카오 SDK가 초기화되었는지 확인하는 함수 => console.log로 봐서 true면 초기화 잘되었다는 뜻
    // window.Kakao.isInitialized();
  }, []);

  const grrrDomain = "http://localhost:3000";
  const _grrrDomain = "https://silver0r.tistory.com/57";

  const sendLink = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: `${grrrDomain}/result/`,
    });
  };

  return (
    <Wrap>
      <br />
      {is_loaded ? <SpinWrap><Spin /></SpinWrap> : Object.values(fish_result).length > 0 ? <><Fish OneFishType={fish_result} />
      <Other></Other>
      <div>페북</div>
      <a target="blank" id="sns_facebook" href={`http://www.facebook.com/share.php?u=${_grrrDomain}&t=나만의생선을확인해보세요!`} title="페이스북에 이 페이지 공유하기">
        <Button round color="blue">
          F
        </Button>
      </a>

      <Button onClick={copyToClipboard}>공유하기</Button>
      <Button round onClick={sendLink} color="yellow">
        K
      </Button></> : <NoData><Button onClick={()=> window.location.href = "/"}>다시 검사해보기</Button></NoData>}
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

const NoData = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const SpinWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Result;
