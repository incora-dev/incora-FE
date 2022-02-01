import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../styles/theme";

interface IDiv {
  bgColor: string;
}

interface IFontSize {
  titleSize: string;
}

interface ITextWidth {
  textWidth: string;
}

export const Div = styled.div`
  position: relative;
  top: -104px;

  overflow: hidden;

  background-color: ${({ bgColor }: IDiv) => bgColor};
`;

export const Wrapper = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 222px 0 129px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: calc(100% - 260px);
    padding-right: 20px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: calc(100% - 200px);
    padding: 165px 0 100px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: calc(100% - 200px);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 120px 0 50px;
    width: 100%;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21.5px;
  
  color: ${({ bgColor }: IDiv) => bgColor === theme.colors.black ? theme.colors.white : theme.colors.black};
`;

export const H1 = styled.h1`
  max-width: 766px;

  font-style: normal;
  font-weight: 800;
  font-size: ${({ titleSize }: IFontSize) => titleSize};
  line-height: ${({ titleSize }: IFontSize) => titleSize === '48px' ? '72px' : '96px'};

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    font-size: var(--fs-48);
    line-height: 72px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-36);
    line-height: 48px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-36);
    line-height: 46px;
    margin-top: 6px;
    width: calc(100% - 100px);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    width: 100%;
  }

  text-transform: capitalize;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  color: ${themeGet("colors.yellow")};

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-22);
  }
`;

export const Text = styled.p`
  max-width: ${({ textWidth }: ITextWidth) => textWidth};

  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;
`;

export const PositionIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: 191px;
  right: -3.9vw;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    right: 15px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 200px;
    top: 165px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    width: 160px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 90px;
    top: 130px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    display: none;
  }
`;
