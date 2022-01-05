import Head from "next/head";
import MainMenu from "../components/mainMenu/mainMenu";
import Header from "../components/homePage/header/header";
import CooperateComponent from "../components/homePage/Cooperate/cooperate.component";
import ServicesComponent from "../components/homePage/services/services.component";
import { theme } from "../styles/theme";
import TechnologiesComponent from "../components/homePage/Technologies";
import EmbodiedIdeasComponent from "../components/homePage/EmbodiedIdeas";
import AboutUs from "../components/homePage/AboutUs";
import ContactUsComponent from "../components/homePage/ContactUs";
import {IContactUs} from "@interfaces";
import FooterComponent from "../components/Footer";
import { IFooter } from "../interfaces/footer.interface";

import Instagram from "../public/SVG/socialNetwork/instagram.svg"
import Facebook from "../public/SVG/socialNetwork/facebook.svg"
import LinkedIn from "../public/SVG/socialNetwork/linkedIn.svg"

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];
const bgColorBlack = theme.colors.black;
const bgColorWhite = theme.colors.white;
const colorYellow = theme.colors.yellow;
const sliders = [
  {
    title: "How to Cooperate?",
    mainTitle: "Outline your idea",
    text: "Define the project you are working on. Let us analyze all requirements and documentation in order to conduct the relevant estimate.",
    redirectTo: "outline-your-idea",
  },
  {
    title: "How to Cooperate?",
    mainTitle: "Get into specifics",
    text: "We will discuss expectations, best practices, and the development process. Then you’ll choose the best fitting candidates for your project.",
    redirectTo: "get-into-specifics",
  },
  {
    title: "How to Cooperate?",
    mainTitle: "Go Through the Development Stage",
    text: "Get quality service and expert recommendations throughout all the cooperation. Develop your idea into a solid product.",
    redirectTo: "go-through-the-development-stage",
  },
  {
    title: "How to Cooperate?",
    mainTitle: "Launch a Project",
    text: "When your product is in production, we’ll provide you with maintenance to test the software, and make adjustments.",
    redirectTo: "launch-a-project",
  },
];

const services = {
  title: "Services",
  text: "Working with dozens of custom projects we’ve come up to the set of services to cover up the whole workflow process your project might require. We are here to take all the challenges on ourselves and leave you nothing but relief.",
  labels: [
    "Software development ",
    "UI/UX Design",
    "R&D discovery phase",
    "Team Extension",
    "Dedicated Team",
    "Web/Mobile App Development",
    "DevOps",
    "Software QA & Testing",
  ],
};

const technologies = {
  title: "Technologies",
  technologies: [
    {
      technology:
      {
        label: 'frontend',
        text: ['React', 'Angular2']
      }
    },
    {
      technology:
        {
          label: 'backend',
          text: ['Node.js', 'Python', ' Django', 'Flask']
        }
    },
    {
      technology:
        {
          label: 'database',
          text: ['PostgreSQL', 'MySQL', ' MongoDB', 'Apollo', 'Redis']
        }
    },
    {
      technology:
        {
          label: 'mobile apps',
          text: ['React Native', 'Ionic']
        }
    },
    {
      technology:
        {
          label: 'devOps tools',
          text: ['Docker', 'Kubernetes', 'Amazon  ECS']
        }
    },
    {
      technology:
        {
          label: 'cloud services',
          text: ['Amazon Web Services', 'Google Cloud Platform', 'Microsoft Azure', 'DigitalOcean']
        }
    },
  ],
};

const EmbodiedIdeas = {
  title: 'Embodied Ideas',
  bgColor: bgColorWhite,
  projects: [
    {
      title: 'DeepDao',
      text: 'Bookety is an online booking system for travelers, which provides access to thousands of tours in more than 2,000 destinations worldwide.',
      technologies: ['Node.JS', 'Express', 'PostgreSQL', 'Web3', 'React', 'Saga', 'Redux', 'MaterialUI', 'AWS'],
      img: './project1.jpg'
    },
    {
      title: 'Burgerizzer',
      text: 'Bookety is an online booking system for travelers, which provides access to thousands of tours in more than 2,000 destinations worldwide.',
      technologies: ['JavaScript', 'ReactJS', 'React Native', 'NodeJS', 'Google API', 'Foodics API', 'Tookan API', 'Unifonic API', 'Payfort API', 'AWS', 'PostgreSQL'],
      img: './project2.jpg'
    },
    {
      title: 'HealthApp',
      text: 'It is an application for making quick and convenient doctor appointments and conducting online consultations.',
      technologies: ['Node.JS', 'Express', 'PostgreSQL', 'Web3', 'React', 'Saga', 'Redux', 'MaterialUI', 'AWS'],
      img: './project3.jpg'
    },
  ]
}

const aboutUs = {
  title: 'about us',
  text: 'As a full-service software company, we create a perfect synergy of processes to define, design, and develop cutting-edge solutions from initial ideas. Possessing experience in deploying various challenging features and projects, our Incora team is going to make your idea happen.'
}

const contactUs: IContactUs = {
  title: 'contact us',
  text: 'Let’s create progress together!',
  formLabels: ['name', 'phone number', 'email', 'what is you main goal?'],
  addresses: [
    { 'ukrainian office': '2 Horodotska Str.,\n' + 'Lviv 75001 Ukraine' },
    { 'usa office': '16192 Coastal Hwy, Lewes,\n' + 'DE 19958 USA' }
  ],
  buttonLabel: 'send',
}

const footer: IFooter = {
  policies: ['privacy policy', 'Cookies Policy'],
  offices: contactUs.addresses,
  pages: ['services', 'expertise', 'Case Studies', 'Company', 'Insights'],
  followUs: [
    { icon: Facebook, redirectTo: 'Facebook' },
    { icon: LinkedIn, redirectTo: 'LinkedIn' },
    { icon: Instagram, redirectTo: 'Instagram' },
  ],
  copyright: '© 2015-2021 Incora LLC'
}

const plusesColor = "#FEC602";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu titles={titles} backgroundColor={bgColorBlack}>
        <Header />
        <CooperateComponent sliders={sliders} plusesColor={plusesColor} />
        <ServicesComponent
          title={services.title}
          text={services.text}
          labels={services.labels}
        />
        <TechnologiesComponent
          bgColor={bgColorBlack}
          title={technologies.title}
          labels={technologies.technologies}
        />
        <EmbodiedIdeasComponent
          title={EmbodiedIdeas.title}
          bgColor={EmbodiedIdeas.bgColor}
          projects={EmbodiedIdeas.projects}
          elementsColor={colorYellow}
        />
        <AboutUs
          backgroundColor={bgColorBlack}
          title={aboutUs.title}
          text={aboutUs.text}
        />
        <ContactUsComponent
          title={contactUs.title}
          text={contactUs.text}
          formLabels={contactUs.formLabels}
          addresses={contactUs.addresses}
          buttonLabel={contactUs.buttonLabel}
        />
      </MainMenu>
      <FooterComponent
        policies={footer.policies}
        offices={footer.offices}
        followUs={footer.followUs}
        pages={footer.pages}
        copyright={footer.copyright}
      />
    </div>
  );
}

export default Home;
