"use strict";
(() => {
var exports = {};
exports.id = 7379;
exports.ids = [7379,2197];
exports.modules = {

/***/ 2903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgBlackSemicircle = function SvgBlackSemicircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 92,
    height: 92,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m15.807 91.987 14.87-14.87a32.853 32.853 0 0 1 .615-45.84 32.853 32.853 0 0 1 45.838-.604L92 15.803a53.888 53.888 0 0 0-75.598.615 53.9 53.9 0 0 0-.595 75.569Z",
    fill: "#000"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgBlackSemicircle);

/***/ }),

/***/ 3332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/HexagonsBackground/index.tsx + 1 modules
var HexagonsBackground = __webpack_require__(5740);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Case/CaseIntroduction/style.ts


const CaseIntroductionWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__CaseIntroductionWrapper",
  componentId: "sc-ejpwqj-0"
})(["width:100%;height:461px;position:relative;display:flex;justify-content:center;"]);
const ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-ejpwqj-1"
})(["position:absolute;width:1010px;padding-top:76px;@media only screen and (max-width:", "){width:100%;padding:70px 25px 0;}@media only screen and (max-width:", "){padding:60px 15px 0;}> h3{font-weight:600;font-size:var(--fs-12);line-height:9px;letter-spacing:0.16em;text-transform:uppercase;color:", ";}> h2{font-weight:800;font-size:var(--fs-21);line-height:31px;letter-spacing:0.05em;text-transform:uppercase;color:", ";margin-bottom:10px;}> h1{width:761px;font-weight:800;font-size:var(--fs-48);line-height:72px;letter-spacing:0.05em;text-transform:capitalize;color:", ";margin-bottom:18px;@media only screen and (max-width:", "){width:100%;font-size:var(--fs-36);line-height:50px;}@media only screen and (max-width:", "){line-height:43px;}@media only screen and (max-width:", "){line-height:40px;font-size:var(--fs-24);}}> p{width:657px;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){width:100%;line-height:28px;}}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.font3"), theme_get_default()("colors.font3"), theme_get_default()("colors.white"), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mMobile'), theme_get_default()("colors.font1"), theme_get_default()('breakpoints.sTablet'));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Case/CaseIntroduction/index.tsx





const CaseIntroduction = ({
  name,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CaseIntroductionWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HexagonsBackground/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "under"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "NDA"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      })]
    })]
  });
};

/* harmony default export */ const Case_CaseIntroduction = (CaseIntroduction);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Case/CaseDescription/style.ts


const CaseDescriptionWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__CaseDescriptionWrapper",
  componentId: "sc-fxtjzi-0"
})(["width:100%;height:727px;display:flex;justify-content:center;@media only screen and (max-width:", "){height:fit-content;}"], theme_get_default()('breakpoints.tabletPro'));
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrapper",
  componentId: "sc-fxtjzi-1"
})(["width:1006px;padding-top:79px;display:flex;justify-content:space-between;@media only screen and (max-width:", "){width:100%;padding:70px 25px 20px;;}@media only screen and (max-width:", "){flex-direction:column;}@media only screen and (max-width:", "){padding:50px 15px 20px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const TextWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TextWrap",
  componentId: "sc-fxtjzi-2"
})(["width:540px;height:737px;@media only screen and (max-width:", "){height:fit-content;}@media only screen and (max-width:", "){width:100%;}h2{font-weight:800;font-size:var(--fs-21);line-height:31px;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:19px;}p{font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";margin-bottom:120px;@media only screen and (max-width:", "){margin-bottom:30px;}}.first{margin-bottom:117px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()("colors.font2"), theme_get_default()('breakpoints.sTablet'));
const TagsWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TagsWrap",
  componentId: "sc-fxtjzi-3"
})(["width:406px;min-height:367px;overflow:scroll;height:max-content;max-height:482px;background-color:", ";padding:35px 30px 0;@media only screen and (max-width:", "){padding:10px 15px 0;max-height:350px;}@media only screen and (max-width:", "){padding-left:0;padding-right:0;background-color:", ";min-height:fit-content;max-height:fit-content;width:100%;}"], theme_get_default()("colors.background4"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()("colors.white"));
const TagsCategory = external_styled_components_default().div.withConfig({
  displayName: "style__TagsCategory",
  componentId: "sc-fxtjzi-4"
})(["margin-bottom:25px;@media only screen and (max-width:", "){margin-bottom:20px;}"], theme_get_default()('breakpoints.tablet'));
const TagsHeading = external_styled_components_default().h3.withConfig({
  displayName: "style__TagsHeading",
  componentId: "sc-fxtjzi-5"
})(["font-weight:800;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:13px;"]);
const LocationAndIndustryWrap = external_styled_components_default().div.withConfig({
  displayName: "style__LocationAndIndustryWrap",
  componentId: "sc-fxtjzi-6"
})(["display:flex;column-gap:46px;flex-direction:column-reverse;"]);
const TagFlexBox = external_styled_components_default().div.withConfig({
  displayName: "style__TagFlexBox",
  componentId: "sc-fxtjzi-7"
})(["display:flex;width:100%;flex-flow:wrap row;gap:7px;"]);
const TagBox = external_styled_components_default().div.withConfig({
  displayName: "style__TagBox",
  componentId: "sc-fxtjzi-8"
})(["position:relative;cursor:pointer;height:22px;padding:0 10px;border-radius:5px;display:flex;justify-content:center;align-items:center;background-color:", ";box-shadow:", ";transition:ease-out 0.4s;> span{z-index:1;font-weight:600;font-size:var(--fs-10);line-height:28px;letter-spacing:0.1em;text-transform:capitalize;color:", ";}&:after{position:absolute;top:0;left:0;width:0;height:100%;content:'';border-radius:5px;background-color:", ";color:", ";transition:width ", ";}&:hover:after{width:100%;}"], theme_get_default()("colors.font2"), theme_get_default()("boxShadow.initial"), theme_get_default()("colors.white"), theme_get_default()("colors.yellow"), theme_get_default()("colors.black"), theme_get_default()("transition.button"));
;// CONCATENATED MODULE: ./components/Case/CaseDescription/index.tsx






const CaseDescription = ({
  mainInfo,
  location,
  technologies,
  services,
  industry
}) => {
  const info = mainInfo.item.map((item, index) => {
    if (index !== 0) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: item === null || item === void 0 ? void 0 : item.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: item === null || item === void 0 ? void 0 : item.description
        })]
      });
    }
  });

  const locationTag = location && /*#__PURE__*/jsx_runtime_.jsx(TagBox, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [location.city, ", ", location.country]
    })
  });

  const technologiesTags = technologies.data.map(({
    id,
    attributes
  }) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: (attributes === null || attributes === void 0 ? void 0 : attributes.url) || "",
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(TagBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: attributes === null || attributes === void 0 ? void 0 : attributes.Technology_name
      })
    })
  }, id));
  const servicesTags = services.data.map(({
    id,
    attributes
  }) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
    href: (attributes === null || attributes === void 0 ? void 0 : attributes.url) || "",
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(TagBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: attributes === null || attributes === void 0 ? void 0 : attributes.name
      })
    })
  }, id));
  return /*#__PURE__*/jsx_runtime_.jsx(CaseDescriptionWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TextWrap, {
        children: info
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagsWrap, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationAndIndustryWrap, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TagsCategory, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TagsHeading, {
              children: "location"
            }), /*#__PURE__*/jsx_runtime_.jsx(TagFlexBox, {
              children: locationTag
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagsCategory, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TagsHeading, {
              children: "industry"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: industry.url || "",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(TagFlexBox, {
                children: /*#__PURE__*/jsx_runtime_.jsx(TagBox, {
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: industry.name
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagsCategory, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TagsHeading, {
            children: "technologies"
          }), /*#__PURE__*/jsx_runtime_.jsx(TagFlexBox, {
            children: technologiesTags
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TagsCategory, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TagsHeading, {
            children: "services"
          }), /*#__PURE__*/jsx_runtime_.jsx(TagFlexBox, {
            children: servicesTags
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const Case_CaseDescription = (CaseDescription);
;// CONCATENATED MODULE: ./components/Case/ProjectOverview/ProjectOverviewItem/style.ts



const paddingRight = index => {
  switch (index) {
    case 0:
      return "129px";

    case 1:
      return "0";

    case 3:
      return "0";

    default:
      return "129px";
  }
};

const ProjectOverviewItemWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ProjectOverviewItemWrapper",
  componentId: "sc-1c46qvp-0"
})(["width:1226px;height:402px;display:flex;justify-content:space-between;flex-direction:", ";padding-right:", ";margin-bottom:", ";padding-left:", ";@media only screen and (max-width:", "){width:100%;height:fit-content;padding-right:0;padding-left:0;column-gap:30px;}@media only screen and (max-width:", "){flex-direction:column;row-gap:40px;margin-bottom:70px;}@media only screen and (max-width:", "){row-gap:20px;margin-bottom:35px;}"], ({
  isLeft
}) => isLeft ? "row" : "row-reverse", ({
  isLeft
}) => isLeft ? "129px" : "0", ({
  isLeft
}) => isLeft ? "120px" : "150px", ({
  isLeft
}) => isLeft ? "0" : "110px", theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const ImageWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ImageWrap",
  componentId: "sc-1c46qvp-1"
})(["width:564px;height:350px;padding-top:", ";position:relative;@media only screen and (max-width:", "){padding-top:10px;}@media only screen and (max-width:", "){width:310px;height:187px;margin-left:15px;}"], ({
  index
}) => index === 2 ? "38px" : "10px", theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const ImageBackground = external_styled_components_default().div.withConfig({
  displayName: "style__ImageBackground",
  componentId: "sc-1c46qvp-2"
})(["position:absolute;z-index:1;width:100%;height:100%;background:", ";border-top-left-radius:50px;border-bottom-right-radius:", ";background:", ";display:flex;justify-content:center;align-items:center;@media only screen and (max-width:", "){left:25px;}@media only screen and (max-width:", "){left:0;padding:10px;border-top-left-radius:30px;border-bottom-right-radius:0;}img{border-top-left-radius:20px;}"], theme_get_default()("colors.black"), ({
  isLeft
}) => isLeft ? "0" : "50px", theme_get_default()("colors.black"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const style_TextWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TextWrap",
  componentId: "sc-1c46qvp-3"
})(["width:439px;padding-top:", ";@media only screen and (max-width:", "){width:calc(100% - 600px);padding-left:", ";padding-right:", ";padding-top:", ";}@media only screen and (max-width:", "){width:100%;z-index:1;padding-left:25px;padding-top:5px;}@media only screen and (max-width:", "){padding-left:15px;padding-right:15px;}> h2{font-weight:800;font-size:var(--fs-28);line-height:42px;letter-spacing:0.05em;text-transform:capitalize;margin-bottom:26px;@media only screen and (max-width:", "){font-size:var(--fs-20);margin-bottom:15px;}}> p{width:100%;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){line-height:27px;}> ul{padding-left:24px;}}"], ({
  isLeft
}) => isLeft ? "5px" : "70px", theme_get_default()('breakpoints.tabletPro'), ({
  isLeft
}) => isLeft ? "0" : "25px", ({
  isLeft
}) => isLeft ? "25px" : "0", ({
  isLeft
}) => isLeft ? "5px" : "50px", theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.font2"), theme_get_default()('breakpoints.mobile'));
const DecorationWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__DecorationWrapper",
  componentId: "sc-1c46qvp-4"
})(["width:100%;height:100%;position:absolute;> svg{position:absolute;}.decoration1{z-index:0;top:-65px;left:-74px;@media only screen and (max-width:", "){top:-179px;left:-153px;transform:scale(0.6);}}.black_semicircle{z-index:2;bottom:-90px;left:-65px;@media only screen and (max-width:", "){display:none;}}.transparent{z-index:0;right:35px;bottom:-70px;@media only screen and (max-width:", "){right:-86px;}}.transparent_semicircle{z-index:0;right:-45px;bottom:-45px;@media only screen and (max-width:", "){right:0;bottom:-70px;}}.dots1_wrap{position:absolute;z-index:2;}.decoration2{z-index:0;left:50px;top:-35px;@media only screen and (max-width:", "){left:28px;top:-137px;transform:scale(0.5);}}.decoration_black{z-index:2;top:-190px;left:-70px;}.decoration_semicircle{z-index:0;bottom:-160px;left:-70px;}"], theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.mediumDesk'));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/decorationProjectOverview.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDecorationProjectOverview = function SvgDecorationProjectOverview(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 369,
    height: 501,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m-32.545.573-155.089 231.145 122.752 249.964 277.804 18.794L368.011 269.33 245.297 19.392-32.545.572Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const decorationProjectOverview = (SvgDecorationProjectOverview);
// EXTERNAL MODULE: ./public/blackSemicircle.svg
var blackSemicircle = __webpack_require__(2903);
;// CONCATENATED MODULE: ./public/TransparentElement.svg
var TransparentElement_path, _defs;

function TransparentElement_extends() { TransparentElement_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TransparentElement_extends.apply(this, arguments); }



var SvgTransparentElement = function SvgTransparentElement(props) {
  return /*#__PURE__*/external_react_.createElement("svg", TransparentElement_extends({
    width: 182,
    height: 181,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), TransparentElement_path || (TransparentElement_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 180.993V0h181.738c0 48.002-19.147 94.039-53.23 127.981C94.426 161.924 48.2 180.993 0 180.993Z",
    fill: "url(#TransparentElement_svg__a)"
  })), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "TransparentElement_svg__a",
    x1: 174.738,
    y1: -0.007,
    x2: 6.238,
    y2: 161.993,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const TransparentElement = (SvgTransparentElement);
;// CONCATENATED MODULE: ./public/transparentSemicircle.svg
var transparentSemicircle_path, transparentSemicircle_defs;

function transparentSemicircle_extends() { transparentSemicircle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return transparentSemicircle_extends.apply(this, arguments); }



var SvgTransparentSemicircle = function SvgTransparentSemicircle(props) {
  return /*#__PURE__*/external_react_.createElement("svg", transparentSemicircle_extends({
    width: 268,
    height: 225,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), transparentSemicircle_path || (transparentSemicircle_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m268 159.564-47.946-31.118A89.3 89.3 0 0 1 97.839 152.75 89.295 89.295 0 0 1 70.294 31.227L22.347.109a146.474 146.474 0 0 0 44.411 200.635A146.503 146.503 0 0 0 268 159.564Z",
    fill: "url(#transparentSemicircle_svg__a)"
  })), transparentSemicircle_defs || (transparentSemicircle_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "transparentSemicircle_svg__a",
    x1: 166.533,
    y1: 194.937,
    x2: -9.134,
    y2: -40.759,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const transparentSemicircle = (SvgTransparentSemicircle);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
;// CONCATENATED MODULE: ./public/decorationItem.svg
var decorationItem_path;

function decorationItem_extends() { decorationItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return decorationItem_extends.apply(this, arguments); }



var SvgDecorationItem = function SvgDecorationItem(props) {
  return /*#__PURE__*/external_react_.createElement("svg", decorationItem_extends({
    width: 513,
    height: 462,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), decorationItem_path || (decorationItem_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M143.409.519.469 213.556l113.136 230.382 256.04 17.321 142.94-213.037-113.1-230.359L143.409.52Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const decorationItem = (SvgDecorationItem);
;// CONCATENATED MODULE: ./public/decorationItem2.svg
var decorationItem2_path;

function decorationItem2_extends() { decorationItem2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return decorationItem2_extends.apply(this, arguments); }



var SvgDecorationItem2 = function SvgDecorationItem2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", decorationItem2_extends({
    width: 54,
    height: 229,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), decorationItem2_path || (decorationItem2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M-60.506 35.108a79.393 79.393 0 0 0-56.132 135.531 79.387 79.387 0 0 0 40.65 21.727 79.386 79.386 0 0 0 81.5-33.758 79.393 79.393 0 0 0 13.38-44.097l-79.398-79.403Zm0 0a79.494 79.494 0 0 1 79.398 79.403l-79.398-79.403ZM-60.5 219h.01A104.603 104.603 0 0 0 44 114.511v-.011A104.5 104.5 0 1 0-60.5 219Z",
    fill: "#000",
    stroke: "#000",
    strokeWidth: 20
  })));
};

/* harmony default export */ const decorationItem2 = (SvgDecorationItem2);
;// CONCATENATED MODULE: ./public/decorTransparentSemicircle.svg
var decorTransparentSemicircle_path, decorTransparentSemicircle_defs;

function decorTransparentSemicircle_extends() { decorTransparentSemicircle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return decorTransparentSemicircle_extends.apply(this, arguments); }



var SvgDecorTransparentSemicircle = function SvgDecorTransparentSemicircle(props) {
  return /*#__PURE__*/external_react_.createElement("svg", decorTransparentSemicircle_extends({
    width: 162,
    height: 188,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), decorTransparentSemicircle_path || (decorTransparentSemicircle_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m-129.322 187.113 56.722-15.199A91.739 91.739 0 0 1-7.112 61.918a91.738 91.738 0 0 1 111.697 62.539l56.722-15.199A150.48 150.48 0 0 0-22.373 5.192a150.51 150.51 0 0 0-106.949 181.921Z",
    fill: "url(#decorTransparentSemicircle_svg__a)"
  })), decorTransparentSemicircle_defs || (decorTransparentSemicircle_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "decorTransparentSemicircle_svg__a",
    x1: -86.548,
    y1: 85.341,
    x2: 214.148,
    y2: 113.331,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })))));
};

/* harmony default export */ const decorTransparentSemicircle = (SvgDecorTransparentSemicircle);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./components/Case/ProjectOverview/ProjectOverviewItem/index.tsx
















const DecorationOne = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DecorationWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(decorationProjectOverview, {
      className: "decoration1"
    }), /*#__PURE__*/jsx_runtime_.jsx(blackSemicircle/* default */.Z, {
      className: "black_semicircle"
    }), /*#__PURE__*/jsx_runtime_.jsx(TransparentElement, {
      className: "transparent"
    })]
  });
};

const DecorationTwo = ({
  isAnimate
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DecorationWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(transparentSemicircle, {
      className: "transparent_semicircle"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dots1_wrap",
      children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
        numberOfDots: 0,
        dotColor: theme/* theme.colors.black */.r.colors.black,
        animation: isAnimate
      })
    })]
  });
};

