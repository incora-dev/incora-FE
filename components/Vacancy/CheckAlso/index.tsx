import Vacancies from "../../Careear/Vacancies";
import { CheckAlsoWrapper } from "./style";
import Hex from "../../../public/hexBig.svg";
import HexCropped from "../../../public/hexSmallCropped.svg";

const CheckAlso = () => {
  return (
    <CheckAlsoWrapper>
      <Vacancies title={"Check Also"} />
      <Hex className="hex" />
      <HexCropped className="hex_cropped" />
    </CheckAlsoWrapper>
  );
};

export default CheckAlso;
