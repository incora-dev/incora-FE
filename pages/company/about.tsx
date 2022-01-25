import { IContactUs } from "@interfaces";
import Introduction from "../../components/CompanyAbout/Introduction";
import OurTraditions from "../../components/CompanyAbout/OurTraditions";
import FooterComponent from "../../components/Footer";
import ContactUsComponent from "../../components/Homepage/ContactUs";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import NewsComponent from "../../components/News";

import React from "../../public/SVG/technologies/react.svg";

import image1 from "../../public/newsBlock/newImg1.jpg";
import image2 from "../../public/newsBlock/newImg2.jpg";
import image3 from "../../public/newsBlock/newImg3.jpg";
import { useQuery } from "@apollo/client";
import { GET_ABOUT_PAGE } from "../../graphql/companyAbout/queries";
import { GetAboutPage } from "../../graphql/companyAbout/__generated__/GetAboutPage";
import Custom404 from "../404";

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
  formLabels: ["name", "phone number", "email", "what is you main goal?"],
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

const footer: IFooter = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: contactUs.addresses,
  pages: ["Services", "expertise", "Case Studies", "Company", "Insights"],
  followUs: [
    { icon: Facebook, redirectTo: "Facebook" },
    { icon: LinkedIn, redirectTo: "LinkedIn" },
    { icon: Instagram, redirectTo: "Instagram" },
  ],
  copyright: "© 2015-2021 Incora LLC",
};

const news = {
  title: "Insights",
  articles: [
    {
      img: image1.src,
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title:
        "Intro to Microservices Communication [With the Use of Apache Kafka]",
      redirectTo: "[With the Use of Apache Kafka]",
    },
    {
      img: image2.src,
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "Incora Is Gaining Popularity On Clutch",
      redirectTo: "Incora Is Gaining Popularity On Clutch",
    },
    {
      img: image3.src,
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
      redirectTo: "Node.js vs Python: What are the Pros, Cons, and Use Cases?",
    },
    {
      img: image3.src,
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "How to Monetize Delivery and Shipping Apps: Methods Screening",
      redirectTo:
        "How to Monetize Delivery and Shipping Apps: Methods Screening",
    },
  ],
};

const CompanyAbout = () => {
  const { text, formLabels, addresses, buttonLabel } = contactUs;
  const { policies, offices, pages, followUs, copyright } = footer;

  const { data, loading, error } = useQuery<GetAboutPage>(GET_ABOUT_PAGE);
  const entry = data?.aboutPage?.data?.attributes;
  const title = entry?.contactUs.title || "";
  const subtitle = entry?.contactUs.subtitle || "";

  const errorCondition = error && <Custom404 />;

  return (
    <>
      {!loading && !error && entry && (
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
          <NewsComponent title={"recent events"} articles={news.articles} />
          <ContactUsComponent
            title={entry.contactUs.title}
            text={entry.contactUs.subtitle}
            formLabels={formLabels}
            addresses={addresses}
            buttonLabel={buttonLabel}
          />
          <FooterComponent
            policies={policies}
            offices={offices}
            pages={pages}
            followUs={followUs}
            copyright={copyright}
          />
        </MainMenu>
      )}

      {errorCondition}
    </>
  );
};

export default CompanyAbout;
