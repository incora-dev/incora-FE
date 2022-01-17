import { Div, HorizontalLine, VerticalLine } from './styles'
import { IPlus } from "@interfaces";

function Plus(props: IPlus) {
  const { plusesColor, animation, animationDelay } = props;

  return (
    <Div animation={animation} animationDelay={animationDelay}>
      <HorizontalLine color={plusesColor}/>
      <VerticalLine color={plusesColor}/>
    </Div>
  )
}

export default Plus;
