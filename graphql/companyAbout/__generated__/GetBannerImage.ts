/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBannerImage
// ====================================================

export interface GetBannerImage_aboutPage_data_attributes_bannerImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetBannerImage_aboutPage_data_attributes_bannerImage_data {
  __typename: "UploadFileEntity";
  attributes: GetBannerImage_aboutPage_data_attributes_bannerImage_data_attributes | null;
}

export interface GetBannerImage_aboutPage_data_attributes_bannerImage {
  __typename: "UploadFileEntityResponse";
  data: GetBannerImage_aboutPage_data_attributes_bannerImage_data | null;
}

export interface GetBannerImage_aboutPage_data_attributes {
  __typename: "AboutPage";
  bannerImage: GetBannerImage_aboutPage_data_attributes_bannerImage;
}

export interface GetBannerImage_aboutPage_data {
  __typename: "AboutPageEntity";
  attributes: GetBannerImage_aboutPage_data_attributes | null;
}

export interface GetBannerImage_aboutPage {
  __typename: "AboutPageEntityResponse";
  data: GetBannerImage_aboutPage_data | null;
}

export interface GetBannerImage {
  aboutPage: GetBannerImage_aboutPage | null;
}
