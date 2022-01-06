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

export const VideoContainer = styled.div`
  position: absolute;
  top: 28px;
  right: 0;

  z-index: 1;
`;

export const VideoBLock = styled.div`
  position: relative;
`;

export const Video = styled.video`
`;

export const PlayerPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  z-index: 1;

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
`;

export const PositionPlaySVG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 33px;
  height: 39px;

  transform: translate(-50%, -50%);

  svg {
    margin: 0 auto;
    path {
      fill: #fff;
    }
  }
`;
