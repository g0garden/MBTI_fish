import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Fish from "../components/Fish";
import { Button, Text, Grid, Container } from "../elements/";
import { KakaoImgUrl, instaImgUrl, facebookImgUrl, copyLinkImgUrl, restartBtnImg, GrrrLinkBtnImg, DarkImg } from "../data/images/sharedImgs";
import "../shared/theme";
import { Helmet } from "react-helmet";
import { Spin } from "antd";
import { dic } from "../data/questionsFB";
import {fishInfo} from "../shared/FishInfo";
import { api as resultActions } from "../redux-toolkit/modules/fishList";

const Result = (props) => {
  const dispatch = useDispatch();
  let _name = props.match.params.fishname;
  const history = props.history;
  // console.log(props.match);
  console.log(_name);
  const fish = fishInfo[_name];

  console.log(fish, fishInfo);


  const fish_result = useSelector((state) => state.fishList.onefish_result);
  const is_loaded = useSelector((state) => state.fishList.is_loaded);

  window.onpopstate = () => {
    console.log("뒤로가기!");
    if (sessionStorage.getItem("lastPage") === "quiz") {
      history.replace("/quiz");
      sessionStorage.removeItem("lastPage");
    }

    // if (!sessionStorage.getItem("lastPage")) {
    //   window.alert("초기 화면으로 이동합니다!");
    //   history.replace("/");
    // }
  }

  // 이 부분은 새로고침 할 시점을 노린 것임
  // 이 밑에 if문 부분을 보면 "fish" 라는 키는 최초 Result 페이지 진입시에 사라지게 되고, 대신 "type" 이라는 키와 해당 물고기의 mbti 가 함께 저장됨.
  // 따라서, 새로고침하기 전에는 당연히 세션 안에 "fish" 라는 키가 있으니 최초 진입시에는 useEffect 가 별 효과를 내지 못함
  // 하지만, 새로고침 후에는 "fish" 라는 키가 세션 안에 사라진 상태임으로 "type"이라는 키와 페어된 mbti를 dispatch 해주면 끝!
  // 추가적으로 다른 페이지 (메인, 퀴즈 페이지..?) 에서는 이 키값이 저장되는 것을 지양하여 만약 남아있다면 지워주는 행위가 꼭 필요함.

  useEffect(() => {
    // if (!sessionStorage.getItem("fish")) {
    //   dispatch(resultActions.getOneFishFB(sessionStorage.getItem("type")));
    // }
    dispatch(resultActions.getOneFishFB(_name));
  }, []);

  if (sessionStorage.getItem("fish")) {
    sessionStorage.removeItem("fish");
    sessionStorage.setItem("type", fish_result?.type);
  }

  //현재 결과페이지의 URL - 도메인/결과 물고기의 usrParam값
  const domain = "https://cityangler.co.kr";
  const share_url = `${domain}${props.match.url.replaceAll(" ", "%20")}`;

  const copyToClipboard = () => {
    let t = document.createElement("textarea");
    t.value = share_url;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    window.alert("주소가 복사되었습니다!");
  };

  // Result page 에 결과값이 있고, 사용자가 "톄스트 다시하기 버튼"을 누르고,
  // 자신의 결과가 궁금해서 메인페이지에서 뒤로 가기 버튼을 눌렀을 때!
  // 본인이 봤던 결과가 그대로 나와야함!

  const goBackToMain = () => {
    sessionStorage.setItem("goBack", true);
    // window.location.href = "/";
    history.replace("/");
  };

  // [카카오톡 공유하기]
  // https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#init
  // https://developers.kakao.com/docs/latest/ko/message/common
  // 1. index.html에서 script 불러온다.
  // 2. 필수코드 Kakao.init(javascript key)
  // 3. 링크 공유는 문서에서 카카오 메시지로 되어있고,
  //    많은 템플릿 중 sendScrap의 경우 requestUrl과 링크 보낼 당시 url이 일치해야한다.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    // window.Kakao.init("1b57853241c84b636a6e64adcedd94a5");

    return () => {
      document.body.removeChild(script);
    };
    // SDK 사용법에는 Kakao.init~어쩌구로 되어있으나 window 객체 찾아서 설정을 해야함
    // 카카오 SDK가 초기화되었는지 확인하는 함수 => console.log로 봐서 true면 초기화 잘되었다는 뜻
    // window.Kakao.isInitialized();
  }, []);

  const sendLink = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        //  javascript key 를 이용하여 initialize
        kakao.init("1b57853241c84b636a6e64adcedd94a5");
        // kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      // kakao.Link.sendScrap({
      //   requestUrl: `${domain}${props.match.url}`,
      // });
      kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "feed",
        content: {
          title: `${fish_result.name && fish_result.name} | 도시어부`,
          description: fish_result.sentence && fish_result.sentence.replace("<br/>", " "),
          imageUrl: fish_result.imgUrl,
          link: {
            mobileWebUrl: `${domain}${props.match.url}`,
            webUrl: `${domain}${props.match.url}`,
          },
        },
        buttons: [
          {
            title: "바다 속 내 모습 알아보기",
            link: {
              mobileWebUrl: domain,
              webUrl: domain,
            },
          },
        ],
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${_name} | 도시어부`} />
        <meta property="og:image" content={fish.imgUrl} />
        <meta property="og:description" content={fish.sentence} />
        <title>{`${_name} | 도시어부`}</title>
        {/* 뒷주소 이름은 뭘로 할지 결정해야함 ex. mbti타입인지, fish타입인지 */}
        <link rel="canonical" href={`https://cityangler.co.kr/result/${_name}`} />
      </Helmet>
      <Container>
        {is_loaded ? (
          <SpinWrap>
            <Spin />
          </SpinWrap>
        ) : Object.values(fish_result).length > 0 ? (
          <ResultContainer>
            <Fish OneFishType={fish_result} history={history} />
            <Share>
              <ShareTitle>
                <PurpleLeft src={require("../data/images/nomargin_third_left.png").default} />
                <Text subtitle size="1.5em" color="#00d0e9">
                  공유하기
                </Text>
                <PurpleRight src={require("../data/images/nomargin_third_right.png").default} />
              </ShareTitle>
              <ShareChannel>
                <ShareChanBtn imgUrl={KakaoImgUrl} onClick={sendLink} id="create-kakao-link-btn" title="카카오톡에 내 모습 공유하기" />
                {/* <ShareChanBtn imgUrl={instaImgUrl} /> */}
                <a
                  target="blank"
                  id="sns_facebook"
                  rel="noreferrer noopener"
                  href={`http://www.facebook.com/share.php?u=${domain}${props.match.url}&t=${fish_result.name && fish_result.name} | 도시어부`}
                  title="페이스북에 내 모습 공유하기"
                >
                  <ShareChanBtn imgUrl={facebookImgUrl} />
                </a>
                <ShareChanBtn imgUrl={copyLinkImgUrl} onClick={copyToClipboard} title="링크 복사하기" />
              </ShareChannel>
            </Share>
            <Bottom>
              <RestartBtn onClick={goBackToMain} imgUrl={restartBtnImg} />
              <GrrrLinkBtn as={"a"} target="blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCGrAnVVgQY66l9XHIzPxQEw" imgUrl={GrrrLinkBtnImg} />
            </Bottom>
          </ResultContainer>
        ) : (
          <NoData>
            <Button onClick={() => (window.location.href = "/")}>다시 검사해보기</Button>
          </NoData>
        )}
      </Container>
    </>
  );
};

