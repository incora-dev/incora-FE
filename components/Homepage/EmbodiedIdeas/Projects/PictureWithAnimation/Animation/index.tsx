import {
  PositionElement1,
  PositionElement2,
  PositionElement3,
  PositionElement4,
  PositionElement5,
  PositionElement6,
  PositionElement7,
  PositionElement8,
  PositionElement9
} from "../PictureWithAnimation.style";
import AnimationElement1a from "../../../../../../public/SVG/Animation1/Vector.svg";
import AnimationElement2a from "../../../../../../public/SVG/Animation1/Vector (1).svg";
import AnimationElement3a from "../../../../../../public/SVG/Animation1/Vector (2).svg";
import AnimationElement1b from "../../../../../../public/SVG/Animation2/Vector.svg";
import AnimationElement2b from "../../../../../../public/SVG/Animation2/Vector (1).svg";
import AnimationElement3b from "../../../../../../public/SVG/Animation2/Vector (2).svg";
import AnimationElement1c from "../../../../../../public/SVG/Animation3/Vector.svg";
import AnimationElement2c from "../../../../../../public/SVG/Animation3/Vector (1).svg";
import AnimationElement3c from "../../../../../../public/SVG/Animation3/Vector (2).svg";
import { IAnimation } from "@interfaces";

function Animation(props: IAnimation) {
  const { index, elementsColor, shouldHover } = props;

  const createdAnimation = () => {
    if (index === 0) {
      return (
          <>
            <PositionElement1 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement1a/>
            </PositionElement1>

            <PositionElement2 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement2a/>
            </PositionElement2>

            <PositionElement3 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement3a/>
            </PositionElement3>
          </>
      )
    }

    if (index === 1) {
      return (
          <>
            <PositionElement4 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement1b/>
            </PositionElement4>

            <PositionElement5 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement2b/>
            </PositionElement5>

            <PositionElement6 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement3b/>
            </PositionElement6>
          </>
      )
    }

    if (index === 2) {
      return (
          <>
            <PositionElement7 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement1c/>
            </PositionElement7>

            <PositionElement8 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement2c/>
            </PositionElement8>

            <PositionElement9 elementsColor={elementsColor} index={shouldHover}>
              <AnimationElement3c/>
            </PositionElement9>
          </>
      )
    }
  }

  const Animated = createdAnimation();

  return (
    <>
      {Animated}
    </>
  )
}

export default Animation;
