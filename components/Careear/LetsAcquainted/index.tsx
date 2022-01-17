import {
  ContentWrap,
  DropAlineWrap,
  HexagonsWrap,
  LetsAcquaintedWrapper,
  Rectangle,
} from "./style";
import HexSmall from "../../../public/hexSmall.svg";
import HexCropped from "../../../public/hexCropped.svg";

const LetsAcquainted = () => {
  return (
    <LetsAcquaintedWrapper>
      <ContentWrap>
        <span className="text1">
          {"Couldn't find anything tha would be the right fit for you?"}
        </span>
        <h1>{"Let's get acquainted anyway!"}</h1>
        <DropAlineWrap>
          <Rectangle />
          <span className="text2">Drop us a line</span>
        </DropAlineWrap>
      </ContentWrap>

      <HexagonsWrap>
        <HexSmall className="small" />
        <HexCropped className="cropped" />
      </HexagonsWrap>
    </LetsAcquaintedWrapper>
  );
};

export default LetsAcquainted;
