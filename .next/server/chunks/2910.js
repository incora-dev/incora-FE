"use strict";
exports.id = 2910;
exports.ids = [2910];
exports.modules = {

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EmbodiedIdeas)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/EmbodiedIdeas.style.ts


const Content = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__Content",
  componentId: "sc-ims184-0"
})(["max-width:1006px;width:100%;"]);
const Div = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__Div",
  componentId: "sc-ims184-1"
})(["background-color:", ";padding:75px 0 100px;width:100%;display:flex;justify-content:center;overflow-x:hidden;@media only screen and (max-width:", "){max-width:100%;padding:25px;}@media only screen and (max-width:", "){max-width:100%;padding:0 25px 53px;}@media only screen and (max-width:", "){padding-bottom:40px;}@media only screen and (max-width:", "){height:", ";padding:0 15px 30px;}"], ({
  bgColor
}) => bgColor, theme_get_default()('breakpoints.mDesk'), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.mobile'), ({
  height
}) => height ? `${height}px` : "max-content");
const PositionTitle = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__PositionTitle",
  componentId: "sc-ims184-2"
})(["padding-top:", ";margin-bottom:46px;@media only screen and (max-width:", "){padding-top:70px;margin-bottom:30px;}@media only screen and (max-width:", "){margin-top:0;margin-bottom:20px;}"], ({
  disablePadding
}) => disablePadding ? "0" : "120px", theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'));
const Block = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__Block",
  componentId: "sc-ims184-3"
})(["max-width:1006px;margin:0 auto;@media only screen and (max-width:", "){max-width:100%;}"], theme_get_default()('breakpoints.mDesk'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "EmbodiedIdeasstyle__H2",
  componentId: "sc-ims184-4"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:#fec506;@media only screen and (max-width:", "){width:100%;padding-left:0;font-size:var(--fs-24);line-height:34px;}"], theme_get_default()('breakpoints.mobile'));
const H4 = external_styled_components_default().h4.withConfig({
  displayName: "EmbodiedIdeasstyle__H4",
  componentId: "sc-ims184-5"
})(["z-index:1;font-family:Poppins;font-style:normal;font-weight:bold;font-size:var(--fs-20);line-height:30px;letter-spacing:0.05em;color:#fff;mix-blend-mode:difference;"]);
const ProjectsContainer = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__ProjectsContainer",
  componentId: "sc-ims184-6"
})(["display:flex;flex-direction:column;row-gap:174px;align-items:center;@media only screen and (max-width:", "){row-gap:53px;}"], theme_get_default()('breakpoints.mobile'));
const SeeMoreWorks = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__SeeMoreWorks",
  componentId: "sc-ims184-7"
})(["position:relative;max-width:1006px;margin:168px auto 70px;display:flex;flex-direction:column;row-gap:26px;a{z-index:1;}@media only screen and (max-width:", "){max-width:100%;margin:100px auto 120px;height:fit-content;padding-bottom:30px;}@media only screen and (max-width:", "){width:100%;padding-left:0;margin:50px 0 75px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const HexagonPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__HexagonPosition",
  componentId: "sc-ims184-8"
})(["position:absolute;top:-123px;left:-286px;z-index:0;svg{path{fill:#18181a;}}@media only screen and (max-width:", "){left:-190px;padding-top:0;transform:scale(0.6);}"], theme_get_default()('breakpoints.mobile'));
const LoadingPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__LoadingPosition",
  componentId: "sc-ims184-9"
})(["position:absolute;top:-114px;left:-138px;z-index:1;svg{transform:rotate(195deg);path{background:#18181a;}}@media only screen and (max-width:", "){left:-10%;}"], theme_get_default()('breakpoints.mobile'));
const DotsPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__DotsPosition",
  componentId: "sc-ims184-10"
})(["position:absolute;top:-32.5px;left:-90px;z-index:1;transform:rotate(240deg);"]);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Projects.style.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Container",
  componentId: "sc-13mbdqa-0"
})(["display:flex;column-gap:77px;flex-direction:", ";width:100%;position:relative;@media only screen and (max-width:", "){column-gap:30px;}@media only screen and (max-width:", "){flex-direction:column;}@media only screen and (max-width:", "){flex-wrap:wrap-reverse;max-width:100%;}"], ({
  flexDirection
}) => flexDirection, theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const Text = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Text",
  componentId: "sc-13mbdqa-1"
})(["display:flex;flex-direction:column;row-gap:21px;min-height:537px;padding-right:58%;padding-top:80px;@media only screen and (max-width:", "){padding-right:49%;padding-top:70px;}@media only screen and (max-width:", "){padding-right:47%;padding-top:15px;min-height:300px;}@media only screen and (max-width:", "){row-gap:12px;padding:0;min-height:auto;margin-bottom:35px;}"], theme_get_default()('breakpoints.mDesk'), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'));
const Projects_style_Block = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Block",
  componentId: "sc-13mbdqa-2"
})(["margin-top:9px;display:flex;flex-direction:column;row-gap:14px;cursor:pointer;"]);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "Projectsstyle__H3",
  componentId: "sc-13mbdqa-3"
})(["font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:0.05em;color:#000;cursor:pointer;@media only screen and (max-width:", "){line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-24);line-height:35px}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const P = external_styled_components_default().p.withConfig({
  displayName: "Projectsstyle__P",
  componentId: "sc-13mbdqa-4"
})(["max-width:410px;font-family:Poppins;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454a4d;@media only screen and (max-width:", "){line-height:27px}"], theme_get_default()('breakpoints.sTablet'));
const Projects_style_H4 = external_styled_components_default().h4.withConfig({
  displayName: "Projectsstyle__H4",
  componentId: "sc-13mbdqa-5"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;text-transform:uppercase;color:#000000;"]);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/index.tsx + 1 modules
var Technologies = __webpack_require__(7305);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/PictureWithAnimation/PictureWithAnimation.style.ts



const PositionElement1 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement1",
  componentId: "sc-q16acf-0"
})(["position:absolute;bottom:", ";right:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){transform:scale(0.7);bottom:", ";}@media only screen and (max-width:", "){transform:scale(0.4);bottom:", ";right:-200px;}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 0) {
    return '-310px';
  } else {
    return '-8px';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.mDesk'), ({
  index
}) => {
  if (index === 0) {
    return '-310px';
  } else {
    return '-52px';
  }
}, theme_get_default()('breakpoints.smallDesk'), ({
  index
}) => {
  if (index === 0) {
    return '-310px';
  } else {
    return '-96px';
  }
}, theme_get_default()('breakpoints.tablet'));
const PositionElement2 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement2",
  componentId: "sc-q16acf-1"
})(["position:absolute;top:", ";right:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){transform:scale(0.5);top:", ";right:-130px;}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.smallDesk'), ({
  index
}) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '-40px';
  }
}, theme_get_default()('breakpoints.tablet'));
const PositionElement3 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement3",
  componentId: "sc-q16acf-2"
})(["position:absolute;top:0;left:", ";transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){transform:scale(0.6);top:", ";left:-45px;}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.smallDesk'), ({
  index
}) => {
  if (index === 0) {
    return '-340px';
  } else {
    return '-94px';
  }
}, theme_get_default()('breakpoints.tablet'));
const PositionElement4 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement4",
  componentId: "sc-q16acf-3"
})(["position:absolute;bottom:", ";right:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PositionElement5 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement5",
  componentId: "sc-q16acf-4"
})(["position:absolute;top:", ";right:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PositionElement6 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement6",
  componentId: "sc-q16acf-5"
})(["position:absolute;top:0;left:", ";transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 1) {
    return '-255px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PositionElement7 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement7",
  componentId: "sc-q16acf-6"
})(["position:absolute;bottom:", ";left:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 2) {
    return '-305px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PositionElement8 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement8",
  componentId: "sc-q16acf-7"
})(["position:absolute;top:10px;right:", ";transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 2) {
    return '-200px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PositionElement9 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement9",
  componentId: "sc-q16acf-8"
})(["position:absolute;top:", ";left:0;transition:", ";svg{path{fill:", ";}}@media only screen and (max-width:", "){display:none;}"], ({
  index
}) => {
  if (index === 2) {
    return '-205px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor, theme_get_default()('breakpoints.tablet'));
const PictureWithAnimation_style_Container = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__Container",
  componentId: "sc-q16acf-9"
})(["position:absolute;overflow:hidden;cursor:pointer;max-width:700px;width:100%;height:537px;right:-180px;border-radius:", ";@media only screen and (max-width:", "){max-width:600px;height:460px;}@media only screen and (max-width:", "){max-width:370px;height:283px;right:-25px;}@media only screen and (max-width:", "){position:relative;max-width:100%;right:0;height:auto;}"], ({
  borderRadius
}) => borderRadius, theme_get_default()('breakpoints.mDesk'), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/Animation1/Vector.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgVector = function SvgVector(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 649,
    height: 300,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m.432 284.83 206.61 129.285a380.756 380.756 0 0 1 236.851-161.671 380.758 380.758 0 0 1 282.475 49.432 380.752 380.752 0 0 1 126.009 516.151l206.613 129.285c84.7-140.339 110.84-308.354 72.77-467.793-38.07-159.439-137.294-297.52-276.268-384.449a624.682 624.682 0 0 0-466.357-80.075A624.68 624.68 0 0 0 .432 284.83Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Vector = (SvgVector);
;// CONCATENATED MODULE: ./public/SVG/Animation1/Vector (1).svg
var Vector_1_path;

function Vector_1_extends() { Vector_1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Vector_1_extends.apply(this, arguments); }



var SvgVector1 = function SvgVector1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Vector_1_extends({
    width: 490,
    height: 153,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Vector_1_path || (Vector_1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M176.39-414.833.374-152.5 139.69 131.191l315.287 21.33 176.016-262.334L491.72-393.475l-315.33-21.358Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Vector_1_ = (SvgVector1);
;// CONCATENATED MODULE: ./public/SVG/Animation1/Vector (2).svg
var Vector_2_path;

function Vector_2_extends() { Vector_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Vector_2_extends.apply(this, arguments); }



var SvgVector2 = function SvgVector2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Vector_2_extends({
    width: 207,
    height: 422,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Vector_2_path || (Vector_2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m-194.366-78.693-155.089 231.145 122.752 249.965L51.101 421.21 206.19 190.065 83.476-59.874l-277.842-18.819Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Vector_2_ = (SvgVector2);
;// CONCATENATED MODULE: ./public/SVG/Animation2/Vector.svg
var Vector_path;

function Vector_extends() { Vector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Vector_extends.apply(this, arguments); }



var Vector_SvgVector = function SvgVector(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Vector_extends({
    width: 494,
    height: 274,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Vector_path || (Vector_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m.1 253.267 98.2 336.322 340.536 83.066 242.281-253.238-98.199-336.322L242.437.012.1 253.267Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation2_Vector = (Vector_SvgVector);
;// CONCATENATED MODULE: ./public/SVG/Animation2/Vector (1).svg
var Animation2_Vector_1_path;

function Animation2_Vector_1_extends() { Animation2_Vector_1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Animation2_Vector_1_extends.apply(this, arguments); }



var Vector_1_SvgVector1 = function SvgVector1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Animation2_Vector_1_extends({
    width: 347,
    height: 276,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Animation2_Vector_1_path || (Animation2_Vector_1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m.504-200.017 111.449 381.701 386.485 94.274L773.41-11.449 661.96-393.15l-386.421-94.293L.504-200.017Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation2_Vector_1_ = (Vector_1_SvgVector1);
;// CONCATENATED MODULE: ./public/SVG/Animation2/Vector (2).svg
var Animation2_Vector_2_path;

function Animation2_Vector_2_extends() { Animation2_Vector_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Animation2_Vector_2_extends.apply(this, arguments); }



var Vector_2_SvgVector2 = function SvgVector2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Animation2_Vector_2_extends({
    width: 253,
    height: 463,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Animation2_Vector_2_path || (Animation2_Vector_2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m-583.239 12.6 151.989 87.75A274.179 274.179 0 0 1-60.4 6.291 274.171 274.171 0 0 1 43.486 374.503l151.99 87.75A449.73 449.73 0 0 0 27.229-145.836 449.825 449.825 0 0 0-583.24 12.6Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation2_Vector_2_ = (Vector_2_SvgVector2);
;// CONCATENATED MODULE: ./public/SVG/Animation3/Vector.svg
var Animation3_Vector_path;

function Animation3_Vector_extends() { Animation3_Vector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Animation3_Vector_extends.apply(this, arguments); }



var Animation3_Vector_SvgVector = function SvgVector(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Animation3_Vector_extends({
    width: 429,
    height: 297,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Animation3_Vector_path || (Animation3_Vector_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M196.023.462 54.112 188.382a367.887 367.887 0 0 1 64.095 509.334 367.879 367.879 0 0 1-507.442 77.617l-141.911 187.92c127.907 93.397 287.406 132.777 444.082 109.617 156.677-23.15 297.97-106.976 393.394-233.381A603.56 603.56 0 0 0 196.023.462Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation3_Vector = (Animation3_Vector_SvgVector);
;// CONCATENATED MODULE: ./public/SVG/Animation3/Vector (1).svg
var Animation3_Vector_1_path;

function Animation3_Vector_1_extends() { Animation3_Vector_1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Animation3_Vector_1_extends.apply(this, arguments); }



var Animation3_Vector_1_SvgVector1 = function SvgVector1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Animation3_Vector_1_extends({
    width: 196,
    height: 516,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Animation3_Vector_1_path || (Animation3_Vector_1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m447.213 37.878 105.083 257.757L381.48 515.572l-275.856-37.837L.541 219.978 171.315.058l275.898 37.82Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation3_Vector_1_ = (Animation3_Vector_1_SvgVector1);
;// CONCATENATED MODULE: ./public/SVG/Animation3/Vector (2).svg
var Animation3_Vector_2_path;

function Animation3_Vector_2_extends() { Animation3_Vector_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Animation3_Vector_2_extends.apply(this, arguments); }



var Animation3_Vector_2_SvgVector2 = function SvgVector2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Animation3_Vector_2_extends({
    width: 486,
    height: 202,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Animation3_Vector_2_path || (Animation3_Vector_2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M366.571-340.732 485.832-48.197 291.968 201.416l-313.076-42.943-119.261-292.536L53.446-383.655l313.125 42.923Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const Animation3_Vector_2_ = (Animation3_Vector_2_SvgVector2);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/PictureWithAnimation/Animation/index.tsx














function Animation(props) {
  const {
    index,
    elementsColor,
    shouldHover
  } = props;

  const createdAnimation = () => {
    if (index === 0) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionElement1, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Vector, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement2, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Vector_1_, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement3, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Vector_2_, {})
        })]
      });
    }

    if (index === 1) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionElement4, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation2_Vector, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement5, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation2_Vector_1_, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement6, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation2_Vector_2_, {})
        })]
      });
    }

    if (index === 2) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionElement7, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation3_Vector, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement8, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation3_Vector_1_, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(PositionElement9, {
          elementsColor: elementsColor,
          index: shouldHover,
          children: /*#__PURE__*/jsx_runtime_.jsx(Animation3_Vector_2_, {})
        })]
      });
    }
  };

  const Animated = createdAnimation();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Animated
  });
}

/* harmony default export */ const PictureWithAnimation_Animation = (Animation);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/PictureWithAnimation/index.tsx








function PictureWithAnimation(props) {
  const {
    id,
    img,
    index,
    elementsColor,
    shouldHover,
    setShouldHover,
    width,
    height,
    url
  } = props;
  const borderRadius = (index + 1) % 10 !== 2 ? "50px 0 0 0" : "0 50px 0 0";
  return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: routes/* ROUTES.CASE_STUDIES */.Z.CASE_STUDIES + `${url}/${id}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PictureWithAnimation_style_Container, {
      borderRadius: borderRadius,
      onMouseEnter: () => setShouldHover(index),
      onMouseLeave: () => setShouldHover(-1),
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        loader: () => img,
        src: img,
        width: width,
        height: height,
        alt: "case image",
        layout: "responsive"
      }), /*#__PURE__*/jsx_runtime_.jsx(PictureWithAnimation_Animation, {
        index: index,
        elementsColor: elementsColor,
        shouldHover: shouldHover
      })]
    })
  });
}

/* harmony default export */ const Projects_PictureWithAnimation = (PictureWithAnimation);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/index.tsx












function Projects({
  projects,
  elementsColor
}) {
  const {
    0: shouldHover,
    1: setShouldHover
  } = (0,external_react_.useState)(-1);
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  (0,external_react_.useEffect)(() => {
    console.log("projects", projects);
  });

  function createProjects() {
    return projects.map(({
      id,
      attributes
    }, index) => {
      var _attributes$technolog;

      const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      const marginText = (index + 1) % 10 !== 2 ? isMobile || isTablet || isSmallTablet ? "53px 15px;" : "81px 0 0 180px;" : isMobile || isTablet || isSmallTablet ? "53px 15px;" : "81px 180px 0 0";
      const url = attributes === null || attributes === void 0 ? void 0 : attributes.url;
      const technologies = attributes === null || attributes === void 0 ? void 0 : (_attributes$technolog = attributes.technologies) === null || _attributes$technolog === void 0 ? void 0 : _attributes$technolog.data;
      const name = attributes === null || attributes === void 0 ? void 0 : attributes.name;
      const description = attributes === null || attributes === void 0 ? void 0 : attributes.description;
      const imageEntry = attributes === null || attributes === void 0 ? void 0 : attributes.featuredImage.data[0].attributes;
      const image = constants/* IMAGES_LINK */.rS + (imageEntry === null || imageEntry === void 0 ? void 0 : imageEntry.url);
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: name && description && technologies && image && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
          flexDirection: flexDirection,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: routes/* ROUTES.CASE_STUDIES */.Z.CASE_STUDIES + `${url}/${id}`,
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(H3, {
                onMouseEnter: () => setShouldHover(index),
                onMouseLeave: () => setShouldHover(-1),
                children: name
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(P, {
              onMouseEnter: () => setShouldHover(index),
              onMouseLeave: () => setShouldHover(-1),
              children: description
            }), /*#__PURE__*/jsx_runtime_.jsx(Projects_style_Block, {
              onMouseEnter: () => setShouldHover(index),
              onMouseLeave: () => setShouldHover(-1),
              children: technologies.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(Projects_style_H4, {
                  children: "Technologies"
                }), /*#__PURE__*/jsx_runtime_.jsx(Technologies/* default */.Z, {
                  technologies: technologies
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Projects_PictureWithAnimation, {
            id: id,
            img: image,
            width: 700,
            height: 537,
            index: index,
            elementsColor: elementsColor,
            shouldHover: shouldHover,
            setShouldHover: setShouldHover,
            url: url
          })]
        }, id)
      });
    });
  }

  const projectsArray = createProjects().map(project => project);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: projectsArray
  });
}

/* harmony default export */ const EmbodiedIdeas_Projects = (Projects);
// EXTERNAL MODULE: ./components/ButtonWithArrow/index.tsx + 1 modules
var ButtonWithArrow = __webpack_require__(5982);
// EXTERNAL MODULE: ./public/hexagonFilled.svg
var hexagonFilled = __webpack_require__(8866);
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx











function EmbodiedIdeasComponent({
  projects,
  title,
  bgColor,
  elementsColor,
  disablePadding,
  disableSeeMore,
  button,
  buttonIntro
}) {
  const {
    0: animation,
    1: setAnimation
  } = (0,external_react_.useState)(false);
  const buttonLabel = button === null || button === void 0 ? void 0 : button.label;
  const buttonUrl = button === null || button === void 0 ? void 0 : button.url;
  const renderCondition = buttonIntro && buttonLabel && buttonUrl;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Div, {
      bgColor: bgColor,
      onMouseEnter: () => setAnimation(true),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PositionTitle, {
          disablePadding: disablePadding,
          children: /*#__PURE__*/jsx_runtime_.jsx(Block, {
            children: /*#__PURE__*/jsx_runtime_.jsx(H2, {
              children: title
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ProjectsContainer, {
          children: /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas_Projects, {
            projects: projects,
            elementsColor: elementsColor
          })
        }), renderCondition && !disableSeeMore && /*#__PURE__*/(0,jsx_runtime_.jsxs)(SeeMoreWorks, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(H4, {
            children: buttonIntro
          }), /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
            buttonLabel: buttonLabel,
            redirectTo: buttonUrl,
            padding: "23px 35px"
          }), /*#__PURE__*/jsx_runtime_.jsx(HexagonPosition, {
            children: /*#__PURE__*/jsx_runtime_.jsx(hexagonFilled/* default */.Z, {
              width: 350,
              height: 404,
              viewBox: "0 0 195 225"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(LoadingPosition, {
            children: /*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
              width: 170,
              height: 170,
              viewBox: "0 0 96 96"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(DotsPosition, {
            children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
              numberOfDots: 5,
              dotColor: "#fff",
              animation: animation
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const EmbodiedIdeas = (EmbodiedIdeasComponent);

/***/ })

};
;