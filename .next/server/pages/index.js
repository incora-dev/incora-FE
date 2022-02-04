"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,2197];
exports.modules = {

/***/ 7042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPlay = function SvgPlay(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 33,
    height: 39,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M32.08 19.5.28.6v37.8l31.8-18.9Z",
    fill: "#fff"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgPlay);

/***/ }),

/***/ 2046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/Homepage/services/styles.tsx


const Component = external_styled_components_default().div.withConfig({
  displayName: "styles__Component",
  componentId: "sc-1cd1ytv-0"
})(["position:relative;height:622px;overflow:hidden;background-color:#18181A;@media only screen and (max-width:", "){height:fit-content;margin-top:80px;padding-bottom:70px;}@media only screen and (max-width:", "){height:fit-content;padding-bottom:30px;}@media only screen and (max-width:", "){height:fit-content;margin-top:70px;padding-bottom:25px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const Position = external_styled_components_default().div.withConfig({
  displayName: "styles__Position",
  componentId: "sc-1cd1ytv-1"
})(["position:relative;margin:auto;width:1006px;@media only screen and (max-width:", "){width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1cd1ytv-2"
})(["display:flex;flex-direction:column;row-gap:20px;max-width:632px;"]);
const PositionCube1 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCube1",
  componentId: "sc-1cd1ytv-3"
})(["position:absolute;bottom:79px;right:97px;svg{path{stroke:", ";}}"], theme_get_default()("colors.black"));
const PositionCube2 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCube2",
  componentId: "sc-1cd1ytv-4"
})(["position:absolute;bottom:17px;right:82px;svg{path{stroke:", ";}}"], theme_get_default()("colors.yellow"));
const PositionCube3 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCube3",
  componentId: "sc-1cd1ytv-5"
})(["position:absolute;bottom:115px;right:-216px;svg{path{stroke:", ";}}"], theme_get_default()("colors.yellow"));
const PositionCube4 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCube4",
  componentId: "sc-1cd1ytv-6"
})(["position:absolute;bottom:17px;right:-84px;svg{path{stroke:", ";}}"], theme_get_default()("colors.black"));
const PositionCube5 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCube5",
  componentId: "sc-1cd1ytv-7"
})(["position:absolute;bottom:-44px;right:-100px;svg{path{stroke:", ";}}"], theme_get_default()("colors.yellow"));
const PositionSphere = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionSphere",
  componentId: "sc-1cd1ytv-8"
})(["position:absolute;width:237px;height:237px;border-radius:50%;bottom:0;right:0;overflow:hidden;"]);
const Sphere = external_styled_components_default().div.withConfig({
  displayName: "styles__Sphere",
  componentId: "sc-1cd1ytv-9"
})(["position:absolute;width:237px;height:237px;border-radius:50%;bottom:-61px;right:-16px;overflow:hidden;background-color:", ";"], theme_get_default()("colors.white"));
const PositionTextBlock = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionTextBlock",
  componentId: "sc-1cd1ytv-10"
})(["margin-top:120px;@media only screen and (max-width:", "){margin-top:90px;}"], theme_get_default()('breakpoints.tablet'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-1cd1ytv-11"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:#fff;"]);
const P = external_styled_components_default().p.withConfig({
  displayName: "styles__P",
  componentId: "sc-1cd1ytv-12"
})(["font-family:Poppins;font-style:normal;font-weight:400;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#BCBCC0;"]);
const Labels = external_styled_components_default().div.withConfig({
  displayName: "styles__Labels",
  componentId: "sc-1cd1ytv-13"
})(["height:max-content;margin-top:25px;display:flex;flex-wrap:wrap;column-gap:120px;row-gap:9px;a{display:block;}"]);
const Label = external_styled_components_default().a.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1cd1ytv-14"
})(["min-width:202px;font-family:Poppins;font-style:normal;font-weight:600;font-size:var(--fs-16);line-height:24px;letter-spacing:0.05em;text-transform:capitalize;cursor:pointer;color:#FEC506;"]);
const PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionLoading",
  componentId: "sc-1cd1ytv-15"
})(["position:absolute;top:-54px;right:-5px;"]);
const PositionHexagonOne = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonOne",
  componentId: "sc-1cd1ytv-16"
})(["position:absolute;top:-101px;right:66px;"]);
const PositionHexagonTwo = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonTwo",
  componentId: "sc-1cd1ytv-17"
})(["position:absolute;top:-152px;right:313.5px;"]);
const PositionHexagonThree = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonThree",
  componentId: "sc-1cd1ytv-18"
})(["position:absolute;top:-72px;right:424px;"]);
const PositionHexagonFour = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonFour",
  componentId: "sc-1cd1ytv-19"
})(["position:absolute;top:-147.5px;left:-155.5px;"]);
const PositionHexagonFive = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonFive",
  componentId: "sc-1cd1ytv-20"
})(["position:absolute;top:-59px;left:-51px;"]);
const PositionHexagonSix = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonSix",
  componentId: "sc-1cd1ytv-21"
})(["position:absolute;top:79px;left:-261px;"]);
const PositionHexagonSeven = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonSeven",
  componentId: "sc-1cd1ytv-22"
})(["position:absolute;bottom:-138px;left:-212px;"]);
const PositionHexagonEight = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonEight",
  componentId: "sc-1cd1ytv-23"
})(["position:absolute;bottom:-316px;right:-240px;"]);
const PositionHexagonNine = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagonNine",
  componentId: "sc-1cd1ytv-24"
})(["position:absolute;bottom:-184px;right:-267px;"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/loading.svg
var _path, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLoading = function SvgLoading(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 328,
    height: 338,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M338.02 151.699V338A338.023 338.023 0 0 1 0-.1h186.301a151.727 151.727 0 0 0 44.409 107.333 151.735 151.735 0 0 0 107.31 44.466Z",
    fill: "url(#loading_svg__a)"
  })), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "loading_svg__a",
    x1: 169.01,
    y1: 338,
    x2: 169.01,
    y2: -0.101,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506",
    stopOpacity: 0.4
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  }, /*#__PURE__*/external_react_.createElement("animate", {
    attributeName: "offset",
    values: "0.01; 1",
    dur: "0.5s"
  }), /*#__PURE__*/external_react_.createElement("animate", {
    attributeName: "stop-opacity",
    values: "0.01; 0",
    dur: "0.5s"
  }))))));
};

/* harmony default export */ const loading = (SvgLoading);
;// CONCATENATED MODULE: ./public/SVG/Cube1.svg
var Cube1_path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _path11;

function Cube1_extends() { Cube1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cube1_extends.apply(this, arguments); }



