import { gql } from "@apollo/client";

export const GET_TECHNOLOGY_PAGE = gql`
  query GetTechnologyPage($url: String) {
    technologies(filters: { url: { eq: $url } }) {
      data {
        attributes {
          name
          icon {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          description
          tech_stack {
            data {
              attributes {
                name
              }
            }
          }
          whyShouldYouUse {
            intro
            items {
              id
              title
              description
            }
          }
          popularWebsites {
            intro
            pictures {
              data {
                id
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          whyDevelopWithUs {
            items {
              id
              title
              description
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }

            connections {
              text
              id
              connectedItems
            }
          }
          projects {
            data {
              id
              attributes {
                technologies {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
                name
                description
                url
                featuredImage {
                  data {
                    attributes {
                      url
                    }
                  }
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

          contactUs {
            title
            subtitle
          }

          SEO {
            id
            keywords
            description
            ogTitle
            ogDescription
            ogImage {
              data {
                id
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
