import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";
import { IMAGES_LINK, titles } from "../../../constants";
import { useEffect, useState } from "react";
import HeaderArticleTemplate from "../../../components/ArticleTemplatePage/HeaderArticleTemplate";
import ArticleInfo from "../../../components/ArticleTemplatePage/ArticleInfo";
import News from "../../../components/News";
import LetsTalk from "../../../components/Services/LetsTalk";
import GoToTop from "../../../components/GoToTop";
import Custom404 from "../../404";
import { useMutation } from "@apollo/client";
import { GetArticle } from "../../../graphql/insights/__generated__/GetArticle";
import { GET_ARTICLE } from "../../../graphql/insights/queries";
import { useIsMobile } from "../../../services/hooks";
import { NextPage, NextPageContext } from "next";
import { initializeApollo } from "../../../graphql/client";
import { UPDATE_COUNT } from "../../../graphql/insights/mutations";

export interface IImpressions {
  intro: string | undefined;
  likes: number;
  exciting: number;
  valuable: number;
  unsatisfied: number;
}

interface IArticleTemplate {
  data: GetArticle;
  networkStatus: number;
}

const ArticleTemplate: NextPage<IArticleTemplate> = ({
  data,
  networkStatus,
}) => {
  const [updateCount] = useMutation(UPDATE_COUNT);

  const id = data.article?.data?.id;
  const entry = data.article?.data?.attributes;
  const title = entry?.title;
  const categories = entry?.industries?.data;
  const publishedDate = entry?.createdAt;
  const authorEntry = entry?.author?.data?.attributes;
  const facebook = authorEntry?.facebook;
  const linkedIn = authorEntry?.linkedin;
  const tags = entry?.tags?.data;
  const letsTalkTitle = entry?.contactUs.title;
  const letsTalkSubtitle = entry?.contactUs.subtitle;
  const relatedArticles = entry?.relatedArticles?.articles?.data;
  const relatedArticlesTitle = entry?.relatedArticles?.intro;
  const views = entry?.count.views;
  const impressions: IImpressions = {
    intro: entry?.impressions.intro,
    likes: entry?.count.likes,
    exciting: entry?.count.exciting,
    valuable: entry?.count.valuable,
    unsatisfied: entry?.count.unsatisfied,
  };

  const articleOwner = {
    img: IMAGES_LINK + authorEntry?.profilePhoto.data?.attributes?.url,
    name: authorEntry?.name || "",
    role: authorEntry?.position || "",
  };

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== "undefined" &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  useEffect(() => {
    if (title) {
      const localStorageId = localStorage.getItem(title);
      const { likes, exciting, valuable, unsatisfied } = impressions;
      if (localStorageId !== id) {
        updateCount({
          variables: {
            id,
            views: views + 1,
            likes,
            exciting,
            valuable,
            unsatisfied,
          },
        });
      }
    }
  }, [id]);

  useEffect(() => {
    id && title && localStorage.setItem(title, id);
  }, [id, title]);

  const [menuColor, setMenuColor] = useState("none");
  const [goToTopVisible, setGoToTopVisible] = useState(false);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();
  const [url, setUrl] = useState<string>("");

  const handleScroll = () => {
    window.scrollY >= 20
      ? setMenuColor(theme.colors.black)
      : setMenuColor("none");

    window.scrollY >= 400 ? setGoToTopVisible(true) : setGoToTopVisible(false);
  };

  useEffect(() => {
    setUrl(window.location.href);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition =
    entry &&
    title &&
    categories &&
    tags &&
    letsTalkTitle &&
    letsTalkSubtitle &&
    relatedArticles &&
    relatedArticlesTitle &&
    id;

  if (networkStatus !== 7 || data.article?.data === null) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            {seoTitle && <title>{seoTitle}</title>}
            <meta
              property="og:site_name"
              content="Incora - European software development company"
            />
            <meta property="og:type" content="article" />
            {seoDescription && (
              <meta name="description" content={seoDescription} />
            )}
            {seoKeywords && <meta name="keywords" content={seoKeywords} />}
            {seoTitle && <meta property="og:title" content={seoTitle} />}
            {seoDescription && (
              <meta property="og:description" content={seoDescription} />
            )}
            {url && <meta property="og:url" content={url} />}
            {seoImage && <meta property="og:image" content={seoImage} />}

            <meta name="twitter:card" content={"summary"} />
            {seoTitle && <meta name="twitter:title" content={seoTitle} />}
            {seoDescription && (
              <meta property="twitter:description" content={seoDescription} />
            )}
            {url && <meta property="twitter:site" content={url} />}
            {seoImage && <meta property="twitter:image" content={seoImage} />}
          </Head>
          <>
            <MainMenu
              backgroundColor={
                isMobile || isTablet || isSmallTablet
                  ? theme.colors.black
                  : menuColor
              }
              titlesColor={theme.colors.white}
              titles={titles}
            >
              <HeaderArticleTemplate
                title={title}
                categories={categories}
                publishedDate={publishedDate}
                viewed={views}
                articleOwner={articleOwner}
              />
              <ArticleInfo
                views={views}
                facebook={facebook}
                linkedIn={linkedIn}
                mainText={entry.content}
                tags={tags}
                impressions={impressions}
                id={id}
              />
              <News title={relatedArticlesTitle} articles={relatedArticles} />
              <LetsTalk title={letsTalkTitle} text={letsTalkSubtitle} />
              <GoToTop isVisible={goToTopVisible} />
            </MainMenu>
          </>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo();
  const { id } = context.query;

  const { data, networkStatus } = await client.query({
    query: GET_ARTICLE,
    variables: {
      id,
    },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default ArticleTemplate;
