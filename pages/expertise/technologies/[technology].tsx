import MainMenu from "../../../components/mainMenu/mainMenu";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import HeaderService from "../../../components/ServicePage/HeaderService";
import WhyShouldUseTechnology from "../../../components/ExpertisePage/WhyShouldUseTechnology";
import PopularWebsites from "../../../components/ExpertisePage/PopularWebsites";
import News from "../../../components/News";
import ContactUsComponent from "../../../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../../components/Footer";
import { IFooter } from "../../../interfaces/footer.interface";

import Instagram1 from "../../../public/SVG/socialNetwork/instagram.svg";
import Facebook1 from "../../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn1 from "../../../public/SVG/socialNetwork/linkedIn.svg";
import WhyDevelopWithUs from "../../../components/News/WhyDevelopWithUs";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_TECHNOLOGY_PAGE } from "../../../graphql/technologies/queries";
import { GetTechnologyPage } from "../../../graphql/technologies/__generated__/GetTechnologyPage";
import Custom404 from "../../404";
import EmbodiedIdeasComponent from "../../../components/Homepage/EmbodiedIdeas";
import { useIsMobile } from "../../../services/hooks";

const MainMenuTitles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

const contactUs: IContactUs = {
  title: "get in touch!",
  text: "Let’s discover which technologies will make your idea great.",
  formLabels: ["name", "phone number", "email", "what is you main goal?"],
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "send",
};

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;
const colorBackgroundBlack = theme.colors.backgroundBlack;

const Technology = () => {
  const router = useRouter();
  const { technology } = router.query;

  const { data, loading, error } = useQuery<GetTechnologyPage>(
    GET_TECHNOLOGY_PAGE,
    { variables: { url: technology } }
  );
  const entry = data?.technologies?.data[0].attributes;
  const headerTitle = entry?.name;
  const headerDescription = entry?.description;
  const headerLabel = entry?.tech_stack?.data?.attributes?.name;
  const headerIcon = entry?.icon?.data?.attributes;
  const whyShouldYouUseTitle = entry?.whyShouldYouUse?.intro;
  const whyShouldYouUseItems = entry?.whyShouldYouUse?.items;
  const popularWebSitesTitle = entry?.popularWebsites?.intro;
  const popularWebSitesPictures = entry?.popularWebsites?.pictures.data;
  const whyDevelopWithUs = entry?.whyDevelopWithUs;
  const projects = entry?.projects?.data;
  const insightsIntro = entry?.insights?.intro;
  const insightsArticles = entry?.insights?.articles?.data;
  const contactUsTitle = entry?.contactUs?.title;
  const contactUsSubtitle = entry?.contactUs?.subtitle;

  const [menuColor, setMenuColor] = useState("none");
  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorBlack) : setMenuColor("none");
  };
    const {isMobile, isTablet, isSmallTablet} = useIsMobile();
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderCondition =
    headerTitle &&
    headerDescription &&
    headerLabel &&
    headerIcon &&
    whyShouldYouUseTitle &&
    whyShouldYouUseItems &&
    popularWebSitesTitle &&
    popularWebSitesPictures &&
    whyDevelopWithUs &&
    projects &&
    insightsIntro &&
    insightsArticles &&
    contactUsTitle &&
    contactUsSubtitle;

  if (loading) return null;
  if (error) return <Custom404 />;

  return (
    <>
      {renderCondition && (
        <>
          <Head>
            <title>{""}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainMenu
            titlesColor={colorWhite}
            backgroundColor={isMobile || isTablet || isSmallTablet ? colorBlack : menuColor}
            titles={MainMenuTitles}
          >
            <HeaderService
              title={headerTitle}
              icon={headerIcon}
              titleSize={isMobile || isTablet || isSmallTablet ? '50px' :'64px'}
              text={headerDescription}
              textWidth={"435px"}
              label={headerLabel}
              bgColor={colorBlack}
            />
            <WhyShouldUseTechnology
              title={whyShouldYouUseTitle}
              bgColor={colorBackgroundBlack}
              titleColor={colorWhite}
              items={whyShouldYouUseItems}
            />
            <PopularWebsites
              title={popularWebSitesTitle}
              pictures={popularWebSitesPictures}
            />
            <WhyDevelopWithUs data={whyDevelopWithUs} />
            <EmbodiedIdeasComponent
              bgColor={theme.colors.yellow}
              elementsColor={theme.colors.black}
              projects={projects}
              disablePadding
              disableSeeMore
            />
            <News title={insightsIntro} articles={insightsArticles} />
            <ContactUsComponent
              title={contactUsTitle}
              text={contactUsSubtitle}
              formLabels={contactUs.formLabels}
              addresses={contactUs.addresses}
              buttonLabel={contactUs.buttonLabel}
            />
          </MainMenu>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Technology;
