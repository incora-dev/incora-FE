"use strict";
exports.id = 9656;
exports.ids = [9656];
exports.modules = {

/***/ 9656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ServicePage_HeaderService)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/ServicePage/styles.ts



const Div = external_styled_components_default().div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1t11kdf-0"
})(["position:relative;top:-104px;overflow:hidden;background-color:", ";"], ({
  bgColor
}) => bgColor);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1t11kdf-1"
})(["position:relative;max-width:1006px;margin:0 auto;"]);
const TextContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__TextContainer",
  componentId: "sc-1t11kdf-2"
})(["position:relative;z-index:1;padding:222px 0 129px;"]);
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "styles__TextBlock",
  componentId: "sc-1t11kdf-3"
})(["display:flex;flex-direction:column;row-gap:21.5px;color:", ";"], ({
  bgColor
}) => bgColor === theme/* theme.colors.black */.r.colors.black ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black);
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "styles__H1",
  componentId: "sc-1t11kdf-4"
})(["max-width:766px;font-style:normal;font-weight:800;font-size:", ";line-height:", ";text-transform:capitalize;"], ({
  titleSize
}) => titleSize, ({
  titleSize
}) => titleSize === '48px' ? '72px' : '96px');
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "styles__H2",
  componentId: "sc-1t11kdf-5"
})(["font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:", ";"], theme_get_default()("colors.yellow"));
const Text = external_styled_components_default().p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1t11kdf-6"
})(["max-width:", ";font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;"], ({
  textWidth
}) => textWidth);
const PositionIcon = external_styled_components_default().div.withConfig({
  displayName: "styles__PositionIcon",
  componentId: "sc-1t11kdf-7"
})(["position:absolute;z-index:1;top:191px;right:-3.9vw;"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/services/ResearchAndDevelopment.svg
var _path, _path2, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgResearchAndDevelopment = function SvgResearchAndDevelopment(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 244,
    height: 254,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M229.061 15.09h-99.592V238.91h99.592V15.089Z",
    fill: "url(#ResearchAndDevelopment_svg__a)"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.25 69.273v-53.88h53.375M68.625 238.606H15.25v-53.879M228.75 69.273v-53.88h-53.375M175.375 238.606h53.375v-53.879",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "ResearchAndDevelopment_svg__a",
    x1: 128.61,
    y1: 12.34,
    x2: 298.769,
    y2: 89.295,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.244,
    stopColor: "#E1AF0B"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#E1AF0B",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const ResearchAndDevelopment = (SvgResearchAndDevelopment);
;// CONCATENATED MODULE: ./public/SVG/services/DevOps.svg
var DevOps_path, DevOps_path2, _path3, DevOps_defs;

function DevOps_extends() { DevOps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DevOps_extends.apply(this, arguments); }



var SvgDevOps = function SvgDevOps(props) {
  return /*#__PURE__*/external_react_.createElement("svg", DevOps_extends({
    width: 235,
    height: 232,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), DevOps_path || (DevOps_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M167.812 1.815H1.014v207.03h166.798V1.815Z",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), DevOps_path2 || (DevOps_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M53.509 33.081H32.342v21.97h21.167v-21.97Z",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M234.789 84.956H100.5V231.26h134.289V84.956Z",
    fill: "url(#DevOps_svg__a)"
  })), DevOps_defs || (DevOps_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "DevOps_svg__a",
    x1: 99.341,
    y1: 83.159,
    x2: 247.107,
    y2: 221.012,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.244,
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const DevOps = (SvgDevOps);
// EXTERNAL MODULE: ./public/SVG/services/DedicatedTeam.svg
var DedicatedTeam = __webpack_require__(5808);
// EXTERNAL MODULE: ./public/SVG/services/MobileAppDevelopment.svg
var MobileAppDevelopment = __webpack_require__(6420);
;// CONCATENATED MODULE: ./public/SVG/services/WebAppDevelopment.svg
var WebAppDevelopment_path, WebAppDevelopment_path2, WebAppDevelopment_defs;

function WebAppDevelopment_extends() { WebAppDevelopment_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WebAppDevelopment_extends.apply(this, arguments); }



var SvgWebAppDevelopment = function SvgWebAppDevelopment(props) {
  return /*#__PURE__*/external_react_.createElement("svg", WebAppDevelopment_extends({
    width: 291,
    height: 248,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), WebAppDevelopment_path || (WebAppDevelopment_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M216.61 18.517H18.566v198.4H216.61v-198.4ZM17.35 71.228h198.043",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), WebAppDevelopment_path2 || (WebAppDevelopment_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M198.91 248c50.86 0 92.09-41.12 92.09-91.843 0-50.724-41.23-91.843-92.09-91.843-50.86 0-92.09 41.119-92.09 91.843 0 50.723 41.23 91.843 92.09 91.843Z",
    fill: "url(#WebAppDevelopment_svg__a)"
  })), WebAppDevelopment_defs || (WebAppDevelopment_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "WebAppDevelopment_svg__a",
    x1: 198.044,
    y1: 89.497,
    x2: 198.044,
    y2: 246.889,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0.2
  })))));
};

