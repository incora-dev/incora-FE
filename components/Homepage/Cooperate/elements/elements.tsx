import { IElement } from "@interfaces";
import ElementOne from "./elementOne/elementOne";
import ElementTwo from "./elementTwo/elementTwo";
import { PositionElementOne, PositionElementTwo, PositionElementThree, PositionElementFour } from "./styles";
import ElementThree from "./elementThree/elementThree";
import ElementFour from "./elementFour/elementFour";

function Elements({ elementNumber, plusesColor, animation }: IElement) {
  return (
    <>
      {
        (elementNumber === 1) &&
          <PositionElementOne>
            <ElementOne plusesColor={plusesColor} animation={animation}/>
          </PositionElementOne>
      }
      {
        (elementNumber === 2) &&
          <PositionElementTwo>
            <ElementTwo animation={animation}/>
          </PositionElementTwo>
      }

      {
        (elementNumber === 3) &&
          <PositionElementThree>
            <ElementThree plusesColor={'#000'} animation={animation}/>
          </PositionElementThree>
      }

      {
        (elementNumber === 4) &&
        <PositionElementFour>
          <ElementFour animation={animation}/>
        </PositionElementFour>
      }
    </>
  )
}

export default Elements;
