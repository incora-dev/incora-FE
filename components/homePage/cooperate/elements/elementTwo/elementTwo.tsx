import { Element, Loading, PositionLoading, PositionPointsFirst, PositionPointsSecond } from "./styles";
import Dots from "../dots/dots";

function ElementTwo() {
  return (
    <Element>
      <PositionLoading>
        <Loading/>
      </PositionLoading>

      <PositionPointsFirst>
        <Dots numberOfDots={18} dotColor={'#000'}/>
      </PositionPointsFirst>

      <PositionPointsSecond>
        <Dots numberOfDots={21} dotColor={'#fec506'}/>
      </PositionPointsSecond>
    </Element>
  )
}

export default ElementTwo;
