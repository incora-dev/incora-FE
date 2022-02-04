"use strict";
exports.id = 6557;
exports.ids = [6557];
exports.modules = {

/***/ 6557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "in": () => (/* binding */ initializeApollo),
/* harmony export */   "Uk": () => (/* binding */ useApollo)
/* harmony export */ });
/* unused harmony exports APOLLO_STATE_PROP_NAME, addApolloState */
/* harmony import */ var _constants_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7449);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
const typeDefs = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  extend type Query {
    draftComplaints: [Complaint]
  }
`;
let apolloClient;

function createIsomorphLink() {
  const {
    HttpLink
  } = __webpack_require__(5986);

  return new HttpLink({
    uri: _constants_links__WEBPACK_IMPORTED_MODULE_4__/* .GRAPH_QL_LINK */ .c_,
    credentials: "same-origin"
  });
}

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    ssrMode: true,
    link: createIsomorphLink(),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),
    typeDefs
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter(d => sourceArray.every(s => !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEqual)(d, s)))]
    });

    _apolloClient.cache.restore(data);
  }

  if (true) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(state), [state]);
  return store;
}
function addApolloState(client, pageProps) {
  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

/***/ })

};
;