const ResultContainer = styled.div`
  background-image: url(${DarkImg});
  background-size: cover;
  background-position: center;
  width: 90vw;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  //border:1px dashed pink;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
  }
  @media (max-width: 720px) {
    width: 100%;
    /* max-width:768px; */
    margin: 0 auto;
  }
  @media (max-width: 420px) {
    width: 100%;
    max-width: 420px;
  }
  @media (max-width: 330px) {
    width: 100%;
    //max-width: 330px;
  }
`;

const PurpleLeft = styled.img`
  width: 10vw;
  max-width: 150px;
  height: 3vh;
  margin-right: 8px;
  @media (max-width: 720px) {
    width: 22vw;
  }
  @media (max-width: 420px) {
    width: 22vw;
  }
  /* @media (max-width: 330px) { 
    max-width: 400px;
} */
`;

const PurpleRight = styled.img`
  width: 10vw;
  max-width: 150px;
  height: 3vh;
  margin-left: 8px;
  @media (max-width: 720px) {
    width: 22vw;
  }
  @media (max-width: 420px) {
    width: 22vw;
  }
`;

const Share = styled.div`
  border: none;
`;

const ShareTitle = styled.div`
  width: 80vw;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

//sns버튼박스
const ShareChannel = styled.div`
  width: 80vw;
  max-width: 400px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

//sns버튼
const ShareChanBtn = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin: 20px 20px 0;
  border: none;
  background: no-repeat center/100% url(${(props) => props.imgUrl});
`;

const Bottom = styled.div`
  width: 100vw;
  max-width: 430px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 20px;
`;

const RestartBtn = styled.button`
  cursor: pointer;
  width: 55vw;
  height: 15vh;
  max-width: 200px;
  margin: 0 auto;
  border: none;
  background: no-repeat center/100% url(${(props) => props.imgUrl});
`;

const GrrrLinkBtn = styled.button`
  width: 100px;
  max-width: 200px;
  margin: 0.5vh auto;
  height: 100px;
  border: none;
  background: no-repeat center/100% url(${(props) => props.imgUrl});
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
