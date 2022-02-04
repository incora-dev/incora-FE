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

          insights {
            intro
            articles {
              data {
                id
                attributes {
                  url
                  title
                  previewImage {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  industries {
                    data {
                      id
                      attributes {
                        url
                        name
                      }
                    }
                  }
                  tags {
                    data {
                      id
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          
          SEO {
            ogTitle
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            description
            ogDescription
          }
        }
      }
    }
  }
`;
