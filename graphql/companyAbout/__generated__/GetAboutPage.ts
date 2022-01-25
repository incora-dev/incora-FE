/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAboutPage
// ====================================================

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_statistics {
  __typename: "ComponentAboutPageStatistics";
  id: string;
  label: string;
  number: number;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data_attributes | null;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto {
  __typename: "UploadFileEntityResponse";
  data: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data | null;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes {
  __typename: "IncoraWorker";
  name: string;
  position: string;
  facebook: string | null;
  linkedin: string | null;
  profilePhoto: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data {
  __typename: "IncoraWorkerEntity";
  id: string | null;
  attributes: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes | null;
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers {
  __typename: "IncoraWorkerRelationResponseCollection";
  data: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers_data[];
}

export interface GetAboutPage_aboutPage_data_attributes_mainInfo {
  __typename: "ComponentAboutPageMainInfo";
  text: string;
  statistics: (GetAboutPage_aboutPage_data_attributes_mainInfo_statistics | null)[] | null;
  description: string;
  incora_workers: GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers | null;
}

export interface GetAboutPage_aboutPage_data_attributes_contactUs {
  __typename: "ComponentCommonContactUs";
  title: string;
  subtitle: string;
}

export interface GetAboutPage_aboutPage_data_attributes_bannerImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetAboutPage_aboutPage_data_attributes_bannerImage_data {
  __typename: "UploadFileEntity";
  attributes: GetAboutPage_aboutPage_data_attributes_bannerImage_data_attributes | null;
}

export interface GetAboutPage_aboutPage_data_attributes_bannerImage {
  __typename: "UploadFileEntityResponse";
  data: GetAboutPage_aboutPage_data_attributes_bannerImage_data | null;
}

export interface GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data {
  __typename: "UploadFileEntity";
  attributes: GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data_attributes | null;
}

export interface GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data[];
}

export interface GetAboutPage_aboutPage_data_attributes_ourTraditions {
  __typename: "ComponentAboutPageTraditions";
  text: string | null;
  title: string;
  gallery: GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery;
}

export interface GetAboutPage_aboutPage_data_attributes {
  __typename: "AboutPage";
  mainInfo: GetAboutPage_aboutPage_data_attributes_mainInfo;
  contactUs: GetAboutPage_aboutPage_data_attributes_contactUs;
  bannerImage: GetAboutPage_aboutPage_data_attributes_bannerImage;
  ourTraditions: GetAboutPage_aboutPage_data_attributes_ourTraditions;
}

export interface GetAboutPage_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetAboutPage_aboutPage_data_attributes | null;
}

export interface GetAboutPage_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetAboutPage_aboutPage_data | null;
}

export interface GetAboutPage {
  aboutPage: GetAboutPage_aboutPage | null;
}
