"use strict";
exports.id = 9275;
exports.ids = [9275];
exports.modules = {

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EmbodiedIdeas)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/EmbodiedIdeas.style.ts


const Div = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__Div",
  componentId: "sc-ims184-0"
})(["background-color:", ";overflow:hidden;@media only screen and (max-width:", "){height:", ";padding-bottom:120px;}padding-bottom:120px;"], ({
  bgColor
}) => bgColor, theme/* theme.breakpoints.mobile */.r.breakpoints.mobile, ({
  height
}) => height ? `${height}px` : "max-content");
const PositionTitle = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__PositionTitle",
  componentId: "sc-ims184-1"
})(["padding-top:", ";margin-bottom:46px;@media only screen and (max-width:", "){padding-top:53px;}"], ({
  disablePadding
}) => disablePadding ? "0" : "120px", theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const Block = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__Block",
  componentId: "sc-ims184-2"
})(["max-width:1006px;margin:0 auto;"]);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "EmbodiedIdeasstyle__H2",
  componentId: "sc-ims184-3"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-26);line-height:39px;letter-spacing:0.05em;text-transform:uppercase;color:#fec506;@media only screen and (max-width:", "){width:100%;padding-left:20px;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const H4 = external_styled_components_default().h4.withConfig({
  displayName: "EmbodiedIdeasstyle__H4",
  componentId: "sc-ims184-4"
})(["z-index:1;font-family:Poppins;font-style:normal;font-weight:bold;font-size:var(--fs-20);line-height:30px;letter-spacing:0.05em;color:#fff;mix-blend-mode:difference;"]);
const ProjectsContainer = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__ProjectsContainer",
  componentId: "sc-ims184-5"
})(["display:flex;flex-direction:column;row-gap:174px;align-items:center;@media only screen and (max-width:", "){row-gap:53px;}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const SeeMoreWorks = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__SeeMoreWorks",
  componentId: "sc-ims184-6"
})(["position:relative;max-width:1006px;margin:168px auto 0;display:flex;flex-direction:column;row-gap:26px;a{z-index:1;}"]);
const HexagonPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__HexagonPosition",
  componentId: "sc-ims184-7"
})(["position:absolute;top:-123px;left:-286px;z-index:0;svg{path{fill:#18181a;}}"]);
const LoadingPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__LoadingPosition",
  componentId: "sc-ims184-8"
})(["position:absolute;top:-114px;left:-138px;z-index:1;svg{transform:rotate(195deg);path{background:#18181a;}}"]);
const DotsPosition = external_styled_components_default().div.withConfig({
  displayName: "EmbodiedIdeasstyle__DotsPosition",
  componentId: "sc-ims184-9"
})(["position:absolute;top:-32.5px;left:-90px;z-index:1;transform:rotate(240deg);"]);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Projects.style.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Container",
  componentId: "sc-13mbdqa-0"
})(["display:flex;column-gap:77px;flex-direction:", ";@media only screen and (max-width:", "){flex-wrap:wrap-reverse;max-width:100%;}"], ({
  flexDirection
}) => flexDirection, theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const Text = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Text",
  componentId: "sc-13mbdqa-1"
})(["display:flex;flex-direction:column;row-gap:21px;margin:", ";"], ({
  margin
}) => margin);
const Projects_style_Block = external_styled_components_default().div.withConfig({
  displayName: "Projectsstyle__Block",
  componentId: "sc-13mbdqa-2"
})(["margin-top:9px;display:flex;flex-direction:column;row-gap:14px;cursor:pointer;"]);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "Projectsstyle__H3",
  componentId: "sc-13mbdqa-3"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:0.05em;color:#000;cursor:pointer;@media only screen and (max-width:", "){font-size:var(--fs-28);}"], theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const P = external_styled_components_default().p.withConfig({
  displayName: "Projectsstyle__P",
  componentId: "sc-13mbdqa-4"
})(["max-width:410px;font-family:Poppins;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454a4d;"]);
const Projects_style_H4 = external_styled_components_default().h4.withConfig({
  displayName: "Projectsstyle__H4",
  componentId: "sc-13mbdqa-5"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;text-transform:uppercase;color:#000000;"]);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/Projects/Technologies/index.tsx + 1 modules
var Technologies = __webpack_require__(7305);
// EXTERNAL MODULE: ./constants/index.ts + 5 modules
var constants = __webpack_require__(3058);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/PictureWithAnimation/PictureWithAnimation.style.ts


const PositionElement1 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement1",
  componentId: "sc-q16acf-0"
})(["position:absolute;bottom:", ";right:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 0) {
    return '-310px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement2 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement2",
  componentId: "sc-q16acf-1"
})(["position:absolute;top:", ";right:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement3 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement3",
  componentId: "sc-q16acf-2"
})(["position:absolute;top:0;left:", ";transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 0) {
    return '-220px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement4 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement4",
  componentId: "sc-q16acf-3"
})(["position:absolute;bottom:", ";right:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement5 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement5",
  componentId: "sc-q16acf-4"
})(["position:absolute;top:", ";right:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 1) {
    return '-285px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement6 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement6",
  componentId: "sc-q16acf-5"
})(["position:absolute;top:0;left:", ";transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 1) {
    return '-255px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement7 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement7",
  componentId: "sc-q16acf-6"
})(["position:absolute;bottom:", ";left:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 2) {
    return '-305px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement8 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement8",
  componentId: "sc-q16acf-7"
})(["position:absolute;top:10px;right:", ";transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 2) {
    return '-200px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PositionElement9 = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__PositionElement9",
  componentId: "sc-q16acf-8"
})(["position:absolute;top:", ";left:0;transition:", ";svg{path{fill:", ";}}"], ({
  index
}) => {
  if (index === 2) {
    return '-205px';
  } else {
    return '0';
  }
}, constants/* transitionTimeProjectsHoverDuration */.r$, ({
  elementsColor
}) => elementsColor);
const PictureWithAnimation_style_Container = external_styled_components_default().div.withConfig({
  displayName: "PictureWithAnimationstyle__Container",
  componentId: "sc-q16acf-9"
})(["position:relative;overflow:hidden;cursor:pointer;border-radius:", ";"], ({
  borderRadius
}) => borderRadius);
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
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/Projects/PictureWithAnimation/index.tsx







