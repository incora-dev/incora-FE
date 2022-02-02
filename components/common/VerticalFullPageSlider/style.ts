import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IColors {
  bgColor?: string;
};

interface IMaxWidth {
  maxWidth?: number;
};

export const Slide = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 105px);

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    height: max-content;
  }
`;

export const SliderContent = styled.div`
  max-width: ${({ maxWidth }: IMaxWidth) => maxWidth ? `${maxWidth}px` : '1166px'};
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    max-width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    padding: 0 25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    max-width: 100%;
    padding: 0 15px;
  }

  .scroll-item-container {
    @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
      left: 15px;
    }
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;

  background: ${({ bgColor }: IColors) => bgColor || `${themeGet("colors.white")}`};
`
