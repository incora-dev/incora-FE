import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const SendCvFormWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  padding-top: 120px 0;
 @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    padding-top: 50px;
  }
`;

export const ContentWrap = styled.div`
  width: 1015px;
`;

export const AttachCvWrap = styled.div`
  width: 400px;
`;
