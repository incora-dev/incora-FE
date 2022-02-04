"use strict";
(() => {
var exports = {};
exports.id = 7054;
exports.ids = [7054,2197];
exports.modules = {

/***/ 1624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  EXPERTISE: {
    TECHNOLOGIES: "/expertise/technologies/"
  },
  CASE_STUDIES: "/case_studies/",
  SERVICES: "/services/",
  INSIGHTS: "/insights/",
  CONTACTS: "/contacts/",
  COMPANY: {
    DEFAULT: "/company/",
    ABOUT: "/about/",
    CAREER: "/career/",
    SEND_CV: "send_cv"
  }
};

/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ services),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Services/Services.styles.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__Div",
  componentId: "sc-khibzk-0"
})(["position:relative;height:calc(565px - 104px);overflow:hidden;svg{position:absolute;bottom:-5px;right:0;@media only screen and (max-width:", "){right:-53px;bottom:-30px;}@media only screen and (max-width:", "){bottom:-72px;}}@media only screen and (max-width:", "){height:fit-content;padding-bottom:90px;}@media only screen and (max-width:", "){height:fit-content;padding-bottom:290px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const Container = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__Container",
  componentId: "sc-khibzk-1"
})(["max-width:1006px;margin:auto;@media only screen and (max-width:", "){max-width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tabletPro'));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__TextBlock",
  componentId: "sc-khibzk-2"
})(["padding-top:116px;display:flex;flex-direction:column;row-gap:20px;@media only screen and (max-width:", "){max-width:60%;padding-top:80px;}@media only screen and (max-width:", "){max-width:100%;padding-top:50px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "Servicesstyles__H1",
  componentId: "sc-khibzk-3"
})(["max-width:560px;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;text-transform:capitalize;color:#000000;@media only screen and (max-width:", "){font-size:var(--fs-40);line-height:60px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-28);line-height:42px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const Strong = external_styled_components_default().strong.withConfig({
  displayName: "Servicesstyles__Strong",
  componentId: "sc-khibzk-4"
})(["max-width:560px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454A4D;@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()('breakpoints.sTablet'));
const PositionDots = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__PositionDots",
  componentId: "sc-khibzk-5"
})(["position:absolute;bottom:117px;right:0;"]);
const rotation = (0,external_styled_components_.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(-180deg);}"]);
const PositionCube1 = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__PositionCube1",
  componentId: "sc-khibzk-6"
})(["position:absolute;bottom:154px;right:331px;@media only screen and (max-width:", "){display:none;}@media only screen and (max-width:", "){display:block;transform:scale(0.7);right:225px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const PositionCube2 = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__PositionCube2",
  componentId: "sc-khibzk-7"
})(["position:absolute;bottom:252px;right:34px;@media only screen and (max-width:", "){transform:scale(0.8);bottom:215px;}"], theme_get_default()('breakpoints.mobile'));
const PositionCube3 = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__PositionCube3",
  componentId: "sc-khibzk-8"
})(["position:absolute;bottom:94px;right:148px;@media only screen and (max-width:", "){bottom:55px;right:85px;}@media only screen and (max-width:", "){transform:scale(0.8);right:100px;}"], theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const PositionLoaderBagelTrimmed = external_styled_components_default().div.withConfig({
  displayName: "Servicesstyles__PositionLoaderBagelTrimmed",
  componentId: "sc-khibzk-9"
})(["position:absolute;bottom:300px;right:299px;svg{opacity:", ";transition:all 1s ease-in-out;transform:rotate(-180deg);animation:", " 0.5s linear;path{fill:", ";}}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, rotation, ({
  color
}) => color);
// EXTERNAL MODULE: ./public/loading3.svg
var loading3 = __webpack_require__(7599);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/cubes/Cube1.svg
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _path11;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgCube1 = function SvgCube1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 224,
    height: 247,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
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
;// CONCATENATED MODULE: ./public/SVG/cubes/Cube2.svg
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
;// CONCATENATED MODULE: ./public/SVG/cubes/Cube3.svg
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Services/index.tsx












const ServicesComponent = ({
  banner
}) => {
  const {
    title,
    description
  } = banner;
  const blackColor = theme/* theme.colors.black */.r.colors.black;
  const {
    0: animation,
    1: setAnimation
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
    onMouseEnter: () => setAnimation(true),
    children: [/*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          children: "Services"
        }), /*#__PURE__*/jsx_runtime_.jsx(Strong, {
          children: "We build, launch, and grow outstanding software products since 2015, by delivering a full set of development services. We are here to support your idea from its inception to the production."
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(loading3/* default */.Z, {
        width: 338,
        height: 338,
        viewBox: "0 0 187 187"
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionDots, {
        children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
          numberOfDots: 18,
          dotColor: blackColor,
          animation: animation
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube1, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Cube1, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube2, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Cube2, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionCube3, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Cube3, {})
      }), animation && /*#__PURE__*/jsx_runtime_.jsx(PositionLoaderBagelTrimmed, {
        color: blackColor,
        animation: animation,
        children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
          width: 63,
          heigh: 63,
          viewBox: "0 0 96 96"
        })
      })]
    })]
  });
};

/* harmony default export */ const Services = (ServicesComponent);
;// CONCATENATED MODULE: ./components/Services/Information/Information.style.tsx


