import { footer, titles } from "../../constants";
import MainMenu from "../../components/mainMenu/mainMenu";
import { theme } from "../../styles/theme";
import HeaderService from "../../components/ServicePage/HeaderService";
import { IService } from "@interfaces";
import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import FooterComponent from "../../components/Footer";
import LetsTalk from "../../components/Services/LetsTalk";
import Information from "../../components/ServicePage/Information";
import BestSuitedFor from "../../components/ServicePage/BestSuitedFor";
import WorkflowSetUp from "../../components/ServicePage/WorkflowSetUp";
import FAQ from "../../components/ServicePage/FAQ";
import { useEffect, useState } from "react";

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;

const faq = {
  title: 'faq',
  titles: ['How long does it take to undertake the Discovery phase?', 'Which team members should be involved in the Discovery phase?', 'How much will it cost?', 'What are the deliverables of this service?', 'Which tools and methods are used for the process?'],
}

const Service = ({ title, text, content, bestSuitedFor, workflowSetUp }: IService) => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  const [menuColor, setMenuColor] = useState(isMobile ? colorBlack : 'none');
  const handleScroll = () => {
    window.scrollY >= 20
      ? setMenuColor(colorBlack)
      : setMenuColor('none')
  }

  useEffect(() => {
    if (!isMobile && isMobile !== undefined) {
      console.log('setting ev listener');
      window.addEventListener('scroll', handleScroll)
  
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setMenuColor(colorBlack);
    }
  }, [isMobile])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MainMenu
          backgroundColor={menuColor}
          titlesColor={colorWhite}
          titles={titles}
        >
          <HeaderService
            title={title}
            titleSize={'48px'}
            text={text}
            textWidth={'657px'}
          />
          <Information content={content}/>
          <BestSuitedFor title={bestSuitedFor?.title} info={bestSuitedFor?.info}/>
          <WorkflowSetUp title={workflowSetUp?.title} content={workflowSetUp?.content}/>
          <FAQ title={faq?.title} titles={faq?.titles}/>
          <LetsTalk
            flexDirection={'column-reverse'}
            title={'Ready to Start?'}
            text={'Get everything you need for the project initiation.'}
          />
        </MainMenu>
        <FooterComponent
            policies={footer?.policies}
            offices={footer?.offices}
            followUs={footer?.followUs}
            pages={footer?.pages}
            copyright={footer?.copyright}
        />
      </>
    </>
  )
}

export default Service;
