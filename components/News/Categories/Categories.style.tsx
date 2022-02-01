import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  display: flex;
  column-gap: 5px;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    flex-direction: column;
  }
`;

export const P = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: var(--fs-12);
  line-height: 22px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #FEC602;
  
  cursor: pointer;

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    line-height: 21px;
  }
`;
