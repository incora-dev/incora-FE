import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const SendCvFormWrapper = styled.div`
  width: 100%;
  height: 923px;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  padding: 120px 0;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: fit-content;
    padding: 50px 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
   padding: 50px 15px 30px;
  }
`;

export const ContentWrap = styled.div`
  width: 1015px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;
  }
`;

export const AttachCvWrap = styled.div`
  width: 400px;

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    width: 100%;
  }
`;
