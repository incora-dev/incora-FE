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
import Angular from "../../public/SVG/technologies/angular.svg";

import image1 from "../../public/newsBlock/newImg1.jpg";
import image2 from "../../public/newsBlock/newImg2.jpg";
import image3 from "../../public/newsBlock/newImg3.jpg";
import { useQuery } from "@apollo/client";
import { GetContactUs } from "../../graphql/companyAbout/__generated__/GetContactUs";
import { GET_CONTACT_US } from "../../graphql/companyAbout/queries";

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

  const { data } = useQuery<GetContactUs>(GET_CONTACT_US);
  const entry = data?.aboutPage?.data?.attributes?.contactUs;
  const title = entry?.title || "";
  const subtitle = entry?.subtitle || "";

  return (
    <MainMenu
      titlesColor={theme.colors.black}
      titles={titles}
      backgroundColor={theme.colors.white}
    >
      <Introduction />
      <OurTraditions />
      <NewsComponent title={"recent events"} articles={news.articles} />
      <ContactUsComponent
        title={title}
        text={subtitle}
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
  );
};

export default CompanyAbout;