const Information_style_Div = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Div",
  componentId: "sc-5l5oft-0"
})(["font-family:Poppins,serif;overflow:hidden;background-color:", ";"], ({
  bgColor
}) => bgColor);
const Information_style_Container = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Container",
  componentId: "sc-5l5oft-1"
})(["position:relative;max-width:1006px;padding:120px 0 130px 0;margin:auto;display:flex;column-gap:20px;@media only screen and (max-width:", "){flex-direction:column;padding:25px 15px;gap:25px;}"], theme_get_default()('breakpoints.mobile'));
const MenuBlock = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__MenuBlock",
  componentId: "sc-5l5oft-2"
})(["min-width:307px;position:relative;top:9px;left:-30px;display:flex;flex-direction:column;row-gap:13px;"]);
const EstimatedTimeAndOutcomesBlock = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__EstimatedTimeAndOutcomesBlock",
  componentId: "sc-5l5oft-3"
})(["margin-top:10px;padding:38px 30px;display:flex;justify-content:space-between;background:#212125;@media only screen and (max-width:", "){padding:25px 20px;}@media only screen and (max-width:", "){flex-direction:column;gap:20px;padding:28px 15px;}"], theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const Block = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Block",
  componentId: "sc-5l5oft-4"
})(["display:flex;column-gap:15px;"]);
const Package = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Package",
  componentId: "sc-5l5oft-5"
})(["display:flex;flex-direction:column;row-gap:7px;"]);
const EstimatedTime = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__EstimatedTime",
  componentId: "sc-5l5oft-6"
})(["padding:40px 30px 0;display:flex;flex-direction:column;row-gap:10px;"]);
const Information_style_TextBlock = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__TextBlock",
  componentId: "sc-5l5oft-7"
})(["width:679px;margin-left:300px;padding:120px 0;display:flex;flex-direction:column;row-gap:16px;@media only screen and (max-width:", "){width:100%}@media only screen and (max-width:", "){max-width:100%;margin-left:0;padding:30px 0;}@media only screen and (max-width:", "){margin:0;padding:0;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "Informationstyle__H2",
  componentId: "sc-5l5oft-8"
})(["width:490px;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;color:#FFFFFF;@media only screen and (max-width:", "){width:100%;color:", ";}"], theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'), theme_get_default()('colors.black'));
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "Informationstyle__H3",
  componentId: "sc-5l5oft-9"
})(["font-style:normal;font-weight:800;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;text-transform:uppercase;color:#FFFFFF;"]);
const P = external_styled_components_default().p.withConfig({
  displayName: "Informationstyle__P",
  componentId: "sc-5l5oft-10"
})(["font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#BCBCC0;@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()('breakpoints.sTablet'));
const Text = external_styled_components_default().p.withConfig({
  displayName: "Informationstyle__Text",
  componentId: "sc-5l5oft-11"
})(["max-width:382px;font-style:normal;font-weight:normal;font-size:var(--fs-12);line-height:23px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){max-width:250px;}@media only screen and (max-width:", "){max-width:204px;}"], theme_get_default()('colors.font1'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const MenuLabel = external_styled_components_default().button.withConfig({
  displayName: "Informationstyle__MenuLabel",
  componentId: "sc-5l5oft-12"
})(["font-style:normal;font-weight:bold;font-size:var(--fs-16);line-height:24px;text-align:left;letter-spacing:0.05em;border:none;background:", ";transition:all 0.3s ease-in-out;"], ({
  bgColor
}) => {
  if (bgColor === '#FEC602') {
    return '#FEC602';
  } else {
    return 'none';
  }
});
const PositionButtonWithArrow = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__PositionButtonWithArrow",
  componentId: "sc-5l5oft-13"
})(["margin-top:22px;"]);
// EXTERNAL MODULE: ./public/SVG/estimatedTimeIco.svg
var estimatedTimeIco = __webpack_require__(4122);
// EXTERNAL MODULE: ./public/SVG/OutcomesLogo.svg
var OutcomesLogo = __webpack_require__(2981);
// EXTERNAL MODULE: ./components/ButtonWithArrow/index.tsx + 1 modules
var ButtonWithArrow = __webpack_require__(5982);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
;// CONCATENATED MODULE: ./components/Services/Information/index.tsx











const InformationComponent = ({
  slide
}) => {
  const {
    id,
    attributes
  } = slide;
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();

  const getEstimatedTimeInfo = slide => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Block, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(OutcomesLogo/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Package, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H3, {
          children: "estimated time"
        }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: slide.estimatedTime
        })]
      })]
    });
  };

  const getOutcomesInfo = slide => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Block, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(estimatedTimeIco/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Package, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H3, {
          children: "outcomes"
        }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: slide.outcomes
        })]
      })]
    });
  };

  const getBlockInformation = slide => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [!isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/jsx_runtime_.jsx(H2, {
        children: slide.name
      }), /*#__PURE__*/jsx_runtime_.jsx(P, {
        children: slide.descriptionForServicesPage
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EstimatedTimeAndOutcomesBlock, {
        children: [getEstimatedTimeInfo(slide), getOutcomesInfo(slide)]
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: attributes && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Information_style_TextBlock, {
      children: [getBlockInformation(attributes), /*#__PURE__*/jsx_runtime_.jsx(PositionButtonWithArrow, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
          buttonLabel: "read more",
          redirectTo: routes/* ROUTES.SERVICES */.Z.SERVICES + `${attributes.url}/${id}`,
          padding: "23px 35px;"
        })
      })]
    })
  });
};

/* harmony default export */ const Information = (InformationComponent);
;// CONCATENATED MODULE: ./components/Services/TechStack/TechStack.style.tsx


