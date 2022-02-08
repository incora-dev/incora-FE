import Head from "next/head";
import MainMenu from "../components/mainMenu/mainMenu";
import ServicesComponent from "../components/Homepage/services";
import { theme } from "../styles/theme";
import TechnologiesComponent from "../components/Homepage/Technologies";
import AboutUs from "../components/Homepage/AboutUs";
import ContactUsComponent from "../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../components/Footer";

import React from "../public/SVG/technologies/react.svg";
import VideoComponent from "../components/Homepage/Video";
import Reviews from "../components/Homepage/Reviews";
import HeaderComponent from "../components/Homepage/Header";
import CooperateComponent from "../components/Homepage/Cooperate";
import Custom404 from "./404";
import VerticalFullPageSlider from "../components/common/VerticalFullPageSlider";
import { GET_HOMEPAGE } from "../graphql/homepage/queries";
import {
  GetHomepage,
  GetHomepage_homePage_data_attributes_coopSteps_steps,
} from "../graphql/homepage/__generated__/GetHomepage";
import { IMAGES_LINK } from "../constants";
import { ScrollListTypes } from "../components/common/VerticalFullPageSlider/types";
import EmbodiedIdeasComponent from "../components/Homepage/EmbodiedIdeas";
import NewsComponent from "../components/News";
import { initializeApollo } from "../graphql/client";
import { NextPage } from "next";
import Loader from "../components/common/Loader";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];
const bgColorBlack = theme.colors.black;
const bgColorWhite = theme.colors.white;

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

interface IHome {
  data: GetHomepage;
  networkStatus: number;
}

const Home: NextPage<IHome> = ({ data, networkStatus }) => {
  const entry = data?.homePage?.data?.attributes;
  const backgroundVideo =
    IMAGES_LINK + entry?.banner.titleTexture.data?.attributes?.url;
  const coopSteps = entry?.coopSteps.steps;
  const coopButton = entry?.coopSteps.button;
  const servicesTitle = entry?.services.title;
  const servicesDescription = entry?.services.description;
  const servicesLabels = entry?.services.services?.data;
  const embodiedIdeasTitle = entry?.embodiedIdeas.title;
  const embodiedIdeasButtonIntro = entry?.embodiedIdeas.buttonIntro;
  const embodiedIdeasButton = entry?.embodiedIdeas.button;
  const projects = entry?.embodiedIdeas.projects?.data;
  const articles = entry?.insights.articles?.data;
  const newsTitle = entry?.insights.intro;
  const contactUsTitle = entry?.contactUs.title;
  const contactUsSubtitle = entry?.contactUs.subtitle;
  const aboutUsTitle = entry?.aboutUs.title;
  const aboutUsDescription = entry?.aboutUs.description;
  const technologiesTitle = entry?.technologies.title;
  const techStacks = entry?.technologies.tech_stacks?.data;
  const reviews = entry?.aboutUs.feedbacks?.data;

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== "undefined" &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const renderSlide = (
    slide: GetHomepage_homePage_data_attributes_coopSteps_steps | null,
    index: number
  ) =>
    slide &&
    coopButton && (
      <CooperateComponent
        slide={slide}
        index={index}
        button={coopButton}
        plusesColor={theme.colors.yellow}
      />
    );

  const renderCondition =
    backgroundVideo &&
    coopSteps &&
    servicesTitle &&
    servicesDescription &&
    servicesLabels &&
    projects &&
    articles &&
    newsTitle &&
    contactUsTitle &&
    contactUsSubtitle &&
    aboutUsTitle &&
    aboutUsDescription &&
    technologiesTitle &&
    techStacks &&
    reviews;

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
          <>
            <MainMenu
              titles={titles}
              backgroundColor={bgColorBlack}
              titlesColor={bgColorWhite}
            >
              <h1 className="hidden">Incora Software Development Company</h1>
              <HeaderComponent backgroundVideo={backgroundVideo} />
              <VerticalFullPageSlider<GetHomepage_homePage_data_attributes_coopSteps_steps | null>
                slides={coopSteps}
                renderSlide={renderSlide}
                scrollListType={ScrollListTypes.NUMBER}
              />
              <section>
                <ServicesComponent
                  title={servicesTitle}
                  text={servicesDescription}
                  labels={servicesLabels}
                />
              </section>
              <section>
                <TechnologiesComponent
                  bgColor={bgColorBlack}
                  title={technologiesTitle}
                  techStacks={techStacks}
                />
              </section>
              <EmbodiedIdeasComponent
                title={embodiedIdeasTitle}
                bgColor={theme.colors.white}
                elementsColor={theme.colors.yellow}
                projects={projects}
                buttonIntro={embodiedIdeasButtonIntro}
                button={embodiedIdeasButton}
              />
              <VideoComponent />
              <AboutUs
                backgroundColor={bgColorBlack}
                title={aboutUsTitle}
                text={aboutUsDescription}
              />
              <Reviews reviews={reviews} />
              <section>
                <NewsComponent title={newsTitle} articles={articles} />
              </section>
              <ContactUsComponent
                title={contactUsTitle}
                text={contactUsSubtitle}
                addresses={contactUs.addresses}
                buttonLabel={contactUs.buttonLabel}
              />
              <FooterComponent />
            </MainMenu>
          </>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, loading, networkStatus } = await client.query({
    query: GET_HOMEPAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Home;
