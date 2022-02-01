import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { transitionTimeProjectsHoverDuration } from "../../../../../constants";

interface IImg {
  borderRadius: string;
}

interface IElement {
  elementsColor: string;
  index: number;
}

export const PositionElement1 = styled.div`
  position: absolute;
  bottom: ${({ index }: IElement) => {
  if (index === 0) {
    return '-310px';
  } else {
    return '-8px';
  }
}};
  right: 0;

  transition: ${transitionTimeProjectsHoverDuration};
  
  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    transform: scale(0.7);
    bottom: ${({ index }: IElement) => {
      if (index === 0) {
        return '-310px';
      } else {
        return '-52px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.4);
    bottom: ${({ index }: IElement) => {
      if (index === 0) {
        return '-310px';
      } else {
        return '-96px';
      }
    }};
    right: -200px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement2 = styled.div`
  position: absolute;
  top: ${({ index }: IElement) => {
    if (index === 0) {
      return '-220px';
    } else {
      return '0';
    }
  }};
  right: 0;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    top: ${({ index }: IElement) => {
      if (index === 0) {
        return '-220px';
      } else {
        return '-40px';
      }
    }};
    right: -130px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement3 = styled.div`
  position: absolute;
  top: 0;
  left: ${({ index }: IElement) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '0';
  }
}};

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.6);
    top: ${({ index }: IElement) => {
      if (index === 0) {
        return '-340px';
      } else {
        return '-94px';
      }
    }};
    left: -45px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement4 = styled.div`
  position: absolute;
  bottom: ${({ index }: IElement) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}};
  right: 0;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement5 = styled.div`
  position: absolute;
  top: ${({ index }: IElement) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}};
  right: 0;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement6 = styled.div`
  position: absolute;
  top: 0;
  left: ${({ index }: IElement) => {
  if (index === 1) {
    return '-255px';
  } else {
    return '0';
  }
}};

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement7 = styled.div`
  position: absolute;
  bottom: ${({ index }: IElement) => {
  if (index === 2) {
    return '-305px';
  } else {
    return '0';
  }
}};
  left: 0;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement8 = styled.div`
  position: absolute;
  top: 10px;
  right: ${({ index }: IElement) => {
  if (index === 2) {
    return '-200px';
  } else {
    return '0';
  }
}};

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const PositionElement9 = styled.div`
  position: absolute;
  top: ${({ index }: IElement) => {
  if (index === 2) {
    return '-205px';
  } else {
    return '0';
  }
}};
  left: 0;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  max-width: 700px;
  width: 100%;
  height: 537px;
  right: -180px;

  border-radius: ${({ borderRadius} : IImg) => borderRadius};

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    max-width: 600px;
    height: 460px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    max-width: 370px;
    height: 283px;
    right: -25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    position: relative;
    max-width: 100%;
    right: 0;
    height: auto;
  }
`;
