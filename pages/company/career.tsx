import { IContactUs } from "@interfaces";
import Invitation from "../../components/Careear/Invitation";
import LetsAcquainted from "../../components/Careear/LetsAcquainted";
import OurBenefits from "../../components/Careear/OurBenefits";
import OurPhotos from "../../components/Careear/OurPhotos";
import Vacancies from "../../components/Careear/Vacancies";
import FooterComponent from "../../components/Footer";
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

const Career = () => {
  return (
    <MainMenu
      titlesColor={theme.colors.white}
      titles={titles}
      backgroundColor={theme.colors.black}
    >
      <Invitation />
      <Vacancies title={"We are looking for"} />
      <OurBenefits />
      <OurPhotos />
      <LetsAcquainted />
      <FooterComponent
        policies={footer.policies}
        offices={footer.offices}
        pages={footer.pages}
        followUs={footer.followUs}
        copyright={footer.copyright}
      />
    </MainMenu>
  );
};

export default Career;
