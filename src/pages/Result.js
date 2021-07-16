import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Button,Text,Grid, Container } from "../elements/";
import "../shared/theme";
import bg from "../data/background.jpg";
import { Spin } from "antd";
import { dic } from "../data/questionsFB";
import {api as resultActions} from "../redux-toolkit/modules/fishList"

const Result = ({history, props}) => {
  const dispatch = useDispatch();
  //const fishName = Number(props.match.params.fishname);//파람

  const fish_result = useSelector((state) => state.fishList.onefish_result);
  const is_loaded = useSelector((state) => state.fishList.is_loaded);

  // 이 부분은 새로고침 할 시점을 노린 것임
  // 이 밑에 if문 부분을 보면 "fish" 라는 키는 최초 Result 페이지 진입시에 사라지게 되고, 대신 "type" 이라는 키와 해당 물고기의 mbti 가 함께 저장됨.
  // 따라서, 새로고침하기 전에는 당연히 세션 안에 "fish" 라는 키가 있으니 최초 진입시에는 useEffect 가 별 효과를 내지 못함
  // 하지만, 새로고침 후에는 "fish" 라는 키가 세션 안에 사라진 상태임으로 "type"이라는 키와 페어된 mbti를 dispatch 해주면 끝!
  // 추가적으로 다른 페이지 (메인, 퀴즈 페이지..?) 에서는 이 키값이 저장되는 것을 지양하여 만약 남아있다면 지워주는 행위가 꼭 필요함.

  useEffect(()=> {
    if (!sessionStorage.getItem("fish")) {
      dispatch(resultActions.getOneFishFB(sessionStorage.getItem("type")));
    }
  }, [])
  
  if (sessionStorage.getItem("fish")) {
    sessionStorage.removeItem("fish");
    sessionStorage.setItem("type", fish_result?.type);
  }

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
  // useEffect(() => {
  //   // SDK 사용법에는 Kakao.init~어쩌구로 되어있으나 window 객체 찾아서 설정을 해야함
  //   window.Kakao.init("e31c489577057b521747d2d2be3ce3d5");
  //   // 카카오 SDK가 초기화되었는지 확인하는 함수 => console.log로 봐서 true면 초기화 잘되었다는 뜻
  //   // window.Kakao.isInitialized();
  // }, []);

  // const grrrDomain = "http://localhost:3000";
  // const _grrrDomain = "https://silver0r.tistory.com/57";

  // const sendLink = () => {
  //   window.Kakao.Link.sendScrap({
  //     requestUrl: `${grrrDomain}/result/`,
  //   });
  // };

  return (
    <>
      <br/>

      {is_loaded ? 
        <SpinWrap><Spin /></SpinWrap> : Object.values(fish_result).length > 0 
        ? <><Fish OneFishType={fish_result} />
      <Share>
      <ShareTitle>
        <PurpleLeft src={require("../data/images/nomargin_third_left.png").default}/>

      {/* <Button onClick={sendLink} color="yellow">blala</Button>*/}
        <Text bold size="1.5rem" color="#00d0e9">
          공유하기
        </Text>
        <PurpleRight src={require("../data/images/nomargin_third_right.png").default}/>
      </ShareTitle>
      <ShareChannel>
        <Button share>
          <SocialImg src={require("../data/images/nomargin_kakao.png").default}/>
        </Button>
        <Button share onClick={copyToClipboard}>
          <SocialImg src={require("../data/images/nomargin_insta.png").default}/>
        </Button>
        <Button share onClick={copyToClipboard}>
          <SocialImg src={require("../data/images/nomargin_copylink.png").default}/>
        </Button>
      </ShareChannel>
      
    </Share>
    <Bottom>
      <RestartBtn>
        <RestartImg src={require("../data/images/restart_btn.png").default}/>
      </RestartBtn>
      <GrrrLinkBtn>
        <GrrrImg src={require("../data/images/nomargin_Grrr.png").default}/>
      </GrrrLinkBtn>
    </Bottom>
      
      
      

      {/* <a target="blank" id="sns_facebook" href={`http://www.facebook.com/share.php?u=${_grrrDomain}&t=나만의생선을확인해보세요!`} title="페이스북에 이 페이지 공유하기">
        <Button round color="blue">
          F
        </Button>
      </a> */}
      </> : <NoData><Button onClick={()=> window.location.href = "/"}>다시 검사해보기</Button></NoData>}
    
    </>
  );
};

// const Wrap = styled.div`
//   width: 100vw;
//   /* height: 100vh; */
//   /* max-width: 375px; */
//   background-image: url(${bg});
//   background-repeat: no-repeat, repeat;
//   background-size: cover;
//   background-position: center;
//   margin: 0 auto;
// `;

const PurpleLeft = styled.img`
  width: 22vw;
  max-width: 180px;
  height: 3vh;
  margin-right: 8px;
`;
const PurpleRight = styled.img`
  width: 22vw;
  max-width: 180px;
  height: 3vh;
  margin-left: 8px;
`;

const Share = styled.div`
`;

const ShareTitle = styled.div`
  width:100vw;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

`;

const ShareChannel = styled.div`
  margin : 10px 0;

`;


const SocialImg = styled.img`
  width: 15vw;
  max-width: 80px;
  margin: 1vh 0;
`;

const RestartBtn = styled.button`
  border: none; 
  background-color: transparent;

`;

const RestartImg = styled.img`
  width: 50vw;
  max-width: 200px;
  margin: 5vh 0;
`;

const GrrrLinkBtn = styled.button`
  border: none; 
  background-color: transparent;
`;

const GrrrImg = styled.img`
  width: 30vw;
  max-width: 200px;
  margin: 0.5vh 0;

`;

const Bottom = styled.div`
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

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
