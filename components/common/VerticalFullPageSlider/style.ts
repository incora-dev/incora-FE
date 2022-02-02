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

  @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
    max-width: 100%;
    padding: 0 25px;
  }

  .scroll-item-container {
    left: 3px;

    @media only screen and (max-width: ${themeGet('breakpoints.tabletPro')}) {
      left: 15px !important;
    }
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;

  background: ${({ bgColor }: IColors) => bgColor || `${themeGet("colors.white")}`};
`
