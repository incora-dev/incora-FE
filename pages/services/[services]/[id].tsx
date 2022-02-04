import {IMAGES_LINK, titles} from "../../../constants";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";
import HeaderService from "../../../components/ServicePage/HeaderService";
import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import FooterComponent from "../../../components/Footer";
import LetsTalk from "../../../components/Services/LetsTalk";
import Information from "../../../components/ServicePage/Information";
import BestSuitedFor from "../../../components/ServicePage/BestSuitedFor";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../../services/hooks";
import { GET_SERVICE } from "../../../graphql/services/queries";
import { GetService } from "../../../graphql/services/__generated__/GetService";
import Custom404 from "../../404";
import WorkflowSetUp from "../../../components/ServicePage/WorkflowSetUp";
import Faq from "../../../components/ServicePage/FAQ";
import EmbodiedIdeasComponent from "../../../components/Homepage/EmbodiedIdeas";
import { initializeApollo } from "../../../graphql/client";
import { NextPage, NextPageContext } from "next";

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;

interface IService {
  data: GetService;
  networkStatus: number;
}

const Service: NextPage<IService> = ({ data, networkStatus }) => {
  const entry = data.service?.data?.attributes;
  const content = entry?.whyDoYouNeed;
  const bestSuitedFor = entry?.bestSuitedFor;
  const workflow = entry?.workflow;
  const faqIntro = entry?.faq.intro;
  const faqItems = entry?.faq.items;
  const projects = entry?.projects?.data;
  const icon = entry?.icon.data?.attributes;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage = (entry?.SEO?.ogImage?.data?.attributes?.url !== undefined)
    && `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  const [menuColor, setMenuColor] = useState(
    isMobile || isTablet || isSmallTablet ? colorBlack : "none"
  );
  const handleScroll = () => {
    window.scrollY >= 20 ? setMenuColor(colorBlack) : setMenuColor("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuColorCondition =
    isMobile || isTablet || isSmallTablet ? colorBlack : menuColor;

  const renderCondition =
    entry &&
    content &&
    bestSuitedFor &&
    workflow &&
    faqIntro &&
    faqItems &&
    projects &&
    icon;

  if (networkStatus !== 7 || data.service?.data === null) return <Custom404 />;

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
          <>
            <MainMenu
              backgroundColor={menuColorCondition}
              titlesColor={colorWhite}
              titles={titles}
            >
              <HeaderService
                title={entry.name}
                titleSize={"48px"}
                text={entry.description}
                textWidth={"657px"}
                icon={icon}
              />
              <Information content={content} />
              <BestSuitedFor
                title={bestSuitedFor?.intro}
                info={bestSuitedFor?.items}
              />
              <WorkflowSetUp title={workflow.intro} content={workflow.items} />
              <EmbodiedIdeasComponent
                bgColor={theme.colors.yellow}
                elementsColor={theme.colors.black}
                projects={projects}
                disablePadding
                disableSeeMore
              />
              <Faq title={faqIntro} items={faqItems} />
              <LetsTalk
                flexDirection={"column-reverse"}
                title={"Ready to Start?"}
                text={"Get everything you need for the project initiation."}
              />
            </MainMenu>
            <FooterComponent />
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
    query: GET_SERVICE,
    variables: { id: id },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Service;
