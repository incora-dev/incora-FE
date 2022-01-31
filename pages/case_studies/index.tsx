import CaseFilter from "../../components/CaseStudies/CaseFilter";
import FooterComponent from "../../components/Footer";
import EmbodiedIdeasComponent from "../../components/Homepage/EmbodiedIdeas";
import MainMenu from "../../components/mainMenu/mainMenu";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import LetsReachOut from "../../components/CaseStudies/LetsReachOut";
import { useQuery } from "@apollo/client";
import { GetCaseStudies } from "../../graphql/caseStudies/__generated__/GetCaseStudies";
import { GET_CASE_STUDIES } from "../../graphql/caseStudies/queries";
import Custom404 from "../404";
import { createContext, useState } from "react";

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

const CaseStudies = () => {
  const [currentIndustryTag, setCurrentIndustryTag] = useState<string>("all");

  const { data, loading, error } = useQuery<GetCaseStudies>(GET_CASE_STUDIES);
  const entry = data?.caseStudiesPage?.data?.attributes;

  const [filterByFlag, setFilterByFlag] = useState(false);
  const { black, white } = theme.colors;
  const menuBackgroundCondition = filterByFlag ? black : white;
  const titlesColorCondition = filterByFlag ? white : black;

  const errorCondition = error && <Custom404 />;

  return (
    <>
      {!loading && !error && entry && (
        <MainMenu
          backgroundColor={menuBackgroundCondition}
          titlesColor={titlesColorCondition}
          titles={titles}
        >
          <CaseFilter
            filterByFlag={filterByFlag}
            setFilterByFlag={setFilterByFlag}
            title={entry.title}
            description={entry.description}
            setCurrentIndustryTag={setCurrentIndustryTag}
          />
          {/* <EmbodiedIdeasComponent
            bgColor={white}
            elementsColor={theme.colors.yellow}
            disablePadding
            disableSeeMore
            currentIndustryTag={currentIndustryTag}
          /> */}
          <LetsReachOut contactUs={entry.contactUs} />
          <FooterComponent
            policies={footer.policies}
            offices={footer.offices}
            pages={footer.pages}
            followUs={footer.followUs}
            copyright={footer.copyright}
          />
        </MainMenu>
      )}

      {errorCondition}
    </>
  );
};

export default CaseStudies;
