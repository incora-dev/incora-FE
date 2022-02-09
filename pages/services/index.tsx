import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import { IMAGES_LINK, titles } from "../../constants";
import ServicesComponent from "../../components/Services";
import InformationComponent from "../../components/Services/Information";
import TechStack from "../../components/Services/TechStack";
import LetsTalk from "../../components/Services/LetsTalk";
import EstimateAppCircle from "../../components/Services/EstimateAppCircle";
import Link from "next/link";
import VerticalFullPageSlider from "../../components/common/VerticalFullPageSlider";
import { ScrollListTypes } from "../../components/common/VerticalFullPageSlider/types";
import {
  GetServicesPage,
  GetServicesPage_servicesPage_data_attributes_services_data,
} from "../../graphql/services/__generated__/GetServicesPage";
import Custom404 from "../404";
import { useIsMobile } from "../../services/hooks";
import FAQ from "../../components/ServicePage/FAQ";
import { GET_SERVICES_PAGE } from "../../graphql/services/queries";
import { initializeApollo } from "../../graphql/client";
import { NextPage } from "next";

interface IServices {
  data: GetServicesPage;
  networkStatus: number;
}

const Services: NextPage<IServices> = ({ data, networkStatus }) => {
  const entry = data?.servicesPage?.data?.attributes;
  const banner = entry?.banner;
  const slides = entry?.services?.data;
  const stackTitle = entry?.techStack.title;
  const stacks = entry?.techStack.tech_stacks?.data;
  const slidesTitles = slides?.map((st) => st.attributes?.name || "") || [];

  const colorWhite = theme.colors.white;
  const colorBlack = theme.colors.black;
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  const seoTitle = entry?.SEO?.ogTitle;
  const seoKeywords = entry?.SEO?.keywords;
  const seoDescription = entry?.SEO?.description;
  const seoImage =
    entry?.SEO?.ogImage?.data?.attributes?.url !== undefined &&
    `${IMAGES_LINK}${entry?.SEO?.ogImage?.data?.attributes?.url}`;

  const renderSlide = (
    slide: GetServicesPage_servicesPage_data_attributes_services_data
  ) => <InformationComponent slide={slide} />;

  const renderCondition = entry && banner && slides && stackTitle && stacks;

  if (networkStatus !== 7) return <Custom404 />;

  const faqContent = slides?.map((slide) => renderSlide(slide as any));

  return (
    <>
      {renderCondition && (
        <div id="Services">
          <Head>
            {seoTitle && <title>{seoTitle}</title>}
            <meta
              property="og:site_name"
              content="Incora - European software development company"
            />
            <meta property="og:type" content="article" />
            {seoTitle && <title>{seoTitle}</title>}
            {seoDescription && (
              <meta name="description" content={seoDescription} />
            )}
            {seoKeywords && <meta name="keywords" content={seoKeywords} />}
            {seoTitle && <meta property="og:title" content={seoTitle} />}
            {seoDescription && (
              <meta property="og:description" content={seoDescription} />
            )}
            {seoImage && <meta property="og:url" content={seoImage} />}
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
                  backgroundColor: "#18181A",
                  width: "100%",
                  padding: "0",
                }}
              >
                <div id="scroll-item">
                  <FAQ
                    textColor="#ffff"
                    title={"faq"}
                    titles={slidesTitles}
                    content={faqContent}
                    isFullPage={true}
                  />
                </div>
              </div>
            )}
            {!isMobile && !isTablet && !isSmallTablet && (
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
    </>
  );
};

export async function getServerSideProps() {
  const client = initializeApollo();

  const { data, networkStatus } = await client.query({
    query: GET_SERVICES_PAGE,
  });

  return {
    props: {
      data,
      networkStatus,
    },
  };
}

export default Services;
