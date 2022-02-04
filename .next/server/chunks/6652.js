"use strict";
exports.id = 6652;
exports.ids = [6652];
exports.modules = {

/***/ 6652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_404)
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
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/facebook.svg
var facebook = __webpack_require__(8015);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/linkedIn.svg
var linkedIn = __webpack_require__(7049);
// EXTERNAL MODULE: ./public/SVG/socialNetwork/instagram.svg
var instagram = __webpack_require__(3877);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/Custom404Page/Header404/Header404.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "Header404style__Div",
  componentId: "sc-1c34sxm-0"
})(["overflow:hidden;background-color:", ";@media only screen and (max-width:", "){height:calc(100vh - 374px);min-height:500px;}@media only screen and (max-width:", "){height:calc(100vh - 328px);min-height:500px;}@media only screen and (max-width:", "){height:auto;}"], theme_get_default()("colors.black"), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Header404style__Wrapper",
  componentId: "sc-1c34sxm-1"
})(["max-width:1006px;margin:0 auto;padding:181px 0 237px;@media only screen and (max-width:", "){padding:181px 25px 237px;}@media only screen and (max-width:", "){width:100%;padding:70px 15px 99px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const MainBlock = external_styled_components_default().div.withConfig({
  displayName: "Header404style__MainBlock",
  componentId: "sc-1c34sxm-2"
})(["position:relative;right:-11px;display:flex;flex-direction:column;row-gap:68px;@media only screen and (max-width:", "){row-gap:0;right:0;}"], theme_get_default()('breakpoints.mobile'));
const IconBlock = external_styled_components_default().div.withConfig({
  displayName: "Header404style__IconBlock",
  componentId: "sc-1c34sxm-3"
})(["width:max-content;@media only screen and (max-width:", "){transform:scale(0.6);position:relative;left:-97px;}"], theme_get_default()('breakpoints.mobile'));
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "Header404style__TextBlock",
  componentId: "sc-1c34sxm-4"
})(["margin-left:24px;@media only screen and (max-width:", "){margin-left:0;}"], theme_get_default()('breakpoints.tablet'));
const Text = external_styled_components_default().p.withConfig({
  displayName: "Header404style__Text",
  componentId: "sc-1c34sxm-5"
})(["width:max-content;position:relative;z-index:1;font-style:normal;font-weight:bold;font-size:var(--fs-16);line-height:30px;letter-spacing:0.1em;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-14);}span{cursor:pointer;}&:before{position:absolute;bottom:7px;right:-6px;width:79px;height:10px;z-index:-1;content:'';background-color:", ";}&:after{position:absolute;bottom:7px;right:-6px;z-index:-1;width:0;height:10px;content:'';background-color:", ";transition:width ", ";@media only screen and (max-width:", "){right:-5px;width:73px;height:6px;}}&:hover:after{width:79px;}"], theme_get_default()("colors.white"), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.yellow"), theme_get_default()("colors.yellow5"), theme_get_default()("transition.button"), theme_get_default()('breakpoints.mobile'));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/404.svg
var _path, _path2, _path3, _path4, _g, _path5, _path6, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Svg404 = function Svg404(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 481,
    height: 172,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#404_svg__a)"
  }, _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M182 172c35.899 0 65-28.654 65-64 0-35.346-29.101-64-65-64s-65 28.654-65 64c0 35.346 29.101 64 65 64Z",
    fill: "url(#404_svg__b)"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    transform: "rotate(90 420 125)",
    fill: "url(#404_svg__c)",
    d: "M420 125h47v103h-47z"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.73 144.4v-37.26L71.34 6.4h49.45v98.9h17.71v39.1h-17.71V172H75.25v-27.6H.73ZM78.7 57.23 46.96 105.3H78.7V57.23ZM173.094 85.52c0-26.373 5.367-47.15 16.1-62.33s27.6-22.77 50.6-22.77 39.867 7.59 50.6 22.77c10.887 15.18 16.33 35.957 16.33 62.33 0 26.68-5.367 47.61-16.1 62.79s-27.677 22.77-50.83 22.77-40.097-7.59-50.83-22.77c-10.58-15.18-15.87-36.11-15.87-62.79Zm89.01 0c0-13.8-1.457-24.303-4.37-31.51-2.913-7.36-8.893-11.04-17.94-11.04s-15.027 3.68-17.94 11.04c-2.913 7.207-4.37 17.71-4.37 31.51 0 14.107 1.38 24.84 4.14 32.2 2.913 7.207 8.97 10.81 18.17 10.81 9.2 0 15.18-3.603 17.94-10.81 2.913-7.36 4.37-18.093 4.37-32.2ZM343.116 144.4v-37.26L413.726 6.4h49.45v98.9h17.71v39.1h-17.71V172h-45.54v-27.6h-74.52Zm77.97-87.17-31.74 48.07h31.74V57.23Z",
    fill: "#2B2B30"
  })), /*#__PURE__*/external_react_.createElement("mask", {
    id: "404_svg__d",
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: 217,
    y: 4,
    width: 148,
    height: 125
  }, _path4 || (_path4 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M239.794 42.97c9.047 0 54.293-44.83 57.206-37.47 93.5 7 66.527 41.74 56 64.5-3.552 7.68-90.896 12.038-90.896 15.52 0 14.107-1.456 24.84-4.37 32.2-2.76 7.207-8.74 10.81-17.94 10.81-9.2 0-15.256-3.603-18.17-10.81-2.76-7.36-4.14-18.093-4.14-32.2 0-13.8 1.457-24.303 4.37-31.51 2.914-7.36 8.894-11.04 17.94-11.04Z",
    fill: "#2B2B30"
  }))), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    mask: "url(#404_svg__d)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "m260.996 169.811 19.327-27.504a52.517 52.517 0 0 1-11.634-72.352 52.514 52.514 0 0 1 72.015-13.554l19.327-27.504a86.138 86.138 0 0 0-118.874 21.752 86.161 86.161 0 0 0 19.839 119.162Z",
    fill: "url(#404_svg__e)"
  }))), _path5 || (_path5 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m136.568 138.965-19.763-18.084a41.853 41.853 0 0 1-58.37 1.806 41.848 41.848 0 0 1-3.359-58.3L35.313 46.301a68.647 68.647 0 0 0 5.051 96.173 68.66 68.66 0 0 0 96.204-3.51Z",
    fill: "url(#404_svg__f)"
  })), _path6 || (_path6 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M421 42v63h-64c0-16.709 6.743-32.733 18.745-44.548C387.748 48.638 404.026 42 421 42Z",
    fill: "url(#404_svg__g)"
  }))), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "404_svg__b",
    x1: 182,
    y1: -7,
    x2: 182,
    y2: 135.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0.2
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "404_svg__c",
    x1: 443.5,
    y1: 60.5,
    x2: 443.5,
    y2: 236,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "404_svg__e",
    x1: 287.85,
    y1: 43.412,
    x2: 279.928,
    y2: 160.974,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "404_svg__f",
    x1: 134.845,
    y1: 100.133,
    x2: 3.944,
    y2: 81.445,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: 0.292,
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "404_svg__g",
    x1: 359.465,
    y1: 105.002,
    x2: 418.139,
    y2: 47.931,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_.createElement("stop", {
    stopColor: "#FEC506"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: 1,
    stopColor: "#FEC506",
    stopOpacity: 0
  })), /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "404_svg__a"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#fff",
    transform: "translate(.73 .42)",
    d: "M0 0h480.156v171.58H0z"
  })))));
};

/* harmony default export */ const _404 = (Svg404);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Custom404Page/Header404/index.tsx





const Header404 = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconBlock, {
          children: /*#__PURE__*/jsx_runtime_.jsx(_404, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(TextBlock, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
            children: ["Something\u2019s missing.", /*#__PURE__*/jsx_runtime_.jsx("span", {
              onClick: () => history.back(),
              children: " Go back"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const Custom404Page_Header404 = (Header404);
;// CONCATENATED MODULE: ./pages/404.tsx












const titles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];
const footer = {
  policies: ["privacy policy", "Cookies Policy"],
  offices: [{
    "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine"
  }, {
    "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA"
  }],
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

function Custom404() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Create Next App"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Generated by create next app"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(mainMenu/* default */.Z, {
        backgroundColor: theme/* theme.colors.black */.r.colors.black,
        titlesColor: theme/* theme.colors.white */.r.colors.white,
        titles: titles,
        children: /*#__PURE__*/jsx_runtime_.jsx(Custom404Page_Header404, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
    })]
  });
}

/* harmony default export */ const pages_404 = (Custom404);

/***/ })

};
;