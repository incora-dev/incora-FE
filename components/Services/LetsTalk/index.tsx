import {
  Div,
  Wrapper,
  TextBlock,
  H2,
  Text,
  Block,
  PositionHexagon,
  Container,
  PositionButtonWithArrow,
} from "./LetsTalk.style";
import ButtonWithArrow from "../../ButtonWithArrow";
import Hexagon from "../../../public/SVG/hexagon1.svg";
import { ReactElement } from "react";

interface ILetsTalk {
  title: string;
  text: string | ReactElement<string>;
  isWhite?: boolean;
  flexDirection?: string;
}

const LetsTalk = ({
  flexDirection = "column",
  title,
  text,
  isWhite,
}: ILetsTalk) => {
  return (
    <Div isWhite={isWhite}>
      <Wrapper>
        <Container>
          <Block>
            <TextBlock flexDirection={flexDirection}>
              <Text>{text}</Text>
              <H2>{title}</H2>
            </TextBlock>
          </Block>

          <PositionHexagon isWhite={isWhite} >
            <Hexagon />
          </PositionHexagon>
        </Container>
        <PositionButtonWithArrow>
          <ButtonWithArrow
            buttonLabel={"Contact us"}
            redirectTo={"/contacts"}
            padding={"23px 25.5px"}
          />
        </PositionButtonWithArrow>
      </Wrapper>
    </Div>
  );
};

export default LetsTalk;
