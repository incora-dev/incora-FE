import {
  Container,
  VideoContainer,
  VideoBLock,
  BGTop,
  BGBottom,
  Player,
  PlayerPosition,
  PositionPlaySVG,
  PosterVideoPosition
} from "./Video.style";
import { useEffect, useRef, useState } from "react";
import PlaySVG from "../../../public/Player/Play.svg"
import { theme } from "../../../styles/theme";
import {HOME_PAGE_VIDEO_LINK} from "../../../constants";
import { useIsMobile } from "../../../services/hooks";

function VideoComponent() {
  const [play, setPlay] = useState(false);
    const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  useEffect(() => {
    const player = document.getElementById('youTubeVideo') as HTMLIFrameElement;

    if(play) {
      player && (player.src += '?autoplay=1');
    }
  }, [play]);

  const iframeHeight = isTablet && !isMobile && !isSmallTablet
    ? '500px' 
    : isMobile 
      ? '250px' 
      : isSmallTablet ? '325px' : '671px';

  const imgHeight = isTablet && !isSmallTablet 
    ? '500px' 
    : isSmallTablet && !isMobile 
      ? '325px' 
      : isMobile 
        ? '250px'
        : 'unset';

  return (
    <Container>
      <BGTop/>
      <BGBottom/>

        <VideoContainer>
          <VideoBLock onClick={() => setPlay(true)}>
            <PosterVideoPosition display={play}>
              <img style={{height: imgHeight}} src={'./Player/PosterVideo.jpg'}></img>
            </PosterVideoPosition>
              <iframe
                id={'youTubeVideo'}
                width={isMobile || isTablet || isSmallTablet ? '100%' : '1122px'}
                height={iframeHeight}
                src={HOME_PAGE_VIDEO_LINK}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            <PlayerPosition display={play}>
              <Player>
                <PositionPlaySVG>
                  <PlaySVG/>
                </PositionPlaySVG>
              </Player>
            </PlayerPosition>
          </VideoBLock>
        </VideoContainer>
    </Container>
  )
}

export default VideoComponent;
