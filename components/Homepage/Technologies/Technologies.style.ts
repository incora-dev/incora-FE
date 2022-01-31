import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IComponent {
  bgColor: string;
}

export const Component = styled.div`
  height: 623px;
  
  background-color: ${({bgColor}: IComponent) => bgColor};

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 500px;
  }
`;

export const PaddingTop = styled.div`
  padding-top: 120px;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 53px;
  }
`;

export const MarginTop = styled.div`
  margin-top: 52px;
`;

export const Div = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    position: relative;
    right: -100px;
  }
  
  svg {
    margin: auto 0;
    
    cursor: pointer;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    padding-left: 20px;
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
