import { useState } from "react";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../components/Footer";
import { Platforms } from "../../components/AppEstimation/AppEstimations.types";
import Header from "../../components/AppEstimation/Header";
import MainContent from "../../components/AppEstimation/MainContent";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";
import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import React from "../../public/SVG/technologies/react.svg";

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

const Index = () => {
  const [platform, setPlatform] = useState<Platforms>(Platforms.WEB);
  return (
    <MainMenu
      titlesColor={theme.colors.white}
      titles={titles}
      backgroundColor={theme.colors.black}
    >
      <Header
        title="How Much Does It Cost to Create an App?"
        text="Learn what it takes to create your app! Fulcrum calculator makes a rough* estimate of all app development costs. Ready?"
      />
      <MainContent platform={platform} />
      <FooterComponent {...footer}/>
    </MainMenu>
  );
};

export default Index;
