import CaseIntroduction from "../../../components/Case/CaseIntroduction";
import FooterComponent from "../../../components/Footer";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";
import CaseDescription from "../../../components/Case/CaseDescription";
import ProjectOverview from "../../../components/Case/ProjectOverview";
import InsideTheProject from "../../../components/Case/InsideTheProject";
import ClientsFeedback from "../../../components/Case/ClientsFeedback";
import NextProject from "../../../components/Case/NextProject";
import LetsTalk from "../../../components/Services/LetsTalk";
import { GET_PROJECT_PAGE } from "../../../graphql/caseStudies/queries";
import { GetProjectPage } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import Custom404 from "../../404";
import { initializeApollo } from "../../../graphql/client";
import { NextPage, NextPageContext } from "next";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface ICase {
  data: GetProjectPage;
  networkStatus: number;
}

const Case: NextPage<ICase> = ({ data, networkStatus }) => {
  const entry = data?.project?.data?.attributes;
  const location = entry?.location?.data?.attributes;
  const technologies = entry?.technologies;
  const services = entry?.services;
  const industry = entry?.industry?.data?.attributes;
  const feedback = entry?.feedback?.data?.attributes;
  const nextProjectButton = entry?.nextProjectButton;
  const galleryIntro = entry?.gallery[0]?.intro;
  const galleryPictures = entry?.gallery[0]?.pictures.data;
  const contactUs = entry?.contactUs;

  const renderCondition =
    entry &&
    location &&
    technologies &&
    services &&
    industry &&
    feedback &&
    nextProjectButton &&
    contactUs &&
    galleryIntro &&
    galleryPictures;

  if (networkStatus !== 7 || data.project?.data === null) return <Custom404 />;

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
          <InsideTheProject intro={galleryIntro} slides={galleryPictures} />
          <ClientsFeedback feedback={feedback} />
          <NextProject nextProjectButton={nextProjectButton} />
          <LetsTalk title={contactUs.title} isWhite text={contactUs.subtitle} />

          <FooterComponent />
        </MainMenu>
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const client = initializeApollo();
  const { id } = context.query;

  const { data, networkStatus } = await client.query({
    query: GET_PROJECT_PAGE,
    variables: { id },
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Case;
