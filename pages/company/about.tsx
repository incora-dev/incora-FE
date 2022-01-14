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

const CompanyAbout = () => {
  const { title, text, formLabels, addresses, buttonLabel } = contactUs;
  const { policies, offices, pages, followUs, copyright } = footer;

  return (
    <MainMenu titlesColor={theme.colors.black} titles={titles} backgroundColor={theme.colors.white}>
      <Introduction />
      <OurTraditions />
      <ContactUsComponent
        title={title}
        text={text}
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