const TechStack_style_Div = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__Div",
  componentId: "sc-1azuc5f-0"
})(["height:max-content;overflow:hidden;"]);
const TechStack_style_Container = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__Container",
  componentId: "sc-1azuc5f-1"
})(["position:relative;max-width:1006px;margin:117px auto auto;display:flex;flex-direction:column;row-gap:30px;@media only screen and (max-width:", "){max-width:100%;padding:0 25px;margin:60px auto;}@media only screen and (max-width:", "){margin-top:53px;padding:0 15px;row-gap:15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const TechStack_style_H2 = external_styled_components_default().h2.withConfig({
  displayName: "TechStackstyle__H2",
  componentId: "sc-1azuc5f-2"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;text-transform:capitalize;color:#000000;@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:50px;}"], theme_get_default()('breakpoints.tablet'));
const TechStack_style_H3 = external_styled_components_default().h3.withConfig({
  displayName: "TechStackstyle__H3",
  componentId: "sc-1azuc5f-3"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;color:#000000;@media only screen and (max-width:", "){font-size:var(--fs-28);line-height:48px;}"], theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.tablet'));
const StackText = external_styled_components_default().p.withConfig({
  displayName: "TechStackstyle__StackText",
  componentId: "sc-1azuc5f-4"
})(["max-width:495px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454A4D;@media only screen and (max-width:", "){max-width:100%;}"], theme_get_default()('breakpoints.tablet'));
const StacksContainer = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__StacksContainer",
  componentId: "sc-1azuc5f-5"
})(["max-width:403px;height:max-content;padding:50px 48px;background:#FBFBFB;@media only screen and (max-width:", "){max-width:100%;padding:20px 0;background:", ";}@media only screen and (max-width:", "){padding:0;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('colors.white'), theme_get_default()('breakpoints.mobile'));
const StacksBlock = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__StacksBlock",
  componentId: "sc-1azuc5f-6"
})(["display:grid;grid-template-columns:", ";grid-template-rows:1fr min-content;grid-row-gap:35px;grid-column-gap:58px;white-space:nowrap;@media only screen and (max-width:", "){display:flex;padding:20px 0;flex-wrap:wrap;column-gap:30px;row-gap:30px;white-space:initial;}"], ({
  columns
}) => `repeat(${columns}, 1fr)`, theme_get_default()('breakpoints.tablet'));
const LogoAndTitle = external_styled_components_default().a.withConfig({
  displayName: "TechStackstyle__LogoAndTitle",
  componentId: "sc-1azuc5f-7"
})(["display:flex;flex-direction:column;row-gap:11px;justify-content:center;cursor:pointer;svg{align-self:center;}@media only screen and (max-width:", "){max-width:140px;}@media only screen and (max-width:", "){max-width:95px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const StackTitle = external_styled_components_default().p.withConfig({
  displayName: "TechStackstyle__StackTitle",
  componentId: "sc-1azuc5f-8"
})(["font-family:Poppins;font-style:normal;font-weight:500;font-size:var(--fs-11);line-height:16px;text-align:center;letter-spacing:0.05em;text-transform:capitalize;color:#000000;"]);
const InfoBlock = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__InfoBlock",
  componentId: "sc-1azuc5f-9"
})(["margin-top:38px;margin-bottom:155px;display:flex;justify-content:space-between;@media only screen and (max-width:", "){margin-bottom:60px;}@media only screen and (max-width:", "){flex-direction:column;margin-bottom:20px;}@media only screen and (max-width:", "){flex-direction:column;gap:30px;margin-top:18px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const TextContainer = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__TextContainer",
  componentId: "sc-1azuc5f-10"
})(["display:flex;flex-direction:column;row-gap:17px;"]);
const DotsPosition = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__DotsPosition",
  componentId: "sc-1azuc5f-11"
})(["position:absolute;top:-17px;right:-115px;div{transform:rotate(60deg);}"]);
const TechStack_style_rotation = (0,external_styled_components_.keyframes)(["from{transform:rotate(-90deg);}to{transform:rotate(0);}"]);
const LoaderPosition = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__LoaderPosition",
  componentId: "sc-1azuc5f-12"
})(["position:absolute;top:16px;right:-249px;svg{path{fill:black;}opacity:", ";animation:", " 0.5s linear;transition:all 0.5s ease-in-out;}"], ({
  animation
}) => {
  if (animation) {
    return '1';
  } else {
    return '0';
  }
}, TechStack_style_rotation);
const TechStack_style_PositionButtonWithArrow = external_styled_components_default().div.withConfig({
  displayName: "TechStackstyle__PositionButtonWithArrow",
  componentId: "sc-1azuc5f-13"
})(["margin-top:12px;"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/RadioButtons/index.tsx + 1 modules
var RadioButtons = __webpack_require__(6676);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Services/TechStack/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const GetStacksInfo = stack => {
  var _attributes$technolog;

  const {
    id,
    attributes
  } = stack;
  const name = attributes === null || attributes === void 0 ? void 0 : attributes.name;
  const description = attributes === null || attributes === void 0 ? void 0 : attributes.description;
  const technologies = attributes === null || attributes === void 0 ? void 0 : (_attributes$technolog = attributes.technologies) === null || _attributes$technolog === void 0 ? void 0 : _attributes$technolog.data;
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoBlock, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TechStack_style_H3, {
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx(StackText, {
        children: description
      }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/jsx_runtime_.jsx(TechStack_style_PositionButtonWithArrow, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
          buttonLabel: "Contact",
          redirectTo: `/services/`,
          bgColor: "#000",
          textColor: "#fff",
          padding: "23px 35px"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(StacksContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(StacksBlock, {
        columns: isMobile || isTablet || isSmallTablet ? 2 : 3,
        children: technologies === null || technologies === void 0 ? void 0 : technologies.map(technology => {
          var _technology$attribute, _technology$attribute2, _technology$attribute3, _technology$attribute4, _technology$attribute5;

          const id = technology.id;
          const url = (_technology$attribute = technology.attributes) === null || _technology$attribute === void 0 ? void 0 : _technology$attribute.url;
          const name = (_technology$attribute2 = technology.attributes) === null || _technology$attribute2 === void 0 ? void 0 : _technology$attribute2.Technology_name;
          const logo = (_technology$attribute3 = technology.attributes) === null || _technology$attribute3 === void 0 ? void 0 : (_technology$attribute4 = _technology$attribute3.icon) === null || _technology$attribute4 === void 0 ? void 0 : (_technology$attribute5 = _technology$attribute4.data) === null || _technology$attribute5 === void 0 ? void 0 : _technology$attribute5.attributes;
          const src = constants/* IMAGES_LINK */.rS + (logo === null || logo === void 0 ? void 0 : logo.url);
          const width = logo === null || logo === void 0 ? void 0 : logo.width;
          const height = logo === null || logo === void 0 ? void 0 : logo.height;
          return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: width && height && /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: routes/* ROUTES.EXPERTISE.TECHNOLOGIES */.Z.EXPERTISE.TECHNOLOGIES + url,
              passHref: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoAndTitle, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                  loader: () => src,
                  src: src,
                  width: 31,
                  height: 25,
                  alt: "logo"
                }), /*#__PURE__*/jsx_runtime_.jsx(StackTitle, {
                  children: name
                })]
              })
            }, id)
          });
        })
      })
    }), (isMobile || isTablet) && /*#__PURE__*/jsx_runtime_.jsx(TechStack_style_PositionButtonWithArrow, {
      children: /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
        buttonLabel: "Contact",
        redirectTo: `/services/}`,
        bgColor: "#000",
        textColor: "#fff",
        padding: "23px 35px"
      })
    })]
  });
};

