import { GetProjects_projects_data_attributes_technologies_data } from "../../../../../graphql/caseStudies/__generated__/getProjects";
import { GetArticle_articles_data_attributes_tags_data } from "../../../../../graphql/insights/__generated__/GetArticle";
import { Strong, Div, Container, ButtonContainer } from "./Technologies.style";
import Link from "next/link";

export interface IProjectTechnologies {
  technologies:
    | GetProjects_projects_data_attributes_technologies_data[]
    | GetArticle_articles_data_attributes_tags_data[];
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
      {
        technologies.map(({ id, attributes }) => {
        return (
          <Link href={attributes?.url || ""} key={id}>
            <Div bgColor={bgTagsColor} >
              <ButtonContainer>
                <Strong color={textTagsColor}>{attributes?.name}</Strong>
              </ButtonContainer>
            </Div>
          </Link>
        );
      })}
    </Container>
  );
}

export default Technologies;
