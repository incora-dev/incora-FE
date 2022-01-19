import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Div = styled.div`
  background-color: ${themeGet("colors.white")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  margin: 0 auto;
  padding: 120px 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  row-gap: 90px;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 54px;

  letter-spacing: 0.05em;
  
  color: ${themeGet("colors.black")};
`;

export const IconsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 110px;
  row-gap: 50px;
  align-items: center;
  justify-items: center;
  
  svg {
    cursor: pointer;
  }
`;
