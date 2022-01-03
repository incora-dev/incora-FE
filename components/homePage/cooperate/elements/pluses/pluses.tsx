import { DIV } from './styles'
import Plus from "./plus";
import { IPlus } from "@interfaces";


function Pluses(props: IPlus) {
  const { plusesColor } = props;

  const getPluses = () => {
    const pluses: JSX.Element[] = [];

    while(pluses.length !== 12) {
      pluses.push(
        <Plus key={pluses.length} plusesColor={plusesColor}/>
      );
    }

    return pluses;
  }

  return (
    <DIV>
      {getPluses().map((plus) => plus)}
    </DIV>
  )
}

export default Pluses;

