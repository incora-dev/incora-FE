import {
  PositionHexagon1,
  PositionHexagon10,
  PositionHexagon11,
  PositionHexagon12,
  PositionHexagon13,
  PositionHexagon14,
  PositionHexagon15,
  PositionHexagon16,
  PositionHexagon17,
  PositionHexagon2,
  PositionHexagon3,
  PositionHexagon4,
  PositionHexagon5,
  PositionHexagon6,
  PositionHexagon7,
  PositionHexagon8,
  PositionHexagon9
} from "./Elements.style";
import HexagonFilled from "../../public/hexagonFilled.svg";
import HexagonBordered from "../../public/hexagonBordered.svg";

interface IGetElements {
  color: string;
}

const Elements = ({ color }: IGetElements) => {
  return (
      <>
        <PositionHexagon1 color={color}>
          <HexagonFilled/>
        </PositionHexagon1>

        <PositionHexagon2>
          <HexagonBordered/>
        </PositionHexagon2>

        <PositionHexagon3 color={color}>
          <HexagonFilled/>
        </PositionHexagon3>

        <PositionHexagon4>
          <HexagonBordered/>
        </PositionHexagon4>

        <PositionHexagon5 color={color}>
          <HexagonFilled/>
        </PositionHexagon5>

        <PositionHexagon6>
          <HexagonBordered/>
        </PositionHexagon6>

        <PositionHexagon7 color={color}>
          <HexagonFilled/>
        </PositionHexagon7>

        <PositionHexagon8>
          <HexagonBordered/>
        </PositionHexagon8>

        <PositionHexagon9 color={color}>
          <HexagonFilled/>
        </PositionHexagon9>

        <PositionHexagon10>
          <HexagonBordered/>
        </PositionHexagon10>

        <PositionHexagon11 color={color}>
          <HexagonFilled/>
        </PositionHexagon11>

        <PositionHexagon12>
          <HexagonBordered
            width={192}
            height={222}
            viewBox="0 0 143 165"
          />
        </PositionHexagon12>

        <PositionHexagon13 color={color}>
          <HexagonFilled/>
        </PositionHexagon13>

        <PositionHexagon14>
          <HexagonBordered/>
        </PositionHexagon14>

        <PositionHexagon15 color={color}>
          <HexagonFilled/>
        </PositionHexagon15>

        <PositionHexagon16>
          <HexagonBordered/>
        </PositionHexagon16>

        <PositionHexagon17>
          <HexagonBordered/>
        </PositionHexagon17>
      </>
  )
}

export default Elements;
