import { Div, Wrapper, NewsBlock } from "./Posts.style";
import CreateNews from "../../News/CreatePosts";
import Pagination from "../../Pagination";

const Posts = ({ news }: any) => {
  return (
    <Div>
      <Wrapper>
        <NewsBlock>
          <CreateNews news={news}/>
        </NewsBlock>
        <Pagination/>
      </Wrapper>
    </Div>
  )
}

export default Posts;
