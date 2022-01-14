import {IFooter} from "../interfaces/footer.interface";
import Facebook from "../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../public/SVG/socialNetwork/instagram.svg";
import {IContactUs} from "@interfaces";
import EstimatedTimeIcon from "../public/SVG/estimatedTimeIco.svg"
import Outcomes from "../public/SVG/OutcomesLogo.svg"
import Docker from "../public/SVG/technologies/docker.svg"
import Kubernetes from "../public/SVG/technologies/kubernetes.svg"
import AmazonECS from "../public/SVG/technologies/amazonECS.svg"
import Gitlab from "../public/SVG/technologies/Gitlab.svg"
import Jenkins from "../public/SVG/technologies/Jenkins.svg"
import CircleCI from "../public/SVG/technologies/CircleCI.svg"
import React from "../public/SVG/technologies/react.svg"
import Angular from "../public/SVG/technologies/angular.svg"

export const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

export const contactUs: IContactUs = {
  title: 'contact us',
  text: 'Let’s create progress together!',
  formLabels: ['name', 'phone number', 'email', 'what is you main goal?'],
  addresses: [
    { 'ukrainian office': '2 Horodotska Str.,\n' + 'Lviv 75001 Ukraine' },
    { 'usa office': '16192 Coastal Hwy, Lewes,\n' + 'DE 19958 USA' }
  ],
  buttonLabel: 'send',
}

export const footer: IFooter = {
  policies: ['privacy policy', 'Cookies Policy'],
  offices: contactUs.addresses,
  pages: ['Services', 'expertise', 'Case Studies', 'Company', 'Insights'],
  followUs: [
    { icon: Facebook, redirectTo: 'Facebook' },
    { icon: LinkedIn, redirectTo: 'LinkedIn' },
    { icon: Instagram, redirectTo: 'Instagram' },
  ],
  copyright: '© 2015-2021 Incora LLC'
};

export const servicesPage = {
  info: [
    {
      title: 'Research and Development',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'Web App Development',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'Mobile App Development',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'}, { text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'Team Extension',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'}, { text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'Dedicated Team',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'DevOps',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'Software QA & Testing',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }, { icon: Outcomes }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
        {
          icon: EstimatedTimeIcon
        }
      ],
    },
    {
      title: 'UI/UX design',
      text: 'R&D is the preparatory stage of development, which includes the market research with the competitors analysis, and discovering insights on your target audience. At this stage we also define what strategies, technologies and development nuances would be better for your idea. As a whole, we will create the most optimal roadmap of your project.',
      estimated_time: [{ title: 'estimated time'},{ text: 'Up to 2 weeks' }],
      estimated_time_icon: Outcomes,
      outcomes_icon: EstimatedTimeIcon,
      outcomes: [
        { title: 'outcomes'},
        {
          text: 'Time & Cost Estimation, Technical documentation, Architecture scheme, Competitors & Market Analysis, Project roadmap.'
        },
      ],
    },
  ],
  techStackTitle: 'Tech stack',
  techStacks: [
    {
      title: 'DevOps',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['Docker', 'Kubernetes', 'Amazon ECS', 'CircleCI', 'Jenkins', 'Gitlab'],
      stacksLogo: [Docker, Kubernetes, AmazonECS, Gitlab, Jenkins, CircleCI]
    },
    {
      title: 'Frontend',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['React', 'Angular2', 'Kubernetes'],
      stacksLogo: [React, Angular, Kubernetes]
    },
    {
      title: 'Backend',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['Docker', 'Kubernetes', 'Amazon ECS', 'CircleCI', 'Jenkins',],
      stacksLogo: [Docker, Kubernetes, AmazonECS, Gitlab, Jenkins]
    },
  ]
};