/* harmony default export */ const WebAppDevelopment = (SvgWebAppDevelopment);
;// CONCATENATED MODULE: ./public/SVG/services/SoftwareQA&Testing.svg
var SoftwareQA_Testing_path, SoftwareQA_Testing_path2, SoftwareQA_Testing_path3, SoftwareQA_Testing_defs;

function SoftwareQA_Testing_extends() { SoftwareQA_Testing_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SoftwareQA_Testing_extends.apply(this, arguments); }



var SvgSoftwareQaTesting = function SvgSoftwareQaTesting(props) {
  return /*#__PURE__*/external_react_.createElement("svg", SoftwareQA_Testing_extends({
    width: 264,
    height: 258,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), SoftwareQA_Testing_path || (SoftwareQA_Testing_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M167.5 240c52.743 0 95.5-42.757 95.5-95.5S220.243 49 167.5 49 72 91.757 72 144.5s42.757 95.5 95.5 95.5Z",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), SoftwareQA_Testing_path2 || (SoftwareQA_Testing_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m203 195 55 62",
    stroke: "#fff",
    strokeWidth: 2
  })), SoftwareQA_Testing_path3 || (SoftwareQA_Testing_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100Z",
    fill: "url(#SoftwareQA&Testing_svg__a)"
  })), SoftwareQA_Testing_defs || (SoftwareQA_Testing_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "SoftwareQA&Testing_svg__a",
    x1: 99.059,
    y1: 27.42,
    x2: 99.059,
    y2: 198.791,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0.2
  })))));
};

/* harmony default export */ const SoftwareQA_Testing = (SvgSoftwareQaTesting);
// EXTERNAL MODULE: ./public/SVG/services/TeamExtension.svg
var TeamExtension = __webpack_require__(8454);
;// CONCATENATED MODULE: ./public/SVG/services/UI:UXdesign.svg
var UI_UXdesign_path, UI_UXdesign_path2, UI_UXdesign_defs;

function UI_UXdesign_extends() { UI_UXdesign_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UI_UXdesign_extends.apply(this, arguments); }



