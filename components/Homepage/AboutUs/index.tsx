import { Div, Container, Text, PositionDots, PositionLoading, PositionHexagon } from "./AboutUs.style";
import { IAboutUs } from "@interfaces";
import Dots from "../Cooperate/elements/dots/dots";
import Loading from "../../../public/loading1.svg";
import Hexagon from "../../../public/SVG/hexagon1.svg";
import {useState} from "react";

function AboutUs({ backgroundColor, title, text }: IAboutUs) {
  const [animation, setAnimation] = useState(false);

  return (
    <Div backgroundColor={backgroundColor} onMouseEnter={() => setAnimation(true)}>
      <Container>
        <Text>
          <h2>{title}</h2>
          <p>{text}</p>

          <PositionDots>
            <Dots numberOfDots={5} dotColor={'#fff'} animation={animation} rowGap={'12px'}/>
          </PositionDots>

          { animation &&
            <PositionLoading animation={true}>
              <Loading height={75} width={75} viewBox="0 0 96 96"/>
            </PositionLoading>
          }

          <PositionHexagon>
            <Hexagon height={221} width={192} viewBox="0 0 391 450"/>
          </PositionHexagon>
        </Text>
      </Container>
    </Div>
  )
}

export default AboutUs;
