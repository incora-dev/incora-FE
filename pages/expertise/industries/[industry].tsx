import Head from "next/head";
import React from "../../../public/SVG/technologies/react.svg";
import MainMenu from "../../../components/mainMenu/mainMenu";
import { theme } from "../../../styles/theme";
import { titles } from "../../../constants";
import HeaderService from "../../../components/ServicePage/HeaderService";
import { GridData } from "../../../components/BenefitsAndSolutions";
import SoftwareForDeliveryManagement from "../../../public/SVG/industriesIcons/SoftwareforDeliveryManagement.svg"
import PlugInForShipmentProcessing from "../../../public/SVG/industriesIcons/PlugInForShipmentProcessing.svg"
import PlatformForPriorNoticeCreation from "../../../public/SVG/industriesIcons/PlatformForPriorNoticeCreation.svg"
import CloudBasedWMSSoftware from "../../../public/SVG/industriesIcons/CloudBasedWMSSoftware.svg"
import CRMForFreightForwarding from "../../../public/SVG/industriesIcons/CRMForFreightForwarding.svg"
import TransportationManagementSystem from "../../../public/SVG/industriesIcons/TransportationManagementSystem.svg"

import OfferedSolutions from "../../../components/ExpertisePage/OfferedSolutions";
import { useEffect, useState } from "react";
import NewsComponent from "../../../components/News";
import ContactUsComponent from "../../../components/Homepage/ContactUs";
import { IContactUs } from "@interfaces";
import FooterComponent from "../../../components/Footer";
import { IFooter } from "../../../interfaces/footer.interface";
import Facebook from "../../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../../../public/SVG/socialNetwork/instagram.svg";

const colorWhite = theme.colors.white;
const colorBlack = theme.colors.black;
const hexagonColorGrey = theme.elements.hexagonBorderedGrey;

const benefitsAndSolutionsData: GridData[] = [
  {
    title: 'Software for Delivery Management',
    icon: SoftwareForDeliveryManagement,
    text: 'Tool that simplifies the process and makes carrier research more enjoyable.'
  },
  {
    title: 'Plug-in for Shipment Processing',
    icon: PlugInForShipmentProcessing,
    text: 'The parcel shipping service that other businesses can incorporate into their own systems or websites.'
  },
  {
    title: 'Platform for Prior Notice Creation',
    icon: PlatformForPriorNoticeCreation,
    text: 'Service for forming Prior Notices in order to meet all FDA standards for food shipments.'
  },
  {
    title: 'Cloud-Based WMS Software',
    icon: CloudBasedWMSSoftware,
    text: 'Warehouse Management System to manage the entire Supply Chain workflow cycle using Cloud solutions.\n'
  },
  {
    title: 'CRM for Freight Forwarding',
    icon: CRMForFreightForwarding,
    text: 'The solution to maximize contact with clients, facilitate leads\' engagement, and monitor internal operation.'
  },
  {
    title: 'Transportation Management System',
    icon: TransportationManagementSystem,
    text: 'TMS to oversee the shipment process in real-time, delivering critical information from manufacturers to distribution centers.'
  }
]

const news = {
  title: "Insights",
  articles: [
    {
      img: "./../../newsBlock/image4.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title:
          "5 Ideas to Build a Marketable Supply Chain Software",
      redirectTo: "5 Ideas to Build a Marketable Supply Chain Software",
    },
    {
      img: "./../../newsBlock/image5.jpg",
      tags: ["tagtitle"],
      categories: ["category", "category"],
      title: "TMS Workflow: Key Transportation Management System Functions",
      redirectTo: "TMS Workflow: Key Transportation Management System Functions",
    },
    {
      img: "/../../newsBlock/image6.jpg",
      tags: ["tagtitle", "tagtitle"],
      categories: ["category"],
      title: "Top 10 Uber Freight Alternatives and How To Compete With Them",
      redirectTo: "Top 10 Uber Freight Alternatives and How To Compete With Them",
    },
  ],
};

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
  copyright: "© 2015-2022 Incora LLC",
};

const text = 'Make a significant leap forward to innovative logistics solutions for enhancing the performance of the shipping industry with your tech ideas.'

const Industry = () => {
  const [menuColor, setMenuColor] = useState('none');
  const handleScroll = () => {
    window.scrollY >= 50
        ? setMenuColor(colorWhite)
        : setMenuColor('none')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
      <>
        <Head>
          <title>Incora | Industries</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
          <MainMenu
            backgroundColor={menuColor}
            titlesColor={colorBlack}
            titles={titles}
          >
            <HeaderService
              title={'Logistics'}
              titleSize={'64px'}
              text={text}
              textWidth={'560px'}
              hexagonColor={hexagonColorGrey}
              bgColor={colorWhite}
            />
            <OfferedSolutions data={benefitsAndSolutionsData}/>
            <NewsComponent title={'Insights'} articles={news.articles}/>
            <ContactUsComponent
                title={contactUs.title}
                text={contactUs.text}
                formLabels={contactUs.formLabels}
                addresses={contactUs.addresses}
                buttonLabel={contactUs.buttonLabel}
            />
          </MainMenu>
          <FooterComponent/>
        </>
      </>
  )
}

export default Industry;

