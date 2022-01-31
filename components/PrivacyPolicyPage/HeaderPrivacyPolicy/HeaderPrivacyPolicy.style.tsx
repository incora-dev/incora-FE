import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 118px 0 58px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding: 20px 15px 50px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 27px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    row-gap: 15px;
  }
`;

export const H1 = styled.h1`
  max-width: 908px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-48);
  line-height: 72px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    font-size: var(--fs-36);
    line-height: 50px;
  }
`;

export const Text = styled.p`
  max-width: 724px;

  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.font1")};

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    line-height: 27px;
  }
`;
