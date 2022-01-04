import Dot from "./dot";
import { Div } from "./styles";
import { IDots } from "@interfaces";

function Dots(props: IDots) {
  const { numberOfDots, dotColor } = props;

  const getDots = (): JSX.Element[]  => {
    const dots: JSX.Element[] = [];

    while(dots.length !== numberOfDots) {
      dots.push(<Dot key={dots.length} color={dotColor} numberOfDots={numberOfDots}/>)
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
