import { Element, PositionLoading, PositionPointsFirst, PositionPointsSecond } from "./styles";
import Loading from '../../../../../public/loading2.svg'
import Dots from "../dots/dots";
import { IElementAnimation } from "@interfaces";

function ElementTwo({ animation }: IElementAnimation) {
  return (
    <Element>
      {
        animation &&
        <PositionLoading animation={animation}>
          <Loading/>
        </PositionLoading>
      }


      <PositionPointsFirst>
        <Dots
          numberOfDots={18}
          dotColor={'#000'}
          animation={animation}
        />
      </PositionPointsFirst>

      <PositionPointsSecond>
        <Dots
          numberOfDots={21}
          dotColor={'#fec506'}
          animation={animation}
        />
      </PositionPointsSecond>
    </Element>
  )
}

export default ElementTwo;
