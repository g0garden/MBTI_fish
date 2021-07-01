import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { children, width, height, padding, is_flex, margin, justify, align, textAlign, zIndex, overflow, column } = props;

  const styles = {
    width: width,
    height: height,
    padding: padding,
    is_flex: is_flex,
    margin: margin,
    justify: justify,
    align: align,
    textAlign: textAlign,
    zIndex: zIndex,
    overflow: overflow,
    column: column,
  };

  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  isRoot: false,
  children: null,
  width: null,
  height: null,
  padding: false,
  is_flex: false,
  margin: false,
  justify: false,
  align: false,
  textAlign: false,
  zIndex: false,
  overflow: null,
  column: false,
};

const GridBox = styled.div`
  svg {
    cursor: pointer;
  }
  box-sizing: border-box;
  outline: 0;
  /* white-space: pre-line; */

  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};

  z-index: ${(props) => props.zIndex};
  overflow: ${(props) => props.overflow};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  opacity: ${(props) => (props.opacity ? props.opacity : "")};

  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};

  ${(props) => (props.is_flex ? `display:flex; align-items: center;` : "")};

  ${(props) => (props.column ? `flex-direction: column;` : `flex-direction: row;`)}

  text-align: ${(props) => props.textAlign};
`;

export default Grid;
