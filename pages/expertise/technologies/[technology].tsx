import MainMenu from "../../../components/mainMenu/mainMenu";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import HeaderService from "../../../components/ServicePage/HeaderService";
import WhyShouldUseTechnology from "../../../components/ExpertisePage/WhyShouldUseTechnology";
import PopularWebsites from "../../../components/ExpertisePage/PopularWebsites";
import Facebook from "../../../public/SVG/expertise/technologies/Facebook.svg";
import Instagram from "../../../public/SVG/expertise/technologies/Instagram.svg";
import CodeAcademy from "../../../public/SVG/expertise/technologies/Codeacademy.svg";
import NewYorkTimes from "../../../public/SVG/expertise/technologies/New York Times.svg";
import YahooMail from "../../../public/SVG/expertise/technologies/Yahoo Mail.svg";
import Netflix from "../../../public/SVG/expertise/technologies/Netflix.svg";
import Dropbox from "../../../public/SVG/expertise/technologies/Dropbox.svg";
import Flipboard from "../../../public/SVG/expertise/technologies/Flipboard.svg";
import News from "../../../components/News";
import Angular from "../../../public/SVG/technologies/angular.svg";
import ContactUsComponent from "../../../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../../components/Footer";
import { IFooter } from "../../../interfaces/footer.interface";

import Instagram1 from "../../../public/SVG/socialNetwork/instagram.svg";
import Facebook1 from "../../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn1 from "../../../public/SVG/socialNetwork/linkedIn.svg";
import WhyDevelopWithUs from "../../../components/News/WhyDevelopWithUs";

const news = {
  title: "Insights",
  articles: [
    {
      img: "./../../newsBlock/newImg1.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title:
        "Intro to Microservices Communication [With the Use of Apache Kafka]",
      redirectTo: "[With the Use of Apache Kafka]",
    },
    {
      img: "./../../newsBlock/newImg2.jpg",
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "Incora Is Gaining Popularity On Clutch",
      redirectTo: "Incora Is Gaining Popularity On Clutch",
    },
    {
      img: "./../../newsBlock/newImg3.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
      redirectTo: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
    },
    {
      img: "./../../newsBlock/newImg1.jpg",
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "How to Monetize Delivery and Shipping Apps: Methods Screening",
      redirectTo:
        "How to Monetize Delivery and Shipping Apps: Methods Screening",
    },
  ],
};

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

const WebSites = [
  Facebook,
  Instagram,
  CodeAcademy,
  NewYorkTimes,
  YahooMail,
  Netflix,
  Dropbox,
  Flipboard,
];

const whyDevelopWithUs = {
  title: "why develop with us?",
  reasons: [
    {
      title: "Extensive market research for the clear goals",
      text: "ICP / Business Analysis / Time & Cost Estimation / Project Roadmap",
    },
    {
      title: "Development with the focus on every angle",
      text: "QA & Testing / Architecture scheme /  Source Code",
    },
    {
      title: "Agile approach through each phase",
      text: "CI/CD Pipeline / DevOps services integration",
    },
    {
      title: "Guaranteed safety with the NDA signing",
      text: "Legally recognized Confidential agreement",
    },
  ],
  rotateText1: "Thorough supervision",
  rotateText2: "custom solution developmet",
};

const footer: IFooter = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: contactUs.addresses,
  pages: ["Services", "expertise", "Case Studies", "Company", "Insights"],
  followUs: [
    { icon: Facebook1, redirectTo: "Facebook" },
    { icon: LinkedIn1, redirectTo: "LinkedIn" },
    { icon: Instagram1, redirectTo: "Instagram" },
  ],
  copyright: "© 2015-2022 Incora LLC",
};

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;
const colorBackgroundBlack = theme.colors.backgroundBlack;
const hexagonColorGrey = theme.elements.hexagonBorderedGrey;

interface ITechnology {
  title: string;
  headerText: string;
  label: string;
}

const Technology = ({ title, headerText, label }: ITechnology) => {
  const [menuColor, setMenuColor] = useState("none");
  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorBlack) : setMenuColor("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu
        backgroundColor={menuColor}
        titlesColor={colorWhite}
        titles={MainMenuTitles}
      >
        <HeaderService
          title={title}
          titleSize={"64px"}
          text={headerText}
          textWidth={"435px"}
          label={label}
          bgColor={colorBlack}
        />
        <WhyShouldUseTechnology
          title={title}
          bgColor={colorBackgroundBlack}
          titleColor={colorWhite}
        />
        <PopularWebsites title={title} webSites={WebSites} />
        <WhyDevelopWithUs
          title={whyDevelopWithUs.title}
          info={whyDevelopWithUs.reasons}
        />
        <News title={news.title} articles={news.articles} />
        <ContactUsComponent
          title={contactUs.title}
          text={contactUs.text}
          addresses={contactUs.addresses}
          buttonLabel={contactUs.buttonLabel}
        />
      </MainMenu>
      <FooterComponent />
    </>
  );
};

export default Technology;
