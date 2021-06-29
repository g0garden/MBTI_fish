import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, size, lineHeight, bold, margin } = props;

  const styles = {
    size: size,
    lineHeight: lineHeight,
    bold: bold ? bold : false,
    margin: margin ? margin : false,
  };

  return <TextBox {...styles}>{children}</TextBox>;
};

Text.defaultProps = {
  children: null,
  size: "20px",
  lineHeight: "120%",
};

const TextBox = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")}
  margin:${(props) => props.margin};
`;

export default Text;
