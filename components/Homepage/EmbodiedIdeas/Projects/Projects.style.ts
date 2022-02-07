import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IContainer {
  flexDirection: string;
}

interface IText {
  margin: string;
}

export const Container = styled.div`
  display: flex;
  column-gap: 77px;
  flex-direction: ${({ flexDirection }: IContainer) => flexDirection};
  width: 100%;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    column-gap: 30px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    flex-direction: column;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    flex-wrap: wrap-reverse;
    max-width: 100%;
  }
`;

export const Text = styled.div`
  max-width: 448px;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 21px;
  //min-height: 537px;
  //padding-right: 58%;
  padding-top: 80px;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    //padding-right: 49%;
    padding-top: 70px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    //padding-right: 47%;
    padding-top: 15px;
    min-height: 300px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    row-gap: 12px;
    padding: 0;
    min-height: auto;
    margin-bottom: 35px;
  }
`;

export const Block = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  cursor: pointer;
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-36);
  line-height: 54px;
  letter-spacing: 0.05em;
  color: #000;
  cursor: pointer;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    line-height: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-24);
    line-height: 35px
  }
`;

export const P = styled.p`
  max-width: 410px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #454a4d;

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    line-height: 27px
  }
`;

export const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-12);
  line-height: 18px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
`;
