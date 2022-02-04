"use strict";
exports.id = 8040;
exports.ids = [8040];
exports.modules = {

/***/ 7449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ clutchLink),
/* harmony export */   "rS": () => (/* binding */ IMAGES_LINK),
/* harmony export */   "c_": () => (/* binding */ GRAPH_QL_LINK),
/* harmony export */   "Bu": () => (/* binding */ HOME_PAGE_VIDEO_LINK),
/* harmony export */   "fY": () => (/* binding */ CAREER_PAGE_VIDEO_LINK)
/* harmony export */ });
const clutchLink = "https://clutch.co/profile/incora?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo#summary";
const IMAGES_LINK = "http://35.171.193.21:1337";
const GRAPH_QL_LINK = "http://35.171.193.21:1337/graphql";
const HOME_PAGE_VIDEO_LINK = "https://www.youtube.com/embed/ao43bI3qofY";
const CAREER_PAGE_VIDEO_LINK = "https://www.youtube.com/embed/quF8iAJnN30";

/***/ }),

/***/ 1426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MenuContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const MenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isMenuOpen: true,
  toggleMenuMode: () => {},
  isHoverMenuOpen: true,
  toggleHoverMenuMode: () => {}
});

const NavState = ({
  children
}) => {
  const {
    0: isMenuOpen,
    1: toggleMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isHoverMenuOpen,
    1: toggleHoverMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
  };

  const toggleHoverMenuMode = () => {
    toggleHoverMenu(!isHoverMenuOpen);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MenuContext.Provider, {
    value: {
      isMenuOpen,
      toggleMenuMode,
      isHoverMenuOpen,
      toggleHoverMenuMode
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavState);

/***/ }),

/***/ 4575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
  colors: {
    yellow: "#FEC602",
    yellow2: "#FEC506",
    yellow3: "#FCE599",
    yellow4: "#e7b301",
    yellow5: "#c79d08",
    black: "#18181A",
    backgroundBlack: "#181819",
    backgroundBlack2: "#212125",
    white: "#FFFFFF",
    grey: "#EFEFEF",
    grey2: "#9CA3A7",
    grey3: "#FBFBFB",
    font1: "#BCBCC0",
    greyCheckbox: '#FBFBFB',
    font2: "#454A4D",
    font3: "#666666",
    background: "#F9F9F9",
    background2: "#222222",
    background3: "#212125",
    background4: "#FBFBFB",
    background5: "#FAFAFA",
    hexagonBorderedGrey: "#FAFAFA",
    tagPreBg: "#312A30",
    tagPreText: "#99c053"
  },
  letterSpacing: {
    h1: "1.5px",
    h2: "1px",
    span: "0.9px"
  },
  boxShadow: {
    initial: "inset 0 0 0 0 #e5b100ff",
    hover: "inset 240px 0 0 0 #e5b100ff"
  },
  transition: {
    button: "ease-in-out 0.4s",
    menu: "ease-in-out 0.4s"
  },
  elements: {
    hexagonBorderedBlack: "#212121",
    hexagonBorderedGrey: "#FAFAFA"
  },
  breakpoints: {
    xsMobile: '280px',
    mMobile: '360px',
    mobile: '481px',
    sTablet: '680px',
    tablet: '912px',
    smallDesk: '992px',
    tabletPro: '1024px',
    mDesk: '1124px',
    mediumDesk: '1201px',
    desk: '1367px',
    largeDesk: '1441px'
  }
};

/***/ })

};
;