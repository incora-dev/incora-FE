import HexagonsBackground from "../../HexagonsBackground";
import { CaseIntroductionWrapper, ContentWrap } from "./style";

const CaseIntroduction = () => {
  return (
    <CaseIntroductionWrapper>
      <HexagonsBackground />
      <ContentWrap>
        <h3>under</h3>
        <h2>NDA</h2>
        <h1>{"widget for verifying customer's information"}</h1>
        <p>
          {
            "It is a widget that provides identity verification system, which can be easily set up on every website."
          }
        </p>
      </ContentWrap>
    </CaseIntroductionWrapper>
  );
};

export default CaseIntroduction;
