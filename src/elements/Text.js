import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, size, lineHeight, bold, margin, align, color, whiteSpace } = props;

  const styles = {
    size: size,
    lineHeight: lineHeight,
    bold: bold ? bold : false,
    margin: margin ? margin : false,
    align: align,
    color:color,
    whiteSpace: whiteSpace,
  };

  return <TextBox {...styles}>{children}</TextBox>;
};

Text.defaultProps = {
  children: null,
  size: "20px",
  lineHeight: "120%",
  align: "center",
};

const TextBox = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "900" : "500")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")}
  margin:${(props) => props.margin};
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  letter-spacing: 1px;
  ${(props) => (props.whiteSpace ? `white-space:${props.whiteSpace};` : "")}
`;

export default Text;
