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
    return '-21px';
  }
}};
  right: -5vw;

  transition: ${transitionTimeProjectsHoverDuration};
  
  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.7);
    bottom: ${({ index }: IElement) => {
      if (index === 0) {
        return '-310px';
      } else {
        return '-52px';
      }
    }};
    right: -100px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.45);
    bottom: ${({ index }: IElement) => {
      if (index === 0) {
        return '-310px';
      } else {
        return '-88px';
      }
    }};

    right: -179px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.4);
    bottom: ${({ index }: IElement) => {
      if (index === 0) {
        return '-220px';
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

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.6);
    right: -98px;

    top: ${({ index }: IElement) => {
      if (index === 0) {
        return '-220px';
      } else {
        return '-40px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    top: ${({ index }: IElement) => {
      if (index === 0) {
        return '-120px';
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

  @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(1);
    top: -52px;
    left: ${({index}: IElement) => {
      if (index === 0) {
        return '-310px';
      } else {
        return '-6px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(1);
    top: ${({ index }: IElement) => {
      if (index === 0) {
        return '-340px';
      } else {
        return '-94px';
      }
    }};
    left: -45px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.9);
    top: -52px;
    left: ${({index}: IElement) => {
      if (index === 0) {
        return '-200px';
      } else {
        return '-16px';
      }
    }};
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
    return '-21px';
  }
}};
  right: -70px;

  transition: ${transitionTimeProjectsHoverDuration};

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }

  @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.7);
    right: -80px;
    bottom: ${({index}: IElement) => {
      if (index === 1) {
        return '-285px';
      } else {
        return '-47px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.5);
    right: -126px;
    bottom: ${({index}: IElement) => {
      if (index === 1) {
        return '-220px';
      } else {
        return '-74px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    right: -128px;
    bottom: ${({index}: IElement) => {
      if (index === 1) {
        return '-220px';
      } else {
        return '-76px';
      }
    }};
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
  
    @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.9);
    right: -18px;
    top: ${({index}: IElement) => {
      if (index === 1) {
        return '-285px';
      } else {
        return '-18px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.7);
    right: -56px;
    top: ${({index}: IElement) => {
      if (index === 1) {
        return '-285px';
      } else {
        return '-44px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    right: -89px;
    top: ${({index}: IElement) => {
      if (index === 1) {
        return '-180px';
      } else {
        return '-77px';
      }
    }};
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
  
    
    @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.7);
    top: -73px;
    left: ${({ index }: IElement) => {
      if (index === 1) {
        return '-255px';
      } else {
        return '-40px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.7);
    top: -73px;
    left: ${({ index }: IElement) => {
      if (index === 1) {
        return '-255px';
      } else {
        return '-40px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    top: -120px;
    left: ${({ index }: IElement) => {
      if (index === 1) {
        return '-190px';
      } else {
        return '-65px';
      }
    }};
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
      return '-7px';
    }
  }};
  left: 0;

  transition: all ${transitionTimeProjectsHoverDuration} ease-in-out;

  svg {
    path {
      fill: ${({ elementsColor }: IElement) => elementsColor};
    }
  }
  
  @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.9);

    bottom: ${({ index }: IElement) => {
      if (index === 2) {
        return '-305px';
      } else {
        return '-55px';
      }
    }};
    left: -50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.7);
    bottom: ${({ index }: IElement) => {
      if (index === 2) {
        return '-305px';
      } else {
        return '-55px';
      }
    }};
    left: -50px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    bottom: ${({ index }: IElement) => {
      if (index === 2) {
        return '-228px';
      } else {
        return '-82px';
      }
    }};
    left: -100px;
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
  
  @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.9);

    top: 10px;
    right: ${({ index }: IElement) => {
      if (index === 2) {
        return '-200px';
      } else {
        return '-10px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.7);
    top: -67px;
    right: ${({ index }: IElement) => {
      if (index === 2) {
        return '-200px';
      } else {
        return '-32px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    top: -101px;
    right: ${({ index }: IElement) => {
      if (index === 2) {
        return '-200px';
      } else {
        return '-50px';
      }
    }};
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
  
    @media only screen and (max-width: ${themeGet('breakpoints.desk')}) {
    transform: scale(0.9);

    top: ${({ index }: IElement) => {
      if (index === 2) {
        return '-205px';
      } else {
        return '-12px';
      }
    }};
    left: -26px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    transform: scale(0.7);
    top: -67px;
    left: ${({ index }: IElement) => {
      if (index === 2) {
        return '-340px';
      } else {
        return '-122px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    transform: scale(0.5);
    top: -67px;
    left: ${({ index }: IElement) => {
      if (index === 2) {
        return '-310px';
      } else {
        return '-122px';
      }
    }};
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    display: none;
  }
`;

export const BlockContainer = styled.div`
`;

export const Wrapper = styled.div`
  position: relative;
  height: 500px;

  width: 700px;

  @media only screen and (max-width: ${themeGet('breakpoints.mediumDesk')}) {
    height: 400px;
    width: 600px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    height: 300px;
    width: 500px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    height: 560px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    height: 480px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobileTablet')}) {
    height: 400px;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: fit-content;
    width: 100%;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mMobile')}) {
    height: 250px;
    width: 100%;
  }

`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: max-content;
  right: -180px;

  border-radius: ${({ borderRadius} : IImg) => borderRadius};

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    max-width: 600px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.smallDesk')}) {
    max-width: 370px;
    right: -25px;
  }

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    position: relative;
    max-width: 100%;
    right: 0;
    height: auto;
  }
  
  img {
    display: block;
  }
`;