var SvgCube1 = function SvgCube1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Cube1_extends({
    width: 224,
    height: 247,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Cube1_path || (Cube1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m164.976 100.478 57.864 79.691-127.478 65.75L37.5 166.228l127.477-65.75Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m164.976 100.478 57.864 79.691-127.478 65.75L37.5 166.228l127.477-65.75ZM128.478 1l57.873 79.69-127.477 65.751L1 66.751 128.478 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m128.478 1 57.873 79.69-127.477 65.751L1 66.751 128.478 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path4 || (_path4 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m128.478 1 57.873 79.69 36.489 99.479-57.863-79.691L128.478 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path5 || (_path5 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m128.478 1 57.873 79.69 36.489 99.479-57.863-79.691L128.478 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path6 || (_path6 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m186.351 80.69 36.489 99.479-127.478 65.75-36.488-99.478 127.477-65.75Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path7 || (_path7 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m186.351 80.69 36.489 99.479-127.478 65.75-36.488-99.478 127.477-65.75Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path8 || (_path8 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m58.873 146.441 36.49 99.478-57.864-79.691L1 66.75l57.873 79.691Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path9 || (_path9 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m58.873 146.441 36.49 99.478-57.864-79.691L1 66.75l57.873 79.691Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path10 || (_path10 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1 66.75 128.478 1l36.498 99.478-127.477 65.75L1 66.75Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path11 || (_path11 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1 66.75 128.478 1l36.498 99.478-127.477 65.75L1 66.75Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ const Cube1 = (SvgCube1);
;// CONCATENATED MODULE: ./public/SVG/Cube2.svg
var Cube2_path, Cube2_path2, Cube2_path3, Cube2_path4, Cube2_path5, Cube2_path6, Cube2_path7, Cube2_path8, Cube2_path9, Cube2_path10, Cube2_path11;

function Cube2_extends() { Cube2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cube2_extends.apply(this, arguments); }



var SvgCube2 = function SvgCube2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Cube2_extends({
    width: 156,
    height: 128,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Cube2_path || (Cube2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m84.54 102.287-60.89 25.011L.987 34.253 61.865 9.242l22.674 93.045Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path2 || (Cube2_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m84.54 102.287-60.89 25.011L.987 34.253 61.865 9.242l22.674 93.045ZM154.918 94.258l-60.89 25.011-22.674-93.044 60.89-25.012 22.674 93.045Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path3 || (Cube2_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m154.918 94.258-60.89 25.011-22.674-93.044 60.89-25.012 22.674 93.045Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path4 || (Cube2_path4 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m154.919 94.258-60.89 25.011-70.38 8.029 60.89-25.011 70.38-8.029Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path5 || (Cube2_path5 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m154.919 94.258-60.89 25.011-70.38 8.029 60.89-25.011 70.38-8.029Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path6 || (Cube2_path6 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m94.029 119.269-70.38 8.029L.988 34.253l70.366-8.029L94.03 119.27Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path7 || (Cube2_path7 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m94.029 119.269-70.38 8.029L.988 34.253l70.366-8.029L94.03 119.27Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path8 || (Cube2_path8 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M71.354 26.224.988 34.254 61.865 9.242l70.379-8.029-60.89 25.011Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path9 || (Cube2_path9 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M71.354 26.224.988 34.254 61.865 9.242l70.379-8.029-60.89 25.011Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path10 || (Cube2_path10 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m132.244 1.214 22.674 93.044-70.379 8.029L61.865 9.242l70.379-8.029Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube2_path11 || (Cube2_path11 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m132.244 1.214 22.674 93.044-70.379 8.029L61.865 9.242l70.379-8.029Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ const Cube2 = (SvgCube2);
;// CONCATENATED MODULE: ./public/SVG/Cube3.svg
var Cube3_path, Cube3_path2, Cube3_path3, Cube3_path4, Cube3_path5, Cube3_path6, Cube3_path7, Cube3_path8, Cube3_path9, Cube3_path10;

function Cube3_extends() { Cube3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Cube3_extends.apply(this, arguments); }



var SvgCube3 = function SvgCube3(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Cube3_extends({
    width: 184,
    height: 176,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Cube3_path || (Cube3_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m70.71 102.536 86.203 49.006-69.71 23.042L1 125.579l69.71-23.043Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path2 || (Cube3_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m70.71 102.536 86.203 49.006-69.71 23.042L1 125.579l69.71-23.043ZM97.234 1l86.204 49.005-69.723 23.043-86.204-49.005L97.234 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path3 || (Cube3_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m97.234 1 86.204 49.005-69.723 23.043-86.204-49.005L97.234 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path4 || (Cube3_path4 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m97.234 1 86.204 49.005-26.524 101.537-86.204-49.006L97.234 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path5 || (Cube3_path5 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m97.234 1 86.204 49.005-26.524 101.537-86.204-49.006L97.234 1Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path6 || (Cube3_path6 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M113.715 73.048 87.204 174.584 1 125.579 27.511 24.043l86.204 49.005Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path7 || (Cube3_path7 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M113.715 73.048 87.204 174.584 1 125.579 27.511 24.043l86.204 49.005Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path8 || (Cube3_path8 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M27.511 24.043 97.234 1 70.71 102.536 1 125.579 27.511 24.043Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path9 || (Cube3_path9 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M27.511 24.043 97.234 1 70.71 102.536 1 125.579 27.511 24.043ZM183.438 50.006l-26.525 101.536-69.71 23.042 26.512-101.536 69.723-23.042Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Cube3_path10 || (Cube3_path10 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m183.438 50.006-26.525 101.536-69.71 23.042 26.512-101.536 69.723-23.042Z",
    stroke: "#181819",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ const Cube3 = (SvgCube3);
// EXTERNAL MODULE: ./public/hexagonBordered.svg
var hexagonBordered = __webpack_require__(3177);
// EXTERNAL MODULE: ./public/hexagonFilled.svg
var hexagonFilled = __webpack_require__(8866);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Homepage/services/index.tsx















function ServicesComponent({
  title,
  text,
  labels
}) {
  const {
    0: onEnterBlock,
    1: setOnEnterBlock
  } = (0,external_react_.useState)(false);
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  const label = labels.map((label, index) => {
    var _label$attributes, _label$attributes2;

    const id = label.id;
    const url = routes/* ROUTES.SERVICES */.Z.SERVICES + `${(_label$attributes = label.attributes) === null || _label$attributes === void 0 ? void 0 : _label$attributes.url}/${id}`;
    const name = (_label$attributes2 = label.attributes) === null || _label$attributes2 === void 0 ? void 0 : _label$attributes2.name;
    return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
      href: url,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(Label, {
        children: name
      })
    }, id);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Component, {
    onMouseEnter: () => setOnEnterBlock(true),
    children: [onEnterBlock && /*#__PURE__*/jsx_runtime_.jsx(PositionLoading, {
      children: /*#__PURE__*/jsx_runtime_.jsx(loading, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Position, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionTextBlock, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
              children: title
            }), /*#__PURE__*/jsx_runtime_.jsx(P, {
              children: text
            }), /*#__PURE__*/jsx_runtime_.jsx(Labels, {
              children: label
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonOne, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonTwo, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonThree, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonFour, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonFive, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonSix, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonSeven, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonEight, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagonNine, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagonBordered/* default */.Z, {})
        })]
      }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionCube2, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Cube1, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube3, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Cube2, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube5, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Cube3, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Sphere, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(PositionCube1, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Cube1, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube4, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Cube3, {})
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const services = (ServicesComponent);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/Technologies.style.ts


const Technologies_style_Component = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__Component",
  componentId: "sc-7ma8sn-0"
})(["height:623px;background-color:", ";@media only screen and (max-width:", "){height:fit-content;padding:0 0 70px;}"], ({
  bgColor
}) => bgColor, theme_get_default()('breakpoints.tabletPro'));
const PaddingTop = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__PaddingTop",
  componentId: "sc-7ma8sn-1"
})(["padding-top:120px;@media only screen and (max-width:", "){padding-top:53px;}"], theme_get_default()('breakpoints.tablet'));
const MarginTop = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__MarginTop",
  componentId: "sc-7ma8sn-2"
})(["margin-top:52px;"]);
const Technologies_style_Div = external_styled_components_default().div.withConfig({
  displayName: "Technologiesstyle__Div",
  componentId: "sc-7ma8sn-3"
})(["position:relative;max-width:1006px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;a{position:absolute;right:-100px;}svg{margin-top:10px;cursor:pointer;}@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){width:100%;padding-left:25px;}@media only screen and (max-width:", "){width:100%;padding-left:20px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'));
const Technologies_style_H2 = external_styled_components_default().h2.withConfig({
  displayName: "Technologiesstyle__H2",
  componentId: "sc-7ma8sn-4"
})(["display:block;font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:", ";"], ({
  color
}) => color);
// EXTERNAL MODULE: ./public/SVG/index.ts + 1 modules
var SVG = __webpack_require__(9285);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/BlockTechnologies/BlockTechnologies.style.ts



const BlockTechnologies_style_Component = external_styled_components_default().div.withConfig({
  displayName: "BlockTechnologiesstyle__Component",
  componentId: "sc-bv383l-0"
})(["display:flex;column-gap:26px;max-width:1006px;margin:0 auto;overflow:scroll;&::-webkit-scrollbar{display:none;}@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const Technology = external_styled_components_default().div.withConfig({
  displayName: "BlockTechnologiesstyle__Technology",
  componentId: "sc-bv383l-1"
})(["opacity:1;position:relative;width:291px;height:291px;cursor:pointer;background:#212125;-webkit-transition:opacity ", " ease-in-out;-moz-transition:opacity ", " ease-in-out;-ms-transition:opacity ", " ease-in-out;-o-transition:opacity ", " ease-in-out;transition:opacity ", " ease-in-out;p{font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;display:flex;align-items:center;letter-spacing:0.05em;text-transform:capitalize;color:#fff;}"], constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb);
const TechnologyHover = external_styled_components_default().div.withConfig({
  displayName: "BlockTechnologiesstyle__TechnologyHover",
  componentId: "sc-bv383l-2"
})(["position:absolute;opacity:0;width:291px;height:291px;cursor:pointer;-webkit-transition:opacity ", " ease-in-out;-moz-transition:opacity ", " ease-in-out;-ms-transition:opacity ", " ease-in-out;-o-transition:opacity ", " ease-in-out;transition:opacity ", " ease-in-out;"], constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb, constants/* homePageTechnologiesHoverDuration */.Hb);
const Container = external_styled_components_default().div.withConfig({
  displayName: "BlockTechnologiesstyle__Container",
  componentId: "sc-bv383l-3"
})(["position:relative;width:291px;height:291px;&:hover ", "{opacity:1;}&:hover ", "{opacity:0;}"], TechnologyHover, Technology);
const ContainerTop = external_styled_components_default().div.withConfig({
  displayName: "BlockTechnologiesstyle__ContainerTop",
  componentId: "sc-bv383l-4"
})(["position:absolute;bottom:35px;left:30px;right:30px;display:flex;flex-direction:column;row-gap:28px;align-items:flex-start;"]);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/SVG/Vector1.svg
var Vector1_path, Vector1_defs;

function Vector1_extends() { Vector1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Vector1_extends.apply(this, arguments); }



var SvgVector1 = function SvgVector1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Vector1_extends({
    width: 54,
    height: 116,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Vector1_path || (Vector1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M119.124 93.52 99.361 75.436a41.85 41.85 0 0 1-58.371 1.807 41.85 41.85 0 0 1-3.358-58.301L17.868.858A68.646 68.646 0 0 0 22.92 97.03a68.662 68.662 0 0 0 96.204-3.511Z",
    fill: "url(#Vector1_svg__a)"
  })), Vector1_defs || (Vector1_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "Vector1_svg__a",
    x1: 117.401,
    y1: 54.688,
    x2: -13.5,
    y2: 36,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.606,
    stopColor: "#1C1C1E"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#1C1C1E",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const Vector1 = (SvgVector1);
;// CONCATENATED MODULE: ./public/SVG/Vector2.svg
var Vector2_path, Vector2_defs;

function Vector2_extends() { Vector2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Vector2_extends.apply(this, arguments); }



var SvgVector2 = function SvgVector2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Vector2_extends({
    width: 189,
    height: 151,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Vector2_path || (Vector2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m16.172 150.062 42.26-24.399A76.237 76.237 0 0 1 87.34 23.286a76.233 76.233 0 0 1 103.108 26.175l42.26-24.4A125.047 125.047 0 0 0 62.891-18.963a125.073 125.073 0 0 0-46.72 169.026Z",
    fill: "url(#Vector2_svg__a)"
  })), Vector2_defs || (Vector2_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "Vector2_svg__a",
    x1: 52,
    y1: 53.5,
    x2: 46.5,
    y2: 150,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#1C1C1E"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#1C1C1E",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const Vector2 = (SvgVector2);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/BlockTechnologies/TechnologyContainer/TechnologyContainer.ts

const TechnologyContainer_Div = external_styled_components_default().div.withConfig({
  displayName: "TechnologyContainer__Div",
  componentId: "sc-fgv67t-0"
})(["position:relative;width:291px;height:291px;background:rgba(33,33,37,0.1);box-shadow:0 4px 40px rgba(0,0,0,0.15);"]);
const PositionOne = external_styled_components_default().div.withConfig({
  displayName: "TechnologyContainer__PositionOne",
  componentId: "sc-fgv67t-1"
})(["position:absolute;top:80px;right:0;"]);
const PositionTwo = external_styled_components_default().div.withConfig({
  displayName: "TechnologyContainer__PositionTwo",
  componentId: "sc-fgv67t-2"
})(["position:absolute;top:0;right:0;"]);
const TechnologyContainer_Container = external_styled_components_default().div.withConfig({
  displayName: "TechnologyContainer__Container",
  componentId: "sc-fgv67t-3"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;padding:0 23px;justify-content:center;align-items:center;display:flex;flex-wrap:wrap;column-gap:53px;row-gap:35px;z-index:1;"]);
const Block = external_styled_components_default().div.withConfig({
  displayName: "TechnologyContainer__Block",
  componentId: "sc-fgv67t-4"
})(["display:flex;flex-direction:column;align-items:center;row-gap:11px;width:max-content;"]);
const TechnologyContainer_P = external_styled_components_default().p.withConfig({
  displayName: "TechnologyContainer__P",
  componentId: "sc-fgv67t-5"
})(["max-width:94px;font-family:Poppins;font-style:normal;font-weight:500;font-size:var(--fs-11);line-height:16px;text-align:center;letter-spacing:0.05em;text-transform:capitalize;color:#888893;"]);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/BlockTechnologies/TechnologyContainer/index.tsx











function TechnologyContainer({
  techArray
}) {
  const technologies = () => {
    return /*#__PURE__*/jsx_runtime_.jsx(TechnologyContainer_Container, {
      children: techArray.map(tech => {
        var _attributes$iconForOt, _attributes$iconForOt2;

        const {
          id,
          attributes
        } = tech;
        const name = attributes === null || attributes === void 0 ? void 0 : attributes.Technology_name;
        const url = routes/* ROUTES.EXPERTISE.TECHNOLOGIES */.Z.EXPERTISE.TECHNOLOGIES + `${attributes === null || attributes === void 0 ? void 0 : attributes.url}/${id}`;
        const icon = attributes === null || attributes === void 0 ? void 0 : (_attributes$iconForOt = attributes.iconForOtherPages) === null || _attributes$iconForOt === void 0 ? void 0 : (_attributes$iconForOt2 = _attributes$iconForOt.data) === null || _attributes$iconForOt2 === void 0 ? void 0 : _attributes$iconForOt2.attributes;
        const src = constants/* IMAGES_LINK */.rS + (icon === null || icon === void 0 ? void 0 : icon.url);
        const width = icon === null || icon === void 0 ? void 0 : icon.width;
        const height = icon === null || icon === void 0 ? void 0 : icon.height;
        const renderCondition = width && height;
        return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: renderCondition && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: url,
            passHref: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Block, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                loader: () => src,
                width: 29.2,
                height: 26,
                src: src,
                alt: "technology icon"
              }), /*#__PURE__*/jsx_runtime_.jsx(TechnologyContainer_P, {
                children: name
              })]
            })
          }, id)
        });
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TechnologyContainer_Div, {
    children: [technologies(), /*#__PURE__*/jsx_runtime_.jsx(PositionOne, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Vector1, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionTwo, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Vector2, {})
    })]
  });
}

/* harmony default export */ const BlockTechnologies_TechnologyContainer = (TechnologyContainer);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/BlockTechnologies/index.tsx








function BlockTechnologies({
  techStacks
}) {
  const technologies = techStacks.map(stack => {
    var _attributes$icon$data, _attributes$technolog;

    const {
      id,
      attributes
    } = stack;
    const name = attributes === null || attributes === void 0 ? void 0 : attributes.name;
    const stackIcon = attributes === null || attributes === void 0 ? void 0 : (_attributes$icon$data = attributes.icon.data) === null || _attributes$icon$data === void 0 ? void 0 : _attributes$icon$data.attributes;
    const src = constants/* IMAGES_LINK */.rS + (stackIcon === null || stackIcon === void 0 ? void 0 : stackIcon.url);
    const width = stackIcon === null || stackIcon === void 0 ? void 0 : stackIcon.width;
    const height = stackIcon === null || stackIcon === void 0 ? void 0 : stackIcon.height;
    const techArray = attributes === null || attributes === void 0 ? void 0 : (_attributes$technolog = attributes.technologies) === null || _attributes$technolog === void 0 ? void 0 : _attributes$technolog.data;
    const renderCondition = name && width && height && techArray;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: renderCondition && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TechnologyHover, {
          children: /*#__PURE__*/jsx_runtime_.jsx(BlockTechnologies_TechnologyContainer, {
            techArray: techArray
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Technology, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerTop, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              loader: () => src,
              src: src,
              width: width,
              height: height,
              alt: "tech stack icon"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: name
            })]
          })
        })]
      }, id)
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(BlockTechnologies_style_Component, {
    number: technologies.length,
    children: technologies
  });
}

/* harmony default export */ const Technologies_BlockTechnologies = (BlockTechnologies);
;// CONCATENATED MODULE: ./components/Homepage/Technologies/index.tsx









function TechnologiesComponent({
  title,
  bgColor,
  techStacks
}) {
  const bgColorWhite = theme/* theme.colors.white */.r.colors.white;
  const bgColorBlack = theme/* theme.colors.black */.r.colors.black;

  const getBgColor = () => bgColor ? bgColor : bgColorWhite;

  const getTitleColor = () => {
    if (bgColor === bgColorWhite) {
      return bgColorBlack;
    }

    if (bgColor === bgColorBlack) {
      return bgColorWhite;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Technologies_style_Component, {
    bgColor: getBgColor(),
    children: [/*#__PURE__*/jsx_runtime_.jsx(PaddingTop, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Technologies_style_Div, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Technologies_style_H2, {
          color: getTitleColor(),
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: routes/* ROUTES.EXPERTISE.TECHNOLOGIES */.Z.EXPERTISE.TECHNOLOGIES,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(SVG/* default */.Z, {})
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(MarginTop, {
      children: techStacks && /*#__PURE__*/jsx_runtime_.jsx(Technologies_BlockTechnologies, {
        techStacks: techStacks
      })
    })]
  });
}

/* harmony default export */ const Technologies = (TechnologiesComponent);
;// CONCATENATED MODULE: ./components/Homepage/AboutUs/AboutUs.style.ts


const AboutUs_style_Div = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__Div",
  componentId: "sc-15svsud-0"
})(["overflow:hidden;background-color:", ";"], ({
  backgroundColor
}) => backgroundColor);
const AboutUs_style_Container = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__Container",
  componentId: "sc-15svsud-1"
})(["padding-bottom:175px;@media only screen and (max-width:", "){padding:0 25px 100px;}@media only screen and (max-width:", "){padding:50px 25px;width:100%;}@media only screen and (max-width:", "){padding:0 15px 50px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const Text = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__Text",
  componentId: "sc-15svsud-2"
})(["position:relative;width:max-content;display:flex;column-gap:209px;margin:0 auto;padding-top:104px;@media only screen and (max-width:", "){padding-top:40px;column-gap:80px;width:100%;}@media only screen and (max-width:", "){padding-top:0;flex-direction:column;margin:20px 0;width:100%;gap:20px;}@media only screen and (max-width:", "){padding-top:0;flex-direction:column;margin:20px 0;width:100%;}h2{font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;text-transform:capitalize;color:#FFF;@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:36px;}}p{margin-top:-2px;max-width:473px;font-family:Poppins;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#BCBCC0;@media only screen and (max-width:", "){max-width:550px;}@media only screen and (max-width:", "){line-height:28px;}}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const PositionDots = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__PositionDots",
  componentId: "sc-15svsud-3"
})(["position:absolute;right:-66px;bottom:-3px;transform:rotate(60deg);"]);
const rotation = (0,external_styled_components_.keyframes)(["from{transform:rotate(180deg);}to{transform:rotate(360deg);}"]);
const AboutUs_style_PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__PositionLoading",
  componentId: "sc-15svsud-4"
})(["position:absolute;right:-62px;bottom:-48px;transform:rotate(10deg);svg{opacity:", ";transition:all 1s ease-in;animation:", " 0.5s linear;}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, rotation);
const PositionHexagon = external_styled_components_default().div.withConfig({
  displayName: "AboutUsstyle__PositionHexagon",
  componentId: "sc-15svsud-5"
})(["position:absolute;top:22px;right:-278px;"]);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
;// CONCATENATED MODULE: ./components/Homepage/AboutUs/index.tsx








function AboutUs({
  backgroundColor,
  title,
  text
}) {
  const {
    0: animation,
    1: setAnimation
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(AboutUs_style_Div, {
    backgroundColor: backgroundColor,
    onMouseEnter: () => setAnimation(true),
    children: /*#__PURE__*/jsx_runtime_.jsx(AboutUs_style_Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: text
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionDots, {
          children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
            numberOfDots: 5,
            dotColor: '#fff',
            animation: animation,
            rowGap: '12px'
          })
        }), animation && /*#__PURE__*/jsx_runtime_.jsx(AboutUs_style_PositionLoading, {
          animation: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
            height: 75,
            width: 75,
            viewBox: "0 0 96 96"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon, {
          children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
            height: 221,
            width: 192,
            viewBox: "0 0 391 450"
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Homepage_AboutUs = (AboutUs);
// EXTERNAL MODULE: ./components/Homepage/ContactUs/index.tsx + 3 modules
var ContactUs = __webpack_require__(5802);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
;// CONCATENATED MODULE: ./components/Homepage/Video/Video.style.ts


const Video_style_Container = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__Container",
  componentId: "sc-9t1g8j-0"
})(["position:relative;height:742px;@media only screen and (max-width:", "){height:500px;}@media only screen and (max-width:", "){height:320px;}@media only screen and (max-width:", "){height:300px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const BGTop = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__BGTop",
  componentId: "sc-9t1g8j-1"
})(["height:37%;background-color:transparent;"]);
const BGBottom = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__BGBottom",
  componentId: "sc-9t1g8j-2"
})(["height:63%;background-color:#18181A;"]);
const VideoContainer = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__VideoContainer",
  componentId: "sc-9t1g8j-3"
})(["position:absolute;top:-3px;right:0;z-index:1;@media only screen and (max-width:", "){width:100%;}@media only screen and (max-width:", "){width:100%;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const VideoBLock = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__VideoBLock",
  componentId: "sc-9t1g8j-4"
})(["position:relative;@media only screen and (max-width:", "){width:100%;}"], theme_get_default()('breakpoints.tablet'));
const PosterVideoPosition = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__PosterVideoPosition",
  componentId: "sc-9t1g8j-5"
})(["position:absolute;top:0;opacity:", ";pointer-events:", ";transition:opacity 1s linear;transition-delay:1s;"], ({
  display
}) => display ? 0 : 1, ({
  display
}) => display ? 'none' : 'all');
const Video = external_styled_components_default().video.withConfig({
  displayName: "Videostyle__Video",
  componentId: "sc-9t1g8j-6"
})([""]);
const PlayerPosition = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__PlayerPosition",
  componentId: "sc-9t1g8j-7"
})(["position:absolute;top:50%;left:50%;z-index:1;transform:translate(-52%,-52%);opacity:", ";pointer-events:", ";transition:opacity 1s linear;"], ({
  display
}) => display ? 0 : 1, ({
  display
}) => display ? 'none' : 'all');
const Player = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__Player",
  componentId: "sc-9t1g8j-8"
})(["position:relative;width:100px;height:100px;background:rgba(24,24,26,0.2);backdrop-filter:blur(15px);cursor:pointer;border-radius:50%;transition:0.15s linear;"]);
const PositionPlaySVG = external_styled_components_default().div.withConfig({
  displayName: "Videostyle__PositionPlaySVG",
  componentId: "sc-9t1g8j-9"
})(["position:absolute;top:50%;left:50%;width:33px;height:39px;transform:translate(-37%,-50%);svg{margin:0 auto;path{fill:#fff;}}"]);
// EXTERNAL MODULE: ./public/Player/Play.svg
var Play = __webpack_require__(7042);
;// CONCATENATED MODULE: ./components/Homepage/Video/index.tsx








function VideoComponent() {
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  (0,external_react_.useEffect)(() => {
    const player = document.getElementById("youTubeVideo");

    if (play) {
      player && (player.src += "?autoplay=1");
    }
  }, [play]);
  const iframeHeight = isTablet && !isMobile && !isSmallTablet ? '500px' : isMobile ? '250px' : isSmallTablet ? '325px' : '671px';
  const imgHeight = isTablet && !isSmallTablet ? '500px' : isSmallTablet && !isMobile ? '325px' : isMobile ? '250px' : 'unset';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Video_style_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(BGTop, {}), /*#__PURE__*/jsx_runtime_.jsx(BGBottom, {}), /*#__PURE__*/jsx_runtime_.jsx(VideoContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(VideoBLock, {
        onClick: () => setPlay(true),
        children: [/*#__PURE__*/jsx_runtime_.jsx(PosterVideoPosition, {
          display: play,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            style: {
              height: imgHeight
            },
            src: './Player/PosterVideo.jpg'
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("iframe", {
          id: 'youTubeVideo',
          width: isMobile || isTablet || isSmallTablet ? '100%' : '1122px',
          height: iframeHeight,
          src: constants/* HOME_PAGE_VIDEO_LINK */.Bu,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }), /*#__PURE__*/jsx_runtime_.jsx(PlayerPosition, {
          display: play,
          children: /*#__PURE__*/jsx_runtime_.jsx(Player, {
            children: /*#__PURE__*/jsx_runtime_.jsx(PositionPlaySVG, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Play/* default */.Z, {})
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Homepage_Video = (VideoComponent);
;// CONCATENATED MODULE: ./components/Homepage/Reviews/Reviews.style.ts


const ReviewsWrapper = external_styled_components_default().div.withConfig({
  displayName: "Reviewsstyle__ReviewsWrapper",
  componentId: "sc-xyqoul-0"
})(["position:relative;padding-top:42px;width:100%;background-color:", ";display:flex;flex-direction:column;align-items:center;@media only screen and (max-width:", "){height:fit-content;}"], (0,theme_get_.themeGet)("colors.black"), (0,theme_get_.themeGet)('breakpoints.tablet'));
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewsHeader/ReviewsHeader.style.ts


const ReviewsHeaderWrapper = external_styled_components_default().div.withConfig({
  displayName: "ReviewsHeaderstyle__ReviewsHeaderWrapper",
  componentId: "sc-1fgujre-0"
})(["width:1006px;height:min-content;display:flex;justify-content:space-between;align-items:center;margin-bottom:50px;@media only screen and (max-width:", "){width:100%;padding:0 25px;margin-bottom:20px;}@media only screen and (max-width:", "){margin-bottom:20px;}@media only screen and (max-width:", "){width:100%;padding:0 15px;margin-bottom:20px;}h1{text-transform:uppercase;color:", ";font-weight:800;font-size:var(--fs-26);letter-spacing:", ";@media only screen and (max-width:", "){font-size:var(--fs-20);}@media only screen and (max-width:", "){font-size:var(--fs-20);}@media only screen and (max-width:", "){font-size:var(--fs-16);}}span{font-size:var(--fs-20);color:", ";font-weight:800;letter-spacing:0.6px;@media only screen and (max-width:", "){font-size:var(--fs-16);}@media only screen and (max-width:", "){font-size:var(--fs-16);}@media only screen and (max-width:", "){font-size:var(--fs-13);}}"], (0,theme_get_.themeGet)('breakpoints.tabletPro'), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'), (0,theme_get_.themeGet)("colors.white"), (0,theme_get_.themeGet)("letterSpacing.h1"), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'), (0,theme_get_.themeGet)('breakpoints.xsMobile'), (0,theme_get_.themeGet)("colors.white"), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'), (0,theme_get_.themeGet)('breakpoints.xsMobile'));
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewsHeader/index.tsx




const ReviewsHeader = ({
  reviewIndex,
  reviewsLength
}) => {
  const padNumber = number => {
    return String(number).padStart(2, "0");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewsHeaderWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "reviews"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [padNumber(reviewIndex + 1), " / ", padNumber(reviewsLength)]
    })]
  });
};

/* harmony default export */ const components_ReviewsHeader = (ReviewsHeader);
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewBox/style.ts



const ReviewBoxWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ReviewBoxWrapper",
  componentId: "sc-r6page-0"
})(["width:max-content;min-height:270px;display:flex;flex-direction:column;.right_btn{justify-content:flex-end;}@media only screen and (max-width:", "){width:90%;min-height:fit-content;}@media only screen and (max-width:", "){width:90%;min-height:fit-content;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const CarouselButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__CarouselButtonWrapper",
  componentId: "sc-r6page-1"
})(["width:269px;display:flex;align-items:flex-end;@media only screen and (max-width:", "){width:100%;}"], theme_get_default()("breakpoints.tablet"));
const CarouselButtonsContainer = external_styled_components_default().div.withConfig({
  displayName: "style__CarouselButtonsContainer",
  componentId: "sc-r6page-2"
})(["@media only screen and (max-width:", "){display:flex;position:relative;left:7vw;}@media only screen and (max-width:", "){display:flex;position:relative;left:7vw;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const CarouselReviewWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__CarouselReviewWrapper",
  componentId: "sc-r6page-3"
})(["@media only screen and (max-width:", "){display:flex;flex-direction:column;align-items:center;max-width:100%;height:fit-content;position:relative;top:-70px;gap:10px;}@media only screen and (max-width:", "){display:flex;flex-direction:column;align-items:center;max-width:100%;height:fit-content;position:relative;top:-60px;gap:10px;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const dash = (0,external_styled_components_.keyframes)(["to{stroke-dashoffset:0;}"]);
const Ellipse = external_styled_components_default().div.withConfig({
  displayName: "style__Ellipse",
  componentId: "sc-r6page-4"
})(["border-radius:100px;width:100px;height:100px;background-color:", ";display:flex;justify-content:center;align-items:center;.right_arrow{transform:rotate(180deg);}svg{path{stroke-dasharray:1000;stroke-dashoffset:1000;animation:", " 5s linear forwards;}}"], theme_get_default()("colors.white"), dash);
const ReviewContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ReviewContentWrap",
  componentId: "sc-r6page-5"
})(["width:816.99px;display:flex;justify-content:space-between;@media only screen and (max-width:", "){width:90%;}@media only screen and (max-width:", "){width:90%;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const QuoteWrap = external_styled_components_default().div.withConfig({
  displayName: "style__QuoteWrap",
  componentId: "sc-r6page-6"
})(["display:flex;width:576px;> div{> svg{position:relative;right:6px;}}"]);
const QuoteText = external_styled_components_default().p.withConfig({
  displayName: "style__QuoteText",
  componentId: "sc-r6page-7"
})(["padding-top:10px;font-family:Poppins;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;color:", ";"], theme_get_default()("colors.font1"));
const AvatarWrap = external_styled_components_default().div.withConfig({
  displayName: "style__AvatarWrap",
  componentId: "sc-r6page-8"
})(["width:221px;margin-top:14px;display:flex;justify-content:flex-end;"]);
const Photo = external_styled_components_default()(next_image["default"]).withConfig({
  displayName: "style__Photo",
  componentId: "sc-r6page-9"
})(["width:53px;height:53px;"]);
const NameWrap = external_styled_components_default().div.withConfig({
  displayName: "style__NameWrap",
  componentId: "sc-r6page-10"
})(["padding-top:10px;color:", ";font-size:var(--fs-13);letter-spacing:1px;h3{text-transform:uppercase;font-weight:600;}span{color:", ";}height:269px;"], theme_get_default()("colors.white"), theme_get_default()("colors.font1"));
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewBox/components/ReviewContent/style.ts



const style_ReviewContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ReviewContentWrap",
  componentId: "sc-18e4usj-0"
})(["width:816.99px;display:flex;justify-content:space-between;@media only screen and (max-width:", "){width:100%;flex-direction:column-reverse;align-items:center;}@media only screen and (max-width:", "){width:100%;flex-direction:column-reverse;align-items:center;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const style_QuoteWrap = external_styled_components_default().div.withConfig({
  displayName: "style__QuoteWrap",
  componentId: "sc-18e4usj-1"
})(["display:flex;width:576px;> div{> svg{position:relative;right:6px;}}@media only screen and (max-width:", "){width:100%;}"], theme_get_default()('breakpoints.tablet'));
const style_QuoteText = external_styled_components_default().p.withConfig({
  displayName: "style__QuoteText",
  componentId: "sc-18e4usj-2"
})(["max-width:576px;padding-top:10px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;color:", ";"], theme_get_default()("colors.font1"));
const style_AvatarWrap = external_styled_components_default().div.withConfig({
  displayName: "style__AvatarWrap",
  componentId: "sc-18e4usj-3"
})(["margin-top:14px;display:flex;justify-content:flex-end;@media only screen and (max-width:", "){justify-content:center;>div{display:flex;flex-direction:column;align-items:center;text-align:center;}}@media only screen and (max-width:", "){justify-content:center;>div{display:flex;flex-direction:column;align-items:center;text-align:center;}}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const style_Photo = external_styled_components_default()(next_image["default"]).withConfig({
  displayName: "style__Photo",
  componentId: "sc-18e4usj-4"
})(["width:53px;height:53px;"]);
const style_NameWrap = external_styled_components_default().div.withConfig({
  displayName: "style__NameWrap",
  componentId: "sc-18e4usj-5"
})(["margin-top:6px;color:", ";font-size:var(--fs-13);letter-spacing:0.1em;h3{text-transform:uppercase;font-weight:600;}span{color:", ";}"], theme_get_default()("colors.white"), theme_get_default()("colors.font1"));
// EXTERNAL MODULE: ./public/icons/Quotes.svg
var Quotes = __webpack_require__(9101);
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewBox/components/ReviewContent/index.tsx






const ReviewContent = ({
  review
}) => {
  var _attributes$clientPho, _attributes$clientPho2;

  const {
    id,
    attributes
  } = review;
  const text = attributes === null || attributes === void 0 ? void 0 : attributes.text;
  const name = attributes === null || attributes === void 0 ? void 0 : attributes.clientName;
  const position = attributes === null || attributes === void 0 ? void 0 : attributes.clientPosition;
  const photo = constants/* IMAGES_LINK */.rS + (attributes === null || attributes === void 0 ? void 0 : (_attributes$clientPho = attributes.clientPhoto.data) === null || _attributes$clientPho === void 0 ? void 0 : (_attributes$clientPho2 = _attributes$clientPho.attributes) === null || _attributes$clientPho2 === void 0 ? void 0 : _attributes$clientPho2.url);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_ReviewContentWrap, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(style_QuoteWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Quotes/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(style_QuoteText, {
        children: text
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(style_AvatarWrap, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(style_Photo, {
          loader: () => photo,
          width: 53,
          height: 53,
          src: photo,
          alt: "photo",
          layout: "fixed"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_NameWrap, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: name
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: position
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_ReviewContent = (ReviewContent);
;// CONCATENATED MODULE: ./components/common/CarouselButton/style.ts


const ButtonWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ButtonWrap",
  componentId: "sc-1luxeoe-0"
})(["padding:0 33px;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:", ";svg{transform:", ";}@media only screen and (max-width:", "){padding:10px;justify-content:", ";}@media only screen and (max-width:", "){padding:10px;justify-content:", ";}"], ({
  right
}) => right ? "flex-end" : "flex-start", ({
  right
}) => right ? "rotate(180deg)" : "none", theme_get_default()('breakpoints.tablet'), ({
  right
}) => right ? "flex-start" : "flex-end", theme_get_default()('breakpoints.mobile'), ({
  right
}) => right ? "flex-start" : "flex-end");
const style_Ellipse = external_styled_components_default().div.withConfig({
  displayName: "style__Ellipse",
  componentId: "sc-1luxeoe-1"
})(["border-radius:100px;width:100px;height:100px;background-color:", ";display:flex;justify-content:center;align-items:center;cursor:pointer;@media only screen and (max-width:", "){width:50px;height:50px;svg{width:60%;}}@media only screen and (max-width:", "){width:30px;height:30px;svg{width:60%;}}"], theme_get_default()("colors.white"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
;// CONCATENATED MODULE: ./public/icons/Arrow.svg
var Arrow_path;

function Arrow_extends() { Arrow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Arrow_extends.apply(this, arguments); }



var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Arrow_extends({
    width: 39,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Arrow_path || (Arrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM39 9H1V7h38v2Z",
    fill: "#18181A"
  })));
};

/* harmony default export */ const Arrow = (SvgArrow);
;// CONCATENATED MODULE: ./components/common/CarouselButton/index.tsx




const CarouselButton = ({
  right,
  changeReview
}) => {
  const onClick = () => {
    changeReview(right);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ButtonWrap, {
    right: right,
    children: /*#__PURE__*/jsx_runtime_.jsx(style_Ellipse, {
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx(Arrow, {})
    })
  });
};

/* harmony default export */ const common_CarouselButton = (CarouselButton);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/Homepage/Reviews/components/ReviewBox/index.tsx









const ReviewBox = ({
  reviews,
  reviewIndex,
  setReviewIndex,
  changeCurrentGlobePoint
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();

  const changeReview = right => {
    const lastElementIndex = reviews.length - 1;

    if (reviewIndex < lastElementIndex && right) {
      setReviewIndex(reviewIndex + 1);
      changeCurrentGlobePoint(reviewIndex + 1);
    } else if (reviewIndex <= lastElementIndex && !right && reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
      changeCurrentGlobePoint(reviewIndex - 1);
    }
  };

  const leftCarouselButtonCondition = reviewIndex !== 0 && /*#__PURE__*/jsx_runtime_.jsx(common_CarouselButton, {
    changeReview: changeReview,
    right: false
  });

  const rightCarouselButtonCondition = reviewIndex !== reviews.length - 1 && /*#__PURE__*/jsx_runtime_.jsx(common_CarouselButton, {
    changeReview: changeReview,
    right: true
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewBoxWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselReviewWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselButtonsContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(CarouselButtonWrapper, {
          children: leftCarouselButtonCondition
        }), (isMobile || isTablet || isSmallTablet) && /*#__PURE__*/jsx_runtime_.jsx(CarouselButtonWrapper, {
          children: rightCarouselButtonCondition
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_ReviewContent, {
        review: reviews[reviewIndex]
      })]
    }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselButtonsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CarouselButtonWrapper, {
        children: leftCarouselButtonCondition
      }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx(CarouselButtonWrapper, {
        children: rightCarouselButtonCondition
      })]
    })]
  });
};

/* harmony default export */ const components_ReviewBox = (ReviewBox);
// EXTERNAL MODULE: ./components/common/Globe/index.tsx + 2 modules
var Globe = __webpack_require__(4171);
;// CONCATENATED MODULE: ./components/Homepage/Reviews/index.tsx









const Reviews = ({
  reviews
}) => {
  const {
    0: reviewIndex,
    1: setReviewIndex
  } = (0,external_react_.useState)(0);
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  let points = reviews.map((review, index) => {
    var _review$attributes, _review$attributes$pr, _review$attributes$pr2, _review$attributes$pr3, _review$attributes$pr4, _review$attributes$pr5, _review$attributes$pr6;

    const location = (_review$attributes = review.attributes) === null || _review$attributes === void 0 ? void 0 : (_review$attributes$pr = _review$attributes.project) === null || _review$attributes$pr === void 0 ? void 0 : (_review$attributes$pr2 = _review$attributes$pr.data) === null || _review$attributes$pr2 === void 0 ? void 0 : (_review$attributes$pr3 = _review$attributes$pr2.attributes) === null || _review$attributes$pr3 === void 0 ? void 0 : (_review$attributes$pr4 = _review$attributes$pr3.location) === null || _review$attributes$pr4 === void 0 ? void 0 : (_review$attributes$pr5 = _review$attributes$pr4.data) === null || _review$attributes$pr5 === void 0 ? void 0 : (_review$attributes$pr6 = _review$attributes$pr5.attributes) === null || _review$attributes$pr6 === void 0 ? void 0 : _review$attributes$pr6.location;
    const lat = location === null || location === void 0 ? void 0 : location.lat;
    const lng = location === null || location === void 0 ? void 0 : location.lng;
    const size = index === 0 ? 0.06 : 0.03;
    const radius = index === 0 ? 1 : 0.6;
    return {
      lat,
      lng,
      size,
      radius
    };
  }); // const changeCurrentGlobePoint = (currentIndex: number) => {
  //   return points = points.map((point, index) => {
  //     if (index === currentIndex) {
  //       return {
  //         ...point,
  //         size: 0.06,
  //         radius: 1,
  //       };
  //     } else {
  //       return {
  //         ...point,
  //         size: 0.03,
  //         radius: 0.6,
  //       };
  //     }
  //   });
  // };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewsWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_ReviewsHeader, {
      reviewIndex: reviewIndex,
      reviewsLength: reviews.length
    }), /*#__PURE__*/jsx_runtime_.jsx(components_ReviewBox, {
      reviews: reviews,
      reviewIndex: reviewIndex,
      setReviewIndex: setReviewIndex,
      changeCurrentGlobePoint: currentIndex => null
    }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/jsx_runtime_.jsx(Globe/* default */.Z, {
      points: points,
      reviewIndex: reviewIndex
    })]
  });
};

/* harmony default export */ const Homepage_Reviews = (Reviews);
;// CONCATENATED MODULE: ./components/Homepage/Header/styles.ts


const Cover = external_styled_components_default().header.withConfig({
  displayName: "styles__Cover",
  componentId: "sc-uoc4ap-0"
})(["background-color:#18181A;overflow:hidden;"]);
const styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-uoc4ap-1"
})(["max-width:1166px;position:relative;margin:0 auto;text-align:left;--line-height:calc(11vw + 0.1rem);@media (max-width:", "){max-width:100%;padding:0 25px;}"], theme_get_default()('breakpoints.tabletPro'));
const PositionHexagon1 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagon1",
  componentId: "sc-uoc4ap-2"
})(["position:absolute;bottom:-216px;right:134px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionHexagon2 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagon2",
  componentId: "sc-uoc4ap-3"
})(["position:absolute;bottom:-13px;right:18px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionHexagon3 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagon3",
  componentId: "sc-uoc4ap-4"
})(["position:absolute;bottom:-216px;right:-100px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionHexagon4 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionHexagon4",
  componentId: "sc-uoc4ap-5"
})(["position:absolute;bottom:123px;right:-216px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const styles_Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-uoc4ap-6"
})(["margin-left:50px;margin-top:1px;padding:79px 0 205px;text-align:left;@media only screen and (max-width:", "){padding-bottom:80px;}@media only screen and (max-width:", "){margin-left:30px;}@media only screen and (max-width:", "){margin:0 7px;padding-top:20px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const VideoBlock = external_styled_components_default().div.withConfig({
  displayName: "styles__VideoBlock",
  componentId: "sc-uoc4ap-7"
})(["position:relative;width:710px;height:380px;video{}@media only screen and (max-width:", "){width:80vw;height:fit-content;}"], theme_get_default()('breakpoints.tablet'));
const PositionVideoSVG = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionVideoSVG",
  componentId: "sc-uoc4ap-8"
})(["position:absolute;right:0;top:0;width:710px;height:380px;@media only screen and (max-width:", "){right:-1px;left:-1px;top:0px;bottom:-1px;width:712px;height:382px;}@media only screen and (max-width:", "){width:81vw;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'));
const styles_VideoContainer = external_styled_components_default().video.withConfig({
  displayName: "styles__VideoContainer",
  componentId: "sc-uoc4ap-9"
})(["position:relative;width:100%;height:50%;"]);
const Titles = external_styled_components_default().div.withConfig({
  displayName: "styles__Titles",
  componentId: "sc-uoc4ap-10"
})(["margin-left:-47px;@media (max-width:", "){margin-left:-50px;padding-top:3vh;}"], theme_get_default()('breakpoints.mobile'));
const Title1 = external_styled_components_default().h1.withConfig({
  displayName: "styles__Title1",
  componentId: "sc-uoc4ap-11"
})(["font-size:calc(10vw + 0.05rem);font-weight:900;line-height:var(--line-height);letter-spacing:0.05em;"]);
const Title2 = external_styled_components_default().h1.withConfig({
  displayName: "styles__Title2",
  componentId: "sc-uoc4ap-12"
})(["margin-left:calc(10vw + 0.05rem);font-size:calc(10vw + 0.05rem);font-weight:900;line-height:var(--line-height);letter-spacing:0.05em;"]);
const Title3 = external_styled_components_default().h1.withConfig({
  displayName: "styles__Title3",
  componentId: "sc-uoc4ap-13"
})(["position:relative;z-index:1;margin-left:calc(25vw + 1rem);font-size:calc(10vw + 0.05rem);font-weight:900;line-height:var(--line-height);letter-spacing:0.05em;@media (max-width:", "){margin-left:calc(25vw + 1rem);}"], theme_get_default()('breakpoints.mobile'));
const Title4 = external_styled_components_default().h1.withConfig({
  displayName: "styles__Title4",
  componentId: "sc-uoc4ap-14"
})(["position:absolute;top:10.5px;left:5px;margin-left:calc(25vw + 1rem);font-size:calc(10vw + 0.05rem);font-weight:900;line-height:var(--line-height);letter-spacing:0.05em;-webkit-text-stroke:1px #fec506;color:rgba(0,0,0,0);@media (max-width:", "){margin-left:calc(26vw + 1rem);top:6%;}"], theme_get_default()('breakpoints.mobile'));
const TitleContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__TitleContainer",
  componentId: "sc-uoc4ap-15"
})(["position:relative;"]);
const ScrollContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ScrollContainer",
  componentId: "sc-uoc4ap-16"
})(["position:absolute;bottom:96px;left:-105px;width:210px;display:flex;align-items:center;justify-content:center;transform:rotate(-90deg);@media (max-width:", "){left:-75px;}@media only screen and (max-width:", "){left:-15%;width:40%;bottom:14%;}@media only screen and (max-width:", "){bottom:20%;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const ScrollText = external_styled_components_default().p.withConfig({
  displayName: "styles__ScrollText",
  componentId: "sc-uoc4ap-17"
})(["font-size:var(--fs-12);line-height:18px;font-weight:700;text-align:center;letter-spacing:0.03em;color:#fff;"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "styles__Line",
  componentId: "sc-uoc4ap-18"
})(["width:158px;margin-right:17px;border:1px solid #FEC506;"]);
;// CONCATENATED MODULE: ./public/SVG/deepen-to-the-core.svg
var _style, deepen_to_the_core_path, _ellipse, deepen_to_the_core_path2, deepen_to_the_core_path3, deepen_to_the_core_path4, deepen_to_the_core_path5, deepen_to_the_core_path6;

function deepen_to_the_core_extends() { deepen_to_the_core_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return deepen_to_the_core_extends.apply(this, arguments); }



var SvgDeepenToTheCore = function SvgDeepenToTheCore(props) {
  return /*#__PURE__*/external_react_.createElement("svg", deepen_to_the_core_extends({
    id: "deepen-to-the-core_svg__Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 710 380"
  }, props), /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "deepen-to-the-core_svg__clip-path"
  }, /*#__PURE__*/external_react_.createElement("path", {
    style: {
      fill: "none"
    },
    d: "M247 278.03h595.28v841.89H247z"
  })), _style || (_style = /*#__PURE__*/external_react_.createElement("style", null, ".deepen-to-the-core_svg__cls-2{fill:#18181a}.deepen-to-the-core_svg__cls-4{fill:#fdc514}"))), deepen_to_the_core_path || (deepen_to_the_core_path = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-2",
    d: "M493.72 320c-5.52 0-9.84 4-9.84 11.4s4.32 11.4 9.84 11.4 9.84-4 9.84-11.4-4.32-11.4-9.84-11.4Z"
  })), _ellipse || (_ellipse = /*#__PURE__*/external_react_.createElement("ellipse", {
    className: "deepen-to-the-core_svg__cls-2",
    cx: 451.76,
    cy: 203.21,
    rx: 8.76,
    ry: 11.64
  })), deepen_to_the_core_path2 || (deepen_to_the_core_path2 = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-2",
    d: "M42.82 47.17h-6.36v37.92h6.36c11.76 0 19.56-6.6 19.56-19s-7.8-18.92-19.56-18.92ZM244.28 189.41c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84ZM282.29 319.74c-4.68 0-8.76 3.6-8.76 11.64s4 11.64 8.76 11.64 8.76-3.6 8.76-11.64-4.05-11.64-8.76-11.64ZM388.18 61.21c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84ZM137.14 61.21c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84ZM648.46 86.65c4.68 0 8.76-3.6 8.76-11.64s-4.08-11.64-8.76-11.64S639.7 67 639.7 75s3.96 11.65 8.76 11.65ZM663.64 320c-5.52 0-9.84 4-9.84 11.4s4.32 11.4 9.84 11.4 9.84-4 9.84-11.4-4.32-11.4-9.84-11.4Z"
  })), deepen_to_the_core_path3 || (deepen_to_the_core_path3 = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-2",
    d: "M0 0v380h710V0Zm648.46 40.33c20.4 0 35.76 13.08 35.76 34.68s-15.36 34.68-35.76 34.68S612.7 96.61 612.7 75s15.36-34.67 35.76-34.67Zm-95.88.84H561V24.85h26.64v16.32h11v22.2h-11v18.24c0 3.12 1.44 4.56 4.92 4.56h6.36v22.68h-10.1c-15.82 0-27.82-6.72-27.82-27.72V63.37h-8.4Zm-114.24 0H465v10.32c3.84-5.88 10.56-10.8 20.76-10.8 15.6 0 24.72 11.4 24.72 28.92v39.24h-26.54V73c0-6.48-3.72-10.44-9.48-10.44S465 66.49 465 73v35.88h-26.66Zm-169.92 0h26.64v9.24c3.24-6.12 9.6-10.08 18.6-10.08 15.6 0 28 12.84 28 34.68s-12.36 34.68-28 34.68c-9 0-15.36-4-18.6-10.08v41.64h-26.64Zm-50.16-.84c20.28 0 34.56 12.84 34.56 34.08a39 39 0 0 1-.36 5.28h-42.72c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.2c-2.88 14.4-16.08 25.2-33.12 25.2C198 109.69 183.7 96.61 183.7 75s14.3-34.67 34.56-34.67ZM9.83 108.85v-85h35.39c27.12 0 44.16 17.76 44.16 42.24 0 24.24-17 42.72-44.16 42.72Zm95.25 128.2H95c-15.84 0-27.84-6.72-27.84-27.72v-17.76h-8.4v-22.2h8.4v-16.32H93.8v16.32h11v22.2h-11v18.24c0 3.12 1.44 4.56 4.92 4.56h6.36Zm-2.5-162c0-21.6 14.28-34.68 34.56-34.68s34.56 12.8 34.56 34.04a39 39 0 0 1-.36 5.28h-42.72c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.2c-2.88 14.4-16.08 25.2-33.12 25.2-20.28.04-34.56-13.04-34.56-34.65Zm92 162h-26.5v-35.88c0-6.48-3.72-10.44-9.48-10.44s-9.48 4-9.48 10.44v35.88h-26.64v-88.8h26.64v31.44c3.84-5.88 10.56-10.8 20.76-10.8 15.6 0 24.72 11.4 24.72 28.92Zm15.12-33.84c0-21.6 14.28-34.68 34.56-34.68s34.56 12.84 34.56 34.08a39 39 0 0 1-.36 5.28h-42.7c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.2c-2.88 14.4-16.08 25.2-33.12 25.2-20.28.04-34.56-13.04-34.56-34.64Zm72.57 162.85c-20.4 0-35.76-13.08-35.76-34.68s15.36-34.68 35.76-34.68S318 309.78 318 331.38s-15.31 34.68-35.71 34.68Zm90.35-73.32c-6.11-.72-8.87.48-9.71 4.8h9.71v22.2h-9.95v45.48h-26.62v-45.48h-7.2v-22.2h7.2c.24-19.2 13.68-29.52 36.59-27.48Zm-11.48-79.69a14.46 14.46 0 0 0 13.56-8.88h28.1c-3.48 20-18.72 33.48-41.16 33.48-26 0-42-17.88-42-43.2s16-43.2 42-43.2c22.44 0 37.68 13.44 41.16 33.48h-28.08a14.46 14.46 0 0 0-13.56-8.88c-9 0-14.52 7.32-14.52 18.6s5.52 18.6 14.52 18.6Zm27-103.36c-20.28 0-34.56-13.08-34.56-34.68s14.28-34.68 34.56-34.68 34.56 12.84 34.56 34.08a39 39 0 0 1-.36 5.28h-42.68c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.2c-2.88 14.44-16.08 25.24-33.12 25.24Zm53.1 255.53h-26.59v-85h26.63ZM416 203.21c0-21.6 15.36-34.68 35.76-34.68s35.76 13.08 35.76 34.68-15.36 34.68-35.76 34.68S416 224.81 416 203.21Zm114.08 162h-26.64V356c-3.24 6.12-9.6 10.08-18.6 10.08-15.6 0-28-12.84-28-34.68s12.36-34.68 28-34.68c9 0 15.36 4 18.6 10.08v-30.38h26.64Zm-.32-155.89v27.72h-26.64v-67.67h26.64v12.48c5.28-7.56 13.44-13 22.2-13v28.44h-7.56c-9.6.04-14.64 2.8-14.64 12.04Zm84.68 126.73h-42.72c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.2c-2.88 14.4-16.08 25.2-33.12 25.2-20.28 0-34.56-13.08-34.56-34.68S560 296.7 580.24 296.7s34.56 12.84 34.56 34.08a39 39 0 0 1-.36 5.28Zm-17.12-98.17c-20.28 0-34.56-13.08-34.56-34.68s14.28-34.68 34.56-34.68 34.55 12.84 34.55 34.08a39 39 0 0 1-.36 5.28H588.8c.36 6.84 3.6 8.76 7.2 8.76a6.45 6.45 0 0 0 6.24-4h28.19c-2.88 14.45-16.07 25.25-33.11 25.25ZM700 365.22h-26.52V356c-3.24 6.12-9.72 10.08-18.72 10.08-15.6 0-28-12.84-28-34.68s12.36-34.68 28-34.68c9 0 15.48 4 18.72 10.08v-9.24H700Z"
  })), deepen_to_the_core_path4 || (deepen_to_the_core_path4 = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-2",
    d: "M304.78 86.41c5.52 0 9.84-4 9.84-11.4s-4.32-11.4-9.84-11.4-9.84 4-9.84 11.4 4.32 11.4 9.84 11.4ZM218.26 61.21c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84ZM580.24 317.58c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84ZM597.32 189.41c-4.44 0-7.44 2.16-8.28 6.84h15.84c0-4.68-3.6-6.84-7.56-6.84Z"
  })), /*#__PURE__*/external_react_.createElement("g", {
    style: {
      clipPath: "url(#deepen-to-the-core_svg__clip-path)"
    }
  }, deepen_to_the_core_path5 || (deepen_to_the_core_path5 = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-4",
    d: "M611.09 313.81c.4.79.79 1.59 1.13 2.42a29 29 0 0 1 4.71 6.26 35.58 35.58 0 0 1 4.44 18.12 37.33 37.33 0 0 1-.36 5.28h-9.08c-.13.34-.28.67-.43 1h10.38l.12-.89a37.93 37.93 0 0 0 .37-5.42A36.61 36.61 0 0 0 617.8 322a29.84 29.84 0 0 0-6.71-8.18M335.34 329.65v-9.91h-1v10.91h1.7v-1h-.7zM530.17 286.34h6.5v88.8H510v-9.24c-.31.57-.64 1.12-1 1.65a19.05 19.05 0 0 1-6.32 5.79 22.62 22.62 0 0 1-11.25 2.66 25.88 25.88 0 0 1-14.28-4.08 28.83 28.83 0 0 1-10.08-12c-.19-.43-.36-.87-.54-1.3a24.61 24.61 0 0 1-1.8-2 36.53 36.53 0 0 0 1.43 3.71 29.83 29.83 0 0 0 10.43 12.4 26.88 26.88 0 0 0 14.84 4.27 23.63 23.63 0 0 0 11.77-2.77 20 20 0 0 0 5.82-5v6.9h28.64v-90.8h-7.5ZM700 306.42v1h6.5v67.68H680v-9.24c-.31.57-.64 1.12-1 1.65a18.85 18.85 0 0 1-6.32 5.79 23.31 23.31 0 0 1-11.4 2.64 25.88 25.88 0 0 1-14.28-4.08 28.83 28.83 0 0 1-10.08-12c-.19-.42-.37-.86-.54-1.3a24.47 24.47 0 0 1-1.8-2 36.53 36.53 0 0 0 1.43 3.71 29.85 29.85 0 0 0 10.43 12.41 26.88 26.88 0 0 0 14.82 4.24 24.28 24.28 0 0 0 11.88-2.76 20.21 20.21 0 0 0 5.82-5v6.9h28.52v-69.64ZM619.84 350.83c-.07.34-.14.67-.22 1a29.32 29.32 0 0 1-5.9 12 32.76 32.76 0 0 1-11.64 9 36 36 0 0 1-15.36 3.17 37.83 37.83 0 0 1-18-4.2 30.46 30.46 0 0 1-12.24-12 32.73 32.73 0 0 1-1.58-3.39c-.63-.63-1.22-1.3-1.79-2a33.83 33.83 0 0 0 2.49 5.86 31.43 31.43 0 0 0 12.64 12.38 38.9 38.9 0 0 0 18.48 4.35 36.89 36.89 0 0 0 15.78-3.33 33.77 33.77 0 0 0 12-9.28 30.37 30.37 0 0 0 6.32-13.39l.24-1.2H610c-.19.34-.39.68-.59 1ZM314.16 314.37q.68 1.25 1.23 2.55a31 31 0 0 1 4.55 6.08 35.11 35.11 0 0 1 4.67 18.39 35.75 35.75 0 0 1-4.67 18.51 30.7 30.7 0 0 1-12.7 12 42.1 42.1 0 0 1-36.66 0 30.41 30.41 0 0 1-14.76-16c-.62-.63-1.21-1.28-1.78-2a34.17 34.17 0 0 0 2.85 6.48 32.57 32.57 0 0 0 13.22 12.4 43 43 0 0 0 37.58 0 31.67 31.67 0 0 0 13.1-12.41 36.78 36.78 0 0 0 4.81-19 36.17 36.17 0 0 0-4.81-18.9 31.49 31.49 0 0 0-6.64-8.12"
  })), deepen_to_the_core_path6 || (deepen_to_the_core_path6 = /*#__PURE__*/external_react_.createElement("path", {
    className: "deepen-to-the-core_svg__cls-4",
    d: "M491.38 341.29c0-3.43.88-6 2.5-7.72a8.19 8.19 0 0 1 6.34-2.68 9.11 9.11 0 0 1 3.34.6v-1.11a10 10 0 0 0-3.31-.53 9.19 9.19 0 0 0-7.08 3q-2.76 3-2.76 8.4v1c.33.11.67.2 1 .28v-1.25M281 341.29c0-3.72.81-6.32 2.27-8a6.83 6.83 0 0 1 5.48-2.64 7.26 7.26 0 0 1 2.25.35v-1a8 8 0 0 0-2.21-.31 7.84 7.84 0 0 0-6.24 3q-2.52 2.88-2.52 8.64v1.45a8.36 8.36 0 0 0 1 .2c0-.53-.06-1.07-.06-1.65M441.27 290.19h6.5v84.96h-26.64v-9.91h-1v10.91h28.64v-86.96h-7.5v1zM661.3 341.31c0-3.43.87-6 2.5-7.73a8.17 8.17 0 0 1 6.34-2.67 8.91 8.91 0 0 1 3.34.6v-1.11a10.39 10.39 0 0 0-3.31-.52 9.19 9.19 0 0 0-7.08 3q-2.76 3-2.76 8.4v1a8.89 8.89 0 0 0 1 .28v-1.24M373.62 278.93h-1v1h1q1.68 0 5.52.24v22.68l-1-.1c-.91-.09-1.58-.14-2-.14a8.89 8.89 0 0 0-3.5.61v1.1a7.25 7.25 0 0 1 3.5-.71c.5 0 1.45.08 2.89.24l1.11.12v-24.73l-.93-.06c-2.56-.16-4.43-.25-5.59-.25M379.17 307.45v22.2h-9.96v45.48h-26.64v-9.9h-1v10.9h28.64v-45.48h9.96v-24.2h-7.5v1h6.5z"
  }))));
};

