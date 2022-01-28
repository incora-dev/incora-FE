import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../styles/theme";

interface IButton {
  padding?: string;
}

interface IButtonColor {
  bgColor: string;
  textColor: string;
}

export const Label = styled.p`
  z-index: 1;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-14);
  line-height: 21px;
  
  text-align: center;
   
  letter-spacing: 0.03em;
  text-transform: capitalize;
`

export const Button = styled.div`
  position: relative;

  width: max-content;
  display: flex;
  padding: ${({padding = '23px 35px;'}: IButton) => padding};
  align-items: center;
  column-gap: 20px;
  justify-self: baseline;


  &:after {
    position: absolute;
    left: 0;

    width: 0;
    height: 100%;

    content: '';

    background-color: ${themeGet("colors.yellow4")};

    transition: width ${themeGet("transition.button")};
  }

  &:hover :after {
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    svg {
      display: none;
    }
  }
`

export const ButtonContainer = styled.div`
  display: inline-block;
  background-color: ${({ bgColor }: IButtonColor) => bgColor};
  cursor: pointer;
  color: ${({ textColor }: IButtonColor) => textColor};
  
  svg {
    z-index: 1;

    path {
      fill: ${({ textColor }: IButtonColor) => textColor};
    }
  }
`

export const Container = styled.a`
  justify-self: baseline;
  a {
    min-width: 180px;
  }
`
