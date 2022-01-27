/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectPage
// ====================================================

export interface GetProjectPage_projects_data_attributes_location_data_attributes {
  __typename: "Location";
  city: string;
  country: string;
}

export interface GetProjectPage_projects_data_attributes_location_data {
  __typename: "LocationEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_location_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_location {
  __typename: "LocationEntityResponse";
  data: GetProjectPage_projects_data_attributes_location_data | null;
}

export interface GetProjectPage_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetProjectPage_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetProjectPage_projects_data_attributes_technologies_data[];
}

export interface GetProjectPage_projects_data_attributes_services_data_attributes {
  __typename: "Service";
  url: string | null;
  name: string;
}

export interface GetProjectPage_projects_data_attributes_services_data {
  __typename: "ServiceEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_services_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_services {
  __typename: "ServiceRelationResponseCollection";
  data: GetProjectPage_projects_data_attributes_services_data[];
}

export interface GetProjectPage_projects_data_attributes_industry_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetProjectPage_projects_data_attributes_industry_data {
  __typename: "IndustryEntity";
  attributes: GetProjectPage_projects_data_attributes_industry_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_industry {
  __typename: "IndustryEntityResponse";
  data: GetProjectPage_projects_data_attributes_industry_data | null;
}

export interface GetProjectPage_projects_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
}

export interface GetProjectPage_projects_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetProjectPage_projects_data_attributes_mainInfo_item | null)[];
}

export interface GetProjectPage_projects_data_attributes_projectOverview_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetProjectPage_projects_data_attributes_projectOverview_item_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_projectOverview_item_image_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_projectOverview_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_projects_data_attributes_projectOverview_item_image_data | null;
}

export interface GetProjectPage_projects_data_attributes_projectOverview_item {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetProjectPage_projects_data_attributes_projectOverview_item_image | null;
}

export interface GetProjectPage_projects_data_attributes_projectOverview {
  __typename: "ComponentProjectProjectOverview";
  title: string;
  item: (GetProjectPage_projects_data_attributes_projectOverview_item | null)[];
}

export interface GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto_data | null;
}

export interface GetProjectPage_projects_data_attributes_feedback_data_attributes {
  __typename: "Feedback";
  text: string;
  clientName: string;
  clientPosition: string;
  clientPhoto: GetProjectPage_projects_data_attributes_feedback_data_attributes_clientPhoto;
}

export interface GetProjectPage_projects_data_attributes_feedback_data {
  __typename: "FeedbackEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_feedback_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_feedback {
  __typename: "FeedbackEntityResponse";
  data: GetProjectPage_projects_data_attributes_feedback_data | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data {
  __typename: "UploadFileEntity";
  attributes: GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  image: GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item | null)[];
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes {
  __typename: "Project";
  url: string | null;
  name: string;
  mainInfo: GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes_mainInfo;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_nextProjectButton_project_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton_project {
  __typename: "ProjectEntityResponse";
  data: GetProjectPage_projects_data_attributes_nextProjectButton_project_data | null;
}

export interface GetProjectPage_projects_data_attributes_nextProjectButton {
  __typename: "ComponentArticleNextProjectButton";
  intro: string;
  project: GetProjectPage_projects_data_attributes_nextProjectButton_project | null;
}

export interface GetProjectPage_projects_data_attributes_gallery_pictures_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_projects_data_attributes_gallery_pictures_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetProjectPage_projects_data_attributes_gallery_pictures_data_attributes | null;
}

export interface GetProjectPage_projects_data_attributes_gallery_pictures {
  __typename: "UploadFileRelationResponseCollection";
  data: GetProjectPage_projects_data_attributes_gallery_pictures_data[];
}

export interface GetProjectPage_projects_data_attributes_gallery {
  __typename: "ComponentCommonGallery";
  intro: string;
  pictures: GetProjectPage_projects_data_attributes_gallery_pictures;
}

export interface GetProjectPage_projects_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetProjectPage_projects_data_attributes {
  __typename: "Project";
  name: string;
  description: string;
  location: GetProjectPage_projects_data_attributes_location | null;
  technologies: GetProjectPage_projects_data_attributes_technologies | null;
  services: GetProjectPage_projects_data_attributes_services | null;
  industry: GetProjectPage_projects_data_attributes_industry | null;
  mainInfo: GetProjectPage_projects_data_attributes_mainInfo;
  projectOverview: GetProjectPage_projects_data_attributes_projectOverview;
  feedback: GetProjectPage_projects_data_attributes_feedback | null;
  nextProjectButton: GetProjectPage_projects_data_attributes_nextProjectButton;
  gallery: (GetProjectPage_projects_data_attributes_gallery | null)[];
  contactUs: GetProjectPage_projects_data_attributes_contactUs;
}

export interface GetProjectPage_projects_data {
  __typename: "ProjectEntity";
  attributes: GetProjectPage_projects_data_attributes | null;
}

export interface GetProjectPage_projects {
  __typename: "ProjectEntityResponseCollection";
  data: GetProjectPage_projects_data[];
}

export interface GetProjectPage {
  projects: GetProjectPage_projects | null;
}

export interface GetProjectPageVariables {
  url?: string | null;
}
