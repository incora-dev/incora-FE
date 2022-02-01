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
  PositionHexagonTwo,
  PositionHexagonThree,
  PositionHexagonFour,
  PositionHexagonFive,
  PositionHexagonSix,
  PositionHexagonSeven,
  PositionHexagonEight,
  PositionHexagonNine,
  PositionCube1,
  PositionCube2,
  PositionCube3,
  PositionCube4,
  PositionCube5,
  Sphere,
} from "./styles";
import { IServices } from "@interfaces";
import Loading from "../../../public/loading.svg"
import { useEffect, useState } from "react";
import Cube1 from "../../../public/SVG/Cube1.svg"
import Cube2 from "../../../public/SVG/Cube2.svg"
import Cube3 from "../../../public/SVG/Cube3.svg"
import HexagonBordered from "../../../public/hexagonBordered.svg"
import HexagonFilled from "../../../public/hexagonFilled.svg"
import { theme } from "../../../styles/theme";
import Link from "next/link";

function ServicesComponent({ title, text, labels }: IServices) {
  const [ onEnterBlock, setOnEnterBlock] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  return (
    <Component
     onMouseEnter={() => setOnEnterBlock(true)}
    >
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
                    <Link href={`/services/${label.replace('/', '').replace(' ', '_')}`} key={index}>
                      <Label key={index}>{label}</Label>
                    </Link>
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

        {!isMobile && (
          <>
            <PositionCube2>
              <Cube1/>
            </PositionCube2>


            <PositionCube3>
              <Cube2/>
            </PositionCube3>

            <PositionCube5>
              <Cube3/>
            </PositionCube5>

            <Sphere>
              <PositionCube1>
                <Cube1/>
              </PositionCube1>

              <PositionCube4>
                <Cube3/>
              </PositionCube4>
            </Sphere>
          </>
        )}




        {/*<PositionCube2>*/}
        {/*  <Cube2/>*/}
        {/*</PositionCube2>*/}

      </Position>
    </Component>
  )
}

export default ServicesComponent;
