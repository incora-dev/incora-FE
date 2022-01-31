import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const SendCvFormWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  padding: 120px 0;
`;

export const ContentWrap = styled.div`
  width: 1015px;
`;

export const AttachCvWrap = styled.div`
  width: 400px;
`;
