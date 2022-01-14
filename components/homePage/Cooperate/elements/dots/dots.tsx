import Dot from "./dot";
import { Div } from "./styles";
import { IDots } from "@interfaces";

function Dots({ numberOfDots, dotColor, animation, size = '4px', columnGap = '20.57px', rowGap = '13px' }: IDots) {
  const getDots = (): JSX.Element[]  => {
    const dots: JSX.Element[] = [];

    while(dots.length !== numberOfDots) {
      dots.push(
        <Dot
          key={dots.length}
          color={dotColor}
          animation={animation}
          animationDelay={dots.length * 50}
          size={size}
        />
      )
    }

    return dots;
  }

  return (
    <Div
      numberOfDots={numberOfDots}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      {getDots().map((dot) => dot)}
    </Div>
  )
}

export default Dots;