/* harmony default export */ const deepen_to_the_core = (SvgDeepenToTheCore);
;// CONCATENATED MODULE: ./components/Homepage/Header/index.tsx








function HeaderComponent({
  backgroundVideo
}) {
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  return /*#__PURE__*/jsx_runtime_.jsx(Cover, {
    children: /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Div, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(VideoBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("video", {
            style: {
              width: (isMobile || isTablet || isSmallTablet) && !isSmallTablet ? '80vw' : isSmallTablet ? '80vw' : '710px',
              height: isMobile || isTablet || isSmallTablet ? 'unset' : '380px',
              position: isMobile || isTablet || isSmallTablet ? 'relative' : 'static',
              top: '1px'
            } // style={{
            //   width: isMobile ? "94vw" : "707px",
            //   height: isMobile ? "unset" : "380px",
            //   position: isMobile ? "relative" : "static",
            //   top: "1px",
            // }}
            ,
            autoPlay: true,
            loop: true,
            muted: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("source", {
              src: backgroundVideo,
              type: "video/mp4"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(PositionVideoSVG, {
            children: /*#__PURE__*/jsx_runtime_.jsx(deepen_to_the_core, {})
          })]
        }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(PositionHexagon1, {
            children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
              width: "235",
              viewBox: "0 0 391 450"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon2, {
            children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
              width: "235",
              viewBox: "0 0 391 450"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon3, {
            children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
              width: "235",
              viewBox: "0 0 391 450"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon4, {
            children: /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
              width: "235",
              viewBox: "0 0 391 450"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ScrollContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(ScrollText, {
            children: "scroll"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const Header = (HeaderComponent);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementOne/styles.tsx


const elementOne_styles_Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1qq0bdm-0"
})(["position:relative;width:338px;height:293px;background:center no-repeat url(\"element1.svg\");@media only screen and (max-width:", "){width:190px;height:220px;background-size:contain;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const styles_PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionLoading",
  componentId: "sc-1qq0bdm-1"
})(["position:absolute;z-index:2;right:10px;bottom:-24.5px;svg{opacity:", ";transition:all 1s ease-in;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, theme_get_default()('breakpoints.tablet'));
const PlusesPosition = external_styled_components_default().div.withConfig({
  displayName: "styles__PlusesPosition",
  componentId: "sc-1qq0bdm-2"
})(["position:absolute;z-index:0;left:22px;top:26.5px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/pluses/pluses.tsx + 2 modules
var pluses = __webpack_require__(9927);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementOne/elementOne.tsx






function ElementOne(props) {
  const {
    plusesColor,
    animation = false
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(elementOne_styles_Div, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PlusesPosition, {
      children: /*#__PURE__*/jsx_runtime_.jsx(pluses/* default */.Z, {
        plusesColor: plusesColor,
        animation: animation
      })
    }), animation && /*#__PURE__*/jsx_runtime_.jsx(styles_PositionLoading, {
      animation: animation,
      children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {})
    })]
  });
}

/* harmony default export */ const elementOne = (ElementOne);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementTwo/styles.tsx


const Element = external_styled_components_default().div.withConfig({
  displayName: "styles__Element",
  componentId: "sc-1rc9mrb-0"
})(["width:350px;height:182px;background:center no-repeat url(\"element2.svg\");@media only screen and (max-width:", "){width:190px;height:220px;background-size:contain;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const elementTwo_styles_PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionLoading",
  componentId: "sc-1rc9mrb-1"
})(["position:absolute;z-index:1;right:41px;top:-93px;svg{opacity:", ";transition:all 1s ease-in;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, theme_get_default()('breakpoints.tablet'));
const PositionPointsFirst = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionPointsFirst",
  componentId: "sc-1rc9mrb-2"
})(["position:absolute;z-index:1;right:167px;top:-25px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionPointsSecond = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionPointsSecond",
  componentId: "sc-1rc9mrb-3"
})(["position:absolute;z-index:1;right:42px;bottom:28px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
// EXTERNAL MODULE: ./public/loading2.svg
var loading2 = __webpack_require__(4955);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementTwo/elementTwo.tsx






function ElementTwo({
  animation
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Element, {
    children: [animation && /*#__PURE__*/jsx_runtime_.jsx(elementTwo_styles_PositionLoading, {
      animation: animation,
      children: /*#__PURE__*/jsx_runtime_.jsx(loading2/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionPointsFirst, {
      children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
        numberOfDots: 18,
        dotColor: '#000',
        animation: animation
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionPointsSecond, {
      children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
        numberOfDots: 21,
        dotColor: '#fec506',
        animation: animation
      })
    })]
  });
}

/* harmony default export */ const elementTwo = (ElementTwo);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/styles.tsx

const PositionElementOne = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionElementOne",
  componentId: "sc-11neiqb-0"
})(["position:relative;z-index:1;left:-2.5px;top:18px;"]);
const PositionElementTwo = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionElementTwo",
  componentId: "sc-11neiqb-1"
})(["position:relative;z-index:1;left:9.5px;top:18px;"]);
const PositionElementThree = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionElementThree",
  componentId: "sc-11neiqb-2"
})(["position:relative;z-index:1;left:6.5px;top:18px;"]);
const PositionElementFour = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionElementFour",
  componentId: "sc-11neiqb-3"
})(["position:relative;z-index:1;left:4.5px;top:18px;"]);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementThree/styles.tsx


const styles_Element = external_styled_components_default().div.withConfig({
  displayName: "styles__Element",
  componentId: "sc-zdmgqp-0"
})(["position:relative;width:356px;height:309px;background:center no-repeat url(\"element3.svg\");@media only screen and (max-width:", "){width:190px;height:220px;background-size:contain;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const Circle = external_styled_components_default().div.withConfig({
  displayName: "styles__Circle",
  componentId: "sc-zdmgqp-1"
})(["height:32.5px;width:32.5px;border-radius:50%;background-color:#FEC506;transform:", ";transition:transform 1s ease-in-out;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return 'scale(1)';
  } else {
    return 'scale(0)';
  }
}, theme_get_default()('breakpoints.tablet'));
const CircleWithGradient = external_styled_components_default().div.withConfig({
  displayName: "styles__CircleWithGradient",
  componentId: "sc-zdmgqp-2"
})(["height:57px;width:56px;border-radius:50%;background:linear-gradient(180deg,#FEC506 0%,rgba(254,197,6,0) 100%);transform:", ";transition:transform 1s ease-in-out;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return 'rotate(-90deg) scale(1)';
  } else {
    return 'rotate(-90deg) scale(0)';
  }
}, theme_get_default()('breakpoints.tablet'));
const PositionPluses = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionPluses",
  componentId: "sc-zdmgqp-3"
})(["position:absolute;right:22px;bottom:-1px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionCircle = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCircle",
  componentId: "sc-zdmgqp-4"
})(["position:absolute;right:84px;bottom:137px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const PositionCircleWithGradient = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCircleWithGradient",
  componentId: "sc-zdmgqp-5"
})(["position:absolute;right:206px;bottom:124px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementThree/elementThree.tsx





function ElementThree(props) {
  const {
    plusesColor,
    animation
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Element, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PositionPluses, {
      children: /*#__PURE__*/jsx_runtime_.jsx(pluses/* default */.Z, {
        plusesColor: plusesColor,
        animation: animation
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionCircle, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Circle, {
        animation: animation
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionCircleWithGradient, {
      children: /*#__PURE__*/jsx_runtime_.jsx(CircleWithGradient, {
        animation: animation
      })
    })]
  });
}

/* harmony default export */ const elementThree = (ElementThree);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementFour/styles.tsx


const elementFour_styles_Element = external_styled_components_default().div.withConfig({
  displayName: "styles__Element",
  componentId: "sc-bj4nj2-0"
})(["position:relative;width:300px;height:300px;background:center no-repeat url(\"element4.svg\");@media only screen and (max-width:", "){width:190px;height:190px;background-size:contain;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const elementFour_styles_PositionLoading = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionLoading",
  componentId: "sc-bj4nj2-1"
})(["position:absolute;z-index:0;right:-27px;bottom:-20px;svg{opacity:", ";transition:all 1s ease-in;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, theme_get_default()('breakpoints.tablet'));
const styles_PositionDots = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionDots",
  componentId: "sc-bj4nj2-2"
})(["position:absolute;z-index:0;left:-15px;top:13px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
const styles_CircleWithGradient = external_styled_components_default().div.withConfig({
  displayName: "styles__CircleWithGradient",
  componentId: "sc-bj4nj2-3"
})(["height:70px;width:70px;border-radius:50%;background:linear-gradient(180deg,#FEC506 0%,rgba(254,197,6,0) 100%);transform:", ";transition:transform 1s ease-in-out;@media only screen and (max-width:", "){display:none;}"], ({
  animation
}) => {
  if (animation) {
    return 'scale(1)';
  } else {
    return 'scale(0)';
  }
}, theme_get_default()('breakpoints.tablet'));
const styles_PositionCircleWithGradient = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionCircleWithGradient",
  componentId: "sc-bj4nj2-4"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'));
// EXTERNAL MODULE: ./public/loading3.svg
var loading3 = __webpack_require__(7599);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elementFour/elementFour.tsx






function ElementFour({
  animation
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(elementFour_styles_Element, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(styles_PositionDots, {
      children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
        numberOfDots: 18,
        dotColor: '#000',
        animation: animation
      })
    }), animation && /*#__PURE__*/jsx_runtime_.jsx(elementFour_styles_PositionLoading, {
      animation: animation,
      children: /*#__PURE__*/jsx_runtime_.jsx(loading3/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(styles_PositionCircleWithGradient, {
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_CircleWithGradient, {
        animation: animation
      })
    })]
  });
}

/* harmony default export */ const elementFour = (ElementFour);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/elements/elements.tsx









function Elements({
  elementNumber,
  plusesColor,
  animation
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [elementNumber === 0 && /*#__PURE__*/jsx_runtime_.jsx(PositionElementOne, {
      children: /*#__PURE__*/jsx_runtime_.jsx(elementOne, {
        plusesColor: plusesColor,
        animation: animation
      })
    }), elementNumber === 1 && /*#__PURE__*/jsx_runtime_.jsx(PositionElementTwo, {
      children: /*#__PURE__*/jsx_runtime_.jsx(elementTwo, {
        animation: animation
      })
    }), elementNumber === 2 && /*#__PURE__*/jsx_runtime_.jsx(PositionElementThree, {
      children: /*#__PURE__*/jsx_runtime_.jsx(elementThree, {
        plusesColor: "#000",
        animation: animation
      })
    }), elementNumber === 3 && /*#__PURE__*/jsx_runtime_.jsx(PositionElementFour, {
      children: /*#__PURE__*/jsx_runtime_.jsx(elementFour, {
        animation: animation
      })
    })]
  });
}

/* harmony default export */ const elements_elements = (Elements);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/InfoBlock/styles.tsx


const InfoBlock_styles_Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1ipvdn6-0"
})(["display:flex;flex-direction:column;max-width:100%;padding:20px;@media only screen and (max-width:", "){max-width:435px;}@media only screen and (max-width:", "){max-width:410px;}@media only screen and (max-width:", "){max-width:480px;}@media only screen and (max-width:", "){max-width:410px;padding:10px 0;}@media only screen and (max-width:", "){max-width:100%;padding:10px 0;}"], theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const styles_H2 = external_styled_components_default().h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-1ipvdn6-1"
})(["width:531px;font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:0.05em;text-transform:capitalize;color:#000;max-width:100%;@media only screen and (max-width:", "){width:100%;font-size:var(--fs-28);line-height:40px;}@media only screen and (max-width:", "){line-height:30px;font-size:var(--fs-23);}"], theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const PositionH2 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionH2",
  componentId: "sc-1ipvdn6-2"
})(["margin-bottom:16px;@media only screen and (max-width:", "){width:100%;}"], theme_get_default()('breakpoints.mobile'));
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "styles__H3",
  componentId: "sc-1ipvdn6-3"
})(["font-family:Poppins;font-style:normal;font-weight:700;font-size:var(--fs-21);line-height:31.5px;letter-spacing:0.05em;color:#9CA3A7;@media only screen and (max-width:", "){margin-top:20px;}"], theme_get_default()('breakpoints.mobile'));
const PositionH3 = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionH3",
  componentId: "sc-1ipvdn6-4"
})(["margin-bottom:31px;@media only screen and (max-width:", "){display:", ";}"], theme_get_default()('breakpoints.tablet'), ({
  index
}) => index === 0 ? 'block' : 'none');
const PositionText = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionText",
  componentId: "sc-1ipvdn6-5"
})(["margin-bottom:33px;"]);
const styles_Text = external_styled_components_default().strong.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1ipvdn6-6"
})(["display:block;width:501px;font-family:Poppins;font-style:normal;font-weight:400;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454A4D;max-width:100%;@media only screen and (max-width:", "){width:100%;line-height:27px;}"], theme_get_default()('breakpoints.sTablet'));
// EXTERNAL MODULE: ./components/ButtonWithArrow/index.tsx + 1 modules
var ButtonWithArrow = __webpack_require__(5982);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/InfoBlock/InfoBlock.tsx