const DecorationThree = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DecorationWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(decorationItem, {
      className: "decoration2"
    }), /*#__PURE__*/jsx_runtime_.jsx(decorationItem2, {
      className: "decoration_black"
    }), /*#__PURE__*/jsx_runtime_.jsx(decorTransparentSemicircle, {
      className: "decoration_semicircle"
    })]
  });
};

const ProjectOverviewItem = ({
  image,
  heading,
  text,
  list,
  index
}) => {
  const {
    0: isAnimate,
    1: setIsAnimate
  } = (0,external_react_.useState)(false);
  const src = constants/* IMAGES_LINK */.rS + image.url;
  const listCondition = list && list.map((listItem, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: listItem
  }, index * Math.random()));
  const isLeft = (index + 1) % 10 !== 2;

  const decoration = (index, isAnimate) => {
    switch (index) {
      case 0:
        return /*#__PURE__*/jsx_runtime_.jsx(DecorationOne, {});

      case 1:
        return /*#__PURE__*/jsx_runtime_.jsx(DecorationTwo, {
          isAnimate: isAnimate
        });

      case 2:
        return /*#__PURE__*/jsx_runtime_.jsx(DecorationThree, {});

      default:
        return /*#__PURE__*/jsx_runtime_.jsx(DecorationTwo, {
          isAnimate: isAnimate
        });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectOverviewItemWrapper, {
    onMouseEnter: () => setIsAnimate(true),
    isLeft: isLeft,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageWrap, {
      index: index,
      children: [decoration(index, isAnimate), /*#__PURE__*/jsx_runtime_.jsx(ImageBackground, {
        isLeft: isLeft,
        className: "background",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          loader: () => src,
          src: src,
          width: 506,
          height: 292,
          alt: "case photo"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_TextWrap, {
      isLeft: isLeft,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: heading
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [text, /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: listCondition
        })]
      })]
    })]
  });
};

