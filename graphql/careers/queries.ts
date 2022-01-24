import { gql } from "@apollo/client";

export const GET_CAREERS_PAGE = gql`
  query GetCareersPage {
    careersPage(publicationState: LIVE) {
      data {
        attributes {
          banner {
            title
            description
            button {
              url
              label
            }
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          process {
            intro
            items {
              id
              title
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              description
            }
          }
          currentVacancies {
            intro
            filterText1
            filterText2
            header
            text
            buttonText
          }
        }
      }
    }
  }
`;
