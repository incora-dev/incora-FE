import Link from "next/link";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import Categories from "../Categories";
import { theme } from "../../../styles/theme";
import { Element, H3, ImgBlock, NewsContainer } from "./CreatePosts.style";
import {} from "../../../graphql/insights/__generated__/GetInsightsPage";
import Image from "next/image";
import { IMAGES_LINK } from "../../../constants";
import { GetProjects_projects_data_attributes_technologies_data } from "../../../graphql/caseStudies/__generated__/getProjects";
import {
  GetArticlesList_articles_data_attributes_industries_data,
  GetArticlesList_articles_data_attributes_tags_data,
} from "../../../graphql/insights/__generated__/GetArticlesList";
import { ROUTES } from "../../../constants/routes";

interface ICreateNews {
  id: string;
  title: string;
  url: string;
  tags:
    | GetProjects_projects_data_attributes_technologies_data[]
    | GetArticlesList_articles_data_attributes_tags_data[];
  categories: GetArticlesList_articles_data_attributes_industries_data[];
  image: string;
}

const CreateNews = ({
  id,
  title,
  url,
  tags,
  categories,
  image,
}: ICreateNews) => {
  return (
    <>
      <NewsContainer key={id} className="news-container">
        <Link href={ROUTES.ARTICLE + url} passHref>
          <ImgBlock>
            <Element />
            <Image
              loader={() => image}
              src={image}
              width={293}
              height={201}
              alt="article preview"
            />
          </ImgBlock>
        </Link>

        <Technologies
          technologies={tags}
          textTagsColor={theme.colors.black}
          bgTagsColor={theme.colors.grey}
        />
        <Categories categories={categories} />

        <Link href={`insights/${url}`}>
          <a>
            <H3>{title}</H3>
          </a>
        </Link>
      </NewsContainer>
    </>
  );
};

export default CreateNews;
