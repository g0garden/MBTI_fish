import React from "react";
import styled from "styled-components";

const Button = (props) => {
  // disabled : 비활성화 모드
  const { onClick, text, children, width, height, margin, size } = props;
  const styles = { onClick: onClick, text: text, width: width, height: height, margin: margin, size: size };

  return (
    <>
      <Btn {...styles}>{text ? text : children}</Btn>
    </>
  );
};

Button.defaultProps = {
  children: "Grrr",
  onClick: () => {},
};

const Btn = styled.button`
  user-select: none;
  outline: none;
  cursor: pointer;
  border: 1.5px solid #ffffff66;
  border-radius: 50rem;

  background-color: #ffffff44; // 60%
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;

  margin: ${(props) => (props.margin ? props.margin : "10px")};
  height: 50px;
  min-width: 50%;

  box-shadow: 0 0 0 3px #ffffff00;

  &:active {
    border: 1.5px solid #ffffff88;
    box-shadow: 0 0 2px 2px #ffffff66;
    transition: all 200ms ease-in-out;
  }
`;

export default Button;
