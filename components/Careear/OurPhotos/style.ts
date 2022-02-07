import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IShowVideo {
  display: boolean;
}

export const OurPhotosWrap = styled.div`
  width: 100%;
  height: 1221px;
  position: relative;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  right: 0;
  top: -278px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    position: relative;
    top: 0;
  }
`;

export const PhotosWrap = styled.div`
  position: absolute;
  top: 515px;
  width: 1004px;
  display: flex;
  flex-flow: wrap;
  gap: 56px;

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    position: relative;
    width: 100%;
    top: 0;
    margin-top: 30px;
    padding: 0 25px;
    gap: 0;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    padding: 0 15px;
    margin-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: calc((100% - 56px) / 2);

  @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
    width: calc((100% - 30px) / 2);
    margin-bottom: 25px;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
    width: 100%;
  }
  
  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    width: 100%;
    max-height: 300px;
    margin: 0;
    margin-bottom: 15px;
  }

  :nth-child(2n + 1) {
    @media only screen and (max-width: ${themeGet("breakpoints.mDesk")}) {
      margin-right: 30px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.sTablet")}) {
      margin: 0 0 25px;
    }

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      margin-right: 0;
    }
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  right: 0;
  top: -278px;

  z-index: 1;

  @media only screen and (max-width: ${themeGet('breakpoints.mDesk')}) {
    position: relative;
    top: 0;
    width: 100%;
  }

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
  width: 100%;
  opacity: ${( { display }: IShowVideo) => display ? 0 : 1};
  pointer-events: ${( { display }: IShowVideo) => display ? 'none' : 'all'};

  transition: opacity 1s linear;
  transition-delay: 1s;

  img {
    @media only screen and (max-width: ${themeGet('breakpoints.tablet')}) {
      width: 100%;
    }
  }
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

