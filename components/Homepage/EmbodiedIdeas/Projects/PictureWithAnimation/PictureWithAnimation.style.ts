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
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: ${({ borderRadius} : IImg) => borderRadius};
`;

