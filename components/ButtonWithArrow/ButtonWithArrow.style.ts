import styled from "styled-components";

interface IButton {
  padding?: string;
}

export const Arrow = styled.div`
  width: 25px;
  height: 12px;

  background: center no-repeat url("navButtonArrow.svg");
`

export const Label = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  
  text-align: center;
   
  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #000;
`

export const Button = styled.div`
  width: max-content;
  display: flex;
  padding: ${({padding = '23px 35px;'}: IButton) => padding};
  align-items: center;
  column-gap: 20px;

`

export const ButtonContainer = styled.div`
  display: inline-block;
  background-color: #fec602;
  cursor: pointer;
  color: #000;


  box-shadow: inset 0 0 0 0 #E5B100FF;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 240px 0 0 0 #E5B100FF;
  }
`

export const Container = styled.a`
  a {
    min-width: 180px;
  }
`
