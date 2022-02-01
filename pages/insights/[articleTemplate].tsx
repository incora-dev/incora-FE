import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import { footer, IMAGES_LINK, titles } from "../../constants";
import { useEffect, useState } from "react";
import HeaderArticleTemplate from "../../components/ArticleTemplatePage/HeaderArticleTemplate";
import ArticleInfo from "../../components/ArticleTemplatePage/ArticleInfo";
import FacebookSVG from "../../public/SVG/socialNetwork/FacebookSVG.svg";
import InstagramSVG from "../../public/SVG/socialNetwork/LinkedInSvg.svg";
import News from "../../components/News";
import LetsTalk from "../../components/Services/LetsTalk";
import FooterComponent from "../../components/Footer";
import GoToTop from "../../components/GoToTop";
import { useRouter } from "next/router";
import Custom404 from "../404";
import { useQuery } from "@apollo/client";
import { GetArticle } from "../../graphql/insights/__generated__/GetArticle";
import { GET_ARTICLE } from "../../graphql/insights/queries";
import { useIsMobile } from "../../services/hooks";

const news = {
  title: "You may also like",
  articles: [
    {
      img: "./../../newsBlock/newImg1.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title:
        "Intro to Microservices Communication [With the Use of Apache Kafka]",
      redirectTo: "[With the Use of Apache Kafka]",
    },
    {
      img: "./../../newsBlock/newImg2.jpg",
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "Incora Is Gaining Popularity On Clutch",
      redirectTo: "Incora Is Gaining Popularity On Clutch",
    },
    {
      img: "./../../newsBlock/newImg3.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
      redirectTo: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
    },
    {
      img: "./../../newsBlock/newImg1.jpg",
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "How to Monetize Delivery and Shipping Apps: Methods Screening",
      redirectTo:
        "How to Monetize Delivery and Shipping Apps: Methods Screening",
    },
  ],
};

const code = `  const handleScroll = () => {
    const sideBarElements = document.querySelectorAll('#scrollsLabels h1,#scrollsLabels h2, #scrollsLabels h3, #scrollsLabels h4, #scrollsLabels h5, #scrollsLabels h6');

    sideBarElements.forEach((el, index) => {
      if (el.getBoundingClientRect().top > 120 && el.getBoundingClientRect().top < 500) {
        setElementIndex(index);
      }

      if (window.scrollY <= 100 ) {
        setElementIndex(0);
      }
    })
  }`;

const ArticleTemplate = () => {
  const router = useRouter();
  const { articleTemplate } = router.query;

  const { data, loading, error } = useQuery<GetArticle>(GET_ARTICLE, {
    variables: { url: articleTemplate },
  });
  const entry = data?.articles?.data[0].attributes;
  const title = entry?.title;
  const categories = entry?.industries?.data;
  const publishedDate = entry?.createdAt;
  const viewed = entry?.views;
  const authorEntry = entry?.author?.data?.attributes;
  const tags = entry?.tags?.data;
  const letsTalkTitle = entry?.contactUs.title;
  const letsTalkSubtitle = entry?.contactUs.subtitle;

  const articleOwner = {
    img: IMAGES_LINK + authorEntry?.profilePhoto.data?.attributes?.url,
    name: authorEntry?.name || "",
    role: authorEntry?.position || "",
  };

  const socialTitles = [
    { Icon: FacebookSVG, href: authorEntry?.facebook || "" },
    { Icon: InstagramSVG, href: authorEntry?.linkedin || "" },
  ];

  const [menuColor, setMenuColor] = useState("none");
  const [goToTopVisible, setGoToTopVisible] = useState(false);
    const {isMobile, isTablet, isSmallTablet} = useIsMobile();
  

  const handleScroll = () => {
    window.scrollY >= 20
      ? setMenuColor(theme.colors.black)
      : setMenuColor("none");

    window.scrollY >= 400 ? setGoToTopVisible(true) : setGoToTopVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition =
    entry && title && categories && tags && letsTalkTitle && letsTalkSubtitle;

  if (loading) return null;
  if (error) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            <title>Insights | </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <>
            <MainMenu
              backgroundColor={isMobile || isTablet || isSmallTablet ? theme.colors.black : menuColor}
              titlesColor={theme.colors.white}
              titles={titles}
            >
              <HeaderArticleTemplate
                title={title}
                categories={categories}
                publishedDate={publishedDate}
                viewed={viewed}
                articleOwner={articleOwner}
              />
              <ArticleInfo
                mainText={entry.content}
                codeText={code}
                socialTitles={socialTitles}
                tags={tags}
              />
              {/* <News title={news.title} articles={news.articles} /> */}
              <LetsTalk title={letsTalkTitle} text={letsTalkSubtitle} />
              <GoToTop isVisible={goToTopVisible} />
            </MainMenu>
            <FooterComponent />
          </>
        </>
      )}
    </>
  );
};

export default ArticleTemplate;
