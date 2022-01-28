import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../styles/theme";

interface IDiv {
  bgColor: string;
}

interface IFontSize {
  titleSize: string;
}

interface ITextWidth {
  textWidth: string;
}

export const Div = styled.div`
  position: relative;
  top: -104px;

  overflow: hidden;

  background-color: ${({ bgColor }: IDiv) => bgColor};
`;

export const Wrapper = styled.div`
  position: relative;

  max-width: 1006px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 222px 0 129px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21.5px;
  
  color: ${({ bgColor }: IDiv) => bgColor === theme.colors.black ? theme.colors.white : theme.colors.black};
`;

export const H1 = styled.h1`
  max-width: 766px;

  font-style: normal;
  font-weight: 800;
  font-size: ${({ titleSize }: IFontSize) => titleSize};
  line-height: ${({ titleSize }: IFontSize) => titleSize === '48px' ? '72px' : '96px'};

  text-transform: capitalize;
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-26);
  line-height: 39px;

  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  color: ${themeGet("colors.yellow")};
`;

export const Text = styled.p`
  max-width: ${({ textWidth }: ITextWidth) => textWidth};

  font-style: normal;
  font-weight: normal;
  font-size: var(--fs-14);
  line-height: 30px;

  letter-spacing: 0.1em;
`;

export const PositionIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: 191px;
  right: -3.9vw;
`;
