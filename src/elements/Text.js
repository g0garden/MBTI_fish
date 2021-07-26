import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { desc, original, sentence, subtitle, children, size, lineHeight, bold, margin, align, color, whiteSpace } = props;

  const styles = {
    size: size,
    lineHeight: lineHeight,
    bold: bold ? bold : false,
    margin: margin ? margin : false,
    align: align,
    color: color,
    whiteSpace: whiteSpace,
  };

  if (desc) {
    return (
      <TextBox desc={desc} {...styles}>
        {children}
      </TextBox>
    );
  }

  if (original) {
    return (
      <TextBox original={original} {...styles}>
        {children}
      </TextBox>
    );
  }

  if (sentence) {
    return (
      <TextBox sentence={sentence} {...styles}>
        {children}
      </TextBox>
    );
  }

  if (subtitle) {
    return (
      <TextBox subtitle={subtitle} {...styles}>
        {children}
      </TextBox>
    );
  }

  return <TextBox {...styles}>{children}</TextBox>;
};

Text.defaultProps = {
  children: null,
  size: "20px",
  lineHeight: "120%",
  align: "center",
};

const TextBox = styled.div`
  font-weight: ${(props) => (props.bold ? "900" : "500")};
  font-size: ${(props) => props.size};

  ${(props) =>
    props.sentence
      ? `
      @media (max-width: 420px) {
        margin-top:-20px;
  }
      background: -webkit-linear-gradient(#befaff, #01ecff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1.5px;
  word-spacing:-2px;
  font-family: "Cafe24Ssurround";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");
      `
      : props.subtitle
      ? ` letter-spacing: -1.5px;
  word-spacing:-2px;
  font-family: "Cafe24Ssurround";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff") format("woff");
`
      : props.original
      ? ``
      : "letter-spacing:0;"}

  ${(props) =>
    props.desc
      ? `font-size:16px;
      font-weight:700;
      letter-spacing:-0.25px;
      word-spacing:1px;
      @media (max-width: 420px) {
        font-size:14px;
  }`
      : " "}

  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")}
  margin:${(props) => props.margin};
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  ${(props) => (props.whiteSpace ? `white-space:${props.whiteSpace};` : "word-break:keep-all;")}
`;

export default Text;
