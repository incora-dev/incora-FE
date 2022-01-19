import Form from "../../Form";
import { ContentWrap, LetsReactOutWrapper, UploadBox } from "./style";
import Hexagon from "../../../public/SVG/hexagon1.svg";
import WhiteSemicircle from "../../../public/SVG/whiteSemiCircle.svg"

const formLabels = ["name", "phone number", "email", "linkedIn"];

const LetsReachOut = () => {
  return (
    <LetsReactOutWrapper>
      <ContentWrap>
        <h1>{"let's reach out!"}</h1>
        <span>{"Share your idea with us."}</span>
        <UploadBox>
          <span>{"Upload your Project Description"}</span>
        </UploadBox>

        <Form fieldsLabels={formLabels} buttonLabel={"send"} formBlack />

        <Hexagon className="hex" />
        <WhiteSemicircle className="semicircle" />
      </ContentWrap>
    </LetsReactOutWrapper>
  );
};

export default LetsReachOut;
