import { Div, Wrapper, NewsBlock, NoPostsFound } from "./Posts.style";
import CreateNews from "../../News/CreatePosts";
import Pagination from "../../Pagination";
import { IMAGES_LINK } from "../../../constants/links";
import { useQuery } from "@apollo/client";
import { GetArticlesList } from "../../../graphql/insights/__generated__/GetArticlesList";
import { GET_ARTICLES_LIST } from "../../../graphql/insights/queries";
import { useState } from "react";
import Loader from "../../common/Loader";
import ArticlesList from "./ArticlesList";

interface IPosts {
  query: string | undefined;
  industry: string;
}

const Posts = ({ query, industry }: IPosts) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPageCount, setTotalPageCount] = useState<number>();
  const [articlesLength, setArticlesLength] = useState<number>();

  const handlePageCount = (totalPageCount: number, articlesLength: number) => {
    setTotalPageCount(totalPageCount);
    setArticlesLength(articlesLength);
  };

  const onPageChanged = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const paginationCondition =
    totalPageCount && articlesLength && articlesLength > 0;

  return (
    <>
      <Div>
        <Wrapper>
          <ArticlesList
            currentPage={currentPage}
            industry={industry}
            query={query}
            handlePageCount={handlePageCount}
          />
          {paginationCondition && (
            <Pagination
              totalCount={totalPageCount}
              currentPage={currentPage}
              pageSize={9}
              onPageChanged={onPageChanged}
            />
          )}
        </Wrapper>
      </Div>
    </>
  );
};

export default Posts;
