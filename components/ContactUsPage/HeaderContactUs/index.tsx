import {
  Div,
  Wrapper,
  TextBlock,
  H1,
  Text,
  PositionLoader,
  PositionDots,
  PositionSemiCircle
} from "./HeaderContactUs.styles";
import Loader from "../../../public/loading3.svg"
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import SemiCircle from "../../../public/SVG/SemicirleThin.svg";


interface IHeader {
  title: string;
  text: string;
}

const HeaderContactUs = ({ title, text }: IHeader) => {
  const [shouldAnimationStart, setAnimationStart] = useState(false);
  return (
    <Div onMouseEnter={() => setAnimationStart(true)}>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          <Text>{text}</Text>
        </TextBlock>
      </Wrapper>
      <PositionLoader>
        <Loader
          width={338}
          height={338}
          viewBox="0 0 187 187"
        />
      </PositionLoader>
      <PositionDots>
        <Dots
          animation={shouldAnimationStart}
          numberOfDots={5}
          dotColor={theme.colors.black}
          rowGap={'17.5px'}
        />
      </PositionDots>

      <PositionSemiCircle>
        <SemiCircle/>
      </PositionSemiCircle>
    </Div>
  )
}

export default HeaderContactUs;
