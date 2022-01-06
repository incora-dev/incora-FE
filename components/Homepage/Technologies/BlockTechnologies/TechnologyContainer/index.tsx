import Vector1 from "../../../../../public/SVG/Vector1.svg";
import Vector2 from "../../../../../public/SVG/Vector2.svg";
import { Div, PositionOne, PositionTwo } from "./TechnologyContainer";

function TechnologyContainer() {

  return (
    <Div>
      <PositionOne>
        <Vector1/>
      </PositionOne>

      <PositionTwo>
        <Vector2/>
      </PositionTwo>
    </Div>
  )
}

export default TechnologyContainer;
