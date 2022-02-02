import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IShowVideo {
  display: boolean;
}

export const Container = styled.div`
  position: relative;

  height: 742px;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    height: 500px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.sTablet')}) {
    height: 320px;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    height: 300px;
  }
`;

export const BGTop = styled.div`
  height: 37%;
  
  background-color: #fff;
`;

export const BGBottom = styled.div`
  height: 63%;

  background-color: #18181A;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: -3px;
  right: 0;

  z-index: 1;
  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
  }
  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    width: 100%;
  }
`;

export const VideoBLock = styled.div`
  position: relative;

  @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
    width: 100%;
  }
`;

export const PosterVideoPosition = styled.div`
  position: absolute;
  top: 0;

  opacity: ${( { display }: IShowVideo) => display ? 0 : 1};
  pointer-events: ${( { display }: IShowVideo) => display ? 'none' : 'all'};

  transition: opacity 1s linear;
  transition-delay: 1s;
`;

export const Video = styled.video`
`;

export const PlayerPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  z-index: 1;

  transform: translate(-52%, -52%);

  opacity: ${( { display }: IShowVideo) => display ? 0 : 1};
  pointer-events: ${( { display }: IShowVideo) => display ? 'none' : 'all'};

  transition: opacity 1s linear;
`;

export const Player = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  background: rgba(24, 24, 26, 0.2);
  backdrop-filter: blur(15px);

  cursor: pointer;

  border-radius: 50%;
  transition: 0.15s linear;
`;

export const PositionPlaySVG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 33px;
  height: 39px;

  transform: translate(-37%, -50%);

  svg {
    margin: 0 auto;
    path {
      fill: #fff;
    }
  }
`;
