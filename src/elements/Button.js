import React from "react";
import styled from "styled-components";

const Button = (props) => {
  // disabled : 비활성화 모드
  // attributes
  const { round, share, onClick, text, children, width, height, margin, size, align, padding, color } = props;
  const styles = { onClick: onClick, text: text, width: width, height: height, margin: margin, size: size, align: align, padding: padding, color: color };

  if (round) {
    return (
      <>
        <Btn round {...styles}>
          {text ? text : children}
        </Btn>
      </>
    );
  }
  if (share) {
    return (
      <>
        <Btn share {...styles}>
          {text ? text : children}
        </Btn>
      </>
    );
  }

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

  background-color: ${(props) => (props.color ? props.color : "#ffffff44")}; // 60%
  color: #ffffff;
  font-size: ${(props) => (props.size ? props.size : "20px")};
  font-weight: 600;
  text-align: ${(props) => (props.align ? "left" : "center")};

  margin: ${(props) => (props.margin ? props.margin : "10px")};
  height: 50px;
  min-width: 50%;
  /* max-width: 300px; */

  padding: ${(props) => (props.padding ? props.padding : "0 6px")};
  box-shadow: 0 0 0 3px #ffffff00;
  ${(props) => (props.round ? "height: 50px;  min-width: 50px; max-width: 50px; overflow:hidden;" : "height: 50px;  min-width: 50%;")}
  ${(props) => (props.share ? "height: 25px;  min-width: 20%; max-width: 25px; border: none;" : "height: 50px;  min-width: 50%;")}
  &:active {
    border: 1.5px solid #ffffff88;
    box-shadow: 0 0 2px 2px #ffffff66;
    transition: all 200ms ease-in-out;
  }
`;

export default Button;