var SvgUiuXdesign = function SvgUiuXdesign(props) {
  return /*#__PURE__*/external_react_.createElement("svg", UI_UXdesign_extends({
    width: 235,
    height: 242,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), UI_UXdesign_path || (UI_UXdesign_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M117.364 2.575V235.3a116.335 116.335 0 0 0 82.27-34.082 116.367 116.367 0 0 0 0-164.56 116.338 116.338 0 0 0-82.27-34.082Z",
    fill: "url(#UI:UXdesign_svg__a)"
  })), UI_UXdesign_path2 || (UI_UXdesign_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M117.364 233.988c63.956 0 115.803-51.853 115.803-115.817 0-63.964-51.847-115.817-115.803-115.817C53.408 2.354 1.562 54.207 1.562 118.17c0 63.964 51.846 115.817 115.802 115.817Z",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), UI_UXdesign_defs || (UI_UXdesign_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "UI:UXdesign_svg__a",
    x1: 175.538,
    y1: 2.575,
    x2: 175.538,
    y2: 235.299,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const UI_UXdesign = (SvgUiuXdesign);
;// CONCATENATED MODULE: ./public/SVG/industriesIcons/BookingSystems.svg
var BookingSystems_path, BookingSystems_path2, BookingSystems_path3, BookingSystems_defs;

function BookingSystems_extends() { BookingSystems_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BookingSystems_extends.apply(this, arguments); }



var SvgBookingSystems = function SvgBookingSystems(props) {
  return /*#__PURE__*/external_react_.createElement("svg", BookingSystems_extends({
    width: 289,
    height: 242,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), BookingSystems_path || (BookingSystems_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M107.29 19.622H15.277v92.015h92.013V19.622ZM226.907 19.622h-92.012v92.015h92.012V19.622Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), BookingSystems_path2 || (BookingSystems_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M196.865 217.888c50.336 0 91.141-40.125 91.141-89.621 0-49.496-40.805-89.62-91.141-89.62-50.335 0-91.14 40.124-91.14 89.62s40.805 89.621 91.14 89.621Z",
    fill: "url(#BookingSystems_svg__a)"
  })), BookingSystems_path3 || (BookingSystems_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M107.29 139.241H15.277v92.016h92.013v-92.016ZM226.907 139.241h-92.012v92.016h92.012v-92.016Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), BookingSystems_defs || (BookingSystems_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "BookingSystems_svg__a",
    x1: 196.008,
    y1: 63.22,
    x2: 196.008,
    y2: 216.804,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0.2
  })))));
};

/* harmony default export */ const BookingSystems = (SvgBookingSystems);
;// CONCATENATED MODULE: ./public/SVG/industriesIcons/Delivery&Shipping.svg
var Delivery_Shipping_path, Delivery_Shipping_path2, Delivery_Shipping_defs;

function Delivery_Shipping_extends() { Delivery_Shipping_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Delivery_Shipping_extends.apply(this, arguments); }