function InfoBlock({
  slide,
  button,
  index
}) {
  const {
    title,
    description
  } = slide;
  const {
    label,
    url
  } = button;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoBlock_styles_Div, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PositionH3, {
      index: index,
      children: /*#__PURE__*/jsx_runtime_.jsx(H3, {
        children: "How to cooperate?"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionH2, {
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_H2, {
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionText, {
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_Text, {
        children: description
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
      buttonLabel: label,
      redirectTo: url,
      padding: "23px 35px"
    })]
  });
}

/* harmony default export */ const InfoBlock_InfoBlock = (InfoBlock);
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/styles.tsx


const Cooperate = external_styled_components_default().div.withConfig({
  displayName: "styles__Cooperate",
  componentId: "sc-1fbrcfq-0"
})(["height:89vh;overflow:hidden;section{position:relative;max-width:1166px;margin:0 auto;}"]);
const Cooperate_styles_Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1fbrcfq-1"
})(["position:absolute;display:flex;flex-direction:column;top:", ";transition:all 0.5s ease-in-out;"], ({
  slide
}) => {
  if (slide) {
    return `calc((-${slide} * (100vh - 104px)))`;
  }

  return 0;
});
const Slider = external_styled_components_default().div.withConfig({
  displayName: "styles__Slider",
  componentId: "sc-1fbrcfq-2"
})(["display:flex;position:relative;height:calc(100vh - 105px);margin-right:23px;padding-top:23.2vh;padding-bottom:33.2vh;@media only screen and (max-width:", "){padding-top:90px;padding-bottom:0;height:max-content;}@media only screen and (max-width:", "){padding-top:35px;}@media only screen and (max-width:", "){margin-right:0;}@media only screen and (max-width:", "){flex-wrap:wrap;padding-top:15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const styles_Number = external_styled_components_default().div.withConfig({
  displayName: "styles__Number",
  componentId: "sc-1fbrcfq-3"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-150);line-height:225px;letter-spacing:0.05em;text-transform:uppercase;width:200px;color:#18181A;@media only screen and (max-width:", "){font-size:90px;width:115px;}@media only screen and (max-width:", "){width:120px;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const PositionNumber = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionNumber",
  componentId: "sc-1fbrcfq-4"
})(["position:relative;z-index:1;margin-top:20px;"]);
const InfoContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__InfoContainer",
  componentId: "sc-1fbrcfq-5"
})(["display:flex;gap:", ";@media only screen and (max-width:", "){gap:30px;}@media only screen and (max-width:", "){gap:10px;}@media only screen and (max-width:", "){gap:20px;}@media only screen and (max-width:", "){flex-wrap:wrap;gap:0;}"], ({
  withGap
}) => withGap ? '100px' : '25px', theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const PositionInfo = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionInfo",
  componentId: "sc-1fbrcfq-6"
})(["position:relative;right:", ";margin-top:6px;@media only screen and (max-width:", "){right:70px;}@media only screen and (max-width:", "){right:0;}"], ({
  positionRight
}) => positionRight, theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const ElementsPosition = external_styled_components_default().div.withConfig({
  displayName: "styles__ElementsPosition",
  componentId: "sc-1fbrcfq-7"
})(["display:flex;position:relative;margin-right:24px;margin-left:76px;@media only screen and (max-width:", "){margin-right:0;margin-left:0;}"], theme_get_default()('breakpoints.tabletPro'));
const PositionScrollSlider = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionScrollSlider",
  componentId: "sc-1fbrcfq-8"
})(["position:absolute;top:37.3vh;left:-10px;@media only screen and (max-width:", "){left:5%;}"], theme_get_default()('breakpoints.mobile'));
;// CONCATENATED MODULE: ./components/Homepage/Cooperate/index.tsx







