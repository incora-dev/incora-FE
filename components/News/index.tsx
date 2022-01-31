import {
  Component,
  HeaderWrap,
  H2,
  NewsWrap,
  HeaderContainer,
} from "./news.style";
import Arrow from "../../public/SVG";
import { theme } from "../../styles/theme";
import ArticlesBlock from "./ArticlesBlock";
import { GetIndustryPage_industries_data_attributes_insights_articles_data } from "../../graphql/industries/__generated__/GetIndustryPage";
import Link from "next/link";
import { ROUTES } from "../../constants/routes";

export interface ITechnologies {
  bgColor?: string;
  title: string;
  articles: GetIndustryPage_industries_data_attributes_insights_articles_data[];
}

function NewsComponent({ title, bgColor, articles }: ITechnologies) {
  const bgColorWhite = theme.colors.white;
  const bgColorBlack = theme.colors.black;

  const getBgColor = () => (bgColor ? bgColor : bgColorWhite);
  const getTitleColor = () => {
    if (bgColor === bgColorWhite) {
      return bgColorBlack;
    }

    if (bgColor === bgColorBlack) {
      return bgColorWhite;
    }
  };

  return (
    <Component bgColor={getBgColor()}>
      <HeaderContainer>
        <HeaderWrap>
          <H2 color={getTitleColor()}>{title}</H2>
          <Link href={ROUTES.INSIGHTS} passHref>
            <Arrow />
          </Link>
        </HeaderWrap>
      </HeaderContainer>

      <NewsWrap>
        <ArticlesBlock articles={articles} />
      </NewsWrap>
    </Component>
  );
}

export default NewsComponent;
