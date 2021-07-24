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
          <QuestionContent dangerouslySetInnerHTML={{__html: props.data?.question}}/>
          <PurpleRight src={require("../data/images/bracket_right.png").default} />
        </TitleFrame>
      </Grid>
      <QuestionBox>
        <ButtonFrame onClick={(e) => {
            props?.next();
            props?.increment(props.data?.answers.a.type);
          }}>
          <span style={{color: "#b0d71d", fontSize: "20px", fontWeight: "700"}} dangerouslySetInnerHTML = {{__html: props.data?.answers.a.res}}></span>
        </ButtonFrame>
        <ButtonFrame onClick={(e) => {
            props?.next();
            props?.increment(props.data?.answers.b.type);
          }}>
          <span style={{color: "#b0d71d", fontSize: "20px", fontWeight: "700"}} dangerouslySetInnerHTML = {{__html: props.data?.answers.b.res}}></span>
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
  background: no-repeat center/100% url(${btnBg});
  width: 60%;
  @media (max-width: 720px) { 
    width: 100%;
    min-height: 120px;
  }
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PurpleLeft = styled.img`
  width: 44px;
  max-width: 180px;
  height: 120px;
`;

const PurpleRight = styled.img`
  width: 44px;
  max-width: 180px;
  height: 120px;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const QuestionContent = styled.p`
text-shadow: 
        -2px -2px 0px rgb(117, 21, 196),
         0px -2px 0px rgb(117, 21, 196),
         2px -2px 0px rgb(117, 21, 196),
        -2px  0px 0px rgb(117, 21, 196),
         2px  0px 0px rgb(117, 21, 196),
        -2px  2px 0px rgb(117, 21, 196),
         0px  2px 0px rgb(117, 21, 196),
         2px  2px 0px rgb(117, 21, 196);
font-size: 30px; 

@media (max-width: 378px) { 
  font-size: 26px;
}

@media (max-width: 350px) { 
  font-size: 22px;
}

font-weight: 1000;
color: yellow;
margin: 0;
display: flex;
align-items: center;
font-family: "Cafe24Ssurround"; src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");
`;

export default QuizFrame;
