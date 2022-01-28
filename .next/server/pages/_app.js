"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gw": () => (/* binding */ CHANGE_CURRENT_GLOBE_POINT),
  "ZL": () => (/* binding */ GET_REVIEWS_SUCCESS),
  "tL": () => (/* binding */ changeCurrentGlobePoint),
  "Tn": () => (/* binding */ getReview)
});

// UNUSED EXPORTS: GET_REVIEWS, GET_REVIEWS_FAILURE

;// CONCATENATED MODULE: ./services/helpers.ts
const createApiAction = type => ({
  request: payload => ({
    type,
    payload
  }),
  success: payload => ({
    type: `${type}_SUCCESS`,
    payload
  }),
  failure: error => ({
    type: `${type}_FAILURE`,
    error
  })
});
;// CONCATENATED MODULE: ./components/Homepage/actions.ts

const GET_REVIEWS = "GET_REVIEWS";
const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS";
const GET_REVIEWS_FAILURE = "GET_REVIEWS_FAILURE";
const CHANGE_CURRENT_GLOBE_POINT = "CHANGE_CURRENT_GLOBE_POINT";
const changeCurrentGlobePoint = index => ({
  type: CHANGE_CURRENT_GLOBE_POINT,
  index
});
const getReview = createApiAction(GET_REVIEWS);

/***/ }),

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./styles/global.ts


const GlobalStyle = (0,external_styled_components_.createGlobalStyle)([":root{--fs-150:9.375rem;--fs-120:7.5rem;--fs-72:4.5rem;--fs-64:4rem;--fs-48:3rem;--fs-36:2.25rem;--fs-28:1.75rem;--fs-26:1.625rem;--fs-24:1.5rem;--fs-23:1.438rem;--fs-21:1.313rem;--fs-20:1.25rem;--fs-18:1.125rem;--fs-16:1rem;--fs-14:0.875rem;--fs-13:0.813rem;--fs-12:0.75rem;--fs-11:0.688rem;--fs-10:0.625rem;@media (max-width:", "){--fs-120:3.5rem;--fs-64:2.25rem;--fs-36:1.75rem;}}html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;max-width:100vw;}html,html a,h1,h2,h3,h4,h5,h6,a,p,li,dl,th,dt,input,textarea,span,div,button{font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;padding:0;margin:0;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
/* harmony default export */ const global = (GlobalStyle);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./services/withLoadableReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const isLoadingReducer = state => _objectSpread(_objectSpread({}, state), {}, {
  error: null,
  loading: true
});

const successReducer = state => _objectSpread(_objectSpread({}, state), {}, {
  error: null,
  loading: false
});

const errorReducer = (state, action) => _objectSpread(_objectSpread({}, state), {}, {
  error: action.payload,
  loading: false
});

const noopReducer = state => state;

const withLoadable = actionTypes => {
  const actionReducerMap = actionTypes.reduce((acum, item) => _objectSpread(_objectSpread({}, acum), {}, {
    [item]: isLoadingReducer,
    [`${item}_SUCCESS`]: successReducer,
    [`${item}_FAILURE`]: errorReducer
  }), {});
  return baseReducer => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;
    const newState = reducerFunction(state, action);
    return baseReducer(newState, action);
  };
};
;// CONCATENATED MODULE: ./components/CaseStudies/actions.ts
const TOGGLE_FILTER_BY = "TOGGLE_FILTER_BY";
const toggleFilterBy = value => ({
  type: TOGGLE_FILTER_BY,
  value
});
;// CONCATENATED MODULE: ./components/CaseStudies/reducer.ts
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  filterTags: ["all", "real estate", "e-learning", "e-commerce", "food industry", "health and wellness", "task management", "process management", "recruitment", "screening", "recruitment", "keyword research", "food industry", "environment"],
  filterByFlag: false,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_BY:
      {
        return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
          filterByFlag: action.value
        });
      }

    default:
      return state;
  }
};

const caseStudiesReducer = withLoadable([])(reducer);
// EXTERNAL MODULE: ./components/Homepage/actions.ts + 1 modules
var actions = __webpack_require__(1441);
;// CONCATENATED MODULE: ./components/Homepage/reducer.ts
function Homepage_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Homepage_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Homepage_reducer_ownKeys(Object(source), true).forEach(function (key) { Homepage_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Homepage_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Homepage_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducer_initialState = {
  reviews: [{
    name: "sven crone",
    position: "CEO at EnviaYa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiumneque, accusamus sint dolorum est voluptas deleniti et velit reiciendis nisi iste impedit labore molestiae adipisci sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
    photo: "",
    lat: 5,
    lng: 13
  }, {
    name: "someone",
    position: "CEO at Something",
    text: " deleniti et velit reiciendis nisi iste impedit labore molestiae adipisci sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
    photo: "",
    lat: 5,
    lng: 1
  }, {
    name: "someone 2",
    position: "CEO at Something2",
    text: " sed veniam error cumque, tempora sunt, temporibus itaque atque. Nulla optio ex excepturi, quos debitis magni dolores minima doloremque asperioresmodi repellat sed eius, mollitia magnam facere ipsa",
    photo: "",
    lat: 15,
    lng: 1
  }],
  points: [],
  loading: true,
  error: null
};

const reducer_reducer = (state = reducer_initialState, action) => {
  switch (action.type) {
    case actions/* GET_REVIEWS_SUCCESS */.ZL:
      {
        const points = state.reviews.map((review, index) => {
          const size = index === 0 ? 0.06 : 0.03;
          const radius = index === 0 ? 1 : 0.6;
          return {
            lat: review.lat,
            lng: review.lng,
            size,
            radius
          };
        });
        return Homepage_reducer_objectSpread(Homepage_reducer_objectSpread({}, state), {}, {
          points,
          loading: false
        });
      }

    case actions/* CHANGE_CURRENT_GLOBE_POINT */.Gw:
      {
        const points = state.points.map((point, index) => {
          if (index === action.index) {
            return Homepage_reducer_objectSpread(Homepage_reducer_objectSpread({}, point), {}, {
              size: 0.06,
              radius: 1
            });
          } else {
            return Homepage_reducer_objectSpread(Homepage_reducer_objectSpread({}, point), {}, {
              size: 0.03,
              radius: 0.6
            });
          }
        });
        return Homepage_reducer_objectSpread(Homepage_reducer_objectSpread({}, state), {}, {
          points
        });
      }

    default:
      return state;
  }
};

const homepageReducer = withLoadable([])(reducer_reducer);
;// CONCATENATED MODULE: ./services/reducers.ts



const reducers = {
  homepageReducer: homepageReducer,
  caseStudiesReducer: caseStudiesReducer
};
const rootReducer = (0,external_redux_namespaceObject.combineReducers)(reducers);
/* harmony default export */ const services_reducers = (rootReducer);
;// CONCATENATED MODULE: ./services/store.ts




const sagaMiddleware = external_redux_saga_default()();
const store = (0,external_redux_namespaceObject.createStore)(services_reducers, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware))));
/* harmony default export */ const services_store = (store);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./constants/index.ts + 5 modules
var constants = __webpack_require__(3058);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const client = new client_.ApolloClient({
  uri: constants/* GRAPH_QL_LINK */.c_,
  cache: new client_.InMemoryCache()
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(global, {}), /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
      theme: theme/* theme */.r,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: services_store,
        children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
          client: client,
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4036], () => (__webpack_exec__(4862)));
module.exports = __webpack_exports__;

})();