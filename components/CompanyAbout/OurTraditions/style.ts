import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const OurTraditionsWrapper = styled.div`
  width: 100%;
  height: 981px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const OurTraditionsTextWrap = styled.div`
  width: 100%;
  height: 421px;
  display: flex;
  justify-content: center;
`;

export const TextWrap = styled.div`
  height: 330px;
  width: 1002px;

  h1 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: var(--fs-26);
    letter-spacing: ${themeGet("letterSpacing.h1")};
  }
`;

export const Paragraphs = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: var(--fs-14);
    width: 463px;
    line-height: 30px;
  }
`;

export const Photos = styled.div`
  width: 1366px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 19px;
`;
