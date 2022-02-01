import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const DescriptionWrapper = styled.div`
  height: 712px;
  width: 100%;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: auto;
  }
`;

export const TextWrap = styled.div`
  margin-top: 120px;
  width: 1004px;
  height: 420px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    margin-top: 40px;
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 0 15px;
    row-gap: 15px;
  }
`;

export const HeaderText = styled.div`
  width: 471px;

  h1 {
    font-weight: 800;
    font-size: var(--fs-36);

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      font-weight: 600;
      font-size: var(--fs-18);
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
  }
`;

export const Paragraphs = styled.div`
  width: 467px;

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
  }

  > p {
    margin-bottom: 25px;
  }

  p {
    font-size: var(--fs-14);
    font-family: Poppins;
    letter-spacing: 0.5px;
    line-height: 30px;

    @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
      line-height: 27px;
    }
  }
`;
