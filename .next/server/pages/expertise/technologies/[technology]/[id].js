"use strict";
(() => {
var exports = {};
exports.id = 3894;
exports.ids = [3894,2197];
exports.modules = {

/***/ 4852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/ServicePage/HeaderService/index.tsx + 1 modules
var HeaderService = __webpack_require__(6153);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/ExpertisePage/WhyShouldUseTechnology/WhyShouldUseTechnology.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "WhyShouldUseTechnologystyle__Div",
  componentId: "sc-1n6o8mj-0"
})(["margin-top:-104px;background-color:", ";"], ({
  bgColor
}) => bgColor);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "WhyShouldUseTechnologystyle__Wrapper",
  componentId: "sc-1n6o8mj-1"
})(["margin:0 auto;max-width:1006px;@media only screen and (max-width:", "){max-width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const InfoBlock = external_styled_components_default().div.withConfig({
  displayName: "WhyShouldUseTechnologystyle__InfoBlock",
  componentId: "sc-1n6o8mj-2"
})(["padding-bottom:120px;display:flex;flex-direction:column;row-gap:50px;padding-top:38px;@media only screen and (max-width:", "){padding-bottom:80px;padding-top:40px;}@media only screen and (max-width:", "){row-gap:30px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "WhyShouldUseTechnologystyle__H1",
  componentId: "sc-1n6o8mj-3"
})(["max-width:681px;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:0.05em;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-24);line-height:35px;}"], ({
  color
}) => color, theme_get_default()('breakpoints.sTablet'));
const ArgumentsBlock = external_styled_components_default().div.withConfig({
  displayName: "WhyShouldUseTechnologystyle__ArgumentsBlock",
  componentId: "sc-1n6o8mj-4"
})(["display:flex;justify-content:space-between;flex-wrap:wrap;@media only screen and (max-width:", "){justify-content:center;column-gap:25px;row-gap:25px;}@media only screen and (max-width:", "){flex-direction:column;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const TechnologyWrapper = external_styled_components_default().div.withConfig({
  displayName: "WhyShouldUseTechnologystyle__TechnologyWrapper",
  componentId: "sc-1n6o8mj-5"
})(["max-width:302px;padding:40px 40px 45px;display:flex;flex-direction:column;row-gap:15px;background-color:", ";@media only screen and (max-width:", "){padding:25px;max-width:calc(50% - 20px);}@media only screen and (max-width:", "){padding:20px;max-width:100%;}"], theme_get_default()("colors.backgroundBlack2"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "WhyShouldUseTechnologystyle__H3",
  componentId: "sc-1n6o8mj-6"
})(["font-style:normal;font-weight:800;font-size:var(--fs-23);line-height:34px;letter-spacing:0.05em;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-18);line-height:27px;}"], theme_get_default()("colors.yellow2"), theme_get_default()('breakpoints.sTablet'));
const Text = external_styled_components_default().p.withConfig({
  displayName: "WhyShouldUseTechnologystyle__Text",
  componentId: "sc-1n6o8mj-7"
})(["font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()("colors.font1"), theme_get_default()('breakpoints.sTablet'));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ExpertisePage/WhyShouldUseTechnology/index.tsx





const GetArguments = ({
  items
}) => {
  const createArgument = items.map(item => {
    const id = item === null || item === void 0 ? void 0 : item.id;
    const title = item === null || item === void 0 ? void 0 : item.title;
    const description = item === null || item === void 0 ? void 0 : item.description;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TechnologyWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(H3, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
        children: description
      })]
    }, id);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createArgument
  });
};

const WhyShouldUseTechnology = ({
  title,
  bgColor,
  titleColor,
  items
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    bgColor: bgColor,
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          color: titleColor,
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(ArgumentsBlock, {
          children: /*#__PURE__*/jsx_runtime_.jsx(GetArguments, {
            items: items
          })
        })]
      })
    })
  });
};

/* harmony default export */ const ExpertisePage_WhyShouldUseTechnology = (WhyShouldUseTechnology);
;// CONCATENATED MODULE: ./components/ExpertisePage/PopularWebsites/PopularWebsites.style.tsx


