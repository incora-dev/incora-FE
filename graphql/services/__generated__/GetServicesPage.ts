/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetServicesPage
// ====================================================

export interface GetServicesPage_servicesPage_data_attributes_banner {
  __typename: "ComponentCommonBunner";
  title: string;
  description: string;
}

export interface GetServicesPage_servicesPage_data_attributes_services_data_attributes {
  __typename: "Service";
  url: string | null;
  outcomes: string;
  name: string;
  estimatedTime: string;
  descriptionForServicesPage: string | null;
}

export interface GetServicesPage_servicesPage_data_attributes_services_data {
  __typename: "ServiceEntity";
  id: string | null;
  attributes: GetServicesPage_servicesPage_data_attributes_services_data_attributes | null;
}

export interface GetServicesPage_servicesPage_data_attributes_services {
  __typename: "ServiceRelationResponseCollection";
  data: GetServicesPage_servicesPage_data_attributes_services_data[];
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon_data {
  __typename: "UploadFileEntity";
  attributes: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon_data_attributes | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon {
  __typename: "UploadFileEntityResponse";
  data: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon_data | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  Technology_name: string | null;
  url: string | null;
  icon: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes_icon | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data_attributes | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies_data[];
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes {
  __typename: "TechStack";
  name: string | null;
  description: string;
  technologies: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes_technologies | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data {
  __typename: "TechStackEntity";
  id: string | null;
  attributes: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data_attributes | null;
}

export interface GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks {
  __typename: "TechStackRelationResponseCollection";
  data: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks_data[];
}

export interface GetServicesPage_servicesPage_data_attributes_techStack {
  __typename: "ComponentServicesTechStack";
  title: string;
  tech_stacks: GetServicesPage_servicesPage_data_attributes_techStack_tech_stacks | null;
}

export interface GetServicesPage_servicesPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetServicesPage_servicesPage_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetServicesPage_servicesPage_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetServicesPage_servicesPage_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetServicesPage_servicesPage_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetServicesPage_servicesPage_data_attributes_SEO_ogImage_data | null;
}

export interface GetServicesPage_servicesPage_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  id: string;
  keywords: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: GetServicesPage_servicesPage_data_attributes_SEO_ogImage | null;
}

export interface GetServicesPage_servicesPage_data_attributes {
  __typename: "ServicesPage";
  banner: GetServicesPage_servicesPage_data_attributes_banner;
  services: GetServicesPage_servicesPage_data_attributes_services | null;
  techStack: GetServicesPage_servicesPage_data_attributes_techStack;
  contactUs: GetServicesPage_servicesPage_data_attributes_contactUs | null;
  SEO: GetServicesPage_servicesPage_data_attributes_SEO | null;
}

export interface GetServicesPage_servicesPage_data {
  __typename: "ServicesPageEntity";
  attributes: GetServicesPage_servicesPage_data_attributes | null;
}

export interface GetServicesPage_servicesPage {
  __typename: "ServicesPageEntityResponse";
  data: GetServicesPage_servicesPage_data | null;
}

export interface GetServicesPage {
  servicesPage: GetServicesPage_servicesPage | null;
}
