import {
  Container,
  VideoContainer,
  VideoBLock,
  BGTop,
  BGBottom,
  Video,
  Player,
  PlayerPosition,
  PositionPlaySVG
} from "./Video.style";
import { useEffect, useRef, useState } from "react";
import PlaySVG from "../../../public/Player/Play.svg"
import { theme } from "../../../styles/theme";

type IVideo = {
  readonly current: HTMLVideoElement;
}

function VideoComponent() {
  const videoRef: any = useRef(null);
  const [play, setPlay] = useState(true);
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  const videoHandler = (play: boolean) => {
    if (play) {
      videoRef.current.play();
      setPlay(!play);
      setVisibility('hidden');
      setOpacity(0);
    }

    if (!play) {
      videoRef.current.pause();
      setPlay(!play);
      setVisibility('visible');
      setOpacity(1);
    }
  };

  return (
    <Container>
      <BGTop/>
      <BGBottom/>

        <VideoContainer>
          <VideoBLock>
            <Video
              ref={videoRef}
              style={{ width: isMobile ? '100%' : '1122px', height: isMobile ? '250px' : '671px' }}
              loop
              onClick={() => videoHandler(play)}
              poster={'./Player/PosterVideo.jpg'}
            >
              <source src={'/mp4/Video.mp4'} type={'video/mp4'}/>
            </Video>

            <PlayerPosition visibility={visibility} onClick={() => videoHandler(play)}>
              <Player opacity={opacity}>
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
