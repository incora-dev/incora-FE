import AttachCv from "../AttachCV";
import {
  AttachCvWrap,
  ContentWrap,
  Description,
  DescriptionAndCv,
  VacancyDescriptionWrapper,
} from "./style";
import ReactMarkdown from "react-markdown";

interface IVacancyDescription {
  description: string;
  filterTechnologies: string;
}

const uploadFilesLabel = () =>
    <>
      <div><span>Upload a file</span></div>
      <p>We accept PDF, DOC, DOCX, JPG and PNG files.</p>
    </>

const VacancyDescription = ({ description, filterTechnologies }: IVacancyDescription) => {
  return (
    <VacancyDescriptionWrapper>
      <ContentWrap>
        <DescriptionAndCv>
          <Description>
            <h2>{filterTechnologies}</h2>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Description>

          <AttachCvWrap>
            <AttachCv uploaderLabel={uploadFilesLabel()}/>
          </AttachCvWrap>
        </DescriptionAndCv>
      </ContentWrap>
    </VacancyDescriptionWrapper>
  );
};

export default VacancyDescription;
