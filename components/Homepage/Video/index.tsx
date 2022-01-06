import { Container, VideoBLock, BGTop, BGBottom, Video, Player, PlayerPosition } from "./Video.style";
import { useRef, useState } from "react";
import Play from "../../../public/Player/Play.svg"

function VideoComponent() {
  const videoRef = useRef({ });
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

      <VideoBLock>
        <Video
          ref={videoRef}
          style={{ width: '1122px', height: '671px' }}
          autoPlay
          loop
          onClick={() => videoHandler(play)}
        >
          <source src={'/mp4/Video.mp4'} type={'video/mp4'}/>
        </Video>

        <PlayerPosition
          visibility={visibility}
          onClick={() => videoHandler(play)}
        >
          <Player opacity={opacity}>
            <Play/>
          </Player>
        </PlayerPosition>
      </VideoBLock>
    </Container>
  )
}

export default VideoComponent;
