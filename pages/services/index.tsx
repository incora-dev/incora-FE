import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import FooterComponent from "../../components/Footer";
import { theme } from "../../styles/theme";
import { footer, titles } from "../../constants";
import ServicesComponent from "../../components/Services";
import InformationComponent from "../../components/Services/Information";
import TechStack from "../../components/Services/TechStack";
import LetsTalk from "../../components/Services/LetsTalk";
import EstimateAppCircle from "../../components/Services/EstimateAppCircle";
import Link from "next/link";
import VerticalFullPageSlider from "../../components/common/VerticalFullPageSlider";
import { ScrollListTypes } from "../../components/common/VerticalFullPageSlider/types";
import { IncModal } from "../../components/Modal";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICES_PAGE } from "../../graphql/services/queries";
import {
  GetServicesPage,
  GetServicesPage_servicesPage_data_attributes_services_data,
} from "../../graphql/services/__generated__/GetServicesPage";
import Custom404 from "../404";
import { useIsMobile } from "../../services/hooks";
import FAQ from "../../components/ServicePage/FAQ";

function Services() {
  const { data, loading, error } = useQuery<GetServicesPage>(GET_SERVICES_PAGE);
  const entry = data?.servicesPage?.data?.attributes;
  const banner = entry?.banner;
  const slides = entry?.services?.data;
  const stackTitle = entry?.techStack.title;
  const stacks = entry?.techStack.tech_stacks?.data;
  const slidesTitles = slides?.map((st) => st.attributes?.name || "") || [];

  const colorWhite = theme.colors.white;
  const colorBlack = theme.colors.black;
    const {isMobile, isTablet, isSmallTablet} = useIsMobile();
  

  const renderSlide = (
    slide: GetServicesPage_servicesPage_data_attributes_services_data
  ) => <InformationComponent slide={slide} />;

  const renderCondition = entry && banner && slides && stackTitle && stacks;
  if (loading) return null;
  if (error) return <Custom404 />;

  const faqContent = slides?.map((slide) => renderSlide(slide as any));

  return (
    <>
      {renderCondition && (
        <div id="Services">
          <Head>
            <title>Incora | Services</title>
            <meta name="services" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainMenu
            backgroundColor={colorWhite}
            titles={titles}
            titlesColor={colorBlack}
          >
            <ServicesComponent banner={banner} />
            {(isMobile || isTablet || isSmallTablet) && (
              <div
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  padding: "20px",
                }}
              >
                <div id="scroll-item">
                  <FAQ
                    textColor="#ffff"
                    titles={slidesTitles}
                    content={faqContent}
                  />
                </div>
              </div>
            )}
            {!isMobile && (
              <VerticalFullPageSlider
                slides={slides}
                renderSlide={renderSlide}
                stickyTopPosition={120}
                scrollListType={ScrollListTypes.STRING}
                maxWidth={1006}
                bgColor={theme.colors.backgroundBlack}
              />
            )}
            <TechStack stacks={stacks} stackTitle={stackTitle} />
            <LetsTalk
              flexDirection={"column"}
              title={"Let’s talk!"}
              text={
                <>
                  <p>Got no clue where to start?</p>
                  <p> Why don’t we discuss your idea?</p>
                </>
              }
            />
          </MainMenu>
          <Link href={"estimate"}>
            <a>
              <EstimateAppCircle />
            </a>
          </Link>
        </div>
      )}
      <FooterComponent />
    </>
  );
}

export default Services;
