import React from "react";
import styled from "styled-components";
import bg from "../data/images/bg_main.png";
import testStart from "../data/images/testStart.png";

const Main = ({ history }) => {
  window.onbeforeunload = function () {
    return "Your work will be lost.";
  };
  if (!sessionStorage.getItem("goBack")) {
    sessionStorage.removeItem("type");
  }
  sessionStorage.setItem("goBack", false);

  return (
    <Wrap>
      <ButtonImg src={testStart} alt="테스트 시작" onClick={() => history.push("/quiz")} />
    </Wrap>
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
  margin-top: 70vh;
  min-width: 250px;
  width: 20vw;
  cursor: pointer;
  @media only screen and (max-width: 720px) {
    margin-top: 72vh;
    min-width: 200px;
    width: 20vw;
  }
`;

export default Main;
