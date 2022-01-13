import { HexagonsWrap, Position } from "./style";
import HexagonBordered from "../../../../../../../public/hexagonBordered.svg";
import HexagonFilled from "../../../../../../../public/hexagonFilled.svg";

const HexagonsBackground = () => {
  return (
    <HexagonsWrap>
      <Position top={111} left={-70}>
        <HexagonBordered />
      </Position>

      <Position top={350} left={-100}>
        <HexagonFilled />
      </Position>

      <Position top={365} left={30}>
        <HexagonBordered />
      </Position>

      <Position top={505} left={267}>
        <HexagonBordered />
      </Position>

      <Position top={530} left={340}>
        <HexagonFilled />
      </Position>

      <Position top={-130} left={210}>
        <HexagonFilled />
      </Position>

      <Position top={-50} left={310}>
        <HexagonBordered />
      </Position>

      <Position top={-20} right={-30}>
        <HexagonFilled />
      </Position>

      <Position top={130} right={-65}>
        <HexagonBordered />
      </Position>

      <Position top={535} right={-60}>
        <HexagonFilled />
      </Position>

      <Position top={310} right={20}>
        <HexagonFilled />
      </Position>
    </HexagonsWrap>
  );
};

export default HexagonsBackground;
