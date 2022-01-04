import { Element, Loading, PositionLoading, PlusesPosition } from "./styles";
import Pluses from "../pluses/pluses";
import { IPlus } from "@interfaces";

function ElementOne(props: IPlus) {
  const { plusesColor } = props;

  return (
    <Element>
      <PlusesPosition>
        <Pluses plusesColor={plusesColor}/>
      </PlusesPosition>

      <PositionLoading>
        <Loading/>
      </PositionLoading>
    </Element>
  )
}

export default ElementOne;
