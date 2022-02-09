import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";

import SendCvHeader from "../../components/SendCv/SendCvHeader";
import SendCvForm from "../../components/SendCv/SendCvForm";
import { IMAGES_LINK } from "../../constants";
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

const SendCv = () => {
  const seoTitle = "Send CV — Incora Software Development";
  const seoKeywords = "Incora, CV, Send your CV";
  const seoDescription =
    "If you are interested in working with us, just send your CV and we’ll get back to you soon.";
  const seoImage = `${IMAGES_LINK}`;

  return (
    <>
      <Head>
        {seoTitle && <title>{seoTitle}</title>}
        <meta
          property="og:site_name"
          content="Incora - European software development company"
        />
        <meta property="og:type" content="article" />
        {seoDescription && <meta name="description" content={seoDescription} />}
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        {seoTitle && <meta property="og:title" content={seoTitle} />}
        {seoDescription && (
          <meta property="og:description" content={seoDescription} />
        )}
        {seoImage && <meta property="og:url" content={seoImage} />}
      </Head>
      <MainMenu
        backgroundColor={theme.colors.white}
        titlesColor={theme.colors.black}
        titles={titles}
      >
        <SendCvHeader />
        <SendCvForm />
      </MainMenu>
    </>
  );
};

export default SendCv;
