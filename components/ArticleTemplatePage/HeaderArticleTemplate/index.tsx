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
  Role,
} from "./HeaderArticleTemplate.style";
import Elements from "../../Elements";
import { theme } from "../../../styles/theme";
import { GetArticle_articles_data_attributes_industries_data } from "../../../graphql/insights/__generated__/GetArticle";
import Image from "next/image";

interface HeaderArticleTemplate {
  categories: GetArticle_articles_data_attributes_industries_data[];
  title: string;
  publishedDate: string;
  viewed: number;
  articleOwner: IArticleOwner;
}

interface IArticleOwner {
  img: string;
  name: string;
  role: string;
}

const HeaderArticleTemplate = ({
  categories,
  title,
  publishedDate,
  viewed,
  articleOwner,
}: HeaderArticleTemplate) => {
  const { img, name, role } = articleOwner;
  const viewedCondition = viewed ? viewed.toFixed() : 0;
  const publishedDateFormat = new Date(publishedDate).toLocaleDateString(
    "en-US",
    { month: "long", day: "2-digit", year: "numeric" }
  );

  const datePublishedAndViews = `${publishedDateFormat}   •   ${viewedCondition} Views`;

  const categoriesItems = categories.map((category) => (
    <Category key={category.id}>{category.attributes?.name}</Category>
  ));

  return (
    <Div>
      <Wrapper>
        <Elements color={theme.elements.hexagonBorderedBlack} />
        <InfoBlock>
          <TextBlock>
            {categoriesItems}
            <Title>{title}</Title>
            <DatePublishedAndViews>
              {datePublishedAndViews}
            </DatePublishedAndViews>
          </TextBlock>

          <ArticleOwnerBlock>
            <OwnerPhoto>
              <Image
                loader={() => img}
                src={img}
                width={60}
                height={60}
                alt="author photo"
              />
            </OwnerPhoto>
            <ArticleOwnerTextBlock>
              <Name>{name}</Name>
              <Role>{role}</Role>
            </ArticleOwnerTextBlock>
          </ArticleOwnerBlock>
        </InfoBlock>
      </Wrapper>
    </Div>
  );
};

export default HeaderArticleTemplate;