const PopularWebsites_style_Div = external_styled_components_default().div.withConfig({
  displayName: "PopularWebsitesstyle__Div",
  componentId: "sc-63i0p6-0"
})(["background-color:", ";"], theme_get_default()("colors.white"));
const PopularWebsites_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "PopularWebsitesstyle__Wrapper",
  componentId: "sc-63i0p6-1"
})(["max-width:1006px;margin:0 auto;padding:120px 0;@media only screen and (max-width:", "){max-width:100%;padding:70px 25px;}@media only screen and (max-width:", "){padding:50px 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "PopularWebsitesstyle__TextBlock",
  componentId: "sc-63i0p6-2"
})(["display:flex;flex-direction:column;row-gap:90px;@media only screen and (max-width:", "){row-gap:70px;}@media only screen and (max-width:", "){row-gap:20px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "PopularWebsitesstyle__H2",
  componentId: "sc-63i0p6-3"
})(["font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:0.05em;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-28);line-height:42px;}@media only screen and (max-width:", "){line-height:40px;}"], theme_get_default()("colors.black"), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const IconsBlock = external_styled_components_default().div.withConfig({
  displayName: "PopularWebsitesstyle__IconsBlock",
  componentId: "sc-63i0p6-4"
})(["display:grid;grid-template-columns:repeat(4,max-content);column-gap:110px;row-gap:50px;align-items:center;justify-items:center;@media only screen and (max-width:", "){column-gap:45px;}@media only screen and (max-width:", "){display:block;text-align:left;margin:0 -15px;}> span{@media only screen and (max-width:", "){margin:15px !important;}@media only screen and (max-width:", "){margin:5px 15px !important;}}svg{cursor:pointer;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./components/ExpertisePage/PopularWebsites/index.tsx








const PopularWebsites = ({
  title,
  pictures
}) => {
  const createPictures = pictures.map(picture => {
    var _picture$attributes, _picture$attributes2, _picture$attributes3;

    const id = picture.id;
    const src = constants/* IMAGES_LINK */.rS + ((_picture$attributes = picture.attributes) === null || _picture$attributes === void 0 ? void 0 : _picture$attributes.url);
    const width = (_picture$attributes2 = picture.attributes) === null || _picture$attributes2 === void 0 ? void 0 : _picture$attributes2.width;
    const height = (_picture$attributes3 = picture.attributes) === null || _picture$attributes3 === void 0 ? void 0 : _picture$attributes3.height;
    const renderCondition = src && width && height;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: renderCondition && /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        loader: () => src,
        src: src,
        width: width,
        height: height,
        alt: "company logo"
      }, id)
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(PopularWebsites_style_Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(PopularWebsites_style_Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(IconsBlock, {
          children: createPictures
        })]
      })
    })
  });
};

/* harmony default export */ const ExpertisePage_PopularWebsites = (PopularWebsites);
// EXTERNAL MODULE: ./components/News/index.tsx + 3 modules
var News = __webpack_require__(2867);
// EXTERNAL MODULE: ./components/Homepage/ContactUs/index.tsx + 3 modules
var ContactUs = __webpack_require__(5802);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
;// CONCATENATED MODULE: ./components/News/WhyDevelopWithUs/WhyDevelopWithUs.style.tsx



