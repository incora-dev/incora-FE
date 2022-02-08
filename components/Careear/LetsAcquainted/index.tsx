import {
  ContentWrap,
  DropAlineWrap,
  HexagonsWrap,
  LetsAcquaintedWrapper
} from "./style";
import HexSmall from "../../../public/hexSmall.svg";
import HexCropped from "../../../public/hexCropped.svg";
import Link from "next/link";
import { ROUTES } from "../../../constants/routes";

const LetsAcquainted = () => {
  return (
    <LetsAcquaintedWrapper>
      <ContentWrap>
        <span className="text1">
          {"Couldn't find anything that would be the right fit for you?"}
        </span>
        <h1>{"Let's get acquainted anyway!"}</h1>
        <DropAlineWrap>
          <Link href={ROUTES.COMPANY.SEND_CV}>
            <span className="text2">Drop us a line</span>
          </Link>
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
