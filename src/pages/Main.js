import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import bg from "../data/images/bg_main.png";
import testStart from "../data/images/testStart.png";
import {api as userActions} from "../redux-toolkit/modules/users";

const Main = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getTotalUserCntFB());
  },[])
  

  window.onbeforeunload = function () {
    return "Your work will be lost.";
  };
  if (!sessionStorage.getItem("goBack")) {
    sessionStorage.removeItem("type");
  }
  if (sessionStorage.getItem("lastPage")) {
    sessionStorage.removeItem("lastPage");
  }

  // if (sessionStorage.getItem("lastFish")) {
  //   sessionStorage.removeItem("lastFish");
  // }
  sessionStorage.setItem("goBack", false);

  //총사용자
  

  return (
    <>
      <Helmet>
        <title>{`바다 속 나의 모습은? | 도시어부`}</title>
      </Helmet>
      <Wrap>
        <ButtonImg src={testStart} alt="테스트 시작" onClick={() => history.push("/quiz")} />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  height: 100vh;
  margin: auto;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (min-width: 720px) {
    background-size: contain;
    // width: 100vw;
  }
`;

const ButtonImg = styled.img`
  /* prevent img drag */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin-top: 69vh;
  min-width: 250px;
  width: 18vw;
  cursor: pointer;
  @media only screen and (max-width: 720px) {
    margin-top: 72vh;
    min-width: 200px;
    width: 20vw;
  }
`;

export default Main;
