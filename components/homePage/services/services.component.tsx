import {
  Component,
  Position,
  Div,
  PositionTextBlock,
  H2,
  Label,
  Labels,
  P,
  Loading,
  PositionHexagonOne,
  HexagonBordered,
  HexagonFilled,
  PositionHexagonTwo,
  PositionHexagonThree,
  PositionHexagonFour,
  PositionHexagonFive,
  PositionHexagonSix,
  PositionHexagonSeven,
  PositionHexagonEight,
  PositionHexagonNine
} from "./styles";
import { IServices } from "@interfaces";

function ServicesComponent(props: IServices) {
  const { title, text, labels } = props;

  return (
    <Component>
      <Position>
        <Div>
          <PositionTextBlock>
            <Div>
              <H2>{title}</H2>
              <P>{text}</P>

              <Labels>
                {labels.map((label, index) => <Label key={index}>{label}</Label>)}
              </Labels>
            </Div>
          </PositionTextBlock>
        </Div>
      </Position>

      <Loading/>

      <PositionHexagonOne>
        <HexagonBordered/>
      </PositionHexagonOne>

      <PositionHexagonTwo>
        <HexagonFilled/>
      </PositionHexagonTwo>

      <PositionHexagonThree>
        <HexagonBordered/>
      </PositionHexagonThree>

      <PositionHexagonFour>
        <HexagonFilled/>
      </PositionHexagonFour>

      <PositionHexagonFive>
        <HexagonBordered/>
      </PositionHexagonFive>

      <PositionHexagonSix>
        <HexagonBordered/>
      </PositionHexagonSix>

      <PositionHexagonSeven>
        <HexagonBordered/>
      </PositionHexagonSeven>

      <PositionHexagonEight>
        <HexagonFilled/>
      </PositionHexagonEight>

      <PositionHexagonNine>
        <HexagonBordered/>
      </PositionHexagonNine>
    </Component>
  )
}

export default ServicesComponent;
