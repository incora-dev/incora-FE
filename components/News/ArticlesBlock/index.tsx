import createNews from "../CreatePosts";
import ArticlePreview from "../CreatePosts";
import { GetIndustryPage_industries_data_attributes_insights_articles_data } from "../../../graphql/industries/__generated__/GetIndustryPage";
import { IMAGES_LINK } from "../../../constants/links";
import { Container, ArticlesContainer } from "./ArticlesBlock.styles";

interface IArticlesBlock {
  articles: GetIndustryPage_industries_data_attributes_insights_articles_data[];
}

const ArticlesBlock = ({ articles }: IArticlesBlock) => {
  const articlesPreviews = articles.map((article) => {
    const id = article.id;
    const title = article.attributes?.title;
    const url = article.attributes?.url;
    const tags = article.attributes?.tags?.data;
    const categories = article.attributes?.industries?.data;
    const image =
      IMAGES_LINK + article.attributes?.previewImage.data?.attributes?.url;

    const renderCondition = id && title && url && tags && categories;
    return (
      <>
        {renderCondition && (
          <ArticlePreview
            key={id}
            id={id}
            title={title}
            url={url}
            tags={tags}
            categories={categories}
            image={image}
          />
        )}
      </>
    );
  });

  return <Container maxWidth={1006}>
    <ArticlesContainer>
      {articlesPreviews}
    </ArticlesContainer>
  </Container>;
};

export default ArticlesBlock;