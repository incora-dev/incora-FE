import { IElement } from "@interfaces";
import ElementOne from "./elementOne/elementOne";
import ElementTwo from "./elementTwo/elementTwo";
import { PositionElementOne, PositionElementTwo, PositionElementThree, PositionElementFour } from "./styles";
import ElementThree from "./elementThree/elementThree";
import ElementFour from "./elementFour/elementFour";

function Elements(props: IElement) {
  const { elementNumber, plusesColor } = props;

  return (
    <>
      {
        (elementNumber === 1) &&
          <PositionElementOne>
            <ElementOne plusesColor={plusesColor}/>
          </PositionElementOne>
      }
      {
        (elementNumber === 2) &&
          <PositionElementTwo>
            <ElementTwo/>
          </PositionElementTwo>
      }

      {
        (elementNumber === 3) &&
          <PositionElementThree>
            <ElementThree plusesColor={'#000'}/>
          </PositionElementThree>
      }

      {
        (elementNumber === 4) &&
        <PositionElementFour>
          <ElementFour/>
        </PositionElementFour>
      }
    </>
  )
}

export default Elements;1
