import CaseFilter from "../../components/CaseStudies/CaseFilter";
import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import LetsReachOut from "../../components/CaseStudies/LetsReachOut";
import { GetCaseStudies } from "../../graphql/caseStudies/__generated__/GetCaseStudies";
import { GET_CASE_STUDIES } from "../../graphql/caseStudies/queries";
import Custom404 from "../404";
import { useState } from "react";
import { initializeApollo } from "../../graphql/client";
import Projects from "../../components/CaseStudies/Projects";
import { NextPage } from "next";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface ICaseStudies {
  data: GetCaseStudies;
  networkStatus: number;
}

const CaseStudies: NextPage<ICaseStudies> = ({ data, networkStatus }) => {
  const [currentIndustryTag, setCurrentIndustryTag] = useState<string>("all");
  const industry =
    currentIndustryTag === "all" ? undefined : currentIndustryTag;

  const entry = data?.caseStudiesPage?.data?.attributes;
  const industries = data?.industries?.data;
  const location = data?.locations?.data;

  const [filterByFlag, setFilterByFlag] = useState(false);
  const { black, white } = theme.colors;
  const menuBackgroundCondition = filterByFlag ? black : white;
  const titlesColorCondition = filterByFlag ? white : black;

  const renderCondition = entry && industries && location;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <MainMenu
          backgroundColor={menuBackgroundCondition}
          titlesColor={titlesColorCondition}
          titles={titles}
        >
          <CaseFilter
            locations={location}
            industries={industries}
            filterByFlag={filterByFlag}
            setFilterByFlag={setFilterByFlag}
            title={entry.title}
            description={entry.description}
            setCurrentIndustryTag={setCurrentIndustryTag}
          />
          <Projects industry={industry} />
          <LetsReachOut contactUs={entry.contactUs} />
          <FooterComponent />
        </MainMenu>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_CASE_STUDIES,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default CaseStudies;
