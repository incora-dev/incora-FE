/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetService
// ====================================================

export interface GetService_services_data_attributes_icon_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetService_services_data_attributes_icon_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_icon_data_attributes | null;
}

export interface GetService_services_data_attributes_icon {
  __typename: "UploadFileEntityResponse";
  data: GetService_services_data_attributes_icon_data | null;
}

export interface GetService_services_data_attributes_whyDoYouNeed_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetService_services_data_attributes_whyDoYouNeed_items_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_whyDoYouNeed_items_image_data_attributes | null;
}

export interface GetService_services_data_attributes_whyDoYouNeed_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetService_services_data_attributes_whyDoYouNeed_items_image_data | null;
}

export interface GetService_services_data_attributes_whyDoYouNeed_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetService_services_data_attributes_whyDoYouNeed_items_image | null;
}

export interface GetService_services_data_attributes_whyDoYouNeed {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetService_services_data_attributes_whyDoYouNeed_items | null)[];
}

export interface GetService_services_data_attributes_bestSuitedFor_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
}

export interface GetService_services_data_attributes_bestSuitedFor {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetService_services_data_attributes_bestSuitedFor_items | null)[];
}

export interface GetService_services_data_attributes_workflow_items_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetService_services_data_attributes_workflow_items_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_workflow_items_image_data_attributes | null;
}

export interface GetService_services_data_attributes_workflow_items_image {
  __typename: "UploadFileEntityResponse";
  data: GetService_services_data_attributes_workflow_items_image_data | null;
}

export interface GetService_services_data_attributes_workflow_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetService_services_data_attributes_workflow_items_image | null;
}

export interface GetService_services_data_attributes_workflow {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetService_services_data_attributes_workflow_items | null)[];
}

export interface GetService_services_data_attributes_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetService_services_data_attributes_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetService_services_data_attributes_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetService_services_data_attributes_projects_data_attributes_technologies_data[];
}

export interface GetService_services_data_attributes_projects_data_attributes_featuredImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetService_services_data_attributes_projects_data_attributes_featuredImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_projects_data_attributes_featuredImage_data_attributes | null;
}

export interface GetService_services_data_attributes_projects_data_attributes_featuredImage {
  __typename: "UploadFileRelationResponseCollection";
  data: GetService_services_data_attributes_projects_data_attributes_featuredImage_data[];
}

export interface GetService_services_data_attributes_projects_data_attributes {
  __typename: "Project";
  url: string | null;
  name: string;
  description: string;
  technologies: GetService_services_data_attributes_projects_data_attributes_technologies | null;
  featuredImage: GetService_services_data_attributes_projects_data_attributes_featuredImage;
}

export interface GetService_services_data_attributes_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_projects_data_attributes | null;
}

export interface GetService_services_data_attributes_projects {
  __typename: "ProjectRelationResponseCollection";
  data: GetService_services_data_attributes_projects_data[];
}

export interface GetService_services_data_attributes_faq_items {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
}

export interface GetService_services_data_attributes_faq {
  __typename: "ComponentCommonList";
  intro: string;
  items: (GetService_services_data_attributes_faq_items | null)[];
}

export interface GetService_services_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetService_services_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetService_services_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetService_services_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetService_services_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetService_services_data_attributes_SEO_ogImage_data | null;
}

export interface GetService_services_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  id: string;
  keywords: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: GetService_services_data_attributes_SEO_ogImage | null;
}

export interface GetService_services_data_attributes {
  __typename: "Service";
  name: string;
  description: string;
  icon: GetService_services_data_attributes_icon;
  whyDoYouNeed: GetService_services_data_attributes_whyDoYouNeed;
  bestSuitedFor: GetService_services_data_attributes_bestSuitedFor;
  workflow: GetService_services_data_attributes_workflow;
  projects: GetService_services_data_attributes_projects | null;
  faq: GetService_services_data_attributes_faq;
  contactUs: GetService_services_data_attributes_contactUs;
  SEO: GetService_services_data_attributes_SEO | null;
}

export interface GetService_services_data {
  __typename: "ServiceEntity";
  attributes: GetService_services_data_attributes | null;
}

export interface GetService_services {
  __typename: "ServiceEntityResponseCollection";
  data: GetService_services_data[];
}

export interface GetService {
  services: GetService_services | null;
}

export interface GetServiceVariables {
  url?: string | null;
}
