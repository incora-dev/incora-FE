import { CreateDot } from "./styles";
import { IDot } from "@interfaces";

function Dot({ color } : IDot) {

  return (
    <CreateDot color={color}/>
  )
}

export default Dot;
