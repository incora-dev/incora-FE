import { Element, PositionPluses } from "./styles";
import Pluses from "../pluses/pluses";
import { IPlus } from "@interfaces";


function ElementThree(props: IPlus) {
  const { plusesColor } = props;

  return (
    <Element>
      <PositionPluses>
        <Pluses plusesColor={plusesColor} />
      </PositionPluses>
    </Element>
  )
}

export default ElementThree;
