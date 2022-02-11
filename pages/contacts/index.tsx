import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import HeaderContactUs from "../../components/ContactUsPage/HeaderContactUs";
import CreateProgressTogether from "../../components/ContactUsPage/CreateProgressTogether";
import { IMAGES_LINK } from "../../constants";
import { useEffect, useState } from "react";

interface IContacts {
  title: string;
  text: string;
}

const menuTitles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const Contacts = ({ title, text }: IContacts) => {
  const [url, setUrl] = useState<string>("");
  useEffect(() => setUrl(window.location.href)), [];

  const seoTitle = "Contact us — Incora Software Development";
  const seoKeywords =
    "full cycle of development services, Incora team, innovations for development";
  const seoDescription =
    "Get the launch you imagined with the help of our Incora team, which is just a few clicks away from you.";
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
        <meta property="og:url" content={url} />
        {seoDescription && <meta name="description" content={seoDescription} />}
        {seoKeywords && <meta name="keywords" content={seoKeywords} />}
        {seoTitle && <meta property="og:title" content={seoTitle} />}
        {seoDescription && (
          <meta property="og:description" content={seoDescription} />
        )}
        {seoImage && <meta property="og:image" content={seoImage} />}

        <meta name="twitter:card" content={"summary"} />
        {seoTitle && <meta name="twitter:title" content={seoTitle} />}
        {seoDescription && (
            <meta property="twitter:description" content={seoDescription} />
        )}
        {url && <meta property="twitter:site" content={url} />}
        {seoImage && <meta property="twitter:image" content={seoImage} />}
      </Head>
      <>
        <MainMenu
          backgroundColor={theme.colors.white}
          titlesColor={theme.colors.black}
          titles={menuTitles}
        >
          <HeaderContactUs title={title} text={text} />
          <CreateProgressTogether title={"Let’s create progress together!"} />
        </MainMenu>
      </>
    </>
  );
};

export default Contacts;

Contacts.getInitialProps = async () => {
  const title = "contact us";
  const text =
    "As we offer solutions for various bold ideas, we strive to embrace a full cycle of services using major innovations for development. Get the launch you imagined with the help of our Incora team, which is just a few clicks away from you.";

  return {
    title,
    text,
  };
};
