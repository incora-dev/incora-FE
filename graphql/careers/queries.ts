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
  query GetVacancy($url: String) {
    vacancies(filters: { url: { eq: $url } }) {
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
  query GetVacanciesList($specialtyId: ID, $technologyId: ID, $limit: Int) {
    vacancies(
      pagination: { limit: $limit }
      filters: {
        filter_specialities: { id: { eq: $specialtyId } }
        filter_technologies: { id: { eq: $technologyId } }
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
