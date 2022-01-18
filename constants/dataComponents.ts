import {IFooter} from "../interfaces/footer.interface";
import Facebook from "../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../public/SVG/socialNetwork/instagram.svg";
import { IContactUs, IWorkflowSetUp } from "@interfaces";
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
      id: 'Info1',
      title: 'Research & Development',
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
      id: 'Info2',
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
      id: 'Info3',
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
      id: 'Info4',
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
      id: 'Info5',
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
      id: 'Info6',
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
      id: 'Info7',
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
      id: 'Info8',
      title: 'UI/UX Design',
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
      id: 'tech1',
      title: 'DevOps',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['Docker', 'Kubernetes', 'Amazon ECS', 'CircleCI', 'Jenkins', 'Gitlab'],
      stacksLogo: [Docker, Kubernetes, AmazonECS, Gitlab, Jenkins, CircleCI],
    },
    {
      id: 'tech2',
      title: 'Frontend',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['React', 'Angular2', 'Kubernetes'],
      stacksLogo: [React, Angular, Kubernetes]
    },
    {
      id: 'tech3',
      title: 'Backend',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      stacks: ['Docker', 'Kubernetes', 'Amazon ECS', 'CircleCI', 'Jenkins',],
      stacksLogo: [Docker, Kubernetes, AmazonECS, Gitlab, Jenkins]
    },
  ]
};

export interface IServicesData {
  'Research & Development': IServicesDataInfo;
  'Web App Development': IServicesDataInfo;
  'Mobile App Development': IServicesDataInfo;
  'Team Extension': IServicesDataInfo;
  'Dedicated Team': IServicesDataInfo;
  'DevOps': IServicesDataInfo;
  'Software QA & Testing': IServicesDataInfo;
  'UI/UX Design': IServicesDataInfo;
}

export interface IServicesDataInfo {
  text: string;
  title: string;
  content: IServicesDataInfoContent[];
  bestSuitedFor: IServicesDataInfoBestSuitedFor;
  workflowSetUp: IWorkflowSetUp;
}

export interface IServicesDataInfoContent {
  title: string;
  text: string;
}

export interface IServicesDataInfoBestSuitedFor {
  title: string;
  info: string[];
}

export const servicesData: IServicesData = {
  'Research & Development': {
    text: 'We are fully aware that the development is not just about code quality. The preparatory phase is addressing the result even more so. As our Incora team strives to provide you with the high performance of your bold ideas, we are going to deal with pre-development in greater detail.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus. Planned context reduces costly and unnecessary mistakes. Accurate estimation conserves expenses.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'Web App Development': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'Mobile App Development': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'Team Extension': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'Dedicated Team': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'DevOps': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'Software QA & Testing': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
  'UI/UX Design': {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    title: 'Why do you need a Discovery phase?',
    content: [
      {
        title: 'Clear vision ensures targeted focus.',
        text: 'Defining your focus in the market is going to influence all subsequent decisions throughout the product life cycle. To succeed, you need to make sure your product idea is going to address your target’s needs, so that you offer them a reliable solution. This would be a core of your vision, so let us discover the market beforehand.'
      },
      {
        title: 'Planned context reduces costly and unnecessary mistakes.',
        text: 'In the discovery phase, we identify the ins and outs of your project’s workflow and functionality as well: which tech stack to choose, features to add, architecture to build. These choices are the ones that will become a cost-effective solution, in order to save you from irrelevant components and pitfalls.'
      },
      {
        title: 'Accurate estimation conserves expenses.',
        text: 'Since during the discovery phase you get an estimation outlook, with all the process and functionality parts included, this will enhance your budget planning. The direct relation here highlights the ultimate goal of the preparation - to anticipate the time and cost for the full-cycle product development.'
      },
    ],
    bestSuitedFor: {
      title: 'best suited for…',
      info: ['starting bold ideas', 'projects with several stakeholders', 'Minimum Viable Product (MVP)', 'long-term planning', 'cost-effective solutions']
    },
    workflowSetUp: {
      title: 'workflow Set-Up',
      content: [
        {
          title: 'Idea Examination',
          text: 'First, we set up a call with all stakeholders in order to define goals, objectives and preferable methods. At this stage we need to clearly identify the vision of the future software in order to deliver efficient results by aligning expectations and deadlines.'
        },
        {
          title: 'Business Analysis',
          text: 'Together with you, we create ICP (Ideal Customer Persona) by specifying the needs and image of the target audience. Then, we conduct market research, exploring competitors\' offers in parallel. '
        },
        {
          title: 'Project estimation',
          text: 'Relying on previous examinations, we generate the features necessary to target. By combining them altogether we determine the scope of work. The next thing to do is to estimate the development time needed for each sprint on the backend and frontend. And with this data we calculate the time and cost of the idea.'
        },
        {
          title: 'Technical documentation',
          text: 'Lastly, all the gathered information goes to the technical documentation, including architecture schemes, DevOps services overview, Agile methodology and technologies’ list. This documentation then serves as a basis for the development start.'
        },
      ]
    }
  },
}
