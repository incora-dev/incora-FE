import Invitation from "../../components/Careear/Invitation";
import LetsAcquainted from "../../components/Careear/LetsAcquainted";
import OurBenefits from "../../components/Careear/OurBenefits";
import OurPhotos from "../../components/Careear/OurPhotos";
import Vacancies from "../../components/Careear/Vacancies";
import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";

import { useQuery } from "@apollo/client";
import { GET_CAREERS_PAGE } from "../../graphql/careers/queries";
import { GetCareersPage } from "../../graphql/careers/__generated__/GetCareersPage";
import Custom404 from "../404";
import { initializeApollo } from "../../graphql/client";
import { NextPage } from "next";

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

interface ICareer {
  data: GetCareersPage;
  networkStatus: number;
}

const Career: NextPage<ICareer> = ({ data, networkStatus }) => {
  const entry = data?.careersPage?.data?.attributes;
  const specialties = data?.filterSpecialities;
  const technologies = data?.filterTechnologies;
  const ourBenefits = entry?.ourBenefits;

  const renderCondition = entry && specialties && technologies && ourBenefits;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <MainMenu
          titlesColor={theme.colors.white}
          titles={titles}
          backgroundColor={theme.colors.black}
        >
          <Invitation banner={entry.banner} process={entry.process} />
          <Vacancies
            specialties={specialties}
            technologies={technologies}
            currentVacancies={entry.currentVacancies}
          />
          <OurBenefits ourBenefits={ourBenefits} />
          <OurPhotos />
          <LetsAcquainted />
          <FooterComponent />
        </MainMenu>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_CAREERS_PAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Career;
