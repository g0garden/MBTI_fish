import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";

const Fish = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const fishType = {
    INFP: {
      mbti: "INFP",
      fish: "하늘을 나는 돌고래",
      desc: "나에겐 아름다운 이상이 있지",
      img: "https://www.ocregister.com/wp-content/uploads/migration/nv5/nv5t87-b88521891z.120150923191922000g6tc6j8f.70.jpg",
      traits: [
        "다른 사람들과 구분되는 독특한 감수성이 있어요.",
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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${fishType.INFP.fish} | 도시어부`} />
        <meta property="og:image" content="" />
        <meta property="og:description" content="수면 아래 내 모습은 어떤 모습일지 확인해보세요!" />
        <title>{fishType.INFP.fish} | 도시어부</title>
        {/* 뒷주소 이름은 뭘로 할지 결정해야함 ex. mbti타입인지, fish타입인지 */}
        <link rel="canonical" href={`http://localhost:3000/result/${fishType.INFP.fish}`} />
      </Helmet>
    </>
  );
};

export default Fish;
