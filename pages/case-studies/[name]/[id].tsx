import CaseIntroduction from "../../../components/Case/CaseIntroduction";
import FooterComponent from "../../../components/Footer";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";
import CaseDescription from "../../../components/Case/CaseDescription";
import ProjectOverview from "../../../components/Case/ProjectOverview";
import InsideTheProject from "../../../components/Case/InsideTheProject";
import ClientsFeedback from "../../../components/Case/ClientsFeedback";
import NextProject from "../../../components/Case/NextProject";
import LetsTalk from "../../../components/Services/LetsTalk";
import { GET_PROJECT_PAGE } from "../../../graphql/caseStudies/queries";
import { GetProjectPage } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import Custom404 from "../../404";
import { initializeApollo } from "../../../graphql/client";
import { NextPage, NextPageContext } from "next";
import { IMAGES_LINK } from "../../../constants";
import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import { useEffect, useState } from "react";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface ICase {
  data: GetProjectPage;
  networkStatus: number;
}

const Case: NextPage<ICase> = ({ data, networkStatus }) => {
  const entry = data?.project?.data?.attributes;
  const location = entry?.location?.data?.attributes;
  const technologies = entry?.technologies;
  const services = entry?.services;
  const industry = entry?.industry;
  const feedback = entry?.feedback?.data?.attributes;
  const nextProjectButton = entry?.nextProjectButton;
  const galleryIntro = entry?.gallery[0]?.intro;
  const galleryPictures = entry?.gallery[0]?.pictures.data;
  const contactUs = entry?.contactUs;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const renderCondition =
    entry &&
    location &&
    technologies &&
    services &&
    industry &&
    nextProjectButton &&
    contactUs &&
    galleryIntro &&
    galleryPictures;

  const [url, setUrl] = useState<string>('');

  useEffect(() =>
      setUrl(window.location.href)
  ), [];

  if (networkStatus !== 7 || data.project?.data === null) return <Custom404 />;

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
            <meta property="og:url" content={url} />
            {seoDescription && (
              <meta name="description" content={seoDescription} />)}
            {seoKeywords && <meta name="keywords" content={seoKeywords} />}
            {seoTitle && <meta property="og:title" content={seoTitle} />}
            {seoDescription && (
              <meta property="og:description" content={seoDescription} />
            )}
            {seoImage && <meta property="og:image" content={seoImage} />}
          </Head>
          <MainMenu
            backgroundColor={theme.colors.black}
            titlesColor={theme.colors.white}
            titles={titles}
          >
            <CaseIntroduction
              isUnderNDA={entry?.IsUnderNDA}
              name={entry.name}
              description={entry.description}
            />
            <CaseDescription
              mainInfo={entry.mainInfo}
              location={location}
              technologies={technologies}
              services={services}
              industry={industry}
            />
            <ProjectOverview projectOverview={entry.projectOverview} />
            <InsideTheProject intro={galleryIntro} slides={galleryPictures} />
            {feedback && <ClientsFeedback feedback={feedback} />}
            <NextProject nextProjectButton={nextProjectButton} />
            <LetsTalk
              title={contactUs.title}
              isWhite
              text={contactUs.subtitle}
            />

            <FooterComponent />
          </MainMenu>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo();
  const { id } = context.query;

  const { data, networkStatus } = await client.query({
    query: GET_PROJECT_PAGE,
    variables: { id },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Case;