const TechStack = ({
  stackTitle,
  stacks
}) => {
  const {
    0: stackIndex,
    1: setStackIndex
  } = (0,external_react_.useState)(0);
  const {
    0: stack,
    1: setStack
  } = (0,external_react_.useState)(stacks[stackIndex]);
  const {
    0: animation,
    1: setAnimation
  } = (0,external_react_.useState)(false);

  const onChangeStack = index => {
    setStackIndex(index);
    setStack(stacks[index]);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(TechStack_style_Div, {
    onMouseEnter: () => setAnimation(true),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TechStack_style_Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TechStack_style_H2, {
        children: stackTitle
      }), /*#__PURE__*/jsx_runtime_.jsx(RadioButtons/* default */.Z, {
        labels: stacks,
        currentIndex: stackIndex,
        onChange: onChangeStack,
        bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
        border: "1px solid #EFEFEF",
        textColor: theme/* theme.colors.black */.r.colors.black,
        padding: "8px 30px",
        flexDirection: "row",
        isHover: true,
        prefixForId: 'stacks'
      }), /*#__PURE__*/jsx_runtime_.jsx(GetStacksInfo, _objectSpread({}, stack)), /*#__PURE__*/jsx_runtime_.jsx(DotsPosition, {
        children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
          numberOfDots: 5,
          dotColor: "#FEC602",
          animation: animation,
          size: "5px",
          rowGap: "16.7px"
        })
      }), animation && /*#__PURE__*/jsx_runtime_.jsx(LoaderPosition, {
        animation: animation,
        children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
          width: 166,
          height: 166,
          viewBox: "0 0 96 96"
        })
      })]
    })
  });
};

/* harmony default export */ const Services_TechStack = (TechStack);
// EXTERNAL MODULE: ./components/Services/LetsTalk/index.tsx + 1 modules
var LetsTalk = __webpack_require__(4096);
;// CONCATENATED MODULE: ./components/Services/EstimateAppCircle/EstimateAppCircle.style.tsx


const CircleBlock = external_styled_components_default().div.withConfig({
  displayName: "EstimateAppCirclestyle__CircleBlock",
  componentId: "sc-j8gsul-0"
})(["position:relative;display:none;"]);
const Circle = external_styled_components_default().a.withConfig({
  displayName: "EstimateAppCirclestyle__Circle",
  componentId: "sc-j8gsul-1"
})(["position:absolute;bottom:50px;right:15px;width:54px;height:54px;border-radius:50%;background:#FEC506;"]);
const PositionText = external_styled_components_default().div.withConfig({
  displayName: "EstimateAppCirclestyle__PositionText",
  componentId: "sc-j8gsul-2"
})(["position:absolute;bottom:27px;right:0;"]);
const EstimateAppCircle_style_rotation = (0,external_styled_components_.keyframes)(["from{transform:rotate(360deg);}to{transform:rotate(0);}"]);
const PositionCircleBlock = external_styled_components_default().div.withConfig({
  displayName: "EstimateAppCirclestyle__PositionCircleBlock",
  componentId: "sc-j8gsul-3"
})(["position:sticky;bottom:0;right:56px;&:hover ", "{animation:", " 5s linear infinite;}@media only screen and (max-width:", "){margin-right:5vw;}"], PositionText, EstimateAppCircle_style_rotation, theme_get_default()('breakpoints.mobile'));
;// CONCATENATED MODULE: ./public/SVG/textAroundTheCircle.svg
var _g, _defs;

function textAroundTheCircle_extends() { textAroundTheCircle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return textAroundTheCircle_extends.apply(this, arguments); }



