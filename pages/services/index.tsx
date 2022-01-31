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
import { IncModal } from "../../components/Modal";
import TextElement from "../../components/common/VerticalFullPageSlider/TextElement";
import {useEffect, useState} from 'react';

function Services() {
  const colorWhite = theme.colors.white;
  const colorBlack = theme.colors.black;
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  const renderSlide = (slide: IInfoBlock) => <InformationComponent slide={slide} />;
  const renderScrollItem = () => {
      return <TextElement 
                labels={servicesPage.info} 
                currentSlide={currentSlide} 
                bgColor={"black"}
                onChange={(index) => {
                  setCurrentSlide(index);
                  setShowModal(true);
                }} />;
  };

  return (
    <>
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
          <ServicesComponent banner={banner}/>
          {isMobile && <div style={{ backgroundColor: "black", width: "100%", padding: '20px' }}>
            <div id="scroll-item">{renderScrollItem()}</div>
            <div>
              {servicesPage.info.map((slide, idx) => <IncModal 
                  show={showModal && currentSlide === idx} 
                  onHide={() => {
                    setShowModal(false);
                  }} 
                  title={slide.title || ''} 
                  content={renderSlide(slide as any)} />
              )}
            </div>
          </div>}
            {!isMobile &&(<VerticalFullPageSlider<IInfoBlock>
              //@ts-ignore
              slides={servicesPage.info}
              renderSlide={renderSlide}
              stickyTopPosition={120}
              scrollListType={ScrollListTypes.STRING}
              maxWidth={1006}
              bgColor="#181819"
            />)}
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
        </MainMenu>
          <Link href={'estimate'}>
            <a>
              <EstimateAppCircle/>
            </a>
          </Link>
      </div>
        <FooterComponent {...footer}/>
    </>
  )
}

export default Services;