function PictureWithAnimation(props) {
  const {
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
    href: `/case_studies/case/${url}`,
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
        alt: "case image"
      }), /*#__PURE__*/jsx_runtime_.jsx(PictureWithAnimation_Animation, {
        index: index,
        elementsColor: elementsColor,
        shouldHover: shouldHover
      })]
    })
  });
}

/* harmony default export */ const Projects_PictureWithAnimation = (PictureWithAnimation);
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
    0: isMobile,
    1: setIsMobile
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme/* theme.breakpoints.mobile.replace */.r.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  }, []);
  (0,external_react_.useEffect)(() => {
    console.log("projects", projects);
  });

  function createProjects() {
    return projects.data.map(({
      id,
      attributes
    }, index) => {
      var _attributes$technolog;

      const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
      const marginText = (index + 1) % 10 !== 2 ? isMobile ? '53px 20px;' : '81px 0 0 180px;' : isMobile ? '53px 20px;' : '81px 180px 0 0';
      const url = attributes === null || attributes === void 0 ? void 0 : attributes.url;
      const technologies = attributes === null || attributes === void 0 ? void 0 : (_attributes$technolog = attributes.technologies) === null || _attributes$technolog === void 0 ? void 0 : _attributes$technolog.data;
      const name = attributes === null || attributes === void 0 ? void 0 : attributes.name;
      const description = attributes === null || attributes === void 0 ? void 0 : attributes.description;
      const imageEntry = attributes === null || attributes === void 0 ? void 0 : attributes.featuredImage.data[0].attributes;
      const image = constants/* IMAGES_LINK */.rS + (imageEntry === null || imageEntry === void 0 ? void 0 : imageEntry.url);
      const width = imageEntry === null || imageEntry === void 0 ? void 0 : imageEntry.width;
      const height = imageEntry === null || imageEntry === void 0 ? void 0 : imageEntry.height;
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: name && description && technologies && image && width && height && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
          flexDirection: flexDirection,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
            margin: marginText,
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: `/case_studies/case/${url}`,
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
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./graphql/caseStudies/queries.ts
var queries = __webpack_require__(5130);
;// CONCATENATED MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx













function EmbodiedIdeasComponent({
  title,
  bgColor,
  elementsColor,
  disablePadding,
  disableSeeMore,
  currentIndustryTag
}) {
  const {
    0: animation,
    1: setAnimation
  } = (0,external_react_.useState)(false);
  const industry = currentIndustryTag === "all" ? undefined : currentIndustryTag;
  const {
    data,
    loading
  } = (0,client_.useQuery)(queries/* GET_PROJECTS */.fM, {
    variables: {
      industry
    }
  });
  const projects = data === null || data === void 0 ? void 0 : data.projects;
  console.log('loading && projects', loading, projects, !loading && projects);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: !loading && projects && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
      bgColor: bgColor,
      onMouseEnter: () => setAnimation(true),
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
      }), !disableSeeMore && /*#__PURE__*/(0,jsx_runtime_.jsxs)(SeeMoreWorks, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H4, {
          children: "Want to see more works?"
        }), /*#__PURE__*/jsx_runtime_.jsx(ButtonWithArrow/* default */.Z, {
          buttonLabel: "see portfolio",
          redirectTo: "see_portfolio",
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
  });
}

/* harmony default export */ const EmbodiedIdeas = (EmbodiedIdeasComponent);

/***/ }),

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

