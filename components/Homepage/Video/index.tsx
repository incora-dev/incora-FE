import {
  Container,
  VideoContainer,
  VideoBLock,
  BGTop,
  BGBottom,
  Player,
  PlayerPosition,
  PositionPlaySVG,
  PosterVideoPosition,
} from "./Video.style";
import { useEffect, useRef, useState } from "react";
import PlaySVG from "../../../public/Player/Play.svg";
import { theme } from "../../../styles/theme";
import { HOME_PAGE_VIDEO_LINK } from "../../../constants";
import { useIsMobile } from "../../../services/hooks";

function VideoComponent() {
  const [play, setPlay] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const player = document.getElementById("youTubeVideo") as HTMLIFrameElement;

    if (play) {
      player && (player.src += "?autoplay=1");
    }
  }, [play]);

  return (
    <Container>
      <BGTop />
      <BGBottom />

      <VideoContainer>
        <VideoBLock onClick={() => setPlay(!play)}>
          <PosterVideoPosition display={play}>
            <img
              style={{ height: isMobile ? "250px" : "unset" }}
              src={"./Player/PosterVideo.jpg"}
            ></img>
          </PosterVideoPosition>
          <iframe
            id={"youTubeVideo"}
            width={isMobile ? "100%" : "1122px"}
            height={isMobile ? "250px" : "671px"}
            src={HOME_PAGE_VIDEO_LINK}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <PlayerPosition display={play}>
            <Player>
              <PositionPlaySVG>
                <PlaySVG />
              </PositionPlaySVG>
            </Player>
          </PlayerPosition>
        </VideoBLock>
      </VideoContainer>
    </Container>
  );
}

export default VideoComponent;