/* harmony default export */ const ProjectOverview_ProjectOverviewItem = (ProjectOverviewItem);
;// CONCATENATED MODULE: ./components/Case/ProjectOverview/style.ts


const ProjectOverviewWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ProjectOverviewWrapper",
  componentId: "sc-opkpdp-0"
})(["width:100%;display:flex;align-items:center;flex-direction:column;margin-bottom:52px;@media only screen and (max-width:", "){margin-bottom:0;}"], theme_get_default()('breakpoints.tabletPro'));
const HeadingWrap = external_styled_components_default().div.withConfig({
  displayName: "style__HeadingWrap",
  componentId: "sc-opkpdp-1"
})(["width:1006px;margin-bottom:80px;@media only screen and (max-width:", "){width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;margin-bottom:55px;}h1{font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;text-transform:capitalize;@media only screen and (max-width:", "){font-size:var(--fs-48);}@media only screen and (max-width:", "){font-size:var(--fs-36);}@media only screen and (max-width:", "){line-height:50px;}}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const style_ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-opkpdp-2"
})([""]);
;// CONCATENATED MODULE: ./components/Case/ProjectOverview/index.tsx






const ProjectOverview = ({
  projectOverview
}) => {
  const mapProjectOverviewItems = projectOverview.item.map((item, index) => {
    var _item$image, _item$image$data;

    const text = item === null || item === void 0 ? void 0 : item.description;
    const heading = item === null || item === void 0 ? void 0 : item.title;
    const key = item === null || item === void 0 ? void 0 : item.id;
    const image = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : (_item$image$data = _item$image.data) === null || _item$image$data === void 0 ? void 0 : _item$image$data.attributes;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: item && heading && text && image && /*#__PURE__*/jsx_runtime_.jsx(ProjectOverview_ProjectOverviewItem, {
        image: image,
        heading: heading,
        text: text,
        index: index
      }, key)
    });
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProjectOverviewWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeadingWrap, {
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: projectOverview.title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(style_ContentWrap, {
      children: mapProjectOverviewItems
    })]
  });
};

/* harmony default export */ const Case_ProjectOverview = (ProjectOverview);
;// CONCATENATED MODULE: ./components/common/HorizontalSlider/style.ts


