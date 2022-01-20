import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.black")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 0 0 82px 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: ${themeGet("colors.white")};
`;

export const Text = styled.p`
  max-width: 653px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;

  letter-spacing: 0.1em;

  color: ${themeGet("colors.font1")};
`;
