import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import "../shared/theme";
import { Text, Grid, Container } from "../elements/";
import gwangeo from "../data/images/gwangeo.png";
import fish_circlebg from "../data/images/bg_result_circle.png";
import { CircleImg } from "../data/images/sharedImgs";
import { useDispatch, useSelector } from "react-redux";
import { api as resultActions } from "../redux-toolkit/modules/fishList";

const Fish = (props) => {
  const dispatch = useDispatch();
  const history = props.history;
  const {
    OneFishType: { feature, potential, name, sentence, imgUrl, type, bad, good },
  } = props;

  let playTimes = 0;
  let [memoPlayTimes, setPlayTimes] = useState(useMemo(() => playTimes, [playTimes]));

  const [_pState, setPState] = useState(false);

  let good_feature = good.feature[0].replaceAll("<br/>", " ");
  let bad_feature = bad.feature[0].replaceAll("<br/>", " ");

  useEffect(() => {
    setPState(true);
    return () => setPState(false);
  }, [memoPlayTimes]);

  const touchFish = () => {
    if (memoPlayTimes >= 5) {
      alert("이젠 활어가 아니에요...");
      return;
    }

    setPlayTimes((memoPlayTimes += 1));

    if (memoPlayTimes === 1) {
    } else if (memoPlayTimes === 3) {
      alert("자꾸 만지면 신선도가 떨어져요 😥");
    }

    if (_pState === false) {
      setPState(true);
    } else {
      setPState(false);
      return setTimeout(() => {
        setPState(true);
      }, 100);
    }
  };

  return (
    <Container>
      <FishIntro>
        <FishTitle>
          <PurpleLeft src={require("../data/images/nomargin_first_left.png").default} />
          <Text subtitle size="1.6em" margin="0px 4px" color="#8f65e4">
            {name && name}
          </Text>
          <PurpleRight src={require("../data/images/nomargin_first_right.png").default} />
        </FishTitle>
        <FishImgBackGround>
          <BgCircleImg src={CircleImg} />
          <FishImg
            src={imgUrl && imgUrl}
            onClick={touchFish}
            playState={_pState}
            title={type}
          />
        </FishImgBackGround>

        <Text sentence bold size="1.75em" margin="10px auto" padding="20px 0 0 0" whiteSpace="nowrap" color="#00d0e9">
          <span dangerouslySetInnerHTML={{ __html: `" ${sentence && sentence} "` }} />
        </Text>
        <PurpleLine src={require("../data/images/nomargin_second.png").default} />
      </FishIntro>

      <FishDesc>
        <Text subtitle size="1.5em" margin="20px auto" color="#00d0e9">
          특징
        </Text>
        <TextBackGround>
          {feature &&
            feature.map((t, idx) => {
              return (
                <Text desc key={idx} idx={idx} margin="15px 0" lineHeight="130%">
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </Text>
              );
            })}
        </TextBackGround>
        <Text subtitle size="1.5em" margin="20px auto" color="#00d0e9">
          잠재능력
        </Text>
        <TextBackGround>
          {potential &&
            potential.map((p, idx) => {
              return (
                <Text desc key={idx} idx={idx} margin="15px 0" lineHeight="130%">
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </Text>
              );
            })}
        </TextBackGround>
      </FishDesc>
      <FishMate>
        <MateBox>
          <Text subtitle size="1.5em" margin="20px auto" color="#00d0e9">
            잘맞는 어종
          </Text>
          <MateImg src={good.imgUrl && good.imgUrl} title={good_feature}/>
          <Text bold size="1.2em" margin="20px auto" color="white">
            <span dangerouslySetInnerHTML={{ __html: good.name && good.name }} />
          </Text>
        </MateBox>
        <MateBox>
          <Text subtitle size="1.5em" margin="20px auto" color="#00d0e9">
            안맞는 어종
          </Text>
          <MateImg src={bad.imgUrl && bad.imgUrl} title={bad_feature} />
          <Text bold size="1.2em" margin="20px auto" color="white">
            <span dangerouslySetInnerHTML={{ __html: bad.name && bad.name }} />
          </Text>
        </MateBox>
      </FishMate>
    </Container>
  );
};


const FishIntro = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const FishTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 12px 0 12px;
  @media (max-width: 330px) {
    margin: 0 auto;
    padding: 20px 12px 0 12px;
  }
`;
const PurpleLeft = styled.img`
  height: 20px;
  @media (max-width: 330px) {
    height: 18px;
  }
`;

const PurpleRight = styled.img`
  height: 20px;
  @media (max-width: 330px) {
    height: 18px;
  }
`;

const PurpleLine = styled.img`
  width: 80%;
`;

const FishImgBackGround = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  margin: 1vh 0;
  @media (max-width: 420px) {
    height: 350px;
  }
  @media (max-width: 330px) {
    height: 300px;
  }
`;
const BgCircleImg = styled.img`
  position: absolute;
  background-size: cover;
  top: -110px;
  left: -3px;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  @media (max-width: 420px) {
    top: -85px;
  }
  @media (max-width: 380px) {
    top: -70px;
  }
  @media (max-width: 330px) {
    top: -60px;
  }
`;

const FishDesc = styled.div`
  width: 80vw;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TextBackGround = styled.div`
  width: 80vw;
  max-width: 400px;
  margin: 1.5vh auto;
  background-color: rgb(80, 46, 143);
  opacity: 0.9;
  border-radius: 15px;
  padding: 10px 10px;
`;

const FishMate = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  max-width: 400px;
  margin: 1vh auto;
`;

const MateBox = styled.div`
  width: 40vw;
  max-width: 250px;
  cursor: default;
`;

const MateImg = styled.img`
  width: 30vw;
  max-width: 120px;
  margin-bottom: -10px;
  cursor: default;
`;

const FishImg = styled.img`
  position: absolute;
  top: -20px;
  left: 75px;
  width: 75%;
  max-width: 500px;
  margin: 5vh 0;
  border-radius: 50%;
  z-index: 3;
  @media (max-width: 720px) {
    top: -30px;
    left: 60px;
  }
  @media (max-width: 420px) {
    top: -10px;
    left: 69px;
    width: 70%;
  }
  @media (max-width: 380px) {
    top: 0px;
    left: 60px;
    width: 70%;
  }
  @media (max-width: 330px) {
    top: 10px;
    left: 50px;
  }

  @-webkit-keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  @-moz-keyframes swing {
    20% {
      -moz-transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      -moz-transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      -moz-transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      -moz-transform: rotate3d(0, 0, 1, -5deg);
    }
    100% {
      -moz-transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  @-o-keyframes swing {
    20% {
      -o-transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      -o-transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      -o-transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      -o-transform: rotate3d(0, 0, 1, -5deg);
    }
    100% {
      -o-transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  -webkit-transform-origin: middle left;
  -moz-transform-origin: middle left;
  -o-transform-origin: middle left;
  transform-origin: middle left;

  ${(props) =>
    props.playState
      ? "  -webkit-animation: swing 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);-moz-animation: swing 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);-o-animation: swing 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);animation: swing 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);"
      : ""}
`;

export default Fish;
