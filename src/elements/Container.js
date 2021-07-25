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
<<<<<<< HEAD
=======
  padding:0px 20px;

>>>>>>> 83391f50fe6b2f155b01dca03ab3086e780491a2
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