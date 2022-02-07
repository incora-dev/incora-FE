import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IComponent {
  bgColor: string;
}

export const Component = styled.div`
  height: 623px;
  
  background-color: ${({bgColor}: IComponent) => bgColor};

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    padding: 0 0 70px;
  }
`;

export const PaddingTop = styled.div`
  padding-top: 120px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-top: 53px;
  }
`;

export const MarginTop = styled.div`
  margin-top: 52px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding-left: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-left: 15px;
  }
`;

export const Div = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    position: absolute;
    right: -100px;
  }
  
  svg {
    margin-top: 10px;
    
    cursor: pointer;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-left: 15px;
  }
`;

export const H2 = styled.h2`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: ${({color}) => color};
  
`;
