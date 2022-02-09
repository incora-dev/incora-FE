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

interface IHeaderComponent {
  backgroundVideo: string;
}

function HeaderComponent({backgroundVideo}: IHeaderComponent) {
      const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  return (
    <Cover>
      <Container>
        <Div>
          <VideoBlock>
            <video
              style={{ width: (isMobile || isTablet || isSmallTablet) && !isSmallTablet 
                        ? '80vw' 
                        : isSmallTablet 
                          ? '80vw' 
                          : '710px', 
                      height: (isMobile || isTablet || isSmallTablet) ? 'unset' : '380px', 
                      position: (isMobile || isTablet || isSmallTablet) ? 'relative' : 'static', 
                      top: '1px' }}
                      // style={{
                      //   width: isMobile ? "94vw" : "707px",
                      //   height: isMobile ? "unset" : "380px",
                      //   position: isMobile ? "relative" : "static",
                      //   top: "1px",
                      // }}
              autoPlay
              loop
              muted
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="gif">
              <img src={`${IMAGES_LINK}/uploads/home_885cce1415.gif`} alt="" />
              {/* <Image src={Gif} alt="gif" layout="responsive" /> */}
            </div>
            <PositionVideoSVG>
              <SVG />
            </PositionVideoSVG>
          </VideoBlock>

          {!isMobile && !isTablet && !isSmallTablet && (
            <><PositionHexagon1>
              <Hexagon
                width="235"
                viewBox="0 0 391 450" />
            </PositionHexagon1><PositionHexagon2>
                <Hexagon
                  width="235"
                  viewBox="0 0 391 450" />
              </PositionHexagon2><PositionHexagon3>
                <Hexagon
                  width="235"
                  viewBox="0 0 391 450" />
              </PositionHexagon3><PositionHexagon4>
                <Hexagon
                  width="235"
                  viewBox="0 0 391 450" />
              </PositionHexagon4></>
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
