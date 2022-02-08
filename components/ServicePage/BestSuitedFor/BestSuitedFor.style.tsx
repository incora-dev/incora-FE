import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IAnimation {
  animation: boolean;
  delay: number;
}

export const Div = styled.div`
  color: #ffffff;
  background: #181819;
`;

export const Wrapper = styled.div`
  padding-top: 119px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    padding: 80px 25px 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    padding: 55px 15px 0;
  }
`;

export const H2 = styled.h2`
  max-width: 1006px;
  //padding: 0 13.2vw;
  margin: 0 auto;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    line-height: 40px;
  }

  letter-spacing: 0.05em;
`;

export const Content = styled.div`
  min-height: 50vh;

  max-width: 1006px;
  padding: 63px 0 158px 0;
  margin: 0 auto;

  position: relative;

  display: flex;
  column-gap: 58px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    min-height: fit-content;
    padding: 63px 0 120px 0;
    left: 0;
    column-gap: 40px;
    row-gap: 45px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    padding: 40px 0 100px 0;
    justify-content: flex-start;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    column-gap: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    flex-direction: column;
    padding: 25px 0 60px 0;
    row-gap: 15px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;

  svg {
    transform: rotate(195deg);

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      width: 50px;
    }
  }
`;

export const Text = styled.p`
  position: relative;
  top: 51px;
  right: 25px;

  max-width: 229px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-18);
  line-height: 27px;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    font-size: var(--fs-16);
    max-width: 154px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    max-width: 290px;
  }
`;

export const PositionDots = styled.div`
  position: absolute;
  top: 29px;
  left: 38px;

  transform: rotate(60deg);

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    top: 23px;
    left: 29px;
  }
`;
