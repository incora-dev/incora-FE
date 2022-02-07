import HexagonsBackground from "../../HexagonsBackground";
import { CaseIntroductionWrapper, ContentWrap } from "./style";

interface ICaseIntroduction {
  name: string;
  description: string;
  isUnderNDA?: boolean | null;
}

const CaseIntroduction = ({ isUnderNDA, name, description }: ICaseIntroduction) => {
  return (
    <CaseIntroductionWrapper>
      <HexagonsBackground />
      <ContentWrap>
        {
        (isUnderNDA)
          ? <><h3>under</h3><h2>NDA</h2></>
          : <></>
        }
        <h1>{name}</h1>
        <p>{description}</p>
      </ContentWrap>
    </CaseIntroductionWrapper>
  );
};

export default CaseIntroduction;