;
const AbsoluteRect = external_styled_components_default().div.withConfig({
  displayName: "style__AbsoluteRect",
  componentId: "sc-166etid-0"
})(["position:absolute;top:20px;left:20px;width:100%;border:1px solid ", ";height:100%;"], theme_get_default()("colors.yellow2"));
const Slider = external_styled_components_default().div.withConfig({
  displayName: "style__Slider",
  componentId: "sc-166etid-1"
})(["overflow-x:hidden;white-space:nowrap;overflow-y:hidden;width:100%;height:700px;background:", ";@media only screen and (min-width:", "){max-width:", ";margin-left:", ";}@media only screen and (max-width:", "){height:auto;}@media only screen and (max-width:", "){height:fit-content;}"], theme_get_default()("colors.backgroundBlack"), theme_get_default()('breakpoints.desk'), ({
  maxWidth
}) => maxWidth ? `calc((100vw - ${maxWidth}px) / 2 + ${maxWidth}px + 100px)` : '1006px', ({
  maxWidth
}) => maxWidth ? `calc((100vw - ${maxWidth}px) / 2 - 100px)` : 'auto', theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.tabletPro'));
const Slide = external_styled_components_default().div.withConfig({
  displayName: "style__Slide",
  componentId: "sc-166etid-2"
})(["display:inline-block;width:74vw;position:relative;padding:177px 20px 170px 93px;transform:scale(0.85);-webkit-transition-duration:.5s;-moz-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;transition-property:transform;@media only screen and (min-width:", "){max-width:1008px;}@media only screen and (max-width:", "){padding:70px 20px 40px 25px;}@media only screen and (max-width:", "){width:85vw;}@media only screen and (max-width:", "){width:100vw;padding-bottom:0;}@media only screen and (max-width:", "){padding:50px 15px 35px 15px;}:nth-child(1){transform:scale(1);}.image{z-index:1;}"], theme_get_default()('breakpoints.desk'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.sTablet'));
const Content = external_styled_components_default().div.withConfig({
  displayName: "style__Content",
  componentId: "sc-166etid-3"
})(["display:flex;@media only screen and (max-width:", "){flex-direction:column;}"], theme_get_default()('breakpoints.mobile'));
const ImageContainer = external_styled_components_default().div.withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-166etid-4"
})(["position:relative;max-width:697px;width:100%;padding-right:40px;padding-bottom:20px;"]);
const Title = external_styled_components_default().div.withConfig({
  displayName: "style__Title",
  componentId: "sc-166etid-5"
})(["color:", ";text-transform:uppercase;font-size:26px;line-height:39px;font-weight:800;letter-spacing:calc(1em / 20);max-width:200px;white-space:break-spaces;@media only screen and (max-width:", "){font-size:var(--fs-24);}@media only screen and (max-width:", "){font-size:var(--fs-20);}@media only screen and (max-width:", "){max-width:100%;}"], theme_get_default()("colors.white"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const ArrowButton = external_styled_components_default().button.withConfig({
  displayName: "style__ArrowButton",
  componentId: "sc-166etid-6"
})(["height:20px;background:transparent;border:0;margin-top:31px;cursor:pointer;@media only screen and (max-width:", "){margin-top:20px;}"], theme_get_default()('breakpoints.sTablet'));
const Controls = external_styled_components_default().div.withConfig({
  displayName: "style__Controls",
  componentId: "sc-166etid-7"
})(["display:flex;left:500px;align-items:center;margin-top:30px;padding-left:5px;@media only screen and (max-width:", "){margin-top:0;}"], theme_get_default()('breakpoints.mobile'));
const Line = external_styled_components_default().div.withConfig({
  displayName: "style__Line",
  componentId: "sc-166etid-8"
})(["width:50px;height:1px;background:", ";margin:0 5px;"], theme_get_default()("colors.white"));
const ControlsText = external_styled_components_default().div.withConfig({
  displayName: "style__ControlsText",
  componentId: "sc-166etid-9"
})(["font-size:20px;font-weight:800;line-height:30px;letter-spacing:calc(1em / 20);color:", ";"], theme_get_default()("colors.white"));
const ImageBlock = external_styled_components_default().div.withConfig({
  displayName: "style__ImageBlock",
  componentId: "sc-166etid-10"
})(["position:relative;width:100%;max-height:377px;"]);
const RightBlock = external_styled_components_default().div.withConfig({
  displayName: "style__RightBlock",
  componentId: "sc-166etid-11"
})(["display:flex;padding-top:10%;padding-bottom:7.7%;@media only screen and (max-width:", "){padding-top:20px;padding-bottom:0;}"], theme_get_default()('breakpoints.tablet'));
const RightContent = external_styled_components_default().div.withConfig({
  displayName: "style__RightContent",
  componentId: "sc-166etid-12"
})(["display:flex;flex-direction:column;justify-content:space-between;padding-left:26px;@media only screen and (max-width:", "){padding-left:5px;}"], theme_get_default()('breakpoints.tabletPro'));
;// CONCATENATED MODULE: ./public/SVG/ArrowRightYellow.svg
var ArrowRightYellow_path;

function ArrowRightYellow_extends() { ArrowRightYellow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ArrowRightYellow_extends.apply(this, arguments); }



var SvgArrowRightYellow = function SvgArrowRightYellow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ArrowRightYellow_extends({
    width: 45,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ArrowRightYellow_path || (ArrowRightYellow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m34.419 17.698-.093.1.093.102 1.196 1.31.11.12.111-.12 8.275-9.055.092-.101-.092-.101L35.837.899l-.111-.121-.111.12-1.197 1.31-.092.1.093.102 6.002 6.568H.85v2.152h39.57l-6.002 6.568Z",
    fill: "#FEC602",
    stroke: "#FEC602",
    strokeWidth: 0.3
  })));
};

/* harmony default export */ const ArrowRightYellow = (SvgArrowRightYellow);
;// CONCATENATED MODULE: ./components/common/HorizontalSlider/index.tsx








const HorizontalSlider = ({
  intro,
  slides,
  maxWidth
}) => {
  const {
    0: horizontalSlides,
    1: setHorizontalSlides
  } = (0,external_react_.useState)(slides);
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  const {
    0: leftPos,
    1: setLeftPos
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const [first, second] = horizontalSlides;
    setHorizontalSlides([...horizontalSlides, first, second]);
  }, []);
  (0,external_react_.useEffect)(() => {
    const slider = document.getElementById("horizontal-slider");

    if (slider) {
      slider.ontransitionend = () => {
        if (currentSlide === 0) {
          slider === null || slider === void 0 ? void 0 : slider.scrollTo({
            left: 0
          });
          setLeftPos(0);
        }
      };
    }
  }, [currentSlide, horizontalSlides]);

  const handleHorizontalScroll = () => {
    const slider = document.getElementById("horizontal-slider");

    if (slider) {
      const slideWidth = document.getElementsByClassName("horizontal-slide")[0].scrollWidth;
      setLeftPos(leftPos + slideWidth);
      slider.scrollTo({
        left: leftPos + slideWidth,
        behavior: "smooth"
      });
      document.getElementsByClassName("horizontal-slide")[currentSlide + 1].style.transform = "none";
      document.getElementsByClassName("horizontal-slide")[currentSlide + 2].style.transform = "scale(0.85)";
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

      if (currentSlide === slides.length - 1) {
        document.getElementsByClassName("horizontal-slide")[1].style.transform = "scale(0.85)";
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Slider, {
    id: "horizontal-slider",
    maxWidth: maxWidth,
    children: horizontalSlides.map((slide, index) => {
      var _slide$attributes;

      const id = slide.id;
      const src = constants/* IMAGES_LINK */.rS + ((_slide$attributes = slide.attributes) === null || _slide$attributes === void 0 ? void 0 : _slide$attributes.url);
      return /*#__PURE__*/jsx_runtime_.jsx(Slide, {
        className: "horizontal-slide",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageContainer, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ImageBlock, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                loader: () => src,
                src: src,
                alt: "image",
                width: 657,
                height: 377,
                layout: "responsive",
                className: "image"
              }), /*#__PURE__*/jsx_runtime_.jsx(AbsoluteRect, {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(RightBlock, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(RightContent, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
                  children: intro
                }), /*#__PURE__*/jsx_runtime_.jsx(ArrowButton, {
                  onClick: () => handleHorizontalScroll(),
                  children: /*#__PURE__*/jsx_runtime_.jsx(ArrowRightYellow, {})
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Controls, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(ControlsText, {
                  children: currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide
                }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(ControlsText, {
                  children: slides.length < 10 ? `0${slides.length}` : slides.length
                })]
              })]
            })
          })]
        })
      }, `slide-${id}-${index}`);
    })
  });
};

