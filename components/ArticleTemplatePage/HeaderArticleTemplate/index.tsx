import {
  Div,
  Wrapper,
  InfoBlock,
  TextBlock,
  Category,
  Title,
  DatePublishedAndViews,
  ArticleOwnerBlock,
  OwnerPhoto,
  ArticleOwnerTextBlock,
  Name,
  Role
} from "./HeaderArticleTemplate.style";
import Elements from "../../Elements";
import { theme } from "../../../styles/theme";
import {ReactElement} from "react";

interface HeaderArticleTemplate {
  category: string;
  title: string;
  publishedDate: string;
  viewed: number;
  articleOwner: IArticleOwner;
}

interface IArticleOwner {
  img: string | ReactElement;
  name: string;
  role: string;
}

const HeaderArticleTemplate = (
  {
    category,
    title,
    publishedDate,
    viewed,
    articleOwner,
  }: HeaderArticleTemplate) => {
  const { img, name, role } = articleOwner;
  const datePublishedAndViews = `${publishedDate}   •   ${viewed} Views`;

  return (
    <Div>
      <Wrapper>
        <Elements color={theme.elements.hexagonBorderedBlack}/>
        <InfoBlock>
          <TextBlock>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <DatePublishedAndViews>{datePublishedAndViews}</DatePublishedAndViews>
          </TextBlock>

          <ArticleOwnerBlock>
            <OwnerPhoto>
              {img}
            </OwnerPhoto>
            <ArticleOwnerTextBlock>
              <Name>{name}</Name>
              <Role>{role}</Role>
            </ArticleOwnerTextBlock>
          </ArticleOwnerBlock>
        </InfoBlock>
      </Wrapper>
    </Div>
  )
}

export default HeaderArticleTemplate;
