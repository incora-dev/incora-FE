import { Container, Div, TextBlock, H1, Strong, PositionDots, PositionLoaderBagelTrimmed } from "./Services.styles";
import Loader from "../../public/loading3.svg";
import LoaderBagelTrimmed from "../../public/loading1.svg";
import {theme} from "../../styles/theme";
import Dots from "../Homepage/Cooperate/elements/dots/dots";
import { useState } from "react";

const ServicesComponent = () => {
  const blackColor = theme.colors.black;
  const [animation, setAnimation] = useState(false);

  return (
    <Div onMouseEnter={() => setAnimation(true)}>
      <Container>
        <TextBlock>
          <H1>Services</H1>
          <Strong>We build, launch, and grow outstanding software products since 2015, by delivering a full set of development services. We are here to support your idea from its inception to the production.</Strong>
        </TextBlock>
      </Container>

      <Loader
        width={338}
        height={338}
        viewBox="0 0 187 187"
      />

      <PositionDots>
        <Dots numberOfDots={18} dotColor={blackColor} animation={animation}/>
      </PositionDots>

      {
        animation &&
        <PositionLoaderBagelTrimmed color={blackColor} animation={animation}>
          <LoaderBagelTrimmed
            width={63}
            heigh={63}
            viewBox="0 0 96 96"
          />
        </PositionLoaderBagelTrimmed>
      }
    </Div>
  )
}

export default ServicesComponent;
