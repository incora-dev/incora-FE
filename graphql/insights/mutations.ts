import { gql } from "@apollo/client";

export const UPDATE_IMPRESSIONS_COUNT = gql`
  mutation UpdateImpressionsCount(
    $id: ID!
    $likes: Long
    $valuable: Long
    $exciting: Long
    $unsatisfied: Long
  ) {
    updateArticle(
      id: $id
      data: {
        count: {
          likes: $likes
          valuable: $valuable
          exciting: $exciting
          unsatisfied: $unsatisfied
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
          }
        }
      }
    }
  }
`;
