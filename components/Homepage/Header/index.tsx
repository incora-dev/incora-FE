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
import { useIsMobile } from "../../../services/hooks";

interface IHeaderComponent {
  backgroundVideo: string;
}

function HeaderComponent({ backgroundVideo }: IHeaderComponent) {
  const isMobile = useIsMobile();

  return (
    <Cover>
      <Container>
        <Div>
          <VideoBlock>
            <video
              style={{
                width: isMobile ? "94vw" : "707px",
                height: isMobile ? "unset" : "380px",
                position: isMobile ? "relative" : "static",
                top: "1px",
              }}
              autoPlay
              loop
              muted
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>

            <PositionVideoSVG>
              <SVG />
            </PositionVideoSVG>
          </VideoBlock>

          {!isMobile && (
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