var SvgDeliveryShipping = function SvgDeliveryShipping(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Delivery_Shipping_extends({
    width: 333,
    height: 280,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Delivery_Shipping_path || (Delivery_Shipping_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M246.709 20.906h-224v224h224v-224Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), Delivery_Shipping_path2 || (Delivery_Shipping_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M75.682 0v151.351l60.598-34.126 60.493 34.126V0H75.682Z",
    fill: "url(#Delivery&Shipping_svg__a)"
  })), Delivery_Shipping_defs || (Delivery_Shipping_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "Delivery&Shipping_svg__a",
    x1: 136.227,
    y1: 0,
    x2: 136.227,
    y2: 151.351,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const Delivery_Shipping = (SvgDeliveryShipping);
;// CONCATENATED MODULE: ./public/SVG/industriesIcons/EduTech.svg
var EduTech_path, EduTech_path2, _circle, _circle2, _circle3, _circle4, EduTech_path3, _circle5, _circle6, _circle7, _circle8, _circle9, _circle10, _circle11, _circle12, _circle13, _circle14, _circle15, _circle16, EduTech_defs;

function EduTech_extends() { EduTech_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EduTech_extends.apply(this, arguments); }



var SvgEduTech = function SvgEduTech(props) {
  return /*#__PURE__*/external_react_.createElement("svg", EduTech_extends({
    width: 361,
    height: 375,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), EduTech_path || (EduTech_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m36.813 187.64 72.021 124.744 143.908.077 71.887-124.666-72.021-124.744-143.908-.077L36.813 187.64Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), EduTech_path2 || (EduTech_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M37 187.5h144m0 0L252.5 63M181 187.5l71.5 124",
    stroke: "#000",
    strokeWidth: 2
  })), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 323.5,
    cy: 186.5,
    r: 23.5,
    fill: "#fff"
  })), _circle2 || (_circle2 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 323.5,
    cy: 186.5,
    r: 23.5,
    fill: "#fff"
  })), _circle3 || (_circle3 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 323.5,
    cy: 186.5,
    r: 23.5,
    fill: "#fff"
  })), _circle4 || (_circle4 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 323.5,
    cy: 186.5,
    r: 23.5,
    stroke: "#000",
    strokeWidth: 2
  })), EduTech_path3 || (EduTech_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M183.5 259c40.041 0 72.5-31.788 72.5-71s-32.459-71-72.5-71-72.5 31.788-72.5 71 32.459 71 72.5 71Z",
    fill: "url(#EduTech_svg__a)"
  })), _circle5 || (_circle5 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 38,
    cy: 188,
    r: 14,
    fill: "#fff"
  })), _circle6 || (_circle6 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 38,
    cy: 188,
    r: 14,
    fill: "#fff"
  })), _circle7 || (_circle7 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 38,
    cy: 188,
    r: 14,
    fill: "#fff"
  })), _circle8 || (_circle8 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 38,
    cy: 188,
    r: 14,
    stroke: "#000",
    strokeWidth: 2
  })), _circle9 || (_circle9 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 312,
    r: 18,
    fill: "#fff"
  })), _circle10 || (_circle10 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 312,
    r: 18,
    fill: "#fff"
  })), _circle11 || (_circle11 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 312,
    r: 18,
    fill: "#fff"
  })), _circle12 || (_circle12 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 312,
    r: 18,
    stroke: "#000",
    strokeWidth: 2
  })), _circle13 || (_circle13 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 63,
    r: 18,
    fill: "#fff"
  })), _circle14 || (_circle14 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 63,
    r: 18,
    fill: "#fff"
  })), _circle15 || (_circle15 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 63,
    r: 18,
    fill: "#fff"
  })), _circle16 || (_circle16 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 111,
    cy: 63,
    r: 18,
    stroke: "#000",
    strokeWidth: 2
  })), EduTech_defs || (EduTech_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "EduTech_svg__a",
    x1: 182.818,
    y1: 136.468,
    x2: 182.818,
    y2: 258.142,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0.2
  })))));
};

/* harmony default export */ const EduTech = (SvgEduTech);
;// CONCATENATED MODULE: ./public/SVG/industriesIcons/Healthcare.svg
var _g, Healthcare_defs;

function Healthcare_extends() { Healthcare_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Healthcare_extends.apply(this, arguments); }



var SvgHealthcare = function SvgHealthcare(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Healthcare_extends({
    width: 298,
    height: 246,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#Healthcare_svg__a)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M148.334 238.545 26.437 118.363a64.757 64.757 0 0 1-14.225-21.027 64.122 64.122 0 0 1-4.995-24.803c0-8.511 1.697-16.94 4.995-24.803a64.766 64.766 0 0 1 14.225-21.027 65.681 65.681 0 0 1 21.289-14.05A66.331 66.331 0 0 1 72.838 7.72c8.617 0 17.15 1.676 25.112 4.933a65.675 65.675 0 0 1 21.288 14.05l122.117 119.859-93.021 91.983Z",
    fill: "url(#Healthcare_svg__b)"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M144.911 232.905c-21.303-21.015-33.27-49.51-33.27-79.221 0-29.712 11.967-58.207 33.27-79.222l49.765-49.064a60.543 60.543 0 0 1 19.631-12.945 61.226 61.226 0 0 1 23.161-4.546 61.231 61.231 0 0 1 23.162 4.546 60.549 60.549 0 0 1 19.63 12.945 59.577 59.577 0 0 1 13.13 19.353A58.9 58.9 0 0 1 298 67.587a58.9 58.9 0 0 1-4.61 22.835 59.58 59.58 0 0 1-13.13 19.354L150.173 238.093l-5.262-5.188Z",
    stroke: "#1D1D1B",
    strokeWidth: 2,
    strokeMiterlimit: 10
  }))), Healthcare_defs || (Healthcare_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "Healthcare_svg__b",
    x1: 29.8,
    y1: 33.545,
    x2: 201.256,
    y2: 208.623,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.182,
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })), /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "Healthcare_svg__a"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#fff",
    d: "M0 0h298v246H0z"
  })))));
};

