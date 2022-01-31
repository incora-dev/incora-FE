import Form from "../../FormClassic";
import { ContentWrap, LetsReactOutWrapper, UploadBox } from "./style";
import Hexagon from "../../../public/SVG/hexagon1.svg";
import WhiteSemicircle from "../../../public/SVG/whiteSemiCircle.svg";
import { GetCaseStudies_caseStudiesPage_data_attributes_contactUs } from "../../../graphql/caseStudies/__generated__/GetCaseStudies";
import FilesUploader from "../../FormClassic/FilesUploader";
import {useState} from "react";

const formLabels = ["name", "phone number", "email", "linkedIn"];

interface ILersReachOut {
  contactUs: GetCaseStudies_caseStudiesPage_data_attributes_contactUs;
}

const uploadFilesLabel = () =>
    <>
      <div><span>Upload a file</span> or drag and drop here</div>
      <p>We accept PDF, DOC, DOCX, JPG and PNG files.</p>
    </>

const LetsReachOut = ({ contactUs }: ILersReachOut) => {
  const [inputSelectedFile, setSelectedFile] = useState<File | File[] | null>(null);
  const { title, subtitle } = contactUs;

  return (
    <LetsReactOutWrapper>
      <ContentWrap>
        <h1>{title}</h1>
        <span>{subtitle}</span>

        <FilesUploader
          inputHeight={'103px'}
          padding={'15px 30px'}
          filesLabel={uploadFilesLabel()}
          formTheme={true}
          setSelectedFile={setSelectedFile}
        />

        <Form
          buttonLabel={"send"}
          formBlack
          selectedFiles={inputSelectedFile}
        />

        <Hexagon className="hex" />
        <WhiteSemicircle className="semicircle" />
      </ContentWrap>
    </LetsReactOutWrapper>
  );
};

export default LetsReachOut;
