import { GetProjects_projects_data_attributes_technologies_data } from "../../../../../graphql/caseStudies/__generated__/getProjects";
import { GetArticle_article_data_attributes_tags_data } from "../../../../../graphql/insights/__generated__/GetArticle";
import { Strong, Div, Container, ButtonContainer } from "./Technologies.style";
import Link from "next/link";
import { ROUTES } from "../../../../../constants/routes";

export interface IProjectTechnologies {
  technologies:
    | GetProjects_projects_data_attributes_technologies_data[]
    | GetArticle_article_data_attributes_tags_data[];
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
      {technologies.map(({ id, attributes }: any) => {
        return (
          <Link
            href={ROUTES.EXPERTISE.TECHNOLOGIES + `${attributes?.url}/${id}`}
            key={id}
            passHref
          >
            <Div bgColor={bgTagsColor}>
              <ButtonContainer>
                <Strong color={textTagsColor}>{attributes?.Technology_name}</Strong>
              </ButtonContainer>
            </Div>
          </Link>
        );
      })}
    </Container>
  );
}

export default Technologies;
