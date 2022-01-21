
import Technologies from "../../Homepage/EmbodiedIdeas/Projects/Technologies";
import Categories from "../Categories";
import { theme } from "../../../styles/theme";
import { Element, H3, ImgBlock, NewsContainer } from "./CreatePosts.style";

const CreateNews = ({news}: any) => {
  return news.map(({img, tags, categories, title, redirectTo}: any, index: number ) => {
    return (
        <NewsContainer key={index}>
          <ImgBlock href={title}>
            <Element/>
            <img src={img}/>
          </ImgBlock>
          <Technologies
              technologies={tags}
              textTagsColor={theme.colors.black}
              bgTagsColor={theme.colors.grey}
          />
          <Categories categories={categories}/>

          <a href={title}>
            <H3>{title}</H3>
          </a>

        </NewsContainer>
    )
  })
}

export default CreateNews;
