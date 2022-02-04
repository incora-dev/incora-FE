"use strict";
(() => {
var exports = {};
exports.id = 1192;
exports.ids = [1192,2197];
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

/***/ 3710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contacts)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/ContactUsPage/HeaderContactUs/HeaderContactUs.styles.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__Div",
  componentId: "sc-1ebp51v-0"
})(["position:relative;overflow:hidden;background-color:", ";"], theme_get_default()("colors.white"));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__Wrapper",
  componentId: "sc-1ebp51v-1"
})(["margin:0 auto;padding:66px 0 101px;max-width:1006px;@media only screen and (max-width:", "){max-width:100%;padding:66px 25px 101px;}@media only screen and (max-width:", "){padding:40px 25px 65px;width:80%;margin:0;}@media only screen and (max-width:", "){padding:20px 15px 55px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const PositionLoader = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__PositionLoader",
  componentId: "sc-1ebp51v-2"
})(["position:absolute;top:1px;right:-42px;@media only screen and (max-width:", "){top:69px;right:-102px;}"], theme_get_default()("breakpoints.mobile"));
const PositionDots = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__PositionDots",
  componentId: "sc-1ebp51v-3"
})(["position:absolute;top:93px;right:143px;transform:rotate(60deg);"]);
const PositionSemiCircle = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__PositionSemiCircle",
  componentId: "sc-1ebp51v-4"
})(["position:absolute;top:63px;right:0;@media only screen and (max-width:", "){top:190px;right:-50px;}"], theme_get_default()("breakpoints.mobile"));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "HeaderContactUsstyles__TextBlock",
  componentId: "sc-1ebp51v-5"
})(["position:relative;z-index:2;display:flex;flex-direction:column;"]);
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "HeaderContactUsstyles__H1",
  componentId: "sc-1ebp51v-6"
})(["font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:70px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:50px;}letter-spacing:0.05em;text-transform:capitalize;color:", ";"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.black"));
const Text = external_styled_components_default().p.withConfig({
  displayName: "HeaderContactUsstyles__Text",
  componentId: "sc-1ebp51v-7"
})(["max-width:684px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()("colors.font2"), theme_get_default()("breakpoints.mobile"));
// EXTERNAL MODULE: ./public/loading3.svg
var loading3 = __webpack_require__(7599);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/SemicirleThin.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSemicirleThin = function SvgSemicirleThin(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 118,
    height: 207,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M103.5 202.5h.005a99.102 99.102 0 0 0 98.995-98.995v-.005a98.995 98.995 0 0 0-61.114-91.464 99.002 99.002 0 0 0-129.35 129.35A98.996 98.996 0 0 0 103.5 202.5ZM56.337 32.915a84.891 84.891 0 0 1 47.16-14.307 84.994 84.994 0 0 1 84.895 84.897 84.892 84.892 0 1 1-132.055-70.59Z",
    fill: "#000",
    stroke: "#000",
    strokeWidth: 9
  })));
};

/* harmony default export */ const SemicirleThin = (SvgSemicirleThin);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ContactUsPage/HeaderContactUs/index.tsx









const HeaderContactUs = ({
  title,
  text
}) => {
  const {
    0: shouldAnimationStart,
    1: setAnimationStart
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
    onMouseEnter: () => setAnimationStart(true),
    children: [/*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: text
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionLoader, {
      children: /*#__PURE__*/jsx_runtime_.jsx(loading3/* default */.Z, {
        width: 338,
        height: 338,
        viewBox: "0 0 187 187"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionDots, {
      children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
        animation: shouldAnimationStart,
        numberOfDots: 5,
        dotColor: theme/* theme.colors.black */.r.colors.black,
        rowGap: '17.5px'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionSemiCircle, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SemicirleThin, {})
    })]
  });
};

/* harmony default export */ const ContactUsPage_HeaderContactUs = (HeaderContactUs);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/facebook.svg
var facebook = __webpack_require__(8015);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/linkedIn.svg
var linkedIn = __webpack_require__(7049);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/instagram.svg
var instagram = __webpack_require__(3877);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
;// CONCATENATED MODULE: ./components/ContactUsPage/CreateProgressTogether/CreateProgressTogether.style.tsx


