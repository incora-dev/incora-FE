import Dot from "./dot";
import { Div } from "./styles";
import { IDots } from "@interfaces";

function Dots({ numberOfDots, dotColor, animation }: IDots) {
  const getDots = (): JSX.Element[]  => {
    const dots: JSX.Element[] = [];

    while(dots.length !== numberOfDots) {
      dots.push(
        <Dot
          key={dots.length}
          color={dotColor}
          animation={animation}
          animationDelay={dots.length * 50}
        />
      )
    }

    return dots;
  }

  return (
    <Div numberOfDots={numberOfDots}>
      {getDots().map((dot) => dot)}
    </Div>
  )
}

export default Dots;
