import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, size, lineHeight, bold } = props;

  const styles = {
    size: size,
    lineHeight: lineHeight ? lineHeight : false,
    bold: bold ? bold : false,
  };

  return <TextBox {...styles}>{children}</TextBox>;
};

Text.defaultProps = {
  children: null,
  size: "20px",
};

const TextBox = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")}
`;

export default Text;
