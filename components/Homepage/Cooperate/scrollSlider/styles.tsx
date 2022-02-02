import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  width: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 5px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    display: none;
  }
`

export const TopText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-20);
  line-height: 30px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const BottomText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-14);
  line-height: 21px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const Line = styled.div`
  height: 50px;
  width: 1px;

  background-color: #FEC506;
`
