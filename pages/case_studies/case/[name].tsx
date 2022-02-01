import CaseIntroduction from "../../../components/Case/CaseIntroduction";
import FooterComponent from "../../../components/Footer";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";

import Instagram from "../../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../../public/SVG/socialNetwork/linkedIn.svg";
import CaseDescription from "../../../components/Case/CaseDescription";
import ProjectOverview from "../../../components/Case/ProjectOverview";
import InsideTheProject from "../../../components/Case/InsideTheProject";
import ClientsFeedback from "../../../components/Case/ClientsFeedback";
import NextProject from "../../../components/Case/NextProject";
import LetsTalk from "../../../components/Services/LetsTalk";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_PAGE } from "../../../graphql/caseStudies/queries";
import { GetProjectPage } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import { useEffect } from "react";
import Custom404 from "../../404";

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
  const router = useRouter();
  const { name } = router.query;

  const { data, loading, error } = useQuery<GetProjectPage>(GET_PROJECT_PAGE, {
    variables: { url: name },
  });
  const entry = data?.projects?.data[0].attributes;
  const location = entry?.location?.data?.attributes;
  const technologies = entry?.technologies;
  const services = entry?.services;
  const industry = entry?.industry?.data?.attributes;
  const feedback = entry?.feedback?.data?.attributes;
  const nextProjectButton = entry?.nextProjectButton;
  const contactUs = entry?.contactUs;

  const renderCondition =
    !loading &&
    !error &&
    entry &&
    location &&
    technologies &&
    services &&
    industry &&
    feedback &&
    nextProjectButton &&
    contactUs;

  const errorCondition = error && <Custom404 />;

  return (
    <>
      {renderCondition && (
        <MainMenu
          backgroundColor={theme.colors.black}
          titlesColor={theme.colors.white}
          titles={titles}
        >
          <CaseIntroduction name={entry.name} description={entry.description} />
          <CaseDescription
            mainInfo={entry.mainInfo}
            location={location}
            technologies={technologies}
            services={services}
            industry={industry}
          />
          <ProjectOverview projectOverview={entry.projectOverview} />
          <InsideTheProject />
          <ClientsFeedback feedback={feedback} />
          <NextProject nextProjectButton={nextProjectButton} />
          <LetsTalk title={contactUs.title} isWhite text={contactUs.subtitle} />

          <FooterComponent/>
        </MainMenu>
      )}

      {errorCondition}
    </>
  );
};

export default Case;
