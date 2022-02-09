import Head from "next/head";
import React from "../public/SVG/technologies/react.svg";
import MainMenu from "../components/mainMenu/mainMenu";
import { theme } from "../styles/theme";
import FooterComponent from "../components/Footer";
import Header404 from "../components/Custom404Page/Header404";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

function Custom404() {
  return (
    <>
      <>
        <Head>
          <title>Page not found</title>
          <meta name="description" content="Page not found" />
        </Head>
      </>
      <>
        <MainMenu
          backgroundColor={theme.colors.black}
          titlesColor={theme.colors.white}
          titles={titles}
        >
          <Header404 />
          <FooterComponent />
        </MainMenu>
      </>
    </>
  );
}

export default Custom404;
