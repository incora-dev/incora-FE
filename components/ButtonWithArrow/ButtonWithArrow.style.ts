import styled from "styled-components";

interface IButton {
  padding?: string;
}

interface IButtonColor {
  bgColor: string;
  textColor: string;
}

export const Label = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  
  text-align: center;
   
  letter-spacing: 0.03em;
  text-transform: capitalize;
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
  background-color: ${({ bgColor }: IButtonColor) => bgColor};
  cursor: pointer;
  color: ${({ textColor }: IButtonColor) => textColor};
  
  svg {
    path {
      fill: ${({ textColor }: IButtonColor) => textColor};
    }
  }


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
