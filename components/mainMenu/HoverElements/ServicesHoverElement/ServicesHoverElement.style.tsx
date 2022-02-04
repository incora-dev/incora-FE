import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../../styles/theme";

interface IChangeColor {
  titleColor: string;
}

export const MainWrapper = styled.div`
  border-top: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? `1px solid ${theme.colors.grey}` : `1px solid ${theme.colors.backgroundBlack2}`};
`;

export const Div = styled.div`
  position: relative;

  max-width: 1366px;
  margin: 0 auto;
  z-index: 25;

  background-color: ${({backgroundColor}: {backgroundColor: string}) => backgroundColor};
`;

export const PositionLoader = styled.div`
  position: absolute;
  top: 63px;
  left: -51px;
  z-index: -1;
  
  svg {
    transform: rotate(196deg);
  }
`;

export const PositionLoader2 = styled.div`
  position: absolute;
  top: 232px;
  left: -42px;
  
  svg {
    transform: rotate(47deg);
    
    path {
      fill: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
    }
  }
`;

export const PositionDots = styled.div`
  position: absolute;
  top: 129px;
  left: 38px;

  transform: rotate(58deg);
`;

export const Wrapper = styled.div`
  padding: 62px 100px 84px 193px;
  display: flex;
  column-gap: 110px;

  color: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
    padding: 25px;
    column-gap: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    flex-direction: column;
    row-gap: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 15px;
    flex-direction: column;
    overflow: scroll;
    height: 93vh;
    gap: 20px;
  }
`;

export const BlockWithIcons = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 70px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    row-gap: 0;
    width: 50%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 100%;
  }
`;

export const BlockWithIconsTop = styled.div`
  display: flex;
  column-gap: 30px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  @media only screen and (max-width: ${theme.breakpoints.xsMobile}) {
    flex-direction: column;
  }
`;

export const BlockWithIconsBottom = styled.div`
  display: flex;
  column-gap: 50px;

  @media only screen and (max-width: ${theme.breakpoints.xsMobile}) {
    flex-direction: column;
  }
`;

export const ArrowWithTextBlock = styled.div`
  margin-top: 10px;
  margin-left: 55px;

  display: flex;
  column-gap: 8px;
  
  align-items: center;
  
  svg {
    display: block;
    
    path {
      fill: ${themeGet("colors.yellow2")};
    }
  }
`;

export const IconBlock = styled.div`
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

export const ServicesBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const Services = styled.div`
  
`;

export const AllServices = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  
  color: ${themeGet("colors.yellow2")};

  svg {
    display: block;
    
    path {
      fill: ${themeGet("colors.yellow2")};
    }
  }
`;

export const AllServicesText = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
`;

export const Service = styled.h5`
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
`;

export const TitleBlock = styled.div`
  display: flex;
  column-gap: 14px;
  align-items: center;
  
  svg {
    width: 27px;
    &:nth-child(1) {
      path {
        stroke: ${({ titleColor }: IChangeColor) => titleColor === theme.colors.black ? theme.colors.black : theme.colors.white};
      }
    }
  }
`;

export const H4 = styled.h4`
  max-width: 302px;

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

export const H5 = styled.h5`
  max-width: 250px;

  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  transition: all ${themeGet("transition.button")};

  &:hover {
    color: ${themeGet("colors.yellow2")};
  }
`;

export const H6 = styled.h5`
  padding-top: 40px;

  max-width: 410px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

`;

export const Text = styled.p`
  margin-top: 10px;
  margin-left: 55px;

  max-width: 302px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;
