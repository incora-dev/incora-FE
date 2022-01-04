import { Div, HorizontalLine, VerticalLine } from './styles'
import { IPlus } from "@interfaces";

function Plus(props: IPlus) {
  const { plusesColor } = props;

  return (
    <Div>
      <HorizontalLine color={plusesColor}/>
      <VerticalLine color={plusesColor}/>
    </Div>
  )
}

export default Plus;
