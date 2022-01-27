/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMembers
// ====================================================

export interface GetMembers_aboutPage_data_attributes_mainInfo_statistics {
  __typename: "ComponentAboutPageStatistics";
  id: string;
  label: string;
  number: number;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data {
  __typename: "UploadFileEntity";
  attributes: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data_attributes | null;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto {
  __typename: "UploadFileEntityResponse";
  data: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto_data | null;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes {
  __typename: "IncoraWorker";
  name: string;
  position: string;
  facebook: string | null;
  linkedin: string | null;
  profilePhoto: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes_profilePhoto;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data {
  __typename: "IncoraWorkerEntity";
  id: string | null;
  attributes: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data_attributes | null;
}

export interface GetMembers_aboutPage_data_attributes_mainInfo_incora_workers {
  __typename: "IncoraWorkerRelationResponseCollection";
  data: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers_data[];
}

export interface GetMembers_aboutPage_data_attributes_mainInfo {
  __typename: "ComponentAboutPageMainInfo";
  statistics: (GetMembers_aboutPage_data_attributes_mainInfo_statistics | null)[] | null;
  incora_workers: GetMembers_aboutPage_data_attributes_mainInfo_incora_workers | null;
}

export interface GetMembers_aboutPage_data_attributes {
  __typename: "AboutPage";
  mainInfo: GetMembers_aboutPage_data_attributes_mainInfo;
}

export interface GetMembers_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetMembers_aboutPage_data_attributes | null;
}

export interface GetMembers_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetMembers_aboutPage_data | null;
}

export interface GetMembers {
  aboutPage: GetMembers_aboutPage | null;
}
