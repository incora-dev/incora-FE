import { gql } from "@apollo/client";

export const GET_TOTAL_PAGE_COUNT = gql`
  query GetTotalPageCount {
    articles {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