/* harmony default export */ const common_HorizontalSlider = (HorizontalSlider);
;// CONCATENATED MODULE: ./components/Case/InsideTheProject/style.ts


const InsideTheProjectWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__InsideTheProjectWrapper",
  componentId: "sc-1pbst0s-0"
})(["width:100%;height:726px;background-color:", ";overflow-x:hidden;@media only screen and (max-width:", "){height:fit-content;}"], theme_get_default()("colors.black"), theme_get_default()('breakpoints.mediumDesk'));
;// CONCATENATED MODULE: ./components/Case/InsideTheProject/index.tsx




const InsideTheProject = ({
  intro,
  slides
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(InsideTheProjectWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(common_HorizontalSlider, {
      intro: intro,
      slides: slides,
      maxWidth: 1006
    })
  });
};

/* harmony default export */ const Case_InsideTheProject = (InsideTheProject);
;// CONCATENATED MODULE: ./components/Case/ClientsFeedback/style.ts


const ClientsFeedbackWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ClientsFeedbackWrapper",
  componentId: "sc-11qgsdn-0"
})(["width:100%;background-color:", ";height:577px;display:flex;flex-direction:column;align-items:center;padding-top:93px;@media only screen and (max-width:", "){padding-top:40px;height:fit-content;padding-bottom:70px;}"], theme_get_default()("colors.black"), theme_get_default()('breakpoints.tabletPro'));
const style_HeadingWrap = external_styled_components_default().div.withConfig({
  displayName: "style__HeadingWrap",
  componentId: "sc-11qgsdn-1"
})(["width:1006px;margin-bottom:79px;@media only screen and (max-width:", "){width:100%;padding:0 25px;}@media only screen and (max-width:", "){margin-bottom:45px;padding:0 15px;}h1{font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;text-transform:capitalize;color:", ";}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.white"));
const FeedbackWrap = external_styled_components_default().div.withConfig({
  displayName: "style__FeedbackWrap",
  componentId: "sc-11qgsdn-2"
})(["width:612px;position:relative;left:25px;@media only screen and (max-width:", "){width:100%;left:0;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}> svg{position:absolute;top:-15px;left:-50px;@media only screen and (max-width:", "){left:25px;}@media only screen and (max-width:", "){left:5px;}}> p{font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";margin-bottom:31px;@media only screen and (max-width:", "){padding-left:50px;}@media only screen and (max-width:", "){padding-left:30px;margin-top:3px;line-height:27px;}}"], theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.font1"), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.sTablet'));
const ClientInfoWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ClientInfoWrap",
  componentId: "sc-11qgsdn-3"
})(["display:flex;column-gap:20px;img{@media only screen and (max-width:", "){width:100px !important;}}> div{display:flex;flex-direction:column;justify-content:center;> h3{font-weight:600;font-size:var(--fs-14);line-height:22px;letter-spacing:0.1em;text-transform:uppercase;color:", ";}> span{font-size:var(--fs-12);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){line-height:24px;}}}"], theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.white"), theme_get_default()("colors.font1"), theme_get_default()('breakpoints.mMobile'));
// EXTERNAL MODULE: ./public/icons/Quotes.svg
var Quotes = __webpack_require__(9101);
;// CONCATENATED MODULE: ./components/Case/ClientsFeedback/index.tsx







const ClientsFeedback = ({
  feedback
}) => {
  var _clientPhoto$data, _clientPhoto$data$att;

  const {
    text,
    clientName,
    clientPhoto,
    clientPosition
  } = feedback;
  const src = constants/* IMAGES_LINK */.rS + ((_clientPhoto$data = clientPhoto.data) === null || _clientPhoto$data === void 0 ? void 0 : (_clientPhoto$data$att = _clientPhoto$data.attributes) === null || _clientPhoto$data$att === void 0 ? void 0 : _clientPhoto$data$att.url);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ClientsFeedbackWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(style_HeadingWrap, {
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "client's feedback"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FeedbackWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Quotes/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: text
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ClientInfoWrap, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          loader: () => src,
          src: src,
          width: 53,
          height: 53,
          alt: "client photo"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: clientName
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: clientPosition
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const Case_ClientsFeedback = (ClientsFeedback);
;// CONCATENATED MODULE: ./components/Case/NextProject/style.ts


const NextProjectWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__NextProjectWrapper",
  componentId: "sc-5w5pln-0"
})(["width:100%;height:199px;background-color:", ";display:flex;justify-content:flex-end;"], theme_get_default()("colors.black"));
const NextProjectButton = external_styled_components_default().div.withConfig({
  displayName: "style__NextProjectButton",
  componentId: "sc-5w5pln-1"
})(["height:100%;width:543px;background-color:", ";border-top-left-radius:70px;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:", ";transition:ease-out 0.4s;padding-right:50px;&:hover{box-shadow:inset 543px 0 0 0 #e5b100ff;}"], theme_get_default()("colors.yellow"), theme_get_default()("boxShadow.initial"));
const NextProject_style_ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-5w5pln-2"
})(["width:391px;height:108.37px;display:flex;align-items:center;"]);
const style_ImageWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ImageWrap",
  componentId: "sc-5w5pln-3"
})(["position:relative;width:141px;height:108.17px;overflow:hidden;margin-right:20px;svg{z-index:1;position:absolute;transition:ease-out 0.4s;}.one{top:", ";}.two{right:", ";}.three{bottom:", ";}"], ({
  isAnimate
}) => isAnimate ? "-35px" : "0", ({
  isAnimate
}) => isAnimate ? "-40px" : "0", ({
  isAnimate
}) => isAnimate ? "-65px" : "1px");
const NextProject_style_TextWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TextWrap",
  componentId: "sc-5w5pln-4"
})(["margin-right:60px;> span{font-weight:800;font-size:var(--fs-12);line-height:18px;letter-spacing:0.05em;text-transform:uppercase;color:", ";}> h3{font-weight:800;font-size:var(--fs-21);line-height:31px;letter-spacing:0.05em;}"], theme_get_default()("colors.white"));
;// CONCATENATED MODULE: ./public/nextProjectBtnDecor1.svg
var nextProjectBtnDecor1_path;

