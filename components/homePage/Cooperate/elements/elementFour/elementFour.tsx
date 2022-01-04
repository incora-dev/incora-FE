import { Element, Loading, PositionLoading, PositionDots } from "./styles";
import Dots from "../dots/dots";

function ElementFour() {

  return (
      <Element>
        <PositionDots>
          <Dots numberOfDots={18} dotColor={'#000'} />
        </PositionDots>

        <PositionLoading>
          <Loading/>
        </PositionLoading>
      </Element>
  )
}

export default ElementFour;
