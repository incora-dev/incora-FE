import { Element, PositionLoading, PositionDots, CircleWithGradient, PositionCircleWithGradient } from "./styles";
import Loader from '../../../../../public/loading3.svg'
import Dots from "../dots/dots";
import { IElementAnimation } from "@interfaces";

function ElementFour({ animation }: IElementAnimation) {
  return (
      <Element>
        <PositionDots>
          <Dots numberOfDots={18} dotColor={'#000'} animation={animation}/>
        </PositionDots>

        {
          animation &&
          <PositionLoading animation={animation}>
            <Loader/>
          </PositionLoading>
        }

        <PositionCircleWithGradient>
          <CircleWithGradient animation={animation}/>
        </PositionCircleWithGradient>

      </Element>
  )
}

export default ElementFour;