var SvgTextAroundTheCircle = function SvgTextAroundTheCircle(props) {
  return /*#__PURE__*/external_react_.createElement("svg", textAroundTheCircle_extends({
    width: 85,
    height: 85,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#textAroundTheCircle_svg__a)",
    fill: "#fff"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "m15.859 18.112-5.665-6.151 4.083-3.693.762.827-3.149 2.851 1.567 1.704 2.977-2.687.719.805-2.955 2.702 1.833 1.981 3.142-2.851.762.827-4.076 3.685ZM23.033 12.552c-.348.213-.716.39-1.1.528-.355.131-.724.22-1.1.263l-.374-.962a6.35 6.35 0 0 0 1.072-.257c.33-.109.646-.257.941-.442.292-.152.539-.375.72-.648a.61.61 0 0 0 0-.635.596.596 0 0 0-.296-.256 1.037 1.037 0 0 0-.481 0c-.27.053-.534.127-.791.22a6.636 6.636 0 0 1-1.337.3 1.935 1.935 0 0 1-.942-.12c-.267-.122-.49-.32-.64-.571a1.417 1.417 0 0 1-.13-1.383 3.25 3.25 0 0 1 1.302-1.326 5.825 5.825 0 0 1 1.035-.513c.348-.131.71-.22 1.079-.264l.366.948c-.338.042-.671.12-.992.236a5.248 5.248 0 0 0-.898.441 1.987 1.987 0 0 0-.72.613.532.532 0 0 0 0 .57.532.532 0 0 0 .288.229c.156.04.32.04.475 0a4.34 4.34 0 0 0 .718-.2 6.407 6.407 0 0 1 1.064-.278c.274-.042.553-.042.827 0 .225.03.441.107.633.228.188.126.345.291.46.485a1.46 1.46 0 0 1 .13 1.426 3.22 3.22 0 0 1-1.31 1.368ZM29.1 9.516a2.238 2.238 0 0 1-1.624.178 1.982 1.982 0 0 1-1.028-1.183L25.254 5.66l-1.265.527-.395-.948 1.265-.52-.755-1.797 1.158-.477.754 1.789 1.934-.791.396.948-1.934.812 1.128 2.688a1.081 1.081 0 0 0 .54.641c.28.074.577.04.833-.093.137-.058.27-.128.396-.206.13-.082.25-.178.36-.285l.538.89a4.1 4.1 0 0 1-.524.4c-.186.11-.38.202-.583.278ZM31.127 1.64a.812.812 0 0 1-.64-.065.802.802 0 0 1-.373-.52.79.79 0 0 1 .064-.634.8.8 0 0 1 .525-.371.811.811 0 0 1 .64.064.803.803 0 0 1 .374.52.793.793 0 0 1-.065.635.8.8 0 0 1-.525.37Zm1.129 6.735-1.517-5.738 1.222-.32 1.524 5.702-1.23.356ZM35.692 7.342l-.366-5.916 1.157-.072.065.792c.172-.296.42-.542.719-.713.31-.181.66-.284 1.02-.3.358-.033.718.028 1.043.179.287.127.52.352.654.634.168-.3.417-.547.719-.713.343-.177.72-.276 1.107-.292a1.667 1.667 0 0 1 1.438.47c.368.532.557 1.166.539 1.81l.23 3.643-1.215.071-.216-3.47a2.25 2.25 0 0 0-.309-1.17.84.84 0 0 0-.79-.306 1.201 1.201 0 0 0-.978.534c-.236.419-.332.9-.273 1.376l.2 3.186-1.221.071-.23-3.756a1.49 1.49 0 0 0-.324-.912.877.877 0 0 0-.755-.278 1.18 1.18 0 0 0-.948.57 2.074 2.074 0 0 0-.302 1.333l.2 3.186-1.164.043ZM47.194 7.491a1.96 1.96 0 0 1-1.308-.712 1.704 1.704 0 0 1-.295-1.383 1.83 1.83 0 0 1 .356-.852c.19-.25.441-.447.73-.574a4.174 4.174 0 0 1 2.422-.17l.848.142A1.082 1.082 0 0 0 49.775 3a1.798 1.798 0 0 0-1.057-.442 4.488 4.488 0 0 0-1.107-.05c-.384.04-.76.129-1.121.264V1.71c.39-.127.797-.201 1.207-.221.443-.026.887 0 1.323.078.505.063.994.223 1.438.47.323.195.562.503.668.863.107.45.107.919 0 1.369l-.625 3.678-1.172-.193.108-.677c-.29.221-.63.366-.992.42-.414.073-.838.07-1.25-.007Zm.604-.92c.284.066.579.066.863 0 .252-.055.484-.176.675-.348.176-.154.293-.363.331-.592l.122-.748-.675-.114a3.516 3.516 0 0 0-1.61 0 .879.879 0 0 0-.662.712.814.814 0 0 0 .172.713c.202.211.471.345.762.378h.022ZM54.656 9.395a2.214 2.214 0 0 1-1.33-.941 1.925 1.925 0 0 1 0-1.561l1.021-2.909-1.294-.449.338-.969 1.294.45.64-1.833 1.186.407-.64 1.831 1.977.713-.338.97-1.984-.713-.963 2.751a1.068 1.068 0 0 0 0 .827c.168.246.426.42.719.485.14.049.284.084.431.107.153.01.307.01.46 0l-.201 1.019a3.745 3.745 0 0 1-.654-.05 4.347 4.347 0 0 1-.662-.135ZM59.63 11.711a3.132 3.132 0 0 1-1.653-1.81 3.04 3.04 0 0 1 .41-2.381 3.161 3.161 0 0 1 1.797-1.604 2.79 2.79 0 0 1 2.272.307 2.545 2.545 0 0 1 1.387 1.647 3.178 3.178 0 0 1-.453 2.266l-.172.285c-.058.1-.115.185-.151.242l-4.313-2.366.474-.848 3.48 1.91-.317.164c.282-.42.409-.924.36-1.426a1.42 1.42 0 0 0-.791-.976 1.575 1.575 0 0 0-1.352-.164 2.148 2.148 0 0 0-1.085 1.069l-.173.3a1.803 1.803 0 0 0-.237 1.425c.186.473.553.855 1.02 1.062a3.937 3.937 0 0 0 2.006.506l-.294.97a3.726 3.726 0 0 1-1.086-.129c-.394-.099-.774-.25-1.128-.449ZM66.892 17.064a2.004 2.004 0 0 1-.647-1.34 1.74 1.74 0 0 1 .582-1.29 1.843 1.843 0 0 1 1.732-.542 4.124 4.124 0 0 1 2.064 1.29l.603.606a1.084 1.084 0 0 0 .41-.89 1.815 1.815 0 0 0-.604-.977 4.136 4.136 0 0 0-1.933-1.112l.64-.855c.392.125.766.3 1.114.52.37.24.712.52 1.02.834.368.342.665.75.877 1.204.15.346.166.735.044 1.091a3.115 3.115 0 0 1-.791 1.126l-2.674 2.623-.834-.84.481-.486a2.171 2.171 0 0 1-1.056-.235 3.522 3.522 0 0 1-1.028-.727Zm1.028-.399c.204.206.449.368.718.478.24.097.499.133.755.107.234-.026.451-.13.618-.293l.547-.534-.489-.492a3.66 3.66 0 0 0-1.308-.927.928.928 0 0 0-.97.214.84.84 0 0 0-.281.713c.048.284.192.543.41.734ZM70.5 20.742l4.975-3.293.654.977-.661.449c.385.04.757.167 1.085.37.339.224.624.518.834.863a1.875 1.875 0 0 1 .36 1.668 3.239 3.239 0 0 1-1.388 1.525l-2.875 1.896-.719-1.026 2.674-1.768c.419-.24.762-.59.992-1.012a1.012 1.012 0 0 0-.13-.998 1.613 1.613 0 0 0-.675-.585 1.745 1.745 0 0 0-.87-.163 1.582 1.582 0 0 0-.84.285l-2.776 1.832-.64-1.02ZM75.626 29.36l8.914.713.46 1.639-7.275 5.146-.338-1.354 6.377-4.34-7.721-.45-.417-1.354Zm2.48.962 1.107-.306 1.244 4.447-1.107.307-1.244-4.448ZM84.058 41.035a2.276 2.276 0 0 1-.719 1.896c-.638.51-1.437.78-2.257.763a3.56 3.56 0 0 1-2.315-.549 2.259 2.259 0 0 1-.913-1.818 2.68 2.68 0 0 1 .159-1.104c.122-.31.316-.586.567-.806l-3.127.164-.064-1.233 8.389-.428.079 1.127-.719.042c.284.21.511.487.661.806.162.36.25.747.26 1.14Zm-1.05-.235a1.856 1.856 0 0 0-.244-.834 1.51 1.51 0 0 0-.56-.549 1.448 1.448 0 0 0-.791-.178l-1.15.043c-.274.012-.538.1-.762.256a1.478 1.478 0 0 0-.504.62 1.769 1.769 0 0 0-.158.856 1.416 1.416 0 0 0 .604 1.162c.466.28 1.012.397 1.553.335.541.003 1.07-.17 1.502-.492a1.427 1.427 0 0 0 .51-1.219ZM83.534 49.446a2.24 2.24 0 0 1-1.115 1.71 3.514 3.514 0 0 1-2.358.336 3.513 3.513 0 0 1-2.156-1.005 2.26 2.26 0 0 1-.518-1.96c.052-.372.181-.73.381-1.048.18-.291.426-.536.72-.713l-3.092-.463.18-1.212 8.303 1.233-.173 1.162-.719-.093c.236.265.401.583.482.927.092.368.114.75.065 1.126Zm-.978-.435c.046-.291.021-.59-.072-.87a1.495 1.495 0 0 0-.438-.662 1.386 1.386 0 0 0-.72-.328l-1.113-.164a1.384 1.384 0 0 0-.798.1c-.249.11-.462.285-.619.506a1.71 1.71 0 0 0-.323.805 1.413 1.413 0 0 0 .352 1.255c.396.363.901.588 1.438.641a2.492 2.492 0 0 0 1.574-.185 1.433 1.433 0 0 0 .719-1.098ZM69.954 65.284l6.089 5.703-3.803 3.97-.82-.763 2.933-3.065-1.69-1.582-2.767 2.894-.805-.756 2.775-2.894-1.97-1.853-2.926 3.058-.82-.77 3.804-3.942ZM63.196 71.35a5.188 5.188 0 0 1 1.057-.606 4.714 4.714 0 0 1 1.079-.342l.445.934a5.892 5.892 0 0 0-1.057.328c-.32.134-.623.304-.905.506-.28.176-.508.422-.662.713a.601.601 0 0 0 .072.627.59.59 0 0 0 .316.235c.159.039.324.039.482 0 .265-.072.525-.162.776-.27.42-.18.86-.315 1.309-.4.316-.063.643-.043.949.057.273.102.509.283.675.52a1.42 1.42 0 0 1 .23 1.369 3.208 3.208 0 0 1-1.207 1.426c-.31.224-.643.418-.992.577-.336.16-.691.277-1.057.35l-.431-.927c.334-.066.66-.169.97-.307.307-.136.599-.303.87-.499.262-.169.481-.396.64-.663a.53.53 0 0 0-.05-.57.59.59 0 0 0-.302-.207 1.1 1.1 0 0 0-.475 0 4.562 4.562 0 0 0-.719.257c-.334.147-.68.264-1.035.35-.27.067-.548.095-.827.085a1.742 1.742 0 0 1-.647-.186 1.633 1.633 0 0 1-.496-.449 1.455 1.455 0 0 1-.23-1.425 3.135 3.135 0 0 1 1.222-1.483ZM57.366 74.807a2.266 2.266 0 0 1 1.61-.3 2.013 2.013 0 0 1 1.115 1.106l1.395 2.751 1.222-.613.467.92-1.222.612.884 1.725-1.121.564-.863-1.733-1.87.934-.46-.912 1.87-.934-1.323-2.602a1.088 1.088 0 0 0-.582-.591 1.158 1.158 0 0 0-.834.15c-.13.068-.256.147-.374.235-.123.09-.236.193-.338.306l-.604-.855c.155-.155.32-.298.496-.428.168-.126.346-.238.532-.335ZM54.297 76.19l1.94 5.61-1.193.406-1.94-5.61 1.193-.406Zm1.625 6.636a.81.81 0 0 1 .647 0c.196.104.343.28.41.492a.821.821 0 0 1 0 .641.822.822 0 0 1-.497.407.817.817 0 0 1-.64 0 .774.774 0 0 1-.41-.492.772.772 0 0 1 0-.635.792.792 0 0 1 .49-.413ZM50.947 77.451l.798 5.874-1.15.157-.123-.791c-.151.31-.378.577-.661.776a2.334 2.334 0 0 1-.992.371 2.13 2.13 0 0 1-1.057-.107 1.37 1.37 0 0 1-.719-.584 1.85 1.85 0 0 1-.675.784 2.74 2.74 0 0 1-1.086.37 1.681 1.681 0 0 1-1.474-.363 3.078 3.078 0 0 1-.668-1.768l-.49-3.62 1.209-.158.467 3.443c.023.41.154.805.38 1.148a.863.863 0 0 0 .813.25 1.178 1.178 0 0 0 .942-.607c.207-.43.267-.915.172-1.382l-.43-3.165 1.207-.164.51 3.728c.02.333.158.648.388.89a.879.879 0 0 0 .77.222 1.185 1.185 0 0 0 .905-.628c.22-.418.293-.897.209-1.361l-.431-3.165 1.186-.15ZM39.466 78.115a1.977 1.977 0 0 1 1.359.62 1.748 1.748 0 0 1 .388 1.361 1.836 1.836 0 0 1-.978 1.518 4.165 4.165 0 0 1-2.4.335l-.863-.078a1.11 1.11 0 0 0 .244.927 1.83 1.83 0 0 0 1.086.363c.367.047.74.047 1.107 0a4.34 4.34 0 0 0 1.107-.342l.057 1.055a4.682 4.682 0 0 1-1.193.314c-.44.046-.883.046-1.323 0a4.154 4.154 0 0 1-1.438-.371 1.508 1.508 0 0 1-.718-.813 3.075 3.075 0 0 1-.123-1.361l.36-3.714 1.179.107-.058.713c.276-.238.607-.405.963-.485.403-.12.824-.171 1.244-.15Zm-.532.962c-.29-.03-.584 0-.862.085a1.555 1.555 0 0 0-.648.4.98.98 0 0 0-.287.612l-.072.763.719.064c.539.086 1.09.044 1.61-.12a.89.89 0 0 0 .604-.778.827.827 0 0 0-.223-.713 1.286 1.286 0 0 0-.84-.313ZM31.882 76.76a2.253 2.253 0 0 1 1.402.841 1.974 1.974 0 0 1 .08 1.561l-.799 2.973 1.316.356-.266.99-1.323-.356L31.79 85l-1.215-.32.51-1.875-2.027-.535.273-.99 2.02.534.762-2.808a1.048 1.048 0 0 0 0-.827 1.13 1.13 0 0 0-.719-.435 2.48 2.48 0 0 0-.438-.079 3.364 3.364 0 0 0-.46 0l.122-1.033c.22-.018.441-.018.662 0 .204.025.406.068.603.128ZM26.742 74.807a3.13 3.13 0 0 1 1.761 1.675 3.053 3.053 0 0 1-.23 2.41c-.302.769-.9 1.389-1.66 1.724a2.775 2.775 0 0 1-2.279-.142 2.58 2.58 0 0 1-1.51-1.54 3.155 3.155 0 0 1 .295-2.295c.042-.102.09-.203.144-.3.04-.085.086-.168.136-.249l4.465 2.046-.41.884-3.594-1.661.302-.185a2.258 2.258 0 0 0-.26 1.475 1.423 1.423 0 0 0 .87.912 1.542 1.542 0 0 0 1.352.072c.465-.25.824-.658 1.014-1.148l.143-.306a1.8 1.8 0 0 0 .137-1.426 1.979 1.979 0 0 0-1.121-.984 3.937 3.937 0 0 0-1.021-.313 3.502 3.502 0 0 0-1.014-.043l.216-.99a3.623 3.623 0 0 1 1.092.05c.405.058.799.17 1.172.334ZM19.158 69.996c.401.317.66.778.719 1.283a1.706 1.706 0 0 1-.482 1.333 1.855 1.855 0 0 1-1.69.663 4.168 4.168 0 0 1-2.156-1.112l-.647-.563a1.07 1.07 0 0 0-.352.89c.117.372.352.697.668.927.279.244.588.45.92.613.345.173.713.296 1.093.364l-.575.89a4.66 4.66 0 0 1-1.15-.434 5.976 5.976 0 0 1-1.085-.756 3.843 3.843 0 0 1-.957-1.14 1.471 1.471 0 0 1-.122-1.083c.147-.442.393-.844.72-1.177l2.48-2.808.89.77-.445.527a2.23 2.23 0 0 1 1.071.164c.405.146.778.366 1.1.649Zm-1 .47a1.973 1.973 0 0 0-.718-.427 1.66 1.66 0 0 0-.762-.057 1.044 1.044 0 0 0-.59.335l-.51.577.518.449a3.54 3.54 0 0 0 1.315.862.892.892 0 0 0 .949-.285.81.81 0 0 0 .23-.712 1.232 1.232 0 0 0-.467-.742h.036ZM15.255 66.574l-4.723 3.643-.72-.927.626-.499a2.546 2.546 0 0 1-1.107-.292 2.933 2.933 0 0 1-.898-.777 1.9 1.9 0 0 1-.475-1.64 3.22 3.22 0 0 1 1.273-1.617l2.724-2.139.762.977-2.538 1.96c-.402.264-.72.638-.913 1.076a1.004 1.004 0 0 0 .202.99c.185.24.434.423.719.528.279.107.58.143.877.107.3-.04.583-.161.82-.349l2.637-2.024.734.983ZM9.51 58.342l-8.935-.043L0 56.695l6.872-5.652.468 1.297L1.3 57.13l7.735-.107.475 1.319Zm-2.515-.777-1.086.385-1.567-4.348 1.086-.385 1.567 4.348ZM.252 47.308a2.276 2.276 0 0 1 .59-1.946 3.465 3.465 0 0 1 2.156-.941 3.498 3.498 0 0 1 2.35.385 2.267 2.267 0 0 1 1.05 1.746c.05.372.024.75-.079 1.112a2.226 2.226 0 0 1-.503.891l3.105-.385.173 1.226-8.332 1.027-.144-1.17.72-.1a2.146 2.146 0 0 1-.72-.762 2.962 2.962 0 0 1-.366-1.083Zm1.064.157c.03.291.135.57.302.812.15.226.358.408.604.528.248.115.525.157.798.12l1.114-.142a1.444 1.444 0 0 0 1.179-.962c.1-.276.133-.572.093-.862a1.418 1.418 0 0 0-.719-1.113 2.47 2.47 0 0 0-1.574-.228 2.433 2.433 0 0 0-1.438.6 1.422 1.422 0 0 0-.36 1.246ZM.173 38.868a2.244 2.244 0 0 1 .963-1.789 3.525 3.525 0 0 1 2.33-.499 3.504 3.504 0 0 1 2.22.849 2.272 2.272 0 0 1 .676 1.917 2.67 2.67 0 0 1-.302 1.076c-.159.307-.39.571-.675.77l3.12.242-.094 1.226-8.375-.641.094-1.176.718.05a2.078 2.078 0 0 1-.546-.884 2.828 2.828 0 0 1-.13-1.14Zm1.006.364c-.025.291.02.584.13.855.101.252.27.471.488.635.219.165.481.261.755.278l1.122.085c.273.021.547-.033.79-.157.239-.13.44-.32.583-.548.153-.251.242-.535.259-.827a1.414 1.414 0 0 0-.446-1.233 2.53 2.53 0 0 0-1.488-.535 2.469 2.469 0 0 0-1.56.3 1.43 1.43 0 0 0-.626 1.147H1.18Z"
  }))), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "textAroundTheCircle_svg__a"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#fff",
    d: "M0 0h85v85H0z"
  })))));
};