function nextProjectBtnDecor1_extends() { nextProjectBtnDecor1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return nextProjectBtnDecor1_extends.apply(this, arguments); }



var SvgNextProjectBtnDecor1 = function SvgNextProjectBtnDecor1(props) {
  return /*#__PURE__*/external_react_.createElement("svg", nextProjectBtnDecor1_extends({
    width: 98,
    height: 40,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), nextProjectBtnDecor1_path || (nextProjectBtnDecor1_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m73.84-69.431 24.022 58.924-39.05 50.28-63.062-8.65-24.023-58.925 39.04-50.276L73.84-69.43Z",
    fill: "#181819"
  })));
};

/* harmony default export */ const nextProjectBtnDecor1 = (SvgNextProjectBtnDecor1);
;// CONCATENATED MODULE: ./public/nextProjectBtnDecor2.svg
var nextProjectBtnDecor2_path;

function nextProjectBtnDecor2_extends() { nextProjectBtnDecor2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return nextProjectBtnDecor2_extends.apply(this, arguments); }



var SvgNextProjectBtnDecor2 = function SvgNextProjectBtnDecor2(props) {
  return /*#__PURE__*/external_react_.createElement("svg", nextProjectBtnDecor2_extends({
    width: 40,
    height: 105,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), nextProjectBtnDecor2_path || (nextProjectBtnDecor2_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m90.603 7.846 21.166 51.92-34.407 44.301-55.565-7.622L.63 44.525 35.03.229l55.574 7.618Z",
    fill: "#181819"
  })));
};

/* harmony default export */ const nextProjectBtnDecor2 = (SvgNextProjectBtnDecor2);
;// CONCATENATED MODULE: ./public/nextProjectBtnDecor3.svg
var nextProjectBtnDecor3_path;

function nextProjectBtnDecor3_extends() { nextProjectBtnDecor3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return nextProjectBtnDecor3_extends.apply(this, arguments); }



var SvgNextProjectBtnDecor3 = function SvgNextProjectBtnDecor3(props) {
  return /*#__PURE__*/external_react_.createElement("svg", nextProjectBtnDecor3_extends({
    width: 87,
    height: 61,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), nextProjectBtnDecor3_path || (nextProjectBtnDecor3_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M39.485.637 10.9 38.49a74.102 74.102 0 0 1 12.91 102.594 74.098 74.098 0 0 1-102.213 15.635l-28.584 37.852a121.545 121.545 0 0 0 168.691-24.93A121.573 121.573 0 0 0 39.485.637Z",
    fill: "#181819"
  })));
};

/* harmony default export */ const nextProjectBtnDecor3 = (SvgNextProjectBtnDecor3);
;// CONCATENATED MODULE: ./public/SVG/ArrowRightBig.svg
var ArrowRightBig_path;

function ArrowRightBig_extends() { ArrowRightBig_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ArrowRightBig_extends.apply(this, arguments); }



var SvgArrowRightBig = function SvgArrowRightBig(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ArrowRightBig_extends({
    width: 45,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ArrowRightBig_path || (ArrowRightBig_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m34.419 17.698-.093.1.093.102 1.196 1.31.11.12.111-.12 8.275-9.055.092-.101-.092-.101L35.837.899l-.111-.121-.111.12-1.197 1.31-.092.1.093.102 6.002 6.568H.85v2.152h39.57l-6.002 6.568Z",
    fill: "#000",
    stroke: "#000",
    strokeWidth: 0.3
  })));
};

/* harmony default export */ const ArrowRightBig = (SvgArrowRightBig);
;// CONCATENATED MODULE: ./components/Case/NextProject/index.tsx













