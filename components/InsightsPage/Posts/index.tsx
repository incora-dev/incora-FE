import { Div, Wrapper, NewsBlock } from "./Posts.style";
import CreateNews from "../../News/CreatePosts";
import Pagination from "../../Pagination";
import { IMAGES_LINK } from "../../../constants/links";
import { useQuery } from "@apollo/client";
import { GetArticlesList } from "../../../graphql/insights/__generated__/GetArticlesList";
import { GET_ARTICLES_LIST } from "../../../graphql/insights/queries";
import Loader from "../../../public/RhombusLoader.gif";

interface IPosts {
  query: string | undefined;
  industry: string;
  page: number;
}

const Posts = ({ query, industry, page }: IPosts) => {
  const industryCondition = industry === "all" ? undefined : industry;

  const { data } = useQuery<GetArticlesList>(GET_ARTICLES_LIST, {
    variables: {
      query: query,
      industry: industryCondition,
      page,
    },
  });
  const articles = data?.articles?.data;

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

  const onPageChanged = (value: number) => {
    console.log("xy");
  };

  return (
    <>
      {articles && (
        <Div>
          <Wrapper>
            <NewsBlock>{articlesList}</NewsBlock>
            <Pagination
              totalCount={articles.length}
              currentPage={1}
              pageSize={9}
              onPageChanged={onPageChanged}
            />
          </Wrapper>
        </Div>
      )}
    </>
  );
};

export default Posts;