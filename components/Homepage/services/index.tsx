import {
  Component,
  Position,
  Div,
  PositionTextBlock,
  H2,
  Label,
  Labels,
  P,
  PositionLoading,
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
import Loading from "../../../public/loading.svg"
import {useState} from "react";

function ServicesComponent({ title, text, labels }: IServices) {
  const [ onEnterBlock, setOnEnterBlock] = useState(false)

  return (
    <Component onMouseEnter={() => {
      setOnEnterBlock(true);
    }}>
      { onEnterBlock &&
        <PositionLoading>
          <Loading/>
        </PositionLoading>
      }

      <Position>
        <Div>
          <PositionTextBlock>
            <Div>
                <H2>{title}</H2>
                <P>{text}</P>

              <Labels>
                {
                  labels.map((label, index) =>
                    <a href={label} key={index}>
                      <Label key={index}>{label}</Label>
                    </a>
                  )
                }
              </Labels>
            </Div>
          </PositionTextBlock>
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
        </Div>
      </Position>
    </Component>
  )
}

export default ServicesComponent;