/* harmony default export */ const Healthcare = (SvgHealthcare);
;// CONCATENATED MODULE: ./public/SVG/industriesIcons/LegalServices.svg
var LegalServices_path, LegalServices_path2, LegalServices_path3, LegalServices_defs;

function LegalServices_extends() { LegalServices_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LegalServices_extends.apply(this, arguments); }



var SvgLegalServices = function SvgLegalServices(props) {
  return /*#__PURE__*/external_react_.createElement("svg", LegalServices_extends({
    width: 214,
    height: 246,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), LegalServices_path || (LegalServices_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M40.78 2.474v202.897h171.44V50.295L164.099 2l-123.32.474Z",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), LegalServices_path2 || (LegalServices_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M212.221 59.835h-60.606V2.06",
    stroke: "#000",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), LegalServices_path3 || (LegalServices_path3 = /*#__PURE__*/external_react_.createElement("path", {
    fill: "url(#LegalServices_svg__a)",
    d: "M0 60.186h118v185H0z"
  })), LegalServices_defs || (LegalServices_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "LegalServices_svg__a",
    x1: 59,
    y1: 60.186,
    x2: 59,
    y2: 220.7,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const LegalServices = (SvgLegalServices);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ServicePage/GetIcon/index.tsx















const GetIcon = title => {
  let icon;

  if (title === 'Research & Development') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(ResearchAndDevelopment, {});
  }

  if (title === 'DevOps') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(DevOps, {});
  }

  if (title === 'Dedicate dTeam') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(DedicatedTeam/* default */.Z, {});
  }

  if (title === 'Mobile App Development') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(MobileAppDevelopment/* default */.Z, {});
  }

  if (title === 'Web App Development') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(WebAppDevelopment, {});
  }

  if (title === 'Software QA & Testing') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(SoftwareQA_Testing, {});
  }

  if (title === 'Team Extension') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(TeamExtension/* default */.Z, {});
  }

  if (title === 'UI/UX Design') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(UI_UXdesign, {});
  }

  if (title === 'Booking Systems') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(BookingSystems, {});
  }

  if (title === 'Delivery Shipping') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(Delivery_Shipping, {});
  }

  if (title === 'EduTech') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(EduTech, {});
  }

  if (title === 'Healthcare') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(Healthcare, {});
  }

  if (title === 'Legal Services') {
    icon = /*#__PURE__*/jsx_runtime_.jsx(LegalServices, {});
  }

  return icon;
};

/* harmony default export */ const ServicePage_GetIcon = (GetIcon);
// EXTERNAL MODULE: ./components/Elements/index.tsx + 1 modules
var Elements = __webpack_require__(9064);
;// CONCATENATED MODULE: ./components/ServicePage/HeaderService/index.tsx







const HeaderService = ({
  title,
  titleSize = '48px',
  text,
  label,
  textWidth,
  hexagonColor = theme/* theme.elements.hexagonBorderedBlack */.r.elements.hexagonBorderedBlack,
  bgColor = theme/* theme.colors.black */.r.colors.black
}) => {
  const icon = ServicePage_GetIcon(title);

  const labelText = label && /*#__PURE__*/jsx_runtime_.jsx(H2, {
    children: label
  });

  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    bgColor: bgColor,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextContainer, {
        children: [labelText, /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
          bgColor: bgColor,
          children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
            titleSize: titleSize,
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
            textWidth: textWidth,
            children: text
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionIcon, {
        children: icon
      }), /*#__PURE__*/jsx_runtime_.jsx(Elements/* default */.Z, {
        color: hexagonColor
      })]
    })
  });
};

/* harmony default export */ const ServicePage_HeaderService = (HeaderService);

/***/ })

};
;