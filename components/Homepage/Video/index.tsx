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
import { useRef, useState } from "react";
import PlaySVG from "../../../public/Player/Play.svg"

type IVideo = {
  readonly current: HTMLVideoElement;
}

function VideoComponent() {
  const videoRef: any = useRef(null);
  const [play, setPlay] = useState(true);
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState(1);

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
              style={{ width: '1122px' }}
              loop
              onClick={() => videoHandler(play)}
              poster={'./Player/videoPoster.jpg'}
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
