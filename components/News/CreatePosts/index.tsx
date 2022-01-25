import Link from "next/link"
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import Categories from "../Categories";
import { theme } from "../../../styles/theme";
import { Element, H3, ImgBlock, NewsContainer } from "./CreatePosts.style";

const CreateNews = ({news}: any) => {
  return news.map(({img, tags, categories, title, redirectTo}: any, index: number ) => {
    return (
      <NewsContainer key={index}>
        <Link href={`insights/${title}`}>
          <ImgBlock >
            <Element/>
            <img src={img}/>
          </ImgBlock>
        </Link>

        <Technologies
          technologies={tags}
          textTagsColor={theme.colors.black}
          bgTagsColor={theme.colors.grey}
        />
        <Categories categories={categories}/>

        <Link href={`insights/${title}`}>
          <a>
            <H3>{title}</H3>
          </a>
        </Link>


      </NewsContainer>
    )
  })
}

export default CreateNews;
