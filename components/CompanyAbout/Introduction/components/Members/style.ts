import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const MembersWrapper = styled.div`
  width: 100%;
  height: 634px;
  background-color: ${themeGet("colors.black")};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ContentWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 1005px;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

export const NumbersWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MembersPhotosWrap = styled.div`
  bottom: 60px;
  position: relative;
  width: 598px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