const WhyDevelopWithUs_style_Div = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__Div",
  componentId: "sc-x2i8va-0"
})(["overflow:hidden;background-color:", ";"], theme_get_default()("colors.grey3"));
const WhyDevelopWithUs_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__Wrapper",
  componentId: "sc-x2i8va-1"
})(["max-width:1006px;padding:120px 0 69px;margin:0 auto;@media only screen and (max-width:", "){max-width:100%;padding:70px 40px 70px 25px;}@media only screen and (max-width:", "){padding-top:30px;}@media only screen and (max-width:", "){padding:0 25px 70px 25px;}@media only screen and (max-width:", "){padding:0 15px 60px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const WhyDevelopWithUs_style_TextBlock = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__TextBlock",
  componentId: "sc-x2i8va-2"
})(["display:flex;column-gap:107px;@media only screen and (max-width:", "){flex-direction:column;row-gap:30px;}"], theme_get_default()('breakpoints.tablet'));
const WhyDevelopWithUs_style_H2 = external_styled_components_default().h2.withConfig({
  displayName: "WhyDevelopWithUsstyle__H2",
  componentId: "sc-x2i8va-3"
})(["max-width:294px;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;@media only screen and (max-width:", "){max-width:100%;font-size:var(--fs-36);line-height:52px;}@media only screen and (max-width:", "){font-size:var(--fs-28);}@media only screen and (max-width:", "){line-height:37px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const WhyDevelopWithUs_style_H3 = external_styled_components_default().h3.withConfig({
  displayName: "WhyDevelopWithUsstyle__H3",
  componentId: "sc-x2i8va-4"
})(["margin-left:40px;max-width:450px;font-style:normal;font-weight:800;font-size:var(--fs-21);line-height:27px;letter-spacing:0.05em;text-transform:capitalize;@media only screen and (max-width:", "){font-size:var(--fs-18);line-height:25px;}"], theme_get_default()('breakpoints.mobile'));
const WhyDevelopWithUs_style_Text = external_styled_components_default().p.withConfig({
  displayName: "WhyDevelopWithUsstyle__Text",
  componentId: "sc-x2i8va-5"
})(["margin-left:40px;max-width:394px;font-style:normal;font-weight:500;font-size:var(--fs-14);line-height:21px;letter-spacing:0.05em;text-transform:capitalize;"]);
const TextRotated = external_styled_components_default().p.withConfig({
  displayName: "WhyDevelopWithUsstyle__TextRotated",
  componentId: "sc-x2i8va-6"
})(["font-style:normal;font-weight:800;font-size:var(--fs-12);line-height:18px;text-align:center;letter-spacing:0.05em;text-transform:uppercase;color:", ";transform:rotate(-90deg);"], theme_get_default()("colors.black"));
const PositionTextRotated1 = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__PositionTextRotated1",
  componentId: "sc-x2i8va-7"
})(["position:absolute;top:47.5%;right:-123px;@media only screen and (max-width:", "){display:none;}@media only screen and (max-width:", "){display:block;}@media only screen and (max-width:", "){display:none;}p{max-width:122px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const PositionTextRotated2 = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__PositionTextRotated2",
  componentId: "sc-x2i8va-8"
})(["position:absolute;top:50%;right:-227px;@media only screen and (max-width:", "){display:none;}@media only screen and (max-width:", "){display:block;}@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const ReasonsWrapper = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__ReasonsWrapper",
  componentId: "sc-x2i8va-9"
})(["position:relative;display:flex;flex-direction:column;row-gap:27px;@media only screen and (max-width:", "){padding:0 25px;max-width:514px;}@media only screen and (max-width:", "){padding:0 0 0 25px;max-width:100%;}@media only screen and (max-width:", "){row-gap:15px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const BlockReason = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__BlockReason",
  componentId: "sc-x2i8va-10"
})(["position:relative;width:559px;height:144px;display:flex;flex-direction:column;row-gap:14px;justify-content:center;background-color:", ";@media only screen and (max-width:", "){width:490px;}@media only screen and (max-width:", "){width:100%;padding-right:20px;}@media only screen and (max-width:", "){height:fit-content;padding:15px 10px 15px 0;}"], ({
  isLastChild
}) => isLastChild ? theme/* theme.colors.yellow2 */.r.colors.yellow2 : theme/* theme.colors.yellow3 */.r.colors.yellow3, theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.sTablet'));
const PositionNumberBlock = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__PositionNumberBlock",
  componentId: "sc-x2i8va-11"
})(["position:absolute;top:50%;left:0;"]);
const PositionPointsLarge = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__PositionPointsLarge",
  componentId: "sc-x2i8va-12"
})(["@media only screen and (max-width:", "){display:none;}@media only screen and (max-width:", "){display:block;}@media only screen and (max-width:", "){display:none;}svg{position:absolute;top:50%;right:-155px;transform:translate(-50%,-50%);}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const PositionPointsSmall = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__PositionPointsSmall",
  componentId: "sc-x2i8va-13"
})(["@media only screen and (max-width:", "){display:none;}@media only screen and (max-width:", "){display:block;}@media only screen and (max-width:", "){display:none;}svg{position:absolute;top:50%;right:-50px;transform:translate(-50%,-50%);}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const NumberBlock = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__NumberBlock",
  componentId: "sc-x2i8va-14"
})(["position:relative;"]);
const Circle = external_styled_components_default().div.withConfig({
  displayName: "WhyDevelopWithUsstyle__Circle",
  componentId: "sc-x2i8va-15"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50px;height:50px;border-radius:50%;background-color:", ";"], theme_get_default()("colors.black"));
const WhyDevelopWithUs_style_Number = external_styled_components_default().p.withConfig({
  displayName: "WhyDevelopWithUsstyle__Number",
  componentId: "sc-x2i8va-16"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-style:normal;font-weight:800;font-size:var(--fs-23);line-height:34px;text-align:center;letter-spacing:0.05em;color:", ";"], theme_get_default()("colors.yellow3"));
;// CONCATENATED MODULE: ./public/SVG/expertise/pointsLarge.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPointsLarge = function SvgPointsLarge(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 102,
    height: 558,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.5 3.5a1.5 1.5 0 1 0 0-3v3Zm9-3a1.5 1.5 0 1 0 0 3v-3Zm1 3a1.5 1.5 0 0 0 0-3v3Zm9-3a1.5 1.5 0 0 0 0 3v-3Zm1 3a1.5 1.5 0 0 0 0-3v3Zm9-3a1.5 1.5 0 0 0 0 3v-3Zm1 3a1.5 1.5 0 0 0 0-3v3Zm9-3a1.5 1.5 0 0 0 0 3v-3Zm1 3a1.5 1.5 0 0 0 0-3v3Zm9-3a1.5 1.5 0 0 0 0 3v-3Zm.979 3.002a1.5 1.5 0 1 0 .029-3l-.03 3Zm9.075-2.117A1.5 1.5 0 1 0 59 4.333l.553-2.948Zm.38 3.133a1.5 1.5 0 0 0 .61-2.937l-.61 2.937Zm9.312-.3A1.5 1.5 0 0 0 68.125 7l1.121-2.783Zm-.243 3.146a1.5 1.5 0 1 0 1.177-2.76l-1.177 2.76Zm9.191 1.532a1.5 1.5 0 0 0-1.645 2.51l1.645-2.51Zm-.853 3.04a1.5 1.5 0 0 0 1.693-2.477l-1.693 2.476Zm8.716 3.292a1.5 1.5 0 1 0-2.1 2.142l2.1-2.142Zm-1.427 2.816a1.5 1.5 0 1 0 2.142-2.1l-2.142 2.1Zm7.911 4.922a1.5 1.5 0 0 0-2.476 1.693l2.476-1.693Zm-1.946 2.485a1.5 1.5 0 0 0 2.509-1.645l-2.51 1.645Zm6.8 6.37a1.5 1.5 0 0 0-2.759 1.176l2.76-1.177ZM95 33.874a1.5 1.5 0 1 0 2.783-1.121L95 33.875Zm5.419 7.58a1.5 1.5 0 1 0-2.937.612l2.937-.611ZM97.667 43a1.5 1.5 0 0 0 2.948-.553L97.667 43Zm3.831 8.493a1.5 1.5 0 0 0-3 .03l3-.03ZM98.5 52.504a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.01a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.01a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.079a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.009a1.5 1.5 0 0 0 3 0h-3Zm3 9.08a1.5 1.5 0 1 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3 1.009a1.5 1.5 0 1 0 3 0h-3Zm3 9.08a1.5 1.5 0 0 0-3 0h3Zm-3.002.984a1.5 1.5 0 0 0 3 .029l-3-.029Zm2.117 9.075a1.5 1.5 0 1 0-2.948-.554l2.948.554Zm-3.133.379a1.5 1.5 0 0 0 2.937.611l-2.937-.611Zm.3 9.313A1.5 1.5 0 1 0 95 524.125l2.783 1.121Zm-3.146-.243a1.5 1.5 0 1 0 2.76 1.177l-2.76-1.177Zm-1.532 9.191a1.5 1.5 0 0 0-2.51-1.645l2.51 1.645Zm-3.04-.853a1.5 1.5 0 0 0 2.477 1.693l-2.476-1.693Zm-3.292 8.716a1.5 1.5 0 1 0-2.142-2.101l2.142 2.101Zm-2.816-1.427a1.5 1.5 0 1 0 2.1 2.142l-2.1-2.142Zm-4.922 7.911a1.5 1.5 0 1 0-1.693-2.476l1.693 2.476Zm-2.485-1.946a1.5 1.5 0 1 0 1.645 2.509l-1.645-2.509Zm-6.37 6.801a1.5 1.5 0 0 0-1.176-2.76l1.177 2.76ZM68.126 551a1.5 1.5 0 0 0 1.121 2.783L68.125 551Zm-7.58 5.419a1.5 1.5 0 1 0-.612-2.937l.611 2.937ZM59 553.667a1.5 1.5 0 1 0 .553 2.948L59 553.667Zm-8.493 3.831a1.5 1.5 0 0 0-.03-3l.03 3ZM49.5 554.5a1.5 1.5 0 0 0 0 3v-3Zm-9 3a1.5 1.5 0 0 0 0-3v3Zm-1-3a1.5 1.5 0 0 0 0 3v-3Zm-9 3a1.5 1.5 0 0 0 0-3v3Zm-1-3a1.5 1.5 0 0 0 0 3v-3Zm-9 3a1.5 1.5 0 0 0 0-3v3Zm-1-3a1.5 1.5 0 0 0 0 3v-3Zm-9 3a1.5 1.5 0 0 0 0-3v3Zm-1-3a1.5 1.5 0 0 0 0 3v-3Zm-9 3a1.5 1.5 0 0 0 0-3v3ZM0 3.5h.5v-3H0v3Zm9.5 0h1v-3h-1v3Zm10 0h1v-3h-1v3Zm10 0h1v-3h-1v3Zm10 0h1v-3h-1v3Zm10 0h.5v-3h-.5v3Zm.5 0c.16 0 .32 0 .479.002l.029-3A52.57 52.57 0 0 0 50 .5v3Zm9 .833c.312.059.623.12.933.185l.611-2.937c-.329-.069-.659-.134-.99-.196L59 4.333ZM68.126 7c.294.118.587.24.878.364l1.177-2.76c-.31-.132-.62-.26-.934-.387L68.125 7Zm8.424 4.405c.266.174.53.351.792.53l1.693-2.476c-.278-.19-.558-.378-.84-.563l-1.645 2.51Zm7.407 5.965c.227.223.451.447.674.674l2.142-2.1c-.236-.241-.475-.48-.715-.716l-2.1 2.142Zm6.109 7.29c.179.261.356.525.53.79l2.509-1.644a52.269 52.269 0 0 0-.563-.84l-2.476 1.693Zm4.571 8.337c.124.291.246.584.364.878l2.783-1.121a51.28 51.28 0 0 0-.387-.934l-2.76 1.177Zm2.846 9.07c.065.31.126.62.185.932l2.948-.553a46.602 46.602 0 0 0-.196-.99l-2.937.61Zm1.016 9.454L98.5 52h3l-.002-.508-3 .03ZM98.5 52v.504h3V52h-3Zm0 9.584v1.01h3v-1.01h-3Zm0 10.09v1.008h3v-1.009h-3Zm0 10.088v1.01h3v-1.01h-3Zm0 10.09v1.008h3v-1.009h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.008h3v-1.008h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.008h3v-1.008h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.008h3v-1.008h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.009h3v-1.009h-3Zm0 10.089v1.008h3v-1.008h-3Zm0 10.088v1.009h3v-1.009h-3Zm0 10.089V506h3v-.505h-3Zm0 .505c0 .16 0 .319-.002.479l3 .029.002-.508h-3Zm-.833 9c-.059.312-.12.623-.185.933l2.937.611c.069-.329.134-.659.196-.99L97.667 515ZM95 524.125c-.118.294-.24.587-.364.878l2.76 1.177c.132-.31.26-.621.387-.934L95 524.125Zm-4.405 8.424c-.174.266-.351.53-.53.792l2.476 1.693c.19-.278.378-.558.563-.84l-2.51-1.645Zm-5.965 7.407a50.95 50.95 0 0 1-.674.674l2.1 2.142c.241-.236.48-.475.716-.715l-2.142-2.101Zm-7.29 6.109c-.261.179-.525.356-.79.53l1.644 2.509c.282-.185.562-.372.84-.563l-1.693-2.476Zm-8.337 4.571c-.291.124-.584.246-.878.364l1.121 2.783c.313-.126.624-.255.934-.387l-1.177-2.76Zm-9.07 2.846c-.31.065-.62.126-.932.185l.553 2.948c.331-.062.661-.127.99-.196l-.61-2.937Zm-9.454 1.016L50 554.5v3l.508-.002-.03-3ZM50 554.5h-.5v3h.5v-3Zm-9.5 0h-1v3h1v-3Zm-10 0h-1v3h1v-3Zm-10 0h-1v3h1v-3Zm-10 0h-1v3h1v-3Zm-10 0H0v3h.5v-3Z",
    fill: "#000"
  })));
};

