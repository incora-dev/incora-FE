import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export  const  Block = styled.div`
  overflow: hidden;
`;

export  const  Container = styled.div`
  position: relative;

  max-width: 1006px;
  
  display: flex;
  column-gap: 242px;
  
  margin: 0 auto;
  padding: 85px 0 120px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 40px 25px 50px;
    column-gap: 115px;
    max-width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    max-width: 100%;
    column-gap: 70px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    padding: 40px 15px 50px;
    flex-wrap: wrap;
    justify-content: center;

    >div:first-of-type {
      width: 100%;
    }
  }
`;

export  const  Titles = styled.div`
  margin-bottom: 38px;
`;

export  const  H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    font-size: var(--fs-40);
    line-height: 72px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    line-height: 50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    font-size: var(--fs-36);
    line-height: 60px;
  }

  letter-spacing: 0.05em;
  white-space: nowrap;
  text-transform: capitalize;

  color: #000;
`;

export  const  H4 = styled.h4`
  max-width: 361px;
  margin-top: -4px;

  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-18);
  line-height: 27px;

  letter-spacing: 0.05em;

  color: #000000;
`;

export  const  Form = styled.form`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: var(--fs-18);
  line-height: 27px;

  letter-spacing: 0.05em;

  color: #000000;
`;
