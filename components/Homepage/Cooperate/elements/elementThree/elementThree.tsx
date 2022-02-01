import { Element, PositionPluses, PositionCircle, PositionCircleWithGradient, Circle, CircleWithGradient  } from "./styles";
import Pluses from "../pluses/pluses";

import { IPlus } from "@interfaces";


function ElementThree(props: IPlus) {
  const { plusesColor, animation } = props;

  return (
    <Element>
      <PositionPluses>
        <Pluses plusesColor={plusesColor} animation={animation}/>
      </PositionPluses>

      <PositionCircle>
        <Circle animation={animation}/>
      </PositionCircle>

      <PositionCircleWithGradient>
        <CircleWithGradient animation={animation}/>
      </PositionCircleWithGradient>

    </Element>
  )
}

export default ElementThree;