/* harmony default export */ const pointsLarge = (SvgPointsLarge);
;// CONCATENATED MODULE: ./public/SVG/expertise/pointsSmall.svg
var pointsSmall_path;

function pointsSmall_extends() { pointsSmall_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pointsSmall_extends.apply(this, arguments); }



var SvgPointsSmall = function SvgPointsSmall(props) {
  return /*#__PURE__*/external_react_.createElement("svg", pointsSmall_extends({
    width: 33,
    height: 175,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), pointsSmall_path || (pointsSmall_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.55 3.5a1.5 1.5 0 1 0 0-3v3Zm9.9-3a1.5 1.5 0 1 0 0 3v-3Zm1.036 3.006a1.5 1.5 0 0 0 .078-2.999l-.078 3Zm9.776-.403a1.5 1.5 0 0 0-1.434 2.635l1.434-2.635Zm-.596 3.12a1.5 1.5 0 1 0 1.57-2.557l-1.57 2.557Zm8.668 4.54a1.5 1.5 0 1 0-2.557 1.57l2.557-1.57Zm-2.072 2.41a1.5 1.5 0 1 0 2.636-1.435l-2.636 1.434Zm5.23 8.263a1.5 1.5 0 1 0-2.998.078l2.999-.078ZM29.5 22.504a1.5 1.5 0 1 0 3 0h-3Zm3 9.07a1.5 1.5 0 1 0-3 0h3Zm-3 1.007a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 1 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.069a1.5 1.5 0 1 0-3 0h3Zm-3 1.007a1.5 1.5 0 0 0 3 0h-3Zm3 9.07a1.5 1.5 0 0 0-3 0h3Zm-3 1.007a1.5 1.5 0 0 0 3 0h-3Zm3 9.07a1.5 1.5 0 0 0-3 0h3Zm-3 1.007a1.5 1.5 0 0 0 3 0h-3Zm3 9.07a1.5 1.5 0 1 0-3 0h3Zm-3 1.007a1.5 1.5 0 1 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 1 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3 1.008a1.5 1.5 0 0 0 3 0h-3Zm3 9.069a1.5 1.5 0 0 0-3 0h3Zm-3.006.99a1.5 1.5 0 0 0 2.999.078l-3-.078Zm.404 9.776a1.5 1.5 0 0 0-2.636-1.434l2.636 1.434Zm-3.12-.596a1.5 1.5 0 1 0 2.556 1.57l-2.557-1.57Zm-4.542 8.668a1.501 1.501 0 0 0-1.57-2.557l1.57 2.557Zm-2.408-2.072a1.5 1.5 0 0 0 1.434 2.635l-1.434-2.635Zm-8.264 5.231a1.5 1.5 0 0 0-.078-2.999l.078 2.999ZM10.45 171.5a1.5 1.5 0 0 0 0 3v-3Zm-9.9 3a1.5 1.5 0 0 0 0-3v3ZM0 3.5h.55v-3H0v3Zm10.45 0H11v-3h-.55v3Zm.55 0c.163 0 .325.002.486.006l.078-2.999A21.88 21.88 0 0 0 11 .5v3Zm8.828 2.238c.284.154.563.316.838.485l1.57-2.557c-.32-.196-.644-.384-.974-.563l-1.434 2.635Zm6.95 6.596c.168.275.33.554.484.838l2.636-1.434c-.18-.33-.368-.655-.564-.974l-2.557 1.57Zm2.716 9.18c.004.161.006.323.006.486h3c0-.188-.002-.376-.007-.564l-3 .078ZM29.5 22v.504h3V22h-3Zm0 9.573v1.008h3v-1.008h-3Zm0 10.077v1.008h3V41.65h-3Zm0 10.077v1.008h3v-1.008h-3Zm0 10.077v1.008h3v-1.008h-3Zm0 10.077v1.007h3v-1.007h-3Zm0 10.077v1.007h3v-1.007h-3Zm0 10.077v1.007h3v-1.007h-3Zm0 10.077v1.007h3v-1.007h-3Zm0 10.076v1.008h3v-1.008h-3Zm0 10.077v1.008h3v-1.008h-3Zm0 10.077v1.008h3v-1.008h-3Zm0 10.077v1.008h3v-1.008h-3Zm0 10.077V153h3v-.504h-3Zm0 .504c0 .163-.002.325-.006.486l2.999.078c.005-.188.007-.376.007-.564h-3Zm-2.238 8.828c-.154.284-.316.563-.485.838l2.557 1.57c.196-.319.384-.644.564-.974l-2.636-1.434Zm-6.596 6.949a17.78 17.78 0 0 1-.838.485l1.434 2.635c.33-.179.655-.367.974-.563l-1.57-2.557Zm-9.18 2.717c-.161.004-.323.006-.486.006v3c.188 0 .376-.002.564-.007l-.078-2.999ZM11 171.5h-.55v3H11v-3Zm-10.45 0H0v3h.55v-3Z",
    fill: "#000"
  })));
};

