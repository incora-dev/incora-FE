import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import FooterComponent from "../../components/Footer";
import HeaderInsights from "../../components/InsightsPage/HeaderInsights";
import MainMenu from "../../components/mainMenu/mainMenu";
import React from "../../public/SVG/technologies/react.svg";
import {footer, IMAGES_LINK, titles} from "../../constants";
import { useIsMobile } from "../../services/hooks";
import { theme } from "../../styles/theme";
import { GET_INSIGHTS_PAGE } from "../../graphql/insights/queries";
import Custom404 from "../404";
import { GetInsightsPage } from "../../graphql/insights/__generated__/GetInsightsPage";
import { NextPage } from "next";
import { initializeApollo } from "../../graphql/client";

interface IInsightsPage {
  data: GetInsightsPage;
  networkStatus: number;
}

const Insights: NextPage<IInsightsPage> = ({ data, networkStatus }) => {
  const entry = data?.insightsPage?.data?.attributes;
  const industries = data?.industries?.data;
  const insightsEntry = data?.insightsPage?.data?.attributes;
  const title = insightsEntry?.title;
  const text = insightsEntry?.description;
  const inputPlaceholder = insightsEntry?.searchBarText;

  const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage = (entry?.SEO?.ogImage?.data?.attributes?.url !== undefined)
      && `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const [menuColor, setMenuColor] = useState("none");
  const handleScroll = () => {
    window.scrollY >= 25
      ? setMenuColor(theme.colors.white)
      : setMenuColor("none");
  };

  console.log("error", networkStatus);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("error", networkStatus);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition = industries && title && text && inputPlaceholder;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            { seoTitle && <title>{seoTitle}</title> }
            <meta property="og:site_name" content="Incora - European software development company" />
            <meta property="og:type" content="article" />
            { seoDescription && <meta name="description" content={seoDescription}/> }
            { seoKeywords && <meta name="keywords" content={seoKeywords} /> }
            { seoTitle && <meta property="og:title" content={seoTitle} /> }
            { seoDescription && <meta property="og:description" content={seoDescription} /> }
            { seoImage && <meta property="og:url" content={seoImage}/> }
          </Head>
          <>
            <MainMenu
              backgroundColor={isMobile || isTablet || isSmallTablet
                ? theme.colors.white
                : menuColor}
              titlesColor={theme.colors.black}
              titles={titles}
            >
              <HeaderInsights
                industries={industries}
                title={title}
                text={text}
                inputPlaceholder={inputPlaceholder}
              />
            </MainMenu>
            <FooterComponent />
          </>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_INSIGHTS_PAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Insights;
