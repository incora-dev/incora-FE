import {
  Div,
  Wrapper,
  TextBlock,
  H2,
  Text,
  Block,
  PositionHexagon,
  Container,
  PositionButtonWithArrow
} from "./LetsTalk.style";
import ButtonWithArrow from "../../ButtonWithArrow";
import Hexagon from "../../../public/SVG/hexagon1.svg";

const LetsTalk = ({ flexDirection = 'column', title, text }: any) => {
  return (
    <Div >
      <Wrapper>
        <Container>
          <Block>
            <TextBlock flexDirection={flexDirection}>
              <Text>{text}</Text>
              <H2>{title}</H2>
            </TextBlock>
          </Block>

          <PositionHexagon>
            <Hexagon/>
          </PositionHexagon>
        </Container>
        <PositionButtonWithArrow>
          <ButtonWithArrow
            buttonLabel={'Contact us'}
            redirectTo={'Contact us'}
            padding={'23px 25.5px'}
          />
        </PositionButtonWithArrow>

      </Wrapper>
    </Div>
  )
}

export default LetsTalk;