/* harmony default export */ const pointsSmall = (SvgPointsSmall);
;// CONCATENATED MODULE: ./components/News/WhyDevelopWithUs/index.tsx







const Reasons = ({
  items
}) => {
  const createReasons = items.map((item, index) => {
    const id = item === null || item === void 0 ? void 0 : item.id;
    const title = item === null || item === void 0 ? void 0 : item.title;
    const description = item === null || item === void 0 ? void 0 : item.description;
    const isLastChild = items.length - 1 === index;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BlockReason, {
      isLastChild: isLastChild,
      children: [/*#__PURE__*/jsx_runtime_.jsx(WhyDevelopWithUs_style_H3, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(WhyDevelopWithUs_style_Text, {
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionNumberBlock, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NumberBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Circle, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(WhyDevelopWithUs_style_Number, {
            children: ["0", index + 1]
          })]
        })
      })]
    }, id);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createReasons
  });
};

const WhyDevelopWithUs = ({
  data
}) => {
  var _connections$, _connections$2;

  const {
    items,
    connections
  } = data;
  const connectionTextOne = connections && ((_connections$ = connections[0]) === null || _connections$ === void 0 ? void 0 : _connections$.text);
  const connectionTextTwo = connections && ((_connections$2 = connections[1]) === null || _connections$2 === void 0 ? void 0 : _connections$2.text);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: items && /*#__PURE__*/jsx_runtime_.jsx(WhyDevelopWithUs_style_Div, {
      children: /*#__PURE__*/jsx_runtime_.jsx(WhyDevelopWithUs_style_Wrapper, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(WhyDevelopWithUs_style_TextBlock, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(WhyDevelopWithUs_style_H2, {
            children: "Why develop with us?"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReasonsWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Reasons, {
              items: items
            }), /*#__PURE__*/jsx_runtime_.jsx(PositionPointsLarge, {
              children: /*#__PURE__*/jsx_runtime_.jsx(pointsLarge, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(PositionPointsSmall, {
              children: /*#__PURE__*/jsx_runtime_.jsx(pointsSmall, {})
            }), /*#__PURE__*/jsx_runtime_.jsx(PositionTextRotated1, {
              children: /*#__PURE__*/jsx_runtime_.jsx(TextRotated, {
                children: connectionTextOne
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(PositionTextRotated2, {
              children: /*#__PURE__*/jsx_runtime_.jsx(TextRotated, {
                children: connectionTextTwo
              })
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const News_WhyDevelopWithUs = (WhyDevelopWithUs);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./graphql/technologies/queries.ts

const GET_TECHNOLOGY_PAGE = client_.gql`
  query GetTechnologyPage($id: ID) {
    technology(id: $id) {
      data {
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
          description
          tech_stack {
            data {
              attributes {
                name
              }
            }
          }
          whyShouldYouUse {
            intro
            items {
              id
              title
              description
            }
          }
          popularWebsites {
            intro
            pictures {
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
          whyDevelopWithUs {
            items {
              id
              title
              description
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }

            connections {
              text
              id
              connectedItems
            }
          }
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
            id
            keywords
            description
            ogTitle
            ogDescription
            ogImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx + 15 modules
var EmbodiedIdeas = __webpack_require__(2910);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/expertise/technologies/[technology]/[id].tsx





















const MainMenuTitles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];
const contactUs = {
  title: "get in touch!",
  text: "Let’s discover which technologies will make your idea great.",
  addresses: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
  buttonLabel: "send"
};
const colorWhite = theme/* theme.colors.white */.r.colors.white;
const colorBlack = theme/* theme.colors.black */.r.colors.black;
const colorBackgroundBlack = theme/* theme.colors.backgroundBlack */.r.colors.backgroundBlack;

const Technology = ({
  data,
  networkStatus
}) => {
  var _data$technology, _data$technology$data, _entry$tech_stack, _entry$tech_stack$dat, _entry$tech_stack$dat2, _entry$icon, _entry$icon$data, _entry$whyShouldYouUs, _entry$whyShouldYouUs2, _entry$popularWebsite, _entry$popularWebsite2, _entry$projects, _entry$insights, _entry$insights2, _entry$insights2$arti, _entry$contactUs, _entry$contactUs2, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2, _data$technology2;

  const entry = (_data$technology = data.technology) === null || _data$technology === void 0 ? void 0 : (_data$technology$data = _data$technology.data) === null || _data$technology$data === void 0 ? void 0 : _data$technology$data.attributes;
  const headerTitle = entry === null || entry === void 0 ? void 0 : entry.name;
  const headerDescription = entry === null || entry === void 0 ? void 0 : entry.description;
  const headerLabel = entry === null || entry === void 0 ? void 0 : (_entry$tech_stack = entry.tech_stack) === null || _entry$tech_stack === void 0 ? void 0 : (_entry$tech_stack$dat = _entry$tech_stack.data) === null || _entry$tech_stack$dat === void 0 ? void 0 : (_entry$tech_stack$dat2 = _entry$tech_stack$dat.attributes) === null || _entry$tech_stack$dat2 === void 0 ? void 0 : _entry$tech_stack$dat2.name;
  const headerIcon = entry === null || entry === void 0 ? void 0 : (_entry$icon = entry.icon) === null || _entry$icon === void 0 ? void 0 : (_entry$icon$data = _entry$icon.data) === null || _entry$icon$data === void 0 ? void 0 : _entry$icon$data.attributes;
  const whyShouldYouUseTitle = entry === null || entry === void 0 ? void 0 : (_entry$whyShouldYouUs = entry.whyShouldYouUse) === null || _entry$whyShouldYouUs === void 0 ? void 0 : _entry$whyShouldYouUs.intro;
  const whyShouldYouUseItems = entry === null || entry === void 0 ? void 0 : (_entry$whyShouldYouUs2 = entry.whyShouldYouUse) === null || _entry$whyShouldYouUs2 === void 0 ? void 0 : _entry$whyShouldYouUs2.items;
  const popularWebSitesTitle = entry === null || entry === void 0 ? void 0 : (_entry$popularWebsite = entry.popularWebsites) === null || _entry$popularWebsite === void 0 ? void 0 : _entry$popularWebsite.intro;
  const popularWebSitesPictures = entry === null || entry === void 0 ? void 0 : (_entry$popularWebsite2 = entry.popularWebsites) === null || _entry$popularWebsite2 === void 0 ? void 0 : _entry$popularWebsite2.pictures.data;
  const whyDevelopWithUs = entry === null || entry === void 0 ? void 0 : entry.whyDevelopWithUs;
  const projects = entry === null || entry === void 0 ? void 0 : (_entry$projects = entry.projects) === null || _entry$projects === void 0 ? void 0 : _entry$projects.data;
  const insightsIntro = entry === null || entry === void 0 ? void 0 : (_entry$insights = entry.insights) === null || _entry$insights === void 0 ? void 0 : _entry$insights.intro;
  const insightsArticles = entry === null || entry === void 0 ? void 0 : (_entry$insights2 = entry.insights) === null || _entry$insights2 === void 0 ? void 0 : (_entry$insights2$arti = _entry$insights2.articles) === null || _entry$insights2$arti === void 0 ? void 0 : _entry$insights2$arti.data;
  const contactUsTitle = entry === null || entry === void 0 ? void 0 : (_entry$contactUs = entry.contactUs) === null || _entry$contactUs === void 0 ? void 0 : _entry$contactUs.title;
  const contactUsSubtitle = entry === null || entry === void 0 ? void 0 : (_entry$contactUs2 = entry.contactUs) === null || _entry$contactUs2 === void 0 ? void 0 : _entry$contactUs2.subtitle;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const {
    0: menuColor,
    1: setMenuColor
  } = (0,external_react_.useState)("none");

  const handleScroll = () => {
    window.scrollY >= 50 ? setMenuColor(colorBlack) : setMenuColor("none");
  };

  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderCondition = headerTitle && headerDescription && headerLabel && headerIcon && whyShouldYouUseTitle && whyShouldYouUseItems && popularWebSitesTitle && popularWebSitesPictures && whyDevelopWithUs && projects && insightsIntro && insightsArticles && contactUsTitle && contactUsSubtitle;
  if (networkStatus !== 7 || ((_data$technology2 = data.technology) === null || _data$technology2 === void 0 ? void 0 : _data$technology2.data) === null) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
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
        titlesColor: colorWhite,
        backgroundColor: isMobile || isTablet || isSmallTablet ? colorBlack : menuColor,
        titles: MainMenuTitles,
        children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderService/* default */.Z, {
          title: headerTitle,
          icon: headerIcon,
          titleSize: isMobile || isTablet || isSmallTablet ? "50px" : "64px",
          text: headerDescription,
          textWidth: "435px",
          label: headerLabel,
          bgColor: colorBlack
        }), /*#__PURE__*/jsx_runtime_.jsx(ExpertisePage_WhyShouldUseTechnology, {
          title: whyShouldYouUseTitle,
          bgColor: colorBackgroundBlack,
          titleColor: colorWhite,
          items: whyShouldYouUseItems
        }), /*#__PURE__*/jsx_runtime_.jsx(ExpertisePage_PopularWebsites, {
          title: popularWebSitesTitle,
          pictures: popularWebSitesPictures
        }), /*#__PURE__*/jsx_runtime_.jsx(News_WhyDevelopWithUs, {
          data: whyDevelopWithUs
        }), /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas/* default */.Z, {
          bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
          elementsColor: theme/* theme.colors.black */.r.colors.black,
          projects: projects,
          disablePadding: true,
          disableSeeMore: true
        }), /*#__PURE__*/jsx_runtime_.jsx(News/* default */.Z, {
          title: insightsIntro,
          articles: insightsArticles
        }), /*#__PURE__*/jsx_runtime_.jsx(ContactUs/* default */.Z, {
          title: contactUsTitle,
          text: contactUsSubtitle,
          addresses: contactUs.addresses,
          buttonLabel: contactUs.buttonLabel
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
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
    query: GET_TECHNOLOGY_PAGE,
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
/* harmony default export */ const _id_ = (Technology);

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,6074,3478,7305,9210,3795,2910,2867,9064,5802,6153], () => (__webpack_exec__(4852)));
module.exports = __webpack_exports__;

})();