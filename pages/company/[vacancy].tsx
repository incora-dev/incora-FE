import FooterComponent from "../../components/Footer";
import MainMenu from "../../components/mainMenu/mainMenu";
import VacancyDescription from "../../components/Vacancy/VacancyDescription";
import { IContactUs } from "../../interfaces/contactUs.interface";
import { IFooter } from "../../interfaces/footer.interface";
import { theme } from "../../styles/theme";

import Instagram from "../../public/SVG/socialNetwork/instagram.svg";
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import CheckAlso from "../../components/Vacancy/CheckAlso";
import { useQuery } from "@apollo/client";
import { GET_VACANCY } from "../../graphql/careers/queries";
import Custom404 from "../404";
import { GetVacancy } from "../../graphql/careers/__generated__/GetVacancy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
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

const Vacancy = () => {
  const router = useRouter();
  const { vacancy } = router.query;

  const { data, loading, error } = useQuery<GetVacancy>(GET_VACANCY, {
    variables: { url: vacancy },
  });
  const description = data?.vacancies?.data[0].attributes?.description;
  const currentVacancies =
    data?.vacancies?.data[0].attributes?.currentVacancies;
  const specialties = data?.filterSpecialities;
  const technologies = data?.filterTechnologies;
  const filterTechnologies = data?.vacancies?.data[0].attributes?.filter_technologies?.data[0].attributes.name;

  const renderCondition =
    !loading &&
    !error &&
    description &&
    currentVacancies &&
    specialties &&
    technologies;
  const errorCondition = error && <Custom404 />;

  return (
    <>
      {renderCondition && (
        <MainMenu
          backgroundColor={theme.colors.white}
          titlesColor={theme.colors.black}
          titles={titles}
        >
          <VacancyDescription description={description} filterTechnologies={filterTechnologies} />
          <CheckAlso
            specialties={specialties}
            technologies={technologies}
            currentVacancies={currentVacancies}
          />
          <FooterComponent />
        </MainMenu>
      )}

      {errorCondition}
    </>
  );
};

export default Vacancy;
