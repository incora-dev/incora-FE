import { CreateDot } from "./styles";
import { IDot } from "@interfaces";

function Dot(props: IDot) {
  const { color, numberOfDots } = props;

  return (
    <CreateDot color={color}/>
  )
}

export default Dot;
