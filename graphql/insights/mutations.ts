import { gql } from "@apollo/client";

export const UPDATE_COUNT = gql`
  mutation UpdateCount(
    $id: ID!
    $likes: Long
    $valuable: Long
    $exciting: Long
    $unsatisfied: Long
    $views: Long
  ) {
    updateArticle(
      id: $id
      data: {
        count: {
          likes: $likes
          valuable: $valuable
          exciting: $exciting
          unsatisfied: $unsatisfied
          views: $views
        }
      }
    ) {
      data {
        id
        attributes {
          count {
            id
            likes
            valuable
            exciting
            unsatisfied
            views
          }
        }
      }
    }
  }
`;

export const UPDATE_VIEWS = gql`
  mutation UpdateViews($id: ID!, $views: Long) {
    updateArticle(id: $id, data: { count: { views: $views } }) {
      data {
        id
        attributes {
          count {
            views
          }
        }
      }
    }
  }
`;
