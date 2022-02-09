import { IContactUs } from "@interfaces";
import IconsBlock from "../../components/CompanyAbout/IconsBlock";
import Introduction from "../../components/CompanyAbout/Introduction";
import OurTraditions from "../../components/CompanyAbout/OurTraditions";
import FooterComponent from "../../components/Footer";
import ContactUsComponent from "../../components/Homepage/ContactUs";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import NewsComponent from "../../components/News";
import React from "../../public/SVG/technologies/react.svg";
import { GET_ABOUT_PAGE } from "../../graphql/companyAbout/queries";
import { GetAboutPage } from "../../graphql/companyAbout/__generated__/GetAboutPage";
import Custom404 from "../404";
import { initializeApollo } from "../../graphql/client";
import { NextPage } from "next";
import { IMAGES_LINK } from "../../constants";
import Head from "next/head";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

interface ICompanyAbout {
  data: GetAboutPage;
  networkStatus: number;
}

const CompanyAbout: NextPage<ICompanyAbout> = ({ data, networkStatus }) => {
  const { addresses, buttonLabel } = contactUs;

  const entry = data?.aboutPage?.data?.attributes;
  const insightsTitle = entry?.insights.intro;
  const articles = entry?.insights.articles?.data;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {entry && insightsTitle && articles && (
        <>
          <Head>
            {seoTitle && <title>{seoTitle}</title>}
            <meta
              property="og:site_name"
              content="Incora - European software development company"
            />
            <meta property="og:type" content="article" />
            {seoTitle && <title>{seoTitle}</title>}
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
            titlesColor={theme.colors.black}
            titles={titles}
            backgroundColor={theme.colors.white}
          >
            <Introduction
              mainInfo={entry.mainInfo}
              bannerImage={entry.bannerImage}
            />
            <OurTraditions ourTraditions={entry.ourTraditions} />
            <NewsComponent title={insightsTitle} articles={articles} />
            <IconsBlock />
            <ContactUsComponent
              title={entry.contactUs.title}
              text={entry.contactUs.subtitle}
              addresses={addresses}
              buttonLabel={buttonLabel}
            />
          </MainMenu>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default CompanyAbout;
