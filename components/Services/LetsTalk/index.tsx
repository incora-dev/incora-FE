import {
  Div,
  Wrapper,
  TextBlock,
  H2,
  Text,
  Block,
  PositionHexagon,
  Container
} from "./LetsTalk.style";
import ButtonWithArrow from "../../ButtonWithArrow";
import Hexagon from "../../../public/SVG/hexagon1.svg";

const text1 = 'Got no clue where to start?';
const text2 = 'Why don’t we discuss your idea?';

const LetsTalk = () => {
  return (
    <Div>
      <Wrapper>
        <Container>
          <Block>
            <TextBlock>
              <Text>{text1}<br/>{text2}</Text>
              <H2>Let’s talk!</H2>
            </TextBlock>
            <ButtonWithArrow
              buttonLabel={'Contact us'}
              redirectTo={'Contact us'}
              padding={'23px 25.5px'}
            />
          </Block>

          <PositionHexagon>
            <Hexagon/>
          </PositionHexagon>
        </Container>
      </Wrapper>
    </Div>
  )
}

export default LetsTalk;
