import CaseIntroduction from "../../components/Case/CaseIntroduction";
import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import CaseDescription from "../../components/Case/CaseDescription";
import ProjectOverview from "../../components/Case/ProjectOverview";
import InsideTheProject from "../../components/Case/InsideTheProject";
import ClientsFeedback from "../../components/Case/ClientsFeedback";
import NextProject from "../../components/Case/NextProject";
import LetsTalk from "../../components/Services/LetsTalk";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const footer = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
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

const Case = () => {
  return (
    <MainMenu
      backgroundColor={theme.colors.black}
      titlesColor={theme.colors.white}
      titles={titles}
    >
      <CaseIntroduction />
      <CaseDescription />
      <ProjectOverview />
      <InsideTheProject />
      <ClientsFeedback />
      <NextProject />
      <LetsTalk
        title={"Let's Talk!"}
        isWhite
        text={
          <>
            <p>Got no clue where to start?</p>
            <p> Why don’t we discuss your idea?</p>
          </>
        }
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

export default Case;
