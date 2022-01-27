import { gql } from "@apollo/client";

export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    aboutPage(publicationState: LIVE) {
      data {
        attributes {
          mainInfo {
            text
            statistics {
              id
              label
              number
            }
            description
            incora_workers {
              data {
                id
                attributes {
                  name
                  position
                  facebook
                  linkedin
                  profilePhoto {
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
          contactUs {
            title
            subtitle
          }
          bannerImage {
            data {
              attributes {
                url
              }
            }
          }
          ourTraditions {
            text
            title
            gallery {
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
  }
`;
