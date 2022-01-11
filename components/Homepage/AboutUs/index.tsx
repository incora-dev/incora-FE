import { Div, Container, Text, PositionDots, PositionLoading, PositionHexagon } from "./AboutUs.style";
import { IAboutUs } from "@interfaces";
import Dots from "../Cooperate/elements/dots/dots";
import Loading from "../../../public/loading1.svg";
import Hexagon from "../../../public/SVG/hexagon1.svg";

function AboutUs({ backgroundColor, title, text }: IAboutUs) {
  return (
    <Div backgroundColor={backgroundColor}>
      <Container>
        <Text>
          <h2>{title}</h2>
          <p>{text}</p>

          <PositionDots>
            <Dots numberOfDots={5} dotColor={'#fff'} animation={true}/>
          </PositionDots>

          <PositionLoading>
            <Loading height={75} width={75} viewBox="0 0 112 112"/>
          </PositionLoading>

          <PositionHexagon>
            <Hexagon height={221} width={192} viewBox="0 0 391 450"/>
          </PositionHexagon>
        </Text>
      </Container>
    </Div>
  )
}

export default AboutUs;
