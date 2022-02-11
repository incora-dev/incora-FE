import FooterComponent from "../../../components/Footer";
import MainMenu from "../../../components/mainMenu/mainMenu";
import VacancyDescription from "../../../components/Vacancy/VacancyDescription";
import { theme } from "../../../styles/theme";
import CheckAlso from "../../../components/Vacancy/CheckAlso";
import { GET_VACANCY } from "../../../graphql/careers/queries";
import { GetVacancy } from "../../../graphql/careers/__generated__/GetVacancy";
import { initializeApollo } from "../../../graphql/client";
import { NextPage, NextPageContext } from "next";
import Custom404 from "../../404";
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

interface IVacancy {
  data: GetVacancy;
  networkStatus: number;
}

const Vacancy: NextPage<IVacancy> = ({ data, networkStatus }) => {
  const attributes = data?.vacancy?.data?.attributes;
  const description = data?.vacancy?.data?.attributes?.description;
  const currentVacancies = data?.vacancy?.data?.attributes?.currentVacancies;
  const specialties = data?.filterSpecialities;
  const technologies = data?.filterTechnologies;
  const filterTechnologies =
    data?.vacancy?.data?.attributes?.filter_technologies?.data[0]?.attributes
      ?.name;

  const seoTitle = attributes?.SEO?.ogTitle;
  const seoKeywords = attributes?.SEO?.keywords;
  const seoDescription = attributes?.SEO?.description;
  const seoImage =
    attributes?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${attributes?.SEO?.ogImage?.data?.attributes?.url}`;

  const [url, setUrl] = useState<string>("");
  useEffect(() => setUrl(window.location.href)), [];

  const renderCondition =
    description &&
    currentVacancies &&
    specialties &&
    technologies &&
    filterTechnologies;

  if (networkStatus !== 7 || data.vacancy?.data === null) return <Custom404 />;

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
          <MainMenu
            backgroundColor={theme.colors.white}
            titlesColor={theme.colors.black}
            titles={titles}
          >
            <VacancyDescription
              description={description}
              filterTechnologies={filterTechnologies}
              vacancy={seoTitle}
            />
            <CheckAlso
              specialties={specialties}
              technologies={technologies}
              currentVacancies={currentVacancies}
            />
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
    query: GET_VACANCY,
    variables: { id },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Vacancy;
