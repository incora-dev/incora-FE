import Form from "../../Form";
import { ContentWrap, LetsReactOutWrapper, UploadBox } from "./style";
import Hexagon from "../../../public/SVG/hexagon1.svg";
import WhiteSemicircle from "../../../public/SVG/whiteSemiCircle.svg";
import { GetCaseStudies_caseStudiesPage_data_attributes_contactUs } from "../../../graphql/caseStudies/__generated__/GetCaseStudies";

const formLabels = ["name", "phone number", "email", "linkedIn"];

interface ILersReachOut {
  contactUs: GetCaseStudies_caseStudiesPage_data_attributes_contactUs;
}

const LetsReachOut = ({ contactUs }: ILersReachOut) => {
  const { title, subtitle } = contactUs;

  return (
    <LetsReactOutWrapper>
      <ContentWrap>
        <h1>{title}</h1>
        <span>{subtitle}</span>
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
