import { Container, NewsContainer, ImgBlock, Element, H3 }  from "./NewsBlock.styles";
import Technologies from "../../homePage/EmbodiedIdeas/Projects/Technologies";
import { theme } from "../../../styles/theme";
import Categories from "../Categories";
import Link from "next/link"

const NewsBLock = ({ news }) => {
  const bgTagsColor= theme.colors.grey;
  const textTagsColor= theme.colors.black;

  const createNews = () => {
    return news.map(({img, tags, categories, title, redirectTo}, index ) => {
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

          <Link href={title}>
            <a>
              <H3>{title}</H3>
            </a>
          </Link>

        </NewsContainer>
      )
    })
  }


  return (
    <Container number={news.length}>
      {createNews()}
    </Container>

  )
}

export default NewsBLock;
