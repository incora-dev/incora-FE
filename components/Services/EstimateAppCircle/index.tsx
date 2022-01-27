import { PositionCircleBlock, Circle, CircleBlock, PositionText } from "./EstimateAppCircle.style";
import TextAroundCircle from "../../../public/SVG/textAroundTheCircle.svg";

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
