import { IContactUs } from "@interfaces";
import IconsBlock from "../../components/CompanyAbout/IconsBlock";
import Introduction from "../../components/CompanyAbout/Introduction";
import OurTraditions from "../../components/CompanyAbout/OurTraditions";
import FooterComponent from "../../components/Footer";
import ContactUsComponent from "../../components/Homepage/ContactUs";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import NewsComponent from "../../components/News";
import React from "../../public/SVG/technologies/react.svg";
import { GET_ABOUT_PAGE } from "../../graphql/companyAbout/queries";
import { GetAboutPage } from "../../graphql/companyAbout/__generated__/GetAboutPage";
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

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

interface ICompanyAbout {
  data: GetAboutPage;
  networkStatus: number;
}

const CompanyAbout: NextPage<ICompanyAbout> = ({ data, networkStatus }) => {
  const { addresses, buttonLabel } = contactUs;

  const entry = data?.aboutPage?.data?.attributes;
  const insightsTitle = entry?.insights.intro;
  const articles = entry?.insights.articles?.data;

  if (networkStatus !== 7) return <Custom404 />;

  return (
    <>
      {entry && insightsTitle && articles && (
        <MainMenu
          titlesColor={theme.colors.black}
          titles={titles}
          backgroundColor={theme.colors.white}
        >
          <Introduction
            mainInfo={entry.mainInfo}
            bannerImage={entry.bannerImage}
          />
          <OurTraditions ourTraditions={entry.ourTraditions} />
          <NewsComponent title={insightsTitle} articles={articles} />
          <IconsBlock />
          <ContactUsComponent
            title={entry.contactUs.title}
            text={entry.contactUs.subtitle}
            addresses={addresses}
            buttonLabel={buttonLabel}
          />
          <FooterComponent />
        </MainMenu>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_ABOUT_PAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default CompanyAbout;
