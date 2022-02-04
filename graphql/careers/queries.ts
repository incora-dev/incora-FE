import { gql } from "@apollo/client";

export const GET_CAREERS_PAGE = gql`
  query GetCareersPage {
    careersPage(publicationState: LIVE) {
      data {
        attributes {
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

          ourBenefits {
            intro
            items {
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

    filterSpecialities {
      data {
        id
        attributes {
          name
        }
      }
    }
    filterTechnologies {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_VACANCY = gql`
  query GetVacancy($id: ID) {
    vacancy(id: $id) {
      data {
        attributes {
          description
          currentVacancies {
            intro
            filterText1
            filterText2
            header
            text
            buttonText
          }
          filter_technologies {
            data {
              attributes {
                name
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

    filterSpecialities {
      data {
        id
        attributes {
          name
        }
      }
    }
    filterTechnologies {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_VACANCIES_LIST = gql`
  query GetVacanciesList($specialty: String, $technology: String) {
    vacancies(
      filters: {
        filter_specialities: { name: { eq: $specialty } }
        filter_technologies: { name: { eq: $technology } }
      }
    ) {
      data {
        id
        attributes {
          url
          isHot
          filter_technologies {
            data {
              id
              attributes {
                name
              }
            }
          }
          filter_specialities {
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
`;
