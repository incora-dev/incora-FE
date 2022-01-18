import { useSelector } from "react-redux";
import CaseFilter from "../../components/CaseStudies/CaseFilter";
import { filterByFlagSelector } from "../../components/CaseStudies/selectors";
import FooterComponent from "../../components/Footer";
import EmbodiedIdeasComponent from "../../components/Homepage/EmbodiedIdeas";
import ServicesComponent from "../../components/Homepage/services";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { AppState } from "../../services/store";
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

const EmbodiedIdeas = {
  title: "Embodied Ideas",
  bgColor: theme.colors.white,
  projects: [
    {
      title: "DeepDao",
      text: "Bookety is an online booking system for travelers, which provides access to thousands of tours in more than 2,000 destinations worldwide.",
      technologies: [
        "Node.JS",
        "Express",
        "PostgreSQL",
        "Web3",
        "React",
        "Saga",
        "Redux",
        "MaterialUI",
        "AWS",
      ],
      img: "./project1.jpg",
    },
    {
      title: "Burgerizzer",
      text: "Bookety is an online booking system for travelers, which provides access to thousands of tours in more than 2,000 destinations worldwide.",
      technologies: [
        "JavaScript",
        "ReactJS",
        "React Native",
        "NodeJS",
        "Google API",
        "Foodics API",
        "Tookan API",
        "Unifonic API",
        "Payfort API",
        "AWS",
        "PostgreSQL",
      ],
      img: "./project2.jpg",
    },
    {
      title: "HealthApp",
      text: "It is an application for making quick and convenient doctor appointments and conducting online consultations.",
      technologies: [
        "Node.JS",
        "Express",
        "PostgreSQL",
        "Web3",
        "React",
        "Saga",
        "Redux",
        "MaterialUI",
        "AWS",
      ],
      img: "./project3.jpg",
    },
  ],
};

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

const CaseStudies = () => {
  const filterByFlag: boolean = useSelector(filterByFlagSelector);
  const { black, white } = theme.colors;

  const menuBackgroundCondition = filterByFlag ? black : white;
  const titlesColorCondition = filterByFlag ? white : black;

  return (
    <MainMenu
      backgroundColor={menuBackgroundCondition}
      titlesColor={titlesColorCondition}
      titles={titles}
    >
      <CaseFilter />
      <EmbodiedIdeasComponent
        bgColor={EmbodiedIdeas.bgColor}
        projects={EmbodiedIdeas.projects}
        elementsColor={theme.colors.yellow}
        height={2144}
        disablePadding
        disableSeeMore
      />

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

export default CaseStudies;
