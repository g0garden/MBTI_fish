import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements/";
import { Helmet } from "react-helmet";
import gwangeo from "../data/gwangeo.png";

const Fish = (props) => {
  const {
    OneFishType: { feature, potential, name, sentence },
  } = props;

  const fishType = {
    INFP: {
      mbti: "INFP",
      fish: "하늘을 나는 돌고래",
      desc: "나에겐 아름다운 이상이 있지",
      img: "https://www.ocregister.com/wp-content/uploads/migration/nv5/nv5t87-b88521891z.120150923191922000g6tc6j8f.70.jpg",
      traits: [
        "다른 사람들과 구분되는 독특한 감수성이 있어요.",
        "맞는 건 맞고 아닌 건 아닌거에요. 하지만 이걸 대놓고 말하고 다니진 않아요.",
        "따뜻한 마음을 가지고 있지만 애정표시를 대놓고 하는 건 참 어려워요.",
        "가식적인 사람이 싫어요, 의도가 불투명해 보이면 심리적인 거리를 유지해요",
      ],
      potentials: [
        "책과 언어에 대한 능력이 뛰어나요. 뛰어난 작가가 될 가능성이 있어요.",
        "가끔 고지식한 사람으로 오해받지만, 사실은 누구보다 새로운 아이디어에 대한 수용력이 강해요.",
        "내가 느낀 감정을 다른 사람들과 적극적으로 공유하는 게 능력개발에 도움이 될 수 있어요.",
      ],
    },
    ENFP: {},
  };

  let playTimes = 0;
  let [memoPlayTimes, setPlayTimes] = useState(useMemo(() => playTimes, [playTimes]));

  const [_pState, setPState] = useState(false);

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
    console.log(memoPlayTimes);

    if (memoPlayTimes === 1) {
      alert("아얏!");
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${fishType.INFP.fish} | 도시어부`} />
        <meta property="og:image" content="" />
        <meta property="og:description" content="수면 아래 내 모습은 어떤 모습일지 확인해보세요!" />
        <title>{`${name && name} | 도시어부`}</title>
        {/* 뒷주소 이름은 뭘로 할지 결정해야함 ex. mbti타입인지, fish타입인지 */}
        <link rel="canonical" href={`http://localhost:3000/result/${fishType.INFP.fish}`} />
      </Helmet>
      <Text bold size="32px" margin="20px 0 0 0">
        {name && name}
      </Text>
      <FishImg
        src={`${gwangeo}`}
        onClick={touchFish}
        // onAnimationEnd={setPState(false)}
        playState={_pState}
      />
      <Grid margin="auto 20px">
        <Text bold size="20px">
          "{sentence && sentence}"
        </Text>

        <Text bold size="20px" margin="20px auto">
          특징
        </Text>
        {feature &&
          feature.map((t, idx) => {
            return (
              <Text idx={idx} bold size="14px" align="left" margin="10px" lineHeight="130%">
                {t}
              </Text>
            );
          })}

        <Text bold size="20px" margin="20px auto">
          가능성
        </Text>
        {potential &&
          potential.map((p, idx) => {
            return (
              <Text idx={idx} bold size="14px" align="left" margin="10px" lineHeight="130%">
                {p}
              </Text>
            );
          })}
      </Grid>
    </>
  );
};

const FishImg = styled.img`
  width: 80vw;
  max-width: 400px;
  margin: 5vh 0;

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
