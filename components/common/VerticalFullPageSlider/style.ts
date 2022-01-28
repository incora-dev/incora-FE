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
`;

export const SliderContent = styled.div`
  max-width: ${({ maxWidth }: IMaxWidth) => maxWidth ? `${maxWidth}px` : '1166px'};
  margin: 0 auto;
  position: relative;
`;

export const SliderContainer = styled.div`
  background: ${({ bgColor }: IColors) => bgColor || `${themeGet("colors.white")}`};
`
