import styled from "styled-components";

interface IPlayerPosition {
  visibility: string;
}

interface IPlayer {
  opacity: number;
}

export const Container = styled.div`
  position: relative;

  height: 742px;
`;

export const BGTop = styled.div`
  height: 45%;
  
  background-color: #fff;
`;

export const BGBottom = styled.div`
  height: 55%;

  background-color: #18181A;
`;

export const VideoBLock = styled.div`
  width: 1006px;
`;

export const Video = styled.video`
  position: absolute;
  top: 28px;
  right: 0;

  z-index: 1;
`;

export const PlayerPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 25%;

  z-index: 2;

  transform: translate(-50%, -50%);

  visibility: ${({ visibility }: IPlayerPosition ) => visibility};
`;

export const Player = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  background: rgba(24, 24, 26, 0.2);
  backdrop-filter: blur(15px);
  
  border-radius: 50%;

  opacity: ${({ opacity }: IPlayer ) => opacity};
  transition: 0.15s linear;
  
  svg {
    position: absolute;
    top: 50%;
    right: 15%;

    transform: translate(-50%, -50%);
    
    path {
      fill: #fff;
    }
  }
`;
