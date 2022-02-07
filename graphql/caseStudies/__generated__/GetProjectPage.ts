/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjectPage
// ====================================================

export interface GetProjectPage_project_data_attributes_location_data_attributes {
  __typename: "Location";
  city: string;
  country: string;
}

export interface GetProjectPage_project_data_attributes_location_data {
  __typename: "LocationEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_location_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_location {
  __typename: "LocationEntityResponse";
  data: GetProjectPage_project_data_attributes_location_data | null;
}

export interface GetProjectPage_project_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  Technology_name: string | null;
  url: string | null;
}

export interface GetProjectPage_project_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_technologies_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetProjectPage_project_data_attributes_technologies_data[];
}

export interface GetProjectPage_project_data_attributes_services_data_attributes {
  __typename: "Service";
  url: string | null;
  name: string;
}

export interface GetProjectPage_project_data_attributes_services_data {
  __typename: "ServiceEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_services_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_services {
  __typename: "ServiceRelationResponseCollection";
  data: GetProjectPage_project_data_attributes_services_data[];
}

export interface GetProjectPage_project_data_attributes_industry_data_attributes {
  __typename: "Industry";
  url: string | null;
  name: string;
}

export interface GetProjectPage_project_data_attributes_industry_data {
  __typename: "IndustryEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_industry_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_industry {
  __typename: "IndustryEntityResponse";
  data: GetProjectPage_project_data_attributes_industry_data | null;
}

export interface GetProjectPage_project_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
}

export interface GetProjectPage_project_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetProjectPage_project_data_attributes_mainInfo_item | null)[];
}

export interface GetProjectPage_project_data_attributes_projectOverview_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetProjectPage_project_data_attributes_projectOverview_item_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_projectOverview_item_image_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_projectOverview_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_project_data_attributes_projectOverview_item_image_data | null;
}

export interface GetProjectPage_project_data_attributes_projectOverview_item {
  __typename: "ComponentCommonItem";
  id: string;
  title: string;
  description: string | null;
  image: GetProjectPage_project_data_attributes_projectOverview_item_image | null;
}

export interface GetProjectPage_project_data_attributes_projectOverview {
  __typename: "ComponentProjectProjectOverview";
  title: string;
  item: (GetProjectPage_project_data_attributes_projectOverview_item | null)[];
}

export interface GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto_data | null;
}

export interface GetProjectPage_project_data_attributes_feedback_data_attributes {
  __typename: "Feedback";
  text: string;
  clientName: string;
  clientPosition: string;
  clientPhoto: GetProjectPage_project_data_attributes_feedback_data_attributes_clientPhoto;
}

export interface GetProjectPage_project_data_attributes_feedback_data {
  __typename: "FeedbackEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_feedback_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_feedback {
  __typename: "FeedbackEntityResponse";
  data: GetProjectPage_project_data_attributes_feedback_data | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data {
  __typename: "UploadFileEntity";
  attributes: GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image_data | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  image: GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item_image | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo_item | null)[];
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes {
  __typename: "Project";
  url: string | null;
  name: string;
  mainInfo: GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes_mainInfo;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_nextProjectButton_project_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton_project {
  __typename: "ProjectEntityResponse";
  data: GetProjectPage_project_data_attributes_nextProjectButton_project_data | null;
}

export interface GetProjectPage_project_data_attributes_nextProjectButton {
  __typename: "ComponentArticleNextProjectButton";
  intro: string;
  project: GetProjectPage_project_data_attributes_nextProjectButton_project | null;
}

export interface GetProjectPage_project_data_attributes_gallery_pictures_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_project_data_attributes_gallery_pictures_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetProjectPage_project_data_attributes_gallery_pictures_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_gallery_pictures {
  __typename: "UploadFileRelationResponseCollection";
  data: GetProjectPage_project_data_attributes_gallery_pictures_data[];
}

export interface GetProjectPage_project_data_attributes_gallery {
  __typename: "ComponentCommonGallery";
  intro: string;
  pictures: GetProjectPage_project_data_attributes_gallery_pictures;
}

export interface GetProjectPage_project_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetProjectPage_project_data_attributes_SEO_ogImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetProjectPage_project_data_attributes_SEO_ogImage_data {
  __typename: "UploadFileEntity";
  attributes: GetProjectPage_project_data_attributes_SEO_ogImage_data_attributes | null;
}

export interface GetProjectPage_project_data_attributes_SEO_ogImage {
  __typename: "UploadFileEntityResponse";
  data: GetProjectPage_project_data_attributes_SEO_ogImage_data | null;
}

export interface GetProjectPage_project_data_attributes_SEO {
  __typename: "ComponentCommonSeo";
  ogTitle: string | null;
  ogImage: GetProjectPage_project_data_attributes_SEO_ogImage | null;
  keywords: string | null;
  description: string | null;
  ogDescription: string | null;
}

export interface GetProjectPage_project_data_attributes {
  __typename: "Project";
  name: string;
  description: string;
  IsUnderNDA: boolean | null;
  location: GetProjectPage_project_data_attributes_location | null;
  technologies: GetProjectPage_project_data_attributes_technologies | null;
  services: GetProjectPage_project_data_attributes_services | null;
  industry: GetProjectPage_project_data_attributes_industry | null;
  mainInfo: GetProjectPage_project_data_attributes_mainInfo;
  projectOverview: GetProjectPage_project_data_attributes_projectOverview;
  feedback: GetProjectPage_project_data_attributes_feedback | null;
  nextProjectButton: GetProjectPage_project_data_attributes_nextProjectButton;
  gallery: (GetProjectPage_project_data_attributes_gallery | null)[];
  contactUs: GetProjectPage_project_data_attributes_contactUs;
  SEO: GetProjectPage_project_data_attributes_SEO | null;
}

export interface GetProjectPage_project_data {
  __typename: "ProjectEntity";
  attributes: GetProjectPage_project_data_attributes | null;
}

export interface GetProjectPage_project {
  __typename: "ProjectEntityResponse";
  data: GetProjectPage_project_data | null;
}

export interface GetProjectPage {
  project: GetProjectPage_project | null;
}

export interface GetProjectPageVariables {
  id?: string | null;
}
