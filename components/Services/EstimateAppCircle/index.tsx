import { PositionCircleBlock, Circle, CircleBlock, PositionText } from "./EstimateAppCircle.style";
import TextAroundCircle from "../../../public/SVG/aroundTheCircle.svg";

const EstimateAppCircle = () => {
  return (
      <PositionCircleBlock>
        <CircleBlock>
          <Circle/>
          <PositionText>
            <TextAroundCircle/>
          </PositionText>
        </CircleBlock>
      </PositionCircleBlock>
  )
}

export default EstimateAppCircle;
