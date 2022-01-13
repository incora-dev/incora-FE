import { CreateDot } from "./styles";
import { IDot } from "@interfaces";

function Dot({ color, animation = false, animationDelay = 0 } : IDot) {

  return (
    <CreateDot
      color={color}
      animation={animation}
      animationDelay={animationDelay}
    />
  )
}

export default Dot;