/***/ 7783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tX": () => (/* binding */ reviewsSelector),
/* harmony export */   "Nq": () => (/* binding */ pointsSelector),
/* harmony export */   "E2": () => (/* binding */ loadingSelector)
/* harmony export */ });
const reviewsSelector = state => {
  return state.homepageReducer.reviews;
};
const pointsSelector = state => {
  return state.homepageReducer.points;
};
const loadingSelector = state => {
  return state.homepageReducer.loading;
};

/***/ }),

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Globe)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Globe/style.ts

const GlobeWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__GlobeWrapper",
  componentId: "sc-1nfcj9s-0"
})(["width:100%;display:flex;justify-content:center;overflow:hidden;"]);
const PointLabel = external_styled_components_default().div.withConfig({
  displayName: "style__PointLabel",
  componentId: "sc-1nfcj9s-1"
})(["width:30px;height:30px;border-radius:100px;background-color:\"white\";"]);
;// CONCATENATED MODULE: ./public/images/globe-pattern-2.0.1.png
/* harmony default export */ const globe_pattern_2_0_1 = ({"src":"/_next/static/media/globe-pattern-2.0.1.08e6df91.png","height":5673,"width":10929,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAJFBMVEX+xQb9xQb+xAb9xAb9xAb9xQb+xQb+xQb+xAb+xQb+xQb9xAaYz6zkAAAADHRSTlMAAAAAAgQFBhESHySQKPJwAAAAHElEQVR42mNgYjBgZmCu2qrAIOQxjYHBiNmYCQAcBwLiolhbKQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(2248);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/Homepage/selectors.ts
var selectors = __webpack_require__(7783);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Globe/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










let GlobeGl = () => null;

if (false) {}

const Globe = ({
  reviewIndex
}) => {
  const points = (0,external_react_redux_.useSelector)(selectors/* pointsSelector */.Nq);
  const globeEl = (0,external_react_.useRef)();

  const pointsSpheres = point => {
    const coords = globeEl.current.getCoords(point.lat, point.lng, point.size);
    const {
      x,
      y,
      z
    } = coords;
    const sphere = new external_three_.Mesh(new external_three_.SphereBufferGeometry(point.radius), new external_three_.MeshLambertMaterial({
      color: "white"
    }));
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    return sphere;
  };

  const changePointOfView = (0,external_react_.useCallback)(() => {
    const latAlign = 30;
    const altitude = 1.4;
    const {
      lat,
      lng
    } = points[reviewIndex];
    globeEl.current.pointOfView({
      lat: lat - latAlign,
      lng,
      altitude
    }, 700);
  }, [reviewIndex]);

  const setControlsOptions = () => {
    const controls = globeEl.current.controls();
    controls.enableZoom = false;
    controls.minAzimuthAngle = -1;
    controls.maxAzimuthAngle = 1;
    controls.minPolarAngle = 1.7;
    controls.maxPolarAngle = 2.5;
  };

  const updatePoints = points.map((point, index) => {
    if (index === reviewIndex) {
      return _objectSpread(_objectSpread({}, point), {}, {
        size: 0.06
      });
    } else {
      return _objectSpread(_objectSpread({}, point), {}, {
        size: 0.03
      });
    }
  });
  (0,external_react_.useEffect)(() => {
    setControlsOptions();
  }, []);
  (0,external_react_.useEffect)(() => {
    changePointOfView();
  }, [reviewIndex]);
  return /*#__PURE__*/jsx_runtime_.jsx(GlobeWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(GlobeGl, {
      ref: globeEl,
      width: 1366,
      height: 1200,
      animateIn: true,
      globeImageUrl: globe_pattern_2_0_1.src,
      backgroundColor: theme/* theme.colors.black */.r.colors.black,
      showAtmosphere: false,
      pointsData: updatePoints,
      pointAltitude: point => {
        return point.size;
      },
      pointColor: () => "white",
      pointRadius: 0.1,
      pointsTransitionDuration: 0,
      customLayerData: points,
      customThreeObject: pointsSpheres
    })
  });
};

/* harmony default export */ const common_Globe = (Globe);

/***/ })

};
;