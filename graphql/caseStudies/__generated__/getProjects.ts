/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_projects_data_attributes_technologies_data_attributes {
  __typename: "Technology";
  name: string;
  url: string | null;
}

export interface GetProjects_projects_data_attributes_technologies_data {
  __typename: "TechnologyEntity";
  id: string | null;
  attributes: GetProjects_projects_data_attributes_technologies_data_attributes | null;
}

export interface GetProjects_projects_data_attributes_technologies {
  __typename: "TechnologyRelationResponseCollection";
  data: GetProjects_projects_data_attributes_technologies_data[];
}

export interface GetProjects_projects_data_attributes_mainInfo_item_image_data_attributes {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface GetProjects_projects_data_attributes_mainInfo_item_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GetProjects_projects_data_attributes_mainInfo_item_image_data_attributes | null;
}

export interface GetProjects_projects_data_attributes_mainInfo_item_image {
  __typename: "UploadFileEntityResponse";
  data: GetProjects_projects_data_attributes_mainInfo_item_image_data | null;
}

export interface GetProjects_projects_data_attributes_mainInfo_item {
  __typename: "ComponentCommonItem";
  title: string;
  description: string | null;
  image: GetProjects_projects_data_attributes_mainInfo_item_image | null;
}

export interface GetProjects_projects_data_attributes_mainInfo {
  __typename: "ComponentProjectMainInfo";
  item: (GetProjects_projects_data_attributes_mainInfo_item | null)[];
}

export interface GetProjects_projects_data_attributes {
  __typename: "Project";
  technologies: GetProjects_projects_data_attributes_technologies | null;
  url: string | null;
  mainInfo: GetProjects_projects_data_attributes_mainInfo;
}

export interface GetProjects_projects_data {
  __typename: "ProjectEntity";
  id: string | null;
  attributes: GetProjects_projects_data_attributes | null;
}

export interface GetProjects_projects {
  __typename: "ProjectEntityResponseCollection";
  data: GetProjects_projects_data[];
}

export interface GetProjects {
  projects: GetProjects_projects | null;
}

export interface GetProjectsVariables {
  industry?: string | null;
}
