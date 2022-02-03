import { GRAPH_QL_LINK } from "./../constants/links";
import { useMemo } from "react";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import merge from "deepmerge";
import { isEqual } from "lodash";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

const typeDefs = gql`
  extend type Query {
    draftComplaints: [Complaint]
  }
`;

let apolloClient: any;

function createIsomorphLink() {
  const { HttpLink } = require("@apollo/client/link/http");
  return new HttpLink({
    uri: GRAPH_QL_LINK,
    credentials: "same-origin",
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    typeDefs,
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
