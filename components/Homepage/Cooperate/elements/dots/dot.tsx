import { CreateDot } from "./styles";
import { IDot } from "@interfaces";

function Dot({ color, animation = false, animationDelay = 0, size = '4px' } : IDot) {

  return (
    <CreateDot
      color={color}
      animation={animation}
      animationDelay={animationDelay}
      size={size}
    />
  )
}

export default Dot;
