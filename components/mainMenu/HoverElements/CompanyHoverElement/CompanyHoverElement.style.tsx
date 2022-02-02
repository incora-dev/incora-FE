import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../../styles/theme";

interface IChangeColor {
  titleColor?: string;
  backgroundColor?: string;
}

export const MainWrapper = styled.div`
  border-top: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? `1px solid ${theme.colors.grey}` : `1px solid ${theme.colors.backgroundBlack2}`};
  overflow: hidden;
`;

export const Div = styled.div`
  position: relative;

  max-width: 1366px;
  margin: 0 auto;

  color: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
  z-index: 25;

  background-color: ${({ backgroundColor }: IChangeColor) => backgroundColor};
`;

export const PositionLoader = styled.div`
  position: absolute;
  left: -6px;
  bottom: 76px;
  z-index: -1;
`;

export const PositionPluses = styled.div`
  position: absolute;
  left: 59px;
  top: 104px;
`;

export const PositionSquare = styled.div`
  position: absolute;
  left: -68px;
  top: 113px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    display: none;
  }
`;

export const Square = styled.div`
  width: 155px;
  height: 155px;

  border: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? `15px solid ${theme.colors.black}` : `15px solid ${theme.colors.white}`};
  background-color: transparent;
`;

export const Wrapper = styled.div`
  padding: 142px 0 159px 313px;
  
  display: flex;
  column-gap: 79px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 15px;
    flex-direction: column;
    overflow: scroll;
    height: 93vh;
    gap: 20px;
  }
`;

export const InfoWrapper = styled.div<IChangeColor>`
  display: flex;
  column-gap: 17px;

  svg {
    &:nth-child(1) {
      path {
        stroke: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
      }
      
      circle {
        stroke: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
      }
    }
  }
`;

export const Icons = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

export const InfoTextBlock = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

export const H4 = styled.h4`
  max-width: 340px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  transition: all ${themeGet("transition.button")};

  &:hover {
    color: ${themeGet("colors.yellow2")};
  }
`;

export const Text = styled.p`
  margin-top: 10px;

  max-width: 302px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const ButtonBlock = styled.div`
  padding-left: 4px;
  
  display: flex;
  column-gap: 24px;
  
  align-items: center;
`;

export const PositionArrow = styled.div`
  svg {
    display: block;

    path {
      fill: ${themeGet("colors.yellow2")};
    }
  }
`;

export const ButtonText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: ${themeGet("colors.yellow2")};
  transition: all ${themeGet("transition.button")};

  &:hover {
    color: ${themeGet("colors.yellow5")};
  }

  &:hover ${PositionArrow} {
    svg {
      path {
        fill: red;
      }
    }
  }
`;
