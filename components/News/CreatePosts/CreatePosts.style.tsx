import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const NewsContainer = styled.div`
  display: flex;
  width: 308px;
  height: 343px;
  flex-direction: column;
  row-gap: 14px;
  margin-right: 67px;

  @media only screen and (max-width: ${themeGet("breakpoints.tabletPro")}) {
    margin-right: 40px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    margin-right: 15px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-right: 30px;
  }

  :last-child {
    margin-right: 0;
  }
  
  a {
    h3 {
      margin-top: -10px;
    }
  }
`;

export const ImgBlock = styled.a`
  display: flex;
  cursor: pointer;

  img {
    border-radius: 0 20px 0 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;

    span {
      width: 100% !important;
    }
  }
`;

export const H3 = styled.h3`
  max-width: 308px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-18);
  line-height: 22px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.black")};


  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    font-size: var(--fs-14);
    line-height: 21px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    font-size: var(--fs-16);
    line-height: 26px;
  }
`;

export const Element = styled.div`
  align-self: flex-end;

  width: 15px;
  height: 171px;

  background: ${themeGet("colors.yellow")};
  border-radius: 0 0 0 30px;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    height: 130px;
  }
`

