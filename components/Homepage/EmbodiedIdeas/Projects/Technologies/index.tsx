import { GetProjects_projects_data_attributes_technologies_data } from "../../../../../graphql/caseStudies/__generated__/getProjects";
import { GetArticle_article_data_attributes_tags_data } from "../../../../../graphql/insights/__generated__/GetArticle";
import { Strong, Div, Container, ButtonContainer } from "./Technologies.style";
import Link from "next/link";
import { ROUTES } from "../../../../../constants/routes";

export interface IProjectTechnologies {
  isUrl?: boolean;
  technologies:
    | GetProjects_projects_data_attributes_technologies_data[]
    | GetArticle_article_data_attributes_tags_data[];
  textTagsColor?: string;
  bgTagsColor?: string;
}

function Technologies({
  isUrl = true,
  technologies,
  textTagsColor,
  bgTagsColor,
}: IProjectTechnologies) {
  console.log(isUrl)
  return (
    <Container>
      {technologies.map(({ id, attributes }: any) => {
        return (
          <>
          {(isUrl)
            ?
              <Link
                href={ROUTES.EXPERTISE.TECHNOLOGIES + `${attributes?.url}/${id}`}
                key={id}
                passHref
              >
                <Div bgColor={bgTagsColor} isUrl={isUrl}>
                  <ButtonContainer>
                    <Strong color={textTagsColor}>{attributes?.Technology_name}</Strong>
                  </ButtonContainer>
                </Div>
              </Link>
            : 
              <Div bgColor={bgTagsColor} isUrl={isUrl}>
                <ButtonContainer>
                  <Strong color={textTagsColor}>{attributes?.name}</Strong>
                </ButtonContainer>
              </Div>
            }
          </>
        );
      })}
    </Container>
  );
}

export default Technologies;
