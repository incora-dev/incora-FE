import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IAnimation {
  animation: boolean;
  delay: number;
}

export const Div = styled.div`
  font-family: Poppins, serif;

  color: #FFFFFF;
  background: #181819;
`

export const Wrapper = styled.div`
  padding-top: 119px;
`

export const H1 = styled.h1`
  max-width: 1006px;
  //padding: 0 13.2vw;
  margin: 0 auto;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
     line-height: 40px;
  }

  letter-spacing: 0.05em;
`

export const Content = styled.div`
  min-height: 50vh;

  max-width: 1166px;
  padding: 63px 0 158px 0;
  margin: 0 auto;
  
  
  position: relative;
  left: 44px;
  
  display: flex;
  column-gap: 100px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;

  svg {
    transform: rotate(195deg);
  }
  
  opacity: ${({ animation }: IAnimation) => animation ? '1' : '0'};

  transition: opacity 1s ease-in-out;
  transition-delay: ${({ delay }: IAnimation) => `${delay}ms`};

`

export const Text = styled.p`
  position: relative;
  top: 51px;
  right: 25px;

  max-width: 229px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-18);
  line-height: 27px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 23px;
  }
  letter-spacing: 0.05em;
  text-transform: capitalize;
`

export const PositionDots = styled.div`
  position: absolute;
  top: 29px;
  left: 38px;
  
  transform: rotate(60deg);
`
