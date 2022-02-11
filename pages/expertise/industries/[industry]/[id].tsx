import Head from "next/head";
import React from "../../../../public/SVG/technologies/react.svg";
import MainMenu from "../../../../components/mainMenu/mainMenu";
import { theme } from "../../../../styles/theme";
import { IMAGES_LINK, titles } from "../../../../constants";
import HeaderService from "../../../../components/ServicePage/HeaderService";
import OfferedSolutions from "../../../../components/ExpertisePage/OfferedSolutions";
import { useEffect, useState } from "react";
import NewsComponent from "../../../../components/News";
import ContactUsComponent from "../../../../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../../../components/Footer";
import { GET_INDUSTRY_PAGE } from "../../../../graphql/industries/queries";
import Custom404 from "../../../404";
import { GetIndustryPage } from "../../../../graphql/industries/__generated__/GetIndustryPage";
import EmbodiedIdeasComponent from "../../../../components/Homepage/EmbodiedIdeas";
import { useIsMobile } from "../../../../services/hooks";
import { initializeApollo } from "../../../../graphql/client";
import { NextPage, NextPageContext } from "next";

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;
const hexagonColorGrey = theme.elements.hexagonBorderedGrey;

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

interface IIndustry {
  data: GetIndustryPage;
  networkStatus: number;
}

const Industry: NextPage<IIndustry> = ({ data, networkStatus }) => {
  const entry = data.industry?.data?.attributes;
  const headerTitle = entry?.name;
  const headerDescription = entry?.description;
  const headerIcon = entry?.icon?.data?.attributes;
  const offeredSolutionsIntro = entry?.offeredSolutions?.intro;
  const offeredSolutionsData = entry?.offeredSolutions?.items;
  const contactUsTitle = entry?.contactUs?.title;
  const contactUsSubtitle = entry?.contactUs?.subtitle;
  const newsTitle = entry?.insights.intro;
  const articles = entry?.insights.articles?.data;
  const projects = entry?.projects?.data;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const [menuColor, setMenuColor] = useState("none");
  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorWhite) : setMenuColor("none");
  };
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition =
    headerTitle &&
    headerDescription &&
    headerIcon &&
    offeredSolutionsIntro &&
    offeredSolutionsData &&
    contactUsTitle &&
    contactUsSubtitle &&
    newsTitle &&
    articles &&
    projects;

  const [url, setUrl] = useState<string>("");
  useEffect(() => setUrl(window.location.href)), [];

  if (networkStatus !== 7 || data.industry?.data === null) return <Custom404 />;

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
                isMobile || isTablet || isSmallTablet ? colorWhite : menuColor
              }
              titlesColor={colorBlack}
              titles={titles}
            >
              <HeaderService
                title={headerTitle}
                titleSize={
                  isMobile || isTablet || isSmallTablet ? "50px" : "64px"
                }
                icon={headerIcon}
                text={headerDescription}
                textWidth={"560px"}
                hexagonColor={hexagonColorGrey}
                bgColor={colorWhite}
              />
              <OfferedSolutions
                intro={offeredSolutionsIntro}
                data={offeredSolutionsData}
              />
              <EmbodiedIdeasComponent
                bgColor={theme.colors.yellow}
                elementsColor={theme.colors.black}
                projects={projects}
                disablePadding
                disableSeeMore
              />
              <NewsComponent title={newsTitle} articles={articles} />
              <ContactUsComponent
                title={contactUsTitle}
                text={contactUsSubtitle}
                addresses={contactUs.addresses}
                buttonLabel={contactUs.buttonLabel}
              />
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
    query: GET_INDUSTRY_PAGE,
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

export default Industry;
