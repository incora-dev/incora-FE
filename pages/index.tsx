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
import Angular from "../public/SVG/technologies/angular.svg";
import VideoComponent from "../components/Homepage/Video";
import HeaderComponent from "../components/Homepage/Header";
import CooperateComponent from "../components/Homepage/Cooperate";
import { useQuery } from "@apollo/client";
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

const technologies = {
  title: "Technologies",
  technologies: [
    {
      technology: {
        label: "frontend",
        text: ["React", "Angular2"],
        icons: [React, Angular],
      },
    },
    {
      technology: {
        label: "backend",
        text: ["Node.js", "Python", "Django", "Flask"],
        icons: [React, Angular],
      },
    },
    {
      technology: {
        label: "database",
        text: ["PostgreSQL", "MySQL", "MongoDB", "Apollo", "Redis"],
        icons: [React, Angular],
      },
    },
    {
      technology: {
        label: "mobile apps",
        text: ["React Native", "Ionic"],
        icons: [React, Angular],
      },
    },
    {
      technology: {
        label: "devOps tools",
        text: ["Docker", "Kubernetes", "Amazon ECS"],
        icons: [React, Angular],
      },
    },
    {
      technology: {
        label: "cloud Services",
        text: [
          "Amazon Web Services",
          "Google Cloud Platform",
          "Microsoft Azure",
          "DigitalOcean",
        ],
        icons: [React, Angular],
      },
    },
  ],
};

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  formLabels: ["name", "phone number", "email", "what is you main goal?"],
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

function Home() {
  const { data, loading, error } = useQuery<GetHomepage>(GET_HOMEPAGE);
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
    techStacks;

  if (loading) return null;
  if (error) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <>
            <MainMenu
              titles={titles}
              backgroundColor={bgColorBlack}
              titlesColor={bgColorWhite}
            >
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
              {/* <Reviews /> */}
              <section>
                <NewsComponent title={newsTitle} articles={articles} />
              </section>
              <ContactUsComponent
                title={contactUsTitle}
                text={contactUsSubtitle}
                formLabels={contactUs.formLabels}
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
}

export default Home;
