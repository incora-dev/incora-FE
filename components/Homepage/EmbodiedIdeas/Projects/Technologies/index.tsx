import { GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies } from "../../../../../graphql/caseStudies/__generated__/GetCaseStudies";
import { Strong, A, Container, ButtonContainer } from "./Technologies.style";

export interface IProjectTechnologies {
  technologies: GetCaseStudies_caseStudiesPage_data_attributes_projects_data_attributes_technologies;
  textTagsColor?: string;
  bgTagsColor?: string;
}

function Technologies({
  technologies,
  textTagsColor,
  bgTagsColor,
}: IProjectTechnologies) {
  return (
    <Container>
      {technologies?.data?.map(({ id, attributes }) => {
        return (
          <A href={attributes?.url || ""} bgColor={bgTagsColor} key={id}>
            <ButtonContainer>
              <Strong color={textTagsColor}>{attributes?.name}</Strong>
            </ButtonContainer>
          </A>
        );
      })}
    </Container>
  );
}

export default Technologies;
