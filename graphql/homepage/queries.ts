import { gql } from "@apollo/client";

export const GET_ABOUT_US = gql`
  query homePage {
    homePage(publicationState: LIVE) {
      data {
        attributes {
          aboutUs {
            title
          }
        }
      }
    }
  }
`;
