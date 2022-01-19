import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const InvitationWrapper = styled.div`
  width: 100%;
  height: 1180px;
  background-color: ${themeGet("colors.black")};
  padding-top: 36px;
  position: relative;
  margin-bottom: 120px;

  .semicircle {
    position: absolute;
    top: 380px;
  }
`;

export const DotsWrap = styled.div`
  position: absolute;
  top: 430px;
  left: 25px;
  transform: rotate(63deg);
`;

export const CareersWrap = styled.div`
  width: 100%;
  height: 628px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 179px;
`;

export const TextBlock = styled.div`
  width: 366px;
  padding-top: 84px;

  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 96px;
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
    line-height: 30px;
    color: ${themeGet("colors.font1")};
    letter-spacing: ${themeGet("letterSpacing.h1")};
    margin-bottom: 26px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: 27px;
    color: ${themeGet("colors.white")};
    letter-spacing: ${themeGet("letterSpacing.span")};
    z-index: 0;
  }
`;

export const Rectangle = styled.div`
  width: 321px;
  height: 10px;
  background-color: ${themeGet("colors.yellow")};
  position: relative;
  top: -9px;
  left: 5px;
  z-index: 1;
`;

export const PhotoWrap = styled.div`
  position: relative;

  .semicircle2 {
    position: absolute;
    left: -43px;
    top: 55px;
    z-index: 1;
  }
`;

export const ProcessWrap = styled.div`
  height: 385px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const HeaderWrap = styled.div`
  width: 959px;

  h1 {
    font-weight: 800;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: ${themeGet("letterSpacing.h1")};
    color: ${themeGet("colors.white")};
    margin-bottom: 71px;
  }
`;

export const SchemeWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 254px;
  position: relative;
  width: 959px;

  svg {
    position: absolute;
  }

  .steps {
    z-index: 1;
    top: 0;
    left: 0;
  }

  .dots {
    left: 0;
    top: 10px;
  }
`;
