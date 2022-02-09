import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../../styles/theme";

interface IChangeColor {
  titleColor: string;
}

interface IChangeColorDiv {
  titleColor: string;
  backgroundColor: string;
}

export const MainWrapper = styled.div`
  border-top: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? `1px solid ${theme.colors.grey}` : `1px solid ${theme.colors.backgroundBlack2}`};
  overflow: hidden;
`;

export const Div = styled.div`
  position: relative;

  max-width: 1366px;
  margin: 0 auto;

  color: ${({ titleColor }: IChangeColorDiv) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
  z-index: 25;

  background-color: ${({ backgroundColor }: IChangeColorDiv) => backgroundColor};
`;

export const PositionLoader = styled.div`
  position: absolute;
  top: 131px;
  right: 127px;

  z-index: -1;
  
  svg {
    transform: rotate(225deg);
    
    path {
      fill:  ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionRectangle = styled.div`
  position: absolute;
  top: 125px;
  right: 34px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionSphere = styled.div`
  position: absolute;
  top: 62px;
  right: -24px;
`;

export const Sphere = styled.div`
  width: 105px;
  height: 105px;


  border: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? `20px solid ${theme.colors.black}` : `20px solid ${theme.colors.white}`};
  background-color: transparent;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  padding: 66px 100px 69px 100px;
  
  display: flex;
  column-gap: 182px;
  
  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    height: calc(100vh - 60px);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 25px;
    column-gap: 60px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    flex-direction: column;
    overflow: scroll;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 15px 15px 45px 15px;
    flex-direction: column;
    overflow: scroll;
    /* height: 93vh; */
    gap: 20px;
  }
`;

export const IndustriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 22px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    min-width: 200px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 20px;
    margin-bottom: 10px;
  }
`;

export const Industries = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechnologiesBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding-bottom: 110px;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  column-gap: 33px;
`;

export const TechnologiesDiv = styled.div`
  display: flex;
  column-gap: 33px;
`;

export const TechnologiesText = styled.div`
  display: flex;
  row-gap: 18px;
`;

export const TextBlock = styled.div`
  display: flex;
  column-gap: 5px;

  margin-left: 19px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    margin-left: 0;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Slash = styled.div`
  margin-top: 4px;
`;


export const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.05em;

  transition: all ${themeGet("transition.button")};

  &:hover {
    color: ${themeGet("colors.yellow2")};
  }
`;

export const TechnologiesIconsBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 33px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 20px;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 17px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 12px;
  }
`;

export const LabelBlock = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const IconBlock = styled.div`
  display: flex;
  column-gap: 12px;

  align-items: center;
  
  svg {
    display: block;
    min-width: 25px;

    &:nth-child(1) {
      path {
        stroke: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
      }

      circle {
        stroke: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
      }
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-wrap: wrap;
  }
`;

export const Industry = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 35px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  transition: all ${themeGet("transition.button")};

  &:hover {
    color: ${themeGet("colors.yellow2")};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 32px;
  }
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const H4 = styled.h4`
  min-width: 128px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
