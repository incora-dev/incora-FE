import MainMenu from "../../../../components/mainMenu/mainMenu";
import { useEffect, useState } from "react";
import { theme } from "../../../../styles/theme";
import Head from "next/head";
import React from "../../../../public/SVG/technologies/react.svg";
import HeaderService from "../../../../components/ServicePage/HeaderService";
import WhyShouldUseTechnology from "../../../../components/ExpertisePage/WhyShouldUseTechnology";
import PopularWebsites from "../../../../components/ExpertisePage/PopularWebsites";
import News from "../../../../components/News";
import ContactUsComponent from "../../../../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../../../components/Footer";

import WhyDevelopWithUs from "../../../../components/News/WhyDevelopWithUs";
import { GET_TECHNOLOGY_PAGE } from "../../../../graphql/technologies/queries";
import { GetTechnologyPage } from "../../../../graphql/technologies/__generated__/GetTechnologyPage";
import Custom404 from "../../../404";
import EmbodiedIdeasComponent from "../../../../components/Homepage/EmbodiedIdeas";
import { useIsMobile } from "../../../../services/hooks";
import { initializeApollo } from "../../../../graphql/client";
import { NextPage, NextPageContext } from "next";
import {IMAGES_LINK} from "../../../../constants";

const MainMenuTitles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const contactUs: IContactUs = {
  title: "get in touch!",
  text: "Let’s discover which technologies will make your idea great.",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;
const colorBackgroundBlack = theme.colors.backgroundBlack;

interface ITechnology {
  data: GetTechnologyPage;
  networkStatus: number;
}

const Technology: NextPage<ITechnology> = ({ data, networkStatus }) => {
  const entry = data.technology?.data?.attributes;
  const headerTitle = entry?.name;
  const headerDescription = entry?.description;
  const headerLabel = entry?.tech_stack?.data?.attributes?.name;
  const headerIcon = entry?.icon?.data?.attributes;
  const whyShouldYouUseTitle = entry?.whyShouldYouUse?.intro;
  const whyShouldYouUseItems = entry?.whyShouldYouUse?.items;
  const popularWebSitesTitle = entry?.popularWebsites?.intro;
  const popularWebSitesPictures = entry?.popularWebsites?.pictures.data;
  const whyDevelopWithUs = entry?.whyDevelopWithUs;
  const projects = entry?.projects?.data;
  const insightsIntro = entry?.insights?.intro;
  const insightsArticles = entry?.insights?.articles?.data;
  const contactUsTitle = entry?.contactUs?.title;
  const contactUsSubtitle = entry?.contactUs?.subtitle;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage = (entry?.SEO?.ogImage?.data?.attributes?.url !== undefined)
    && `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const [menuColor, setMenuColor] = useState("none");
  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorBlack) : setMenuColor("none");
  };
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition =
    headerTitle &&
    headerDescription &&
    headerLabel &&
    headerIcon &&
    whyShouldYouUseTitle &&
    whyShouldYouUseItems &&
    popularWebSitesTitle &&
    popularWebSitesPictures &&
    whyDevelopWithUs &&
    projects &&
    insightsIntro &&
    insightsArticles &&
    contactUsTitle &&
    contactUsSubtitle;

  if (networkStatus !== 7 || data.technology?.data === null)
    return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            { seoTitle && <title>{seoTitle}</title> }
            <meta property="og:site_name" content="Incora - European software development company" />
            <meta property="og:type" content="article" />
            { seoTitle && <title>{seoTitle}</title> }
            { seoDescription && <meta name="description" content={seoDescription}/> }
            { seoKeywords && <meta name="keywords" content={seoKeywords} /> }
            { seoTitle && <meta property="og:title" content={seoTitle} /> }
            { seoDescription && <meta property="og:description" content={seoDescription} /> }
            { seoImage && <meta property="og:url" content={seoImage}/> }
          </Head>
          <MainMenu
            titlesColor={colorWhite}
            backgroundColor={
              isMobile || isTablet || isSmallTablet ? colorBlack : menuColor
            }
            titles={MainMenuTitles}
          >
            <HeaderService
              title={headerTitle}
              icon={headerIcon}
              titleSize={
                isMobile || isTablet || isSmallTablet ? "50px" : "64px"
              }
              text={headerDescription}
              textWidth={"435px"}
              label={headerLabel}
              bgColor={colorBlack}
            />
            <WhyShouldUseTechnology
              title={whyShouldYouUseTitle}
              bgColor={colorBackgroundBlack}
              titleColor={colorWhite}
              items={whyShouldYouUseItems}
            />
            <PopularWebsites
              title={popularWebSitesTitle}
              pictures={popularWebSitesPictures}
            />
            <WhyDevelopWithUs data={whyDevelopWithUs} />
            <EmbodiedIdeasComponent
              bgColor={theme.colors.yellow}
              elementsColor={theme.colors.black}
              projects={projects}
              disablePadding
              disableSeeMore
            />
            <News title={insightsIntro} articles={insightsArticles} />
            <ContactUsComponent
              title={contactUsTitle}
              text={contactUsSubtitle}
              addresses={contactUs.addresses}
              buttonLabel={contactUs.buttonLabel}
            />
          </MainMenu>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo();
  const { id } = context.query;

  const { data, networkStatus } = await client.query({
    query: GET_TECHNOLOGY_PAGE,
    variables: { id },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Technology;
