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
} from './styles'
import SVG from "../../../public/SVG/deepen-to-the-core.svg"
import Hexagon from "../../../public/SVG/hexagon1.svg"
import { useRef } from "react";


function HeaderComponent() {
  const videoEl: any = useRef(null);

  return (
    <Cover onMouseEnter={() => videoEl.current.play()}>
      <Container>
        <Div>
          <VideoBlock>
            <video
              style={{ width: '710px', height: '380px' }}
              autoPlay
              loop
              ref={videoEl}
            >
              <source src="DeepenToTheCoreOfIdeaVideo.mp4" type="video/mp4"/>
            </video>

            <PositionVideoSVG>
              <SVG/>
            </PositionVideoSVG>
          </VideoBlock>

            <PositionHexagon1>
              <Hexagon
                width="235"
                viewBox="0 0 391 450"
              />
            </PositionHexagon1>

            <PositionHexagon2>
              <Hexagon
                width="235"
                viewBox="0 0 391 450"
              />
            </PositionHexagon2>

          <PositionHexagon3>
            <Hexagon
              width="235"
              viewBox="0 0 391 450"
            />
          </PositionHexagon3>

          <PositionHexagon4>
            <Hexagon
              width="235"
              viewBox="0 0 391 450"
            />
          </PositionHexagon4>
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
