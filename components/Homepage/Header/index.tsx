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
  PositionHexagon4
} from './styles';
import SVG from "../../../public/SVG/deepen-to-the-core.svg"
import Hexagon from "../../../public/SVG/hexagon1.svg"
import { useEffect, useRef, useState } from "react";
import { theme } from '../../../styles/theme';
import { relative } from 'path/posix';
import { useIsMobile } from '../../../services/hooks';


function HeaderComponent() {
  const videoEl: any = useRef(null);
      const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  return (
    <Cover>
      <Container>
        <Div>
          <VideoBlock>
            <video
              style={{ width: (isMobile || isTablet || isSmallTablet) && !isSmallTablet 
                        ? '90vw' 
                        : isSmallTablet 
                          ? '87vw' 
                          : '710px', 
                      height: (isMobile || isTablet || isSmallTablet) ? 'unset' : '380px', 
                      position: (isMobile || isTablet || isSmallTablet) ? 'relative' : 'static', 
                      top: '1px' }}
              autoPlay
              loop
              muted
            >
              <source src="DeepenToTheCoreOfIdeaVideo.mp4" type="video/mp4"/>
            </video>

            <PositionVideoSVG>
              <SVG/>
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
            <Line/>
            <ScrollText>scroll</ScrollText>
          </ScrollContainer>
        </Div>
      </Container>
    </Cover>
  )
}

export default HeaderComponent;
