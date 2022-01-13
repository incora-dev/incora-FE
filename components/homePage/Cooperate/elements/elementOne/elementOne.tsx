import { PositionLoading, PlusesPosition, Div } from "./styles";
import Loading from '../../../../../public/loading1.svg';
import Element from '../../../../../public/element1.svg';
import Pluses from "../pluses/pluses";
import { IPlus } from "@interfaces";

function ElementOne(props: IPlus) {
  const { plusesColor, animation = false } = props;

  return (
    <Div>
      <PlusesPosition>
        <Pluses plusesColor={plusesColor} animation={animation}/>
      </PlusesPosition>

      {
        animation &&
        <PositionLoading animation={animation}>
          <Loading/>
        </PositionLoading>
      }

    </Div>
  )
}

export default ElementOne;