function CooperateComponent({
  slide,
  index,
  plusesColor,
  button
}) {
  var _slide$image, _slide$image$data;

  const {
    0: animation1,
    1: setAnimation1
  } = (0,external_react_.useState)(false);
  const {
    0: animation2,
    1: setAnimation2
  } = (0,external_react_.useState)(false);
  const {
    0: animation3,
    1: setAnimation3
  } = (0,external_react_.useState)(false);
  const {
    0: animation4,
    1: setAnimation4
  } = (0,external_react_.useState)(false);
  const icon = (_slide$image = slide.image) === null || _slide$image === void 0 ? void 0 : (_slide$image$data = _slide$image.data) === null || _slide$image$data === void 0 ? void 0 : _slide$image$data.attributes;

  const getPositionRight = number => {
    if (number === 0) {
      return "70px;";
    }

    if (number === 1) {
      return "85px;";
    }

    if (number === 2) {
      return "95px;";
    }

    if (number === 3) {
      return "46.5px;";
    }

    return "";
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Slider, {
    onMouseEnter: () => {
      if (index === 0) {
        setAnimation1(true);
      }

      if (index === 1) {
        setAnimation2(true);
      }

      if (index === 2) {
        setAnimation3(true);
      }

      if (index === 3) {
        setAnimation4(true);
      }
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ElementsPosition, {
      children: [index === 0 && /*#__PURE__*/jsx_runtime_.jsx(elements_elements, {
        elementNumber: index,
        plusesColor: plusesColor,
        animation: animation1
      }), index === 1 && /*#__PURE__*/jsx_runtime_.jsx(elements_elements, {
        elementNumber: index,
        plusesColor: plusesColor,
        animation: animation2
      }), index === 2 && /*#__PURE__*/jsx_runtime_.jsx(elements_elements, {
        elementNumber: index,
        plusesColor: plusesColor,
        animation: animation3
      }), index === 3 && /*#__PURE__*/jsx_runtime_.jsx(elements_elements, {
        elementNumber: index,
        plusesColor: plusesColor,
        animation: animation4
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionInfo, {
      positionRight: getPositionRight(index),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionNumber, {
          children: /*#__PURE__*/jsx_runtime_.jsx(styles_Number, {
            children: `0${index + 1}`
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(InfoBlock_InfoBlock, {
          index: index,
          slide: slide,
          button: button
        })]
      })
    })]
  }, index);
}

/* harmony default export */ const Homepage_Cooperate = (CooperateComponent);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./components/common/VerticalFullPageSlider/index.tsx + 6 modules
var VerticalFullPageSlider = __webpack_require__(7018);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./graphql/homepage/queries.ts

const GET_HOMEPAGE = client_.gql`
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
                        Technology_name
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
                        Technology_name
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
                        width
                        height
                      }
                    }
                  }
                  project {
                    data {
                      attributes {
                        location {
                          data {
                            attributes {
                              location {
                                lat
                                lng
                                id
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
// EXTERNAL MODULE: ./components/common/VerticalFullPageSlider/types.ts
var types = __webpack_require__(8740);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx + 15 modules
var EmbodiedIdeas = __webpack_require__(2910);
// EXTERNAL MODULE: ./components/News/index.tsx + 3 modules
var News = __webpack_require__(2867);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/index.tsx
























const titles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];
const bgColorBlack = theme/* theme.colors.black */.r.colors.black;
const bgColorWhite = theme/* theme.colors.white */.r.colors.white;
const contactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
  buttonLabel: "send"
};

const Home = ({
  data,
  networkStatus
}) => {
  var _data$homePage, _data$homePage$data, _entry$banner$titleTe, _entry$banner$titleTe2, _entry$services$servi, _entry$embodiedIdeas$, _entry$insights$artic, _entry$technologies$t, _entry$aboutUs$feedba, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2;

  const entry = data === null || data === void 0 ? void 0 : (_data$homePage = data.homePage) === null || _data$homePage === void 0 ? void 0 : (_data$homePage$data = _data$homePage.data) === null || _data$homePage$data === void 0 ? void 0 : _data$homePage$data.attributes;
  const backgroundVideo = constants/* IMAGES_LINK */.rS + (entry === null || entry === void 0 ? void 0 : (_entry$banner$titleTe = entry.banner.titleTexture.data) === null || _entry$banner$titleTe === void 0 ? void 0 : (_entry$banner$titleTe2 = _entry$banner$titleTe.attributes) === null || _entry$banner$titleTe2 === void 0 ? void 0 : _entry$banner$titleTe2.url);
  const coopSteps = entry === null || entry === void 0 ? void 0 : entry.coopSteps.steps;
  const coopButton = entry === null || entry === void 0 ? void 0 : entry.coopSteps.button;
  const servicesTitle = entry === null || entry === void 0 ? void 0 : entry.services.title;
  const servicesDescription = entry === null || entry === void 0 ? void 0 : entry.services.description;
  const servicesLabels = entry === null || entry === void 0 ? void 0 : (_entry$services$servi = entry.services.services) === null || _entry$services$servi === void 0 ? void 0 : _entry$services$servi.data;
  const embodiedIdeasTitle = entry === null || entry === void 0 ? void 0 : entry.embodiedIdeas.title;
  const embodiedIdeasButtonIntro = entry === null || entry === void 0 ? void 0 : entry.embodiedIdeas.buttonIntro;
  const embodiedIdeasButton = entry === null || entry === void 0 ? void 0 : entry.embodiedIdeas.button;
  const projects = entry === null || entry === void 0 ? void 0 : (_entry$embodiedIdeas$ = entry.embodiedIdeas.projects) === null || _entry$embodiedIdeas$ === void 0 ? void 0 : _entry$embodiedIdeas$.data;
  const articles = entry === null || entry === void 0 ? void 0 : (_entry$insights$artic = entry.insights.articles) === null || _entry$insights$artic === void 0 ? void 0 : _entry$insights$artic.data;
  const newsTitle = entry === null || entry === void 0 ? void 0 : entry.insights.intro;
  const contactUsTitle = entry === null || entry === void 0 ? void 0 : entry.contactUs.title;
  const contactUsSubtitle = entry === null || entry === void 0 ? void 0 : entry.contactUs.subtitle;
  const aboutUsTitle = entry === null || entry === void 0 ? void 0 : entry.aboutUs.title;
  const aboutUsDescription = entry === null || entry === void 0 ? void 0 : entry.aboutUs.description;
  const technologiesTitle = entry === null || entry === void 0 ? void 0 : entry.technologies.title;
  const techStacks = entry === null || entry === void 0 ? void 0 : (_entry$technologies$t = entry.technologies.tech_stacks) === null || _entry$technologies$t === void 0 ? void 0 : _entry$technologies$t.data;
  const reviews = entry === null || entry === void 0 ? void 0 : (_entry$aboutUs$feedba = entry.aboutUs.feedbacks) === null || _entry$aboutUs$feedba === void 0 ? void 0 : _entry$aboutUs$feedba.data;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== 'undefined' && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;

  const renderSlide = (slide, index) => slide && coopButton && /*#__PURE__*/jsx_runtime_.jsx(Homepage_Cooperate, {
    slide: slide,
    index: index,
    button: coopButton,
    plusesColor: theme/* theme.colors.yellow */.r.colors.yellow
  });

  const renderCondition = backgroundVideo && coopSteps && servicesTitle && servicesDescription && servicesLabels && projects && articles && newsTitle && contactUsTitle && contactUsSubtitle && aboutUsTitle && aboutUsDescription && technologiesTitle && techStacks && reviews;
  if (networkStatus !== 7) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderCondition && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [seoTitle && /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: seoTitle
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:site_name",
          content: "Incora - European software development company"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:type",
          content: "article"
        }), seoTitle && /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: seoTitle
        }), seoDescription && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: seoDescription
        }), seoKeywords && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "keywords",
          content: seoKeywords
        }), seoTitle && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:title",
          content: seoTitle
        }), seoDescription && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:description",
          content: seoDescription
        }), seoImage && /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:url",
          content: seoImage
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
          titles: titles,
          backgroundColor: bgColorBlack,
          titlesColor: bgColorWhite,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
            backgroundVideo: backgroundVideo
          }), /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider/* default */.Z, {
            slides: coopSteps,
            renderSlide: renderSlide,
            scrollListType: types/* ScrollListTypes.NUMBER */.p.NUMBER
          }), /*#__PURE__*/jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/jsx_runtime_.jsx(services, {
              title: servicesTitle,
              text: servicesDescription,
              labels: servicesLabels
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Technologies, {
              bgColor: bgColorBlack,
              title: technologiesTitle,
              techStacks: techStacks
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas/* default */.Z, {
            title: embodiedIdeasTitle,
            bgColor: theme/* theme.colors.white */.r.colors.white,
            elementsColor: theme/* theme.colors.yellow */.r.colors.yellow,
            projects: projects,
            buttonIntro: embodiedIdeasButtonIntro,
            button: embodiedIdeasButton
          }), /*#__PURE__*/jsx_runtime_.jsx(Homepage_Video, {}), /*#__PURE__*/jsx_runtime_.jsx(Homepage_AboutUs, {
            backgroundColor: bgColorBlack,
            title: aboutUsTitle,
            text: aboutUsDescription
          }), /*#__PURE__*/jsx_runtime_.jsx(Homepage_Reviews, {
            reviews: reviews
          }), /*#__PURE__*/jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/jsx_runtime_.jsx(News/* default */.Z, {
              title: newsTitle,
              articles: articles
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ContactUs/* default */.Z, {
            title: contactUsTitle,
            text: contactUsSubtitle,
            addresses: contactUs.addresses,
            buttonLabel: contactUs.buttonLabel
          }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
        })
      })]
    })
  });
};

async function getServerSideProps() {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    data,
    networkStatus
  } = await client.query({
    query: GET_HOMEPAGE
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 5986:
/***/ ((module) => {

module.exports = require("@apollo/client/link/http");

/***/ }),

/***/ 9099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,6074,3478,7305,9210,3795,2910,2867,5802,7599,7018,4171,9101], () => (__webpack_exec__(2046)));
module.exports = __webpack_exports__;

})();