const CreateProgressTogether_style_Div = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__Div",
  componentId: "sc-1uhh362-0"
})(["overflow:hidden;background-color:", ";"], theme_get_default()("colors.white"));
const CreateProgressTogether_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__Wrapper",
  componentId: "sc-1uhh362-1"
})(["position:relative;max-width:1006px;margin:0 auto;padding:43px 0 144px;@media only screen and (max-width:", "){padding:43px 25px 144px;max-width:100%;}@media only screen and (max-width:", "){padding:43px 0 144px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"));
const CreateProgressTogether_style_PositionSemiCircle = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__PositionSemiCircle",
  componentId: "sc-1uhh362-2"
})(["position:absolute;top:39px;right:-141px;svg{transform:rotate(315deg);path{fill:", ";}}"], theme_get_default()("colors.yellow"));
const MainBLock = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__MainBLock",
  componentId: "sc-1uhh362-3"
})(["display:flex;@media only screen and (max-width:", "){padding:0 25px;column-gap:20px;}@media only screen and (max-width:600px){flex-direction:column;}@media only screen and (max-width:", "){flex-direction:column;padding:0 15px;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "CreateProgressTogetherstyle__H2",
  componentId: "sc-1uhh362-4"
})(["max-width:567px;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:62px;margin-top:25px;}@media only screen and (max-width:600px){font-size:var(--fs-36);line-height:50px;margin-top:25px;}@media only screen and (max-width:", "){font-size:var(--fs-28);line-height:39px;}letter-spacing:0.05em;color:", ";"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.black"));
const PositionHexagon = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__PositionHexagon",
  componentId: "sc-1uhh362-5"
})(["position:absolute;bottom:-135px;left:-127px;@media only screen and (max-width:600px){right:-154px;bottom:-166px;left:auto;transform:scale(0.7);}@media only screen and (max-width:", "){right:-154px;bottom:-166px;left:auto;transform:scale(0.7);}"], theme_get_default()('breakpoints.mobile'));
const FormPosition = external_styled_components_default().div.withConfig({
  displayName: "CreateProgressTogetherstyle__FormPosition",
  componentId: "sc-1uhh362-6"
})(["position:relative;top:25px;"]);
// EXTERNAL MODULE: ./utils/letter.utils.tsx
var letter_utils = __webpack_require__(7138);
// EXTERNAL MODULE: ./components/FormClassic/index.tsx + 3 modules
var FormClassic = __webpack_require__(3478);
// EXTERNAL MODULE: ./public/hexBig.svg
var hexBig = __webpack_require__(1776);
// EXTERNAL MODULE: ./public/blackSemicircle.svg
var blackSemicircle = __webpack_require__(2903);
;// CONCATENATED MODULE: ./components/ContactUsPage/CreateProgressTogether/index.tsx









const uploadFilesLabel = () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Upload your Project Description"
    }), " or anything that might be valuable for our cooperation"]
  })
});

const optionsSelect = ['Project from scratch', 'Estimation & Proposal', 'Team extension', 'Partnership development', 'Business analysis & Tech consultancy', 'Job offering', 'Other'];

const CreateProgressTogether = ({
  title
}) => {
  const titleFirstLetterBig = (0,letter_utils/* firstLetterBig */.o)(title);
  return /*#__PURE__*/jsx_runtime_.jsx(CreateProgressTogether_style_Div, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreateProgressTogether_style_Wrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MainBLock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H2, {
          children: titleFirstLetterBig
        }), /*#__PURE__*/jsx_runtime_.jsx(FormPosition, {
          children: /*#__PURE__*/jsx_runtime_.jsx(FormClassic/* default */.Z, {
            dropListLabels: optionsSelect,
            formBlack: false,
            buttonLabel: 'send',
            isUploadFiles: true,
            linkedIn: true,
            dropList: true,
            uploadFilesLabel: uploadFilesLabel()
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon, {
        children: /*#__PURE__*/jsx_runtime_.jsx(hexBig/* default */.Z, {
          width: 391,
          height: 450,
          viewBox: "0 0 261 300"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CreateProgressTogether_style_PositionSemiCircle, {
        children: /*#__PURE__*/jsx_runtime_.jsx(blackSemicircle/* default */.Z, {})
      })]
    })
  });
};

/* harmony default export */ const ContactUsPage_CreateProgressTogether = (CreateProgressTogether);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./pages/contacts/index.tsx














const menuTitles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];
const contactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  addresses: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
  buttonLabel: "send"
};
const footer = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: contactUs.addresses,
  pages: ["Services", "expertise", "Case Studies", "Company", "Insights"],
  followUs: [{
    icon: facebook/* default */.Z,
    redirectTo: "Facebook"
  }, {
    icon: linkedIn/* default */.Z,
    redirectTo: "LinkedIn"
  }, {
    icon: instagram/* default */.Z,
    redirectTo: "Instagram"
  }],
  copyright: "© 2015-2021 Incora LLC"
};

const Contacts = ({
  title,
  text
}) => {
  const seoTitle = 'Contact us — Incora Software Development';
  const seoKeywords = 'full cycle of development services, Incora team, innovations for development';
  const seoDescription = 'Get the launch you imagined with the help of our Incora team, which is just a few clicks away from you.';
  const seoImage = `${constants/* IMAGES_LINK */.rS}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
        backgroundColor: theme/* theme.colors.white */.r.colors.white,
        titlesColor: theme/* theme.colors.black */.r.colors.black,
        titles: menuTitles,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ContactUsPage_HeaderContactUs, {
          title: title,
          text: text
        }), /*#__PURE__*/jsx_runtime_.jsx(ContactUsPage_CreateProgressTogether, {
          title: 'Let’s create progress together!'
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ const contacts = (Contacts);

Contacts.getInitialProps = async () => {
  const title = 'contact us';
  const text = 'As we offer solutions for various bold ideas, we strive to embrace a full cycle of services using major innovations for development. Get the launch you imagined with the help of our Incora team, which is just a few clicks away from you.';
  return {
    title,
    text
  };
};

/***/ }),

/***/ 7138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ firstLetterBig)
/* harmony export */ });
const firstLetterBig = title => title ? title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase() : '';

/***/ }),

/***/ 9099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,8040,6604,6074,3478,7599,1776], () => (__webpack_exec__(3710)));
module.exports = __webpack_exports__;

})();