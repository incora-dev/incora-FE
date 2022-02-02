import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const Div = styled.div`
  color: #000000;
  padding: 15.6vh 0 18.2vh;

  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 60px 0 80px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    row-gap: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 50px 0 50px;
  }
`;

export const Wrapper = styled.div`
  padding: 0 13.17vw;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  padding: 0 13.17vw;

  display: flex;
  column-gap: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    overflow: initial;
    padding: 0 25px;
    flex-wrap: wrap;
    row-gap: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    flex-direction: column;
    row-gap: 30px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 0 15px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 40px 40px 50px 40px;
  max-width: 573px;

  display: flex;
  flex-direction: column;
  row-gap: 11px;
  
  background: #FBFBFB;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 0;
    width: calc(50% - 30px);
    background: ${themeGet("colors.white")};
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    display: flex;
    align-items: flex-start;
    min-height: 60px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    min-height: auto;
  }
  img {
    display: block;
    position: relative;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const H1 = styled.h1`
  //max-width: 50vw;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
@media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
  line-height: 40px;
}

  letter-spacing: 0.05em;
`;

export const H2 = styled.h2`
  margin-left: 5px;

  display: inline-block;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;

  letter-spacing: 0.05em;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-18);
  }
`;

export const Number = styled.h2`
  display: inline-block;

  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;

  letter-spacing: 0.05em;

  color: #FEC506;
`;

export const Text = styled.p`
  width: 36vw;
  max-width: 493px;

  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: #000000;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 27px;
  }
`;
