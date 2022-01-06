import styled from "styled-components";

interface IImg {
  borderRadius: string;
}

interface IElement {
  elementsColor: string;
}

const transitionTime = '0.5s';


export const PositionElement1 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  transition: ${transitionTime};
  
  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement4 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement5 = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement6 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement7 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement8 = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  transition: ${transitionTime};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
`;

export const PositionElement9 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition: ${transitionTime};

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

  &:hover ${PositionElement1} {
    bottom: -310px;
    
    transition: ${transitionTime};
  }

  &:hover ${PositionElement2} {
    top: -220px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement3} {
    left: -220px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement4} {
    bottom: -285px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement5} {
    top: -285px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement6} {
    left: -255px;

    transition: ${transitionTime};
  }
  
  &:hover ${PositionElement7} {
    bottom: -305px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement8} {
    right: -200px;

    transition: ${transitionTime};
  }

  &:hover ${PositionElement9} {
    top: -205px;

    transition: ${transitionTime};
  }
`;

