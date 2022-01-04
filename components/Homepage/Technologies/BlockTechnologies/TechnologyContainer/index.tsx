import Vector1 from "../../../../../public/SVG/Vector1.svg";
import Vector2 from "../../../../../public/SVG/Vector2.svg";
import { Div, PositionOne, PositionTwo } from "./TechnologyContainer";
import { ITechnologyContainer } from "@interfaces";

function TechnologyContainer(props: ITechnologyContainer) {
  const { children } = props;
  return (
    <Div>
      <PositionOne>
        <Vector1/>
      </PositionOne>

      <PositionTwo>
        <Vector2/>
      </PositionTwo>

      {children}
    </Div>
  )
}

export default TechnologyContainer;
