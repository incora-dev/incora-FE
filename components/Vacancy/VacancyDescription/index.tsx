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
}

const VacancyDescription = ({ description }: IVacancyDescription) => {
  return (
    <VacancyDescriptionWrapper>
      <ContentWrap>
        <DescriptionAndCv>
          <Description>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Description>

          <AttachCvWrap>
            <AttachCv />
          </AttachCvWrap>
        </DescriptionAndCv>
      </ContentWrap>
    </VacancyDescriptionWrapper>
  );
};

export default VacancyDescription;
