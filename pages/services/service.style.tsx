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
  /* identical to box height */

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

export const PositionHexagon1 = styled.div`
  position: absolute;

  top: -158px;
  left: -61px;
  
  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon2 = styled.div`
  position: absolute;

  top: -71px;
  left: 50px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon3 = styled.div`
  position: absolute;

  top: -157px;
  left: 468px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon4 = styled.div`
  position: absolute;

  top: -73px;
  left: 439px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon5 = styled.div`
  position: absolute;

  top: -127px;
  right: 157px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon6 = styled.div`
  position: absolute;

  top: -104px;
  right: 67px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon7 = styled.div`
  position: absolute;

  bottom: 5px;
  left: -282px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon8 = styled.div`
  position: absolute;

  bottom: 255px;
  left: -260px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon9 = styled.div`
  position: absolute;

  bottom: 100px;
  left: 94px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon10 = styled.div`
  position: absolute;

  bottom: -60px;
  left: -151px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon11 = styled.div`
  position: absolute;

  bottom: -136px;
  left: 316px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon12 = styled.div`
  position: absolute;

  bottom: -109px;
  left: 339px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon13 = styled.div`
  position: absolute;

  bottom: 14px;
  right: -166px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon14 = styled.div`
  position: absolute;

  bottom: 64px;
  right: 117px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon15 = styled.div`
  position: absolute;

  bottom: 354px;
  right: -217px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon16 = styled.div`
  position: absolute;

  bottom: 215px;
  right: -246px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;

export const PositionHexagon17 = styled.div`
  position: absolute;

  bottom: -121px;
  right: -277px;

  svg {
    path {
      fill: ${({ color }) => color}
    }
  }
`;
