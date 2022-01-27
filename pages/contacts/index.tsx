import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import HeaderContactUs from "../../components/ContactUsPage/HeaderContactUs";
import Footer from "../../components/Footer";
import {IFooter} from "../../interfaces/footer.interface";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import FooterComponent from "../../components/Footer";
import {IContactUs} from "@interfaces";
import CreateProgressTogether from "../../components/ContactUsPage/CreateProgressTogether";

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

const Contacts = ({ title, text}: IContacts) => {
  return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <MainMenu
            backgroundColor={theme.colors.white}
            titlesColor={theme.colors.black}
            titles={menuTitles}
          >
            <HeaderContactUs title={title} text={text}/>
            <CreateProgressTogether title={'Let’s create progress together!'}/>
          </MainMenu>
          <FooterComponent
            policies={footer.policies}
            offices={footer.offices}
            pages={footer.pages}
            followUs={footer.followUs}
            copyright={footer.copyright}
          />
        </>
      </>
  )
}

export default Contacts;

Contacts.getInitialProps = async () => {
  const title = 'contact us';
  const text = 'As we offer solutions for various bold ideas, we strive to embrace a full cycle of services using major innovations for development. Get the launch you imagined with the help of our Incora team, which is just a few clicks away from you.';

  return {
    title,
    text
  }
}
