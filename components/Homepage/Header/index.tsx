import Image from "next/image";

import {
  Cover,
  Container,
  Div,
  ScrollContainer,
  Line,
  ScrollText,
  PositionVideoSVG,
  VideoBlock,
  PositionHexagon1,
  PositionHexagon2,
  PositionHexagon3,
  PositionHexagon4,
} from "./styles";
import SVG from "../../../public/SVG/deepen-to-the-core.svg";
import Hexagon from "../../../public/SVG/hexagon1.svg";
// import Gif from '../../../public/gifs/home.gif';
import { useIsMobile } from "../../../services/hooks";
import { IMAGES_LINK } from "../../../constants";
import { useState } from "react";

interface IHeaderComponent {
  backgroundVideo: string;
}

function HeaderComponent({ backgroundVideo }: IHeaderComponent) {
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  return (
    <Cover>
      <Container>
        <Div>
          <VideoBlock>
            {!loaded && (
              <img
                src="/images/defaultVideoImage.png"
                alt="intro"
                style={{ width: "100%", height: "100%" }}
              />
            )}
            <video
              style={{
                width:
                  (isMobile || isTablet || isSmallTablet) && !isSmallTablet
                    ? "80vw"
                    : isSmallTablet
                    ? "80vw"
                    : "710px",
                height:
                  isMobile || isTablet || isSmallTablet ? "unset" : "380px",
                position:
                  isMobile || isTablet || isSmallTablet ? "relative" : "static",
                top: "1px",
                opacity: loaded ? 1 : 0,
              }}
              autoPlay
              loop
              muted
              onPlay={(e) => {
                setLoaded(true);
                return e;
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="gif">
              <img
                alt="intro"
                src={`${IMAGES_LINK}/uploads/home_885cce1415.gif`}
                onLoad={() => setLoaded(true)}
                style={{
                  display: loaded ? "inherit" : "none",
                }}
              />
            </div>
            <PositionVideoSVG>
              <SVG />
            </PositionVideoSVG>
          </VideoBlock>

          {!isMobile && !isTablet && !isSmallTablet && (
            <>
              <PositionHexagon1>
                <Hexagon width="235" viewBox="0 0 391 450" />
              </PositionHexagon1>
              <PositionHexagon2>
                <Hexagon width="235" viewBox="0 0 391 450" />
              </PositionHexagon2>
              <PositionHexagon3>
                <Hexagon width="235" viewBox="0 0 391 450" />
              </PositionHexagon3>
              <PositionHexagon4>
                <Hexagon width="235" viewBox="0 0 391 450" />
              </PositionHexagon4>
            </>
          )}

          <ScrollContainer>
            <Line />
            <ScrollText>scroll</ScrollText>
          </ScrollContainer>
        </Div>
      </Container>
    </Cover>
  );
}

export default HeaderComponent;
