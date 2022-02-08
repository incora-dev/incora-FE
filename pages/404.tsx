import Head from "next/head";
import React from "../public/SVG/technologies/react.svg";
import MainMenu from "../components/mainMenu/mainMenu";
import { theme } from "../styles/theme";
import FooterComponent from "../components/Footer";
import {IFooter} from "../interfaces/footer.interface";
import Facebook from "../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../public/SVG/socialNetwork/instagram.svg";
import Header404 from "../components/Custom404Page/Header404";

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
          <Header404/>
        </MainMenu>
        <FooterComponent/>
      </>
    </>
  )
}

export default Custom404;
