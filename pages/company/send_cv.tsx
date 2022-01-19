import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import SendCvHeader from "../../components/SendCv/SendCvHeader";
import SendCvForm from "../../components/SendCv/SendCvForm";

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
  return (
    <MainMenu
      backgroundColor={theme.colors.white}
      titlesColor={theme.colors.black}
      titles={titles}
    >
      <SendCvHeader />
      <SendCvForm />
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

export default SendCv;
