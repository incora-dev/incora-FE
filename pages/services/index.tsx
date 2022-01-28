import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import FooterComponent from "../../components/Footer";
import { theme } from "../../styles/theme";
import { footer, titles, servicesPage } from "../../constants";
import ServicesComponent from "../../components/Services";
import InformationComponent from "../../components/Services/Information";
import TechStack from "../../components/Services/TechStack";
import LetsTalk from "../../components/Services/LetsTalk";
import EstimateAppCircle from "../../components/Services/EstimateAppCircle";
import Link from "next/link";
import VerticalFullPageSlider from "../../components/common/VerticalFullPageSlider";
import { ScrollListTypes } from "../../components/common/VerticalFullPageSlider/types";
import { IInfoBlock } from "@interfaces";

function Services() {
  const colorWhite = theme.colors.white;
  const colorBlack = theme.colors.black;

  const renderSlide = (slide: IInfoBlock) => <InformationComponent slide={slide} />;

  return (
      <div id='Services'>
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
          <ServicesComponent/>
          <VerticalFullPageSlider<IInfoBlock>
            //@ts-ignore
            slides={servicesPage.info}
            renderSlide={renderSlide}
            stickyTopPosition={120}
            scrollListType={ScrollListTypes.STRING}
            maxWidth={1006}
            bgColor="#181819"
          />
          <TechStack stacks={servicesPage.techStacks} stackTitle={servicesPage.techStackTitle}/>
          <LetsTalk
            flexDirection={'column'}
            title={'Let’s talk!'}
            text={
              <>
                <p>Got no clue where to start?</p>
                <p> Why don’t we discuss your idea?</p>
              </>
            }
          />
          <Link href={'estimate'}>
            <a>
              <EstimateAppCircle/>
            </a>
          </Link>
        </MainMenu>
        <FooterComponent {...footer}/>
      </div>
  )
}

export default Services;
