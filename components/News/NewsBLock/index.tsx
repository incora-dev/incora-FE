import { Container, NewsContainer, ImgBlock, Element, H3 }  from "./NewsBlock.styles";
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import { theme } from "../../../styles/theme";
import Categories from "../Categories";

const bgTagsColor= theme.colors.grey;
const textTagsColor= theme.colors.black;

const createNews = (news: any) => {
  return news.map(({img, tags, categories, title, redirectTo}: any, index: number ) => {
    return (
      <NewsContainer key={index}>
        <ImgBlock href={title}>
          <Element/>
          <img src={img}/>
        </ImgBlock>
        <Technologies
            technologies={tags}
            textTagsColor={textTagsColor}
            bgTagsColor={bgTagsColor}
        />
        <Categories categories={categories}/>

        <a href={title}>
          <H3>{title}</H3>
        </a>

      </NewsContainer>
    )
  })
}

const NewsBLock = ({ news }: any) => {
  const newsCreated = createNews(news)

  return (
    <Container number={news.length}>
      {newsCreated}
    </Container>
  )
}

export default NewsBLock;
