import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {


  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}

export default Container




const ContainerBox = styled.div`
  width : 1200px;
  box-sizing: border-box;
  margin: 0px auto;
  padding:0px 20px;
  //border: 3px dashed lightsalmon; 
  @media ${props => props.theme.tablet}{
  width: 100%;
  padding: 0;
  }
  @media ${props => props.theme.mobile}{
  width:100%;
  padding: 0;
  }
`