const NextProject = ({
  nextProjectButton
}) => {
  var _project$data, _projectEntry$mainInf, _projectEntry$mainInf2, _projectEntry$mainInf3, _projectEntry$mainInf4;

  const {
    0: isAnimate,
    1: setIsAnimate
  } = (0,external_react_.useState)(false);
  const {
    intro,
    project
  } = nextProjectButton;
  const projectEntry = project === null || project === void 0 ? void 0 : (_project$data = project.data) === null || _project$data === void 0 ? void 0 : _project$data.attributes;
  const url = projectEntry === null || projectEntry === void 0 ? void 0 : projectEntry.url;
  const src = constants/* IMAGES_LINK */.rS + (projectEntry === null || projectEntry === void 0 ? void 0 : (_projectEntry$mainInf = projectEntry.mainInfo.item[0]) === null || _projectEntry$mainInf === void 0 ? void 0 : (_projectEntry$mainInf2 = _projectEntry$mainInf.image) === null || _projectEntry$mainInf2 === void 0 ? void 0 : (_projectEntry$mainInf3 = _projectEntry$mainInf2.data) === null || _projectEntry$mainInf3 === void 0 ? void 0 : (_projectEntry$mainInf4 = _projectEntry$mainInf3.attributes) === null || _projectEntry$mainInf4 === void 0 ? void 0 : _projectEntry$mainInf4.url);

  const onMouseEnter = () => {
    setIsAnimate(true);
  };

  const onMouseLeave = () => {
    setIsAnimate(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: projectEntry && url && /*#__PURE__*/jsx_runtime_.jsx(NextProjectWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `/case_studies/case/${projectEntry.url}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NextProjectButton, {
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NextProject_style_ContentWrap, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(style_ImageWrap, {
              isAnimate: isAnimate,
              children: [/*#__PURE__*/jsx_runtime_.jsx(nextProjectBtnDecor1, {
                className: "one"
              }), /*#__PURE__*/jsx_runtime_.jsx(nextProjectBtnDecor2, {
                className: "two"
              }), /*#__PURE__*/jsx_runtime_.jsx(nextProjectBtnDecor3, {
                className: "three"
              }), /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                loader: () => src,
                src: src,
                width: 141,
                height: 108.17,
                alt: "next project image"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NextProject_style_TextWrap, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: intro
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: projectEntry === null || projectEntry === void 0 ? void 0 : projectEntry.name
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(ArrowRightBig, {})]
          })
        })
      })
    })
  });
};

/* harmony default export */ const Case_NextProject = (NextProject);
// EXTERNAL MODULE: ./components/Services/LetsTalk/index.tsx + 1 modules
var LetsTalk = __webpack_require__(4096);
// EXTERNAL MODULE: ./graphql/caseStudies/queries.ts
var queries = __webpack_require__(5130);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
;// CONCATENATED MODULE: ./pages/case_studies/[name]/[id].tsx



















const titles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];

const Case = ({
  data,
  networkStatus
}) => {
  var _data$project, _data$project$data, _entry$location, _entry$location$data, _entry$industry, _entry$industry$data, _entry$feedback, _entry$feedback$data, _entry$gallery$, _entry$gallery$2, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2, _data$project2;

  const entry = data === null || data === void 0 ? void 0 : (_data$project = data.project) === null || _data$project === void 0 ? void 0 : (_data$project$data = _data$project.data) === null || _data$project$data === void 0 ? void 0 : _data$project$data.attributes;
  const location = entry === null || entry === void 0 ? void 0 : (_entry$location = entry.location) === null || _entry$location === void 0 ? void 0 : (_entry$location$data = _entry$location.data) === null || _entry$location$data === void 0 ? void 0 : _entry$location$data.attributes;
  const technologies = entry === null || entry === void 0 ? void 0 : entry.technologies;
  const services = entry === null || entry === void 0 ? void 0 : entry.services;
  const industry = entry === null || entry === void 0 ? void 0 : (_entry$industry = entry.industry) === null || _entry$industry === void 0 ? void 0 : (_entry$industry$data = _entry$industry.data) === null || _entry$industry$data === void 0 ? void 0 : _entry$industry$data.attributes;
  const feedback = entry === null || entry === void 0 ? void 0 : (_entry$feedback = entry.feedback) === null || _entry$feedback === void 0 ? void 0 : (_entry$feedback$data = _entry$feedback.data) === null || _entry$feedback$data === void 0 ? void 0 : _entry$feedback$data.attributes;
  const nextProjectButton = entry === null || entry === void 0 ? void 0 : entry.nextProjectButton;
  const galleryIntro = entry === null || entry === void 0 ? void 0 : (_entry$gallery$ = entry.gallery[0]) === null || _entry$gallery$ === void 0 ? void 0 : _entry$gallery$.intro;
  const galleryPictures = entry === null || entry === void 0 ? void 0 : (_entry$gallery$2 = entry.gallery[0]) === null || _entry$gallery$2 === void 0 ? void 0 : _entry$gallery$2.pictures.data;
  const contactUs = entry === null || entry === void 0 ? void 0 : entry.contactUs;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const renderCondition = entry && location && technologies && services && industry && feedback && nextProjectButton && contactUs && galleryIntro && galleryPictures;
  if (networkStatus !== 7 || ((_data$project2 = data.project) === null || _data$project2 === void 0 ? void 0 : _data$project2.data) === null) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
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
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
        backgroundColor: theme/* theme.colors.black */.r.colors.black,
        titlesColor: theme/* theme.colors.white */.r.colors.white,
        titles: titles,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Case_CaseIntroduction, {
          name: entry.name,
          description: entry.description
        }), /*#__PURE__*/jsx_runtime_.jsx(Case_CaseDescription, {
          mainInfo: entry.mainInfo,
          location: location,
          technologies: technologies,
          services: services,
          industry: industry
        }), /*#__PURE__*/jsx_runtime_.jsx(Case_ProjectOverview, {
          projectOverview: entry.projectOverview
        }), /*#__PURE__*/jsx_runtime_.jsx(Case_InsideTheProject, {
          intro: galleryIntro,
          slides: galleryPictures
        }), /*#__PURE__*/jsx_runtime_.jsx(Case_ClientsFeedback, {
          feedback: feedback
        }), /*#__PURE__*/jsx_runtime_.jsx(Case_NextProject, {
          nextProjectButton: nextProjectButton
        }), /*#__PURE__*/jsx_runtime_.jsx(LetsTalk/* default */.Z, {
          title: contactUs.title,
          isWhite: true,
          text: contactUs.subtitle
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })]
    })
  });
};

async function getServerSideProps(context) {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    id
  } = context.query;
  const {
    data,
    networkStatus
  } = await client.query({
    query: queries/* GET_PROJECT_PAGE */.rA,
    variables: {
      id
    }
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const _id_ = (Case);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,9210,4096,5740,5130,9101], () => (__webpack_exec__(3332)));
module.exports = __webpack_exports__;

})();