import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
  query GetHomepage {
    homePage {
      data {
        attributes {
          banner {
            title
            titleTexture {
              data {
                attributes {
                  url
                }
              }
            }
          }
          coopSteps {
            intro
            steps {
              id
              title
              description
              image {
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
            button {
              url
              label
            }
          }
          services {
            title
            description
            services {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
          }
          technologies {
            title
            tech_stacks {
              data {
                id
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
                  technologies {
                    data {
                      id
                      attributes {
                        name
                        url
                        iconForOtherPages {
                          data {
                            attributes {
                              url
                              width
                              height
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          embodiedIdeas {
            title
            buttonIntro
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
            button {
              url
              label
            }
          }
          aboutUs {
            title
            description
            video {
              data {
                attributes {
                  url
                }
              }
            }
            feedbacks {
              data {
                id
                attributes {
                  text
                  clientName
                  clientPosition
                  clientPhoto {
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
