import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IBackground {
  bgColor: string;
}

interface ITitleColor {
  color: string;
}

export const Div = styled.div`
  margin-top: -104px;

  background-color: ${({ bgColor }: IBackground) => bgColor};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1006px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 0 15px;
  }
`

export const InfoBlock = styled.div`
  padding-bottom: 120px;
  
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding-bottom: 80px;
    padding-top: 40px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    row-gap: 30px;
  }
`

export const H1 = styled.h1`
  max-width: 681px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;

  letter-spacing: 0.05em;
  
  color: ${({ color }: ITitleColor) => color};

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-24);
    line-height: 35px;
  }
  
`

export const ArgumentsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    justify-content: center;
    column-gap: 25px;
    row-gap: 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    flex-direction: column;
  }
`

export const TechnologyWrapper = styled.div`
  max-width: 302px;
  padding: 40px;
  
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  
  background-color: ${themeGet("colors.backgroundBlack2")};

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    padding: 25px;
    max-width: calc(50% - 20px);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 20px;
    max-width: 100%;
  }
`

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;
  letter-spacing: 0.05em;
  
  color: ${themeGet("colors.yellow2")};

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-18);
    line-height: 27px;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;
  
  color: ${themeGet("colors.font1")};

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    line-height: 27px;
  }
`
