import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { IMAGES_LINK } from "../../../../constants/links";
import { GET_ARTICLES_LIST } from "../../../../graphql/insights/queries";
import { GetArticlesList } from "../../../../graphql/insights/__generated__/GetArticlesList";
import Loader from "../../../common/Loader";
import CreateNews from "../../../News/CreatePosts";
import { NewsBlock, NoPostsFound } from "../Posts.style";
import { ArticlesListWrapper } from "./style";

interface IArticlesList {
  query: string | undefined;
  industry: string;
  currentPage: number;
  handlePageCount: (totalPageCount: number, articlesLength: number) => void;
}

const ArticlesList = ({
  query,
  industry,
  currentPage,
  handlePageCount,
}: IArticlesList) => {
  const industryCondition = industry === "all" ? undefined : industry;

  const { data, loading } = useQuery<GetArticlesList>(GET_ARTICLES_LIST, {
    variables: {
      query: query,
      industry: industryCondition,
      page: currentPage,
    },
  });
  const articles = data?.articles?.data;
  const totalPageCount = data?.articles?.meta.pagination.total;

  const articlesList =
    articles &&
    articles.map(({ id, attributes }) => {
      const title = attributes?.title;
      const image =
        IMAGES_LINK + attributes?.previewImage.data?.attributes?.url;
      const url = attributes?.url;
      const tags = attributes?.tags?.data;
      const categories = attributes?.industries?.data;

      const renderCondition = id && title && image && url && tags && categories;

      return (
        <>
          {renderCondition && (
            <CreateNews
              id={id}
              title={title}
              image={image}
              categories={categories}
              url={url}
              tags={tags}
            />
          )}
        </>
      );
    });

  const articlesCondition = () => {
    if (articles && articles.length <= 0) {
      return (
        <NoPostsFound>
          <span>{"No posts found"}</span>
        </NoPostsFound>
      );
    } else if (articles && !loading) {
      return <NewsBlock>{articlesList}</NewsBlock>;
    } else {
      return <Loader />;
    }
  };

  useEffect(() => {
    if (articles && totalPageCount) {
      handlePageCount(totalPageCount, articles?.length);
    }
  }, [articles, totalPageCount]);

  return <ArticlesListWrapper>{articlesCondition()}</ArticlesListWrapper>;
};

export default ArticlesList;
