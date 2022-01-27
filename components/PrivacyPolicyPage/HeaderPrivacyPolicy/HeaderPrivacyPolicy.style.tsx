import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 118px 0 58px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 27px;
`;

export const H1 = styled.h1`
  max-width: 908px;

  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};
`;

export const Text = styled.p`
  max-width: 724px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.font1")};
`;
