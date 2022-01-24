import { gql } from "@apollo/client";

export const GET_DESCRIPTION = gql`
  query GetDescription {
    aboutPage(publicationState: LIVE) {
      data {
        attributes {
          mainInfo {
            description
            text
          }
        }
      }
    }
  }
`;

export const GET_BANNER_IMAGE = gql`
  query GetBannerImage {
    aboutPage(publicationState: LIVE) {
      data {
        attributes {
          bannerImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_OUR_TRADITIONS = gql`
  query GetOurTraditions {
    aboutPage(publicationState: LIVE) {
      data {
        attributes {
          ourTraditions {
            title
            text
          }
        }
      }
    }
  }
`;
