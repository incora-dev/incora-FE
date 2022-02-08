import CaseFilter from "../../components/CaseStudies/CaseFilter";
import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import LetsReachOut from "../../components/CaseStudies/LetsReachOut";
import { GetCaseStudies } from "../../graphql/caseStudies/__generated__/GetCaseStudies";
import { GET_CASE_STUDIES } from "../../graphql/caseStudies/queries";
import Custom404 from "../404";
import { useState } from "react";
import { initializeApollo } from "../../graphql/client";
import Projects from "../../components/CaseStudies/Projects";
import { NextPage } from "next";
import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import { IMAGES_LINK } from "../../constants";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface ICaseStudies {
  data: GetCaseStudies;
  networkStatus: number;
}

const CaseStudies: NextPage<ICaseStudies> = ({ data, networkStatus }) => {
  const [currentIndustryTag, setCurrentIndustryTag] = useState<string>("all");
  const [pointCountry, setPointCountry] = useState<string | undefined>();
  const industry =
    currentIndustryTag === "all" ? undefined : currentIndustryTag;

  const entry = data?.caseStudiesPage?.data?.attributes;
  const industries = data?.industries?.data;
  const location = data?.locations?.data;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const [filterByFlag, setFilterByFlag] = useState(false);
  const { black, white } = theme.colors;
  const menuBackgroundCondition = filterByFlag ? black : white;
  const titlesColorCondition = filterByFlag ? white : black;

  const renderCondition = entry && industries && location;

  if (networkStatus !== 7) return <Custom404 />;

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
            {seoImage && <meta property="og:url" content={seoImage} />}
          </Head>
          <MainMenu
            backgroundColor={menuBackgroundCondition}
            titlesColor={titlesColorCondition}
            titles={titles}
          >
            <CaseFilter
              locations={location}
              industries={industries}
              filterByFlag={filterByFlag}
              setFilterByFlag={setFilterByFlag}
              title={entry.title}
              description={entry.description}
              setCurrentIndustryTag={setCurrentIndustryTag}
              setPointCountry={setPointCountry}
            />
            <Projects industry={industry} pointCountry={pointCountry} />
            <LetsReachOut contactUs={entry.contactUs} />
            <FooterComponent />
          </MainMenu>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_CASE_STUDIES,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default CaseStudies;
