import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements/";
import btnBg from "../data/images/button_frame.png";

const QuizFrame = (props) => {
  let questionNum = "";

  if (props.index < 10) {
    questionNum = "0" + props.index?.toString();
  } else {
    questionNum = props.index?.toString();
  }

  return (
    <Grid textAlign="center">
      <Grid margin="90px auto 50px auto">
        {/* <Text size="100px" bold lineHeight="120%">
            {questionNum}
          </Text> */}
        <TitleFrame>
          <PurpleLeft src={require("../data/images/bracket_left.png").default} />
          <QuestionContent dangerouslySetInnerHTML={{ __html: props.data?.question }} />
          <PurpleRight src={require("../data/images/bracket_right.png").default} />
        </TitleFrame>
      </Grid>
      <QuestionBox>
        <ButtonFrame onClick={(e) => {
            if (e.target.nodeName === "IMG" || e.target.nodeName === "SPAN") {
              props?.next();
              props?.increment(props.data?.answers.a.type);
            }
          }}>
          <img src={btnBg}></img>
          <span style={{ color: "#b0d71d", fontWeight: "700" }} dangerouslySetInnerHTML={{ __html: props.data?.answers.a.res }}></span>
        </ButtonFrame>
        <ButtonFrame onClick={(e) => {
            if (e.target.nodeName === "IMG" || e.target.nodeName === "SPAN") {
              props?.next();
              props?.increment(props.data?.answers.b.type);
            }
          }}>
          <img src={btnBg}></img>
          <span style={{ color: "#b0d71d", fontWeight: "700" }} dangerouslySetInnerHTML={{ __html: props.data?.answers.b.res }}></span>
        </ButtonFrame>
        {/* <Button
          align
          padding="0 20px"
          size="17px"
          onClick={() => {
            props?.next();
            props?.increment(props.data?.answers.a.type);
          }}
        >
        <span dangerouslySetInnerHTML={ {__html:props.data?.answers.a.res}}/>
        </Button>
        <Button
          align
          padding="0 20px"
          size="17px"
          onClick={() => {
            props?.next();
            props?.increment(props.data?.answers.b.type);
          }}
        >
          <span dangerouslySetInnerHTML={ {__html:props.data?.answers.b.res}}/>
        </Button> */}
      </QuestionBox>
    </Grid>
  );
};

const TitleFrame = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ButtonFrame = styled.div`
  cursor: default;
  position: relative;
  // background: no-repeat center url(${btnBg});
  width: 100%;
  max-width: 440px;

  & > img {
    width: 100%;
    position: absolute;
    cursor: pointer;
  }

  letter-spacing: -0.5px;
  word-spacing: -1px;
  line-height: 130%;
  font-size: 28px;
  /* border: 1px solid red; */
  white-space: nowrap;

  /* prevent img drag */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 1024px) {
    min-height: 120px;
    font-size: 18px;
    width: 420.78px;
    margin-bottom: 24px;
  }

  @media (max-width: 720px) {
    font-size: 18px;
    width: 100%;
    margin-bottom: 12px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    width: 100%;
    margin-bottom: -10px;
  }

  @media (max-width: 330px) {
    font-size: 17px;
    letter-spacing: -0px;
    margin-bottom: -20px;
  }

  & > span {
    position: absolute;
    cursor: pointer;
  }

  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PurpleLeft = styled.img`
  width: 44px;
  max-width: 180px;

  /* prevent img drag */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const PurpleRight = styled.img`
  width: 44px;
  max-width: 180px;

  /* prevent img drag */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const QuestionContent = styled.p`
  text-shadow: -2px -2px 0px rgb(117, 21, 196), 0px -2px 0px rgb(117, 21, 196), 2px -2px 0px rgb(117, 21, 196), -2px 0px 0px rgb(117, 21, 196), 2px 0px 0px rgb(117, 21, 196),
    -2px 2px 0px rgb(117, 21, 196), 0px 2px 0px rgb(117, 21, 196), 2px 2px 0px rgb(117, 21, 196);
  font-size: 40px;
  letter-spacing: -0.4px;
  word-spacing: -3px;
  line-height: 135%;
  white-space: nowrap;

  @media (max-width: 450px) {
    font-size: 30px;
  }

  @media (max-width: 378px) {
    font-size: 27px;
  }
  /* font-weight: 1000; */
  color: yellow;
  align-items: center;
  margin: auto;
  font-family: "Cafe24Ssurround";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");
`;

export default QuizFrame;
