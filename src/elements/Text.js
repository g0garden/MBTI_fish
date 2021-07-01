import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, size, lineHeight, bold, margin, align } = props;

  const styles = {
    size: size,
    lineHeight: lineHeight,
    bold: bold ? bold : false,
    margin: margin ? margin : false,
    align: align,
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
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")}
  margin:${(props) => props.margin};
  text-align: ${(props) => props.align};
`;

export default Text;
