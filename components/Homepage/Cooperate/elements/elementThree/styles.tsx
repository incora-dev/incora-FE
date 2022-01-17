import styled from "styled-components";

interface ICircle {
  animation: boolean;
}

export const Element = styled.div`
  position: relative;
  width: 356px;
  height: 309px;

  background: center no-repeat url("element3.svg");
`;

export const Circle = styled.div`
  height: 32.5px;
  width: 32.5px;
  border-radius: 50%;
  
  background-color: #FEC506;
  
  transform: ${({ animation }: ICircle) => {
    if (animation) {
      return 'scale(1)';
    } else {
      return 'scale(0)';
    }
  }};
  
  transition: transform 1s ease-in-out;
`;

export const CircleWithGradient = styled.div`
  height: 57px;
  width: 56px;
  border-radius: 50%;

  background: linear-gradient(180deg, #FEC506 0%, rgba(254, 197, 6, 0) 100%);

  transform: ${({ animation }: ICircle) => {
    if (animation) {
      return 'rotate(-90deg) scale(1)';
    } else {
      return 'rotate(-90deg) scale(0)';
    }
  }};
  
  transition: transform 1s ease-in-out;
`;

export const PositionPluses = styled.div`
  position: absolute;
  right: 22px;
  bottom: -1px;
`;

export const PositionCircle = styled.div`
  position: absolute;
  right: 84px;
  bottom: 137px;
`;

export const PositionCircleWithGradient = styled.div`
  position: absolute;
  right: 206px;
  bottom: 124px;
`;