/* harmony default export */ const textAroundTheCircle = (SvgTextAroundTheCircle);
;// CONCATENATED MODULE: ./components/Services/EstimateAppCircle/index.tsx





const EstimateAppCircle = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(PositionCircleBlock, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CircleBlock, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Circle, {}), /*#__PURE__*/jsx_runtime_.jsx(PositionText, {
        children: /*#__PURE__*/jsx_runtime_.jsx(textAroundTheCircle, {})
      })]
    })
  });
};

/* harmony default export */ const Services_EstimateAppCircle = (EstimateAppCircle);
// EXTERNAL MODULE: ./components/common/VerticalFullPageSlider/index.tsx + 6 modules
var VerticalFullPageSlider = __webpack_require__(7018);
// EXTERNAL MODULE: ./components/common/VerticalFullPageSlider/types.ts
var types = __webpack_require__(8740);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./components/ServicePage/FAQ/index.tsx + 3 modules
var FAQ = __webpack_require__(4716);
// EXTERNAL MODULE: ./graphql/services/queries.ts
var queries = __webpack_require__(8365);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/services/index.tsx























const services_Services = ({
  data,
  networkStatus
}) => {
  var _data$servicesPage, _data$servicesPage$da, _entry$services, _entry$techStack$tech, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2;

  const entry = data === null || data === void 0 ? void 0 : (_data$servicesPage = data.servicesPage) === null || _data$servicesPage === void 0 ? void 0 : (_data$servicesPage$da = _data$servicesPage.data) === null || _data$servicesPage$da === void 0 ? void 0 : _data$servicesPage$da.attributes;
  const banner = entry === null || entry === void 0 ? void 0 : entry.banner;
  const slides = entry === null || entry === void 0 ? void 0 : (_entry$services = entry.services) === null || _entry$services === void 0 ? void 0 : _entry$services.data;
  const stackTitle = entry === null || entry === void 0 ? void 0 : entry.techStack.title;
  const stacks = entry === null || entry === void 0 ? void 0 : (_entry$techStack$tech = entry.techStack.tech_stacks) === null || _entry$techStack$tech === void 0 ? void 0 : _entry$techStack$tech.data;
  const slidesTitles = (slides === null || slides === void 0 ? void 0 : slides.map(st => {
    var _st$attributes;

    return ((_st$attributes = st.attributes) === null || _st$attributes === void 0 ? void 0 : _st$attributes.name) || "";
  })) || [];
  const colorWhite = theme/* theme.colors.white */.r.colors.white;
  const colorBlack = theme/* theme.colors.black */.r.colors.black;
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;

  const renderSlide = slide => /*#__PURE__*/jsx_runtime_.jsx(Information, {
    slide: slide
  });

  const renderCondition = entry && banner && slides && stackTitle && stacks;
  if (networkStatus !== 7) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
  const faqContent = slides === null || slides === void 0 ? void 0 : slides.map(slide => renderSlide(slide));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [renderCondition && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "Services",
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
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
        backgroundColor: colorWhite,
        titles: constants/* titles */.F8,
        titlesColor: colorBlack,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Services, {
          banner: banner
        }), (isMobile || isTablet || isSmallTablet) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            backgroundColor: "#18181A",
            width: "100%",
            padding: "0"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "scroll-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(FAQ/* default */.Z, {
              textColor: "#ffff",
              title: "faq",
              titles: slidesTitles,
              content: faqContent,
              isFullPage: true
            })
          })
        }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider/* default */.Z, {
          slides: slides,
          renderSlide: renderSlide,
          stickyTopPosition: 120,
          scrollListType: types/* ScrollListTypes.STRING */.p.STRING,
          maxWidth: 1006,
          bgColor: theme/* theme.colors.backgroundBlack */.r.colors.backgroundBlack
        }), /*#__PURE__*/jsx_runtime_.jsx(Services_TechStack, {
          stacks: stacks,
          stackTitle: stackTitle
        }), /*#__PURE__*/jsx_runtime_.jsx(LetsTalk/* default */.Z, {
          flexDirection: "column",
          title: "Let’s talk!",
          text: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Got no clue where to start?"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: " Why don\u2019t we discuss your idea?"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "estimate",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Services_EstimateAppCircle, {})
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
};

async function getServerSideProps() {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    data,
    networkStatus
  } = await client.query({
    query: queries/* GET_SERVICES_PAGE */.u
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const services = (services_Services);

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
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,4096,7599,8187,7018], () => (__webpack_exec__(9)));
module.exports = __webpack_exports__;

})();