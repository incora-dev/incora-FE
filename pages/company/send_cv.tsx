import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import SendCvHeader from "../../components/SendCv/SendCvHeader";
import SendCvForm from "../../components/SendCv/SendCvForm";
import {IMAGES_LINK} from "../../constants";
import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const footer: IFooter = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  pages: ["Services", "expertise", "Case Studies", "Company", "Insights"],
  followUs: [
    { icon: Facebook, redirectTo: "Facebook" },
    { icon: LinkedIn, redirectTo: "LinkedIn" },
    { icon: Instagram, redirectTo: "Instagram" },
  ],
  copyright: "© 2015-2021 Incora LLC",
};

const { policies, offices, pages, followUs, copyright } = footer;

const SendCv = () => {
  const seoTitle = 'Send CV — Incora Software Development';
  const seoKeywords = 'Incora, CV, Send your CV';
  const seoDescription = 'If you are interested in working with us, just send your CV and we’ll get back to you soon.';
  const seoImage = `${IMAGES_LINK}`

  return (
    <>
      <Head>
        { seoTitle && <title>{seoTitle}</title> }
        <meta property="og:site_name" content="Incora - European software development company" />
        <meta property="og:type" content="article" />
        { seoDescription && <meta name="description" content={seoDescription}/> }
        { seoKeywords && <meta name="keywords" content={seoKeywords} /> }
        { seoTitle && <meta property="og:title" content={seoTitle} /> }
        { seoDescription && <meta property="og:description" content={seoDescription} /> }
        { seoImage && <meta property="og:url" content={seoImage}/> }
      </Head>
      <MainMenu
          backgroundColor={theme.colors.white}
          titlesColor={theme.colors.black}
          titles={titles}
      >
        <SendCvHeader />
        <SendCvForm />
        <FooterComponent />
      </MainMenu>
    </>

  );
};

export default SendCv;
