"use strict";
(() => {
var exports = {};
exports.id = 6463;
exports.ids = [6463,2197];
exports.modules = {

/***/ 2988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ privacy_policy)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 20 modules
var mainMenu = __webpack_require__(6913);
// EXTERNAL MODULE: ./constants/index.ts + 5 modules
var constants = __webpack_require__(3058);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/HeaderPrivacyPolicy/HeaderPrivacyPolicy.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "HeaderPrivacyPolicystyle__Div",
  componentId: "sc-vlhwg3-0"
})(["background-color:", ";"], theme_get_default()("colors.black"));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "HeaderPrivacyPolicystyle__Wrapper",
  componentId: "sc-vlhwg3-1"
})(["max-width:1006px;margin:0 auto;padding:118px 0 58px;"]);
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "HeaderPrivacyPolicystyle__TextBlock",
  componentId: "sc-vlhwg3-2"
})(["display:flex;flex-direction:column;row-gap:27px;"]);
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "HeaderPrivacyPolicystyle__H1",
  componentId: "sc-vlhwg3-3"
})(["max-width:908px;font-style:normal;font-weight:800;font-size:var(--fs-48);line-height:72px;letter-spacing:0.05em;text-transform:capitalize;color:", ";"], theme_get_default()("colors.white"));
const Text = external_styled_components_default().p.withConfig({
  displayName: "HeaderPrivacyPolicystyle__Text",
  componentId: "sc-vlhwg3-4"
})(["max-width:724px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";"], theme_get_default()("colors.font1"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/HeaderPrivacyPolicy/index.tsx




const HeaderPrivacyPolicy = ({
  title,
  text
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          children: title
        }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: text
        })]
      })
    })
  });
};

/* harmony default export */ const PrivacyPolicyPage_HeaderPrivacyPolicy = (HeaderPrivacyPolicy);
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/MainInfo/MainInfo.style.tsx


const MainInfo_style_Div = external_styled_components_default().div.withConfig({
  displayName: "MainInfostyle__Div",
  componentId: "sc-yelkuw-0"
})(["background-color:", ";h2,h3,h4,h5,h6{margin:0;font-style:normal;font-weight:800;font-size:var(--fs-16);line-height:24px;letter-spacing:0.05em;text-transform:capitalize;color:", ";}ul{margin-left:25px;padding:0;box-sizing:border-box;}p,li{max-width:630px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";}a{max-width:653px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;cursor:pointer;letter-spacing:0.1em;color:", ";}strong,b{max-width:653px;font-weight:600;font-size:var(--fs-14);line-height:30px;letter-spacing:0.05em;color:", ";}"], theme_get_default()("colors.black"), theme_get_default()("colors.white"), theme_get_default()("colors.font1"), theme_get_default()("colors.yellow2"), theme_get_default()("colors.font1"));
const MainInfo_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "MainInfostyle__Wrapper",
  componentId: "sc-yelkuw-1"
})(["max-width:1006px;margin:0 auto;padding:0 0 82px 0;"]);
const MainInfo_style_TextBlock = external_styled_components_default().div.withConfig({
  displayName: "MainInfostyle__TextBlock",
  componentId: "sc-yelkuw-2"
})(["display:flex;flex-direction:column;row-gap:30px;"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/MainInfo/index.tsx




const MainInfo = ({
  PrivacyPolicyText
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(MainInfo_style_Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(MainInfo_style_Wrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(MainInfo_style_TextBlock, {
        children: /*#__PURE__*/jsx_runtime_.jsx(PrivacyPolicyText, {})
      })
    })
  });
};

/* harmony default export */ const PrivacyPolicyPage_MainInfo = (MainInfo);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 3 modules
var Footer = __webpack_require__(1542);
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/Notice/Notice.style.tsx


const Notice_style_Div = external_styled_components_default().div.withConfig({
  displayName: "Noticestyle__Div",
  componentId: "sc-1vk01zv-0"
})(["position:fixed;z-index:10;bottom:0;display:", ";background-color:", ";a{position:relative;&:after{position:absolute;bottom:5px;right:-8px;z-index:-1;content:'';height:7px;width:94px;background-color:", ";}}"], ({
  shouldShowNotice
}) => shouldShowNotice ? 'none' : 'block', theme_get_default()("colors.white"), theme_get_default()("colors.yellow"));
const Notice_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Noticestyle__Wrapper",
  componentId: "sc-1vk01zv-1"
})(["width:100vw;padding:16.5px 0;"]);
const Notice_style_TextBlock = external_styled_components_default().div.withConfig({
  displayName: "Noticestyle__TextBlock",
  componentId: "sc-1vk01zv-2"
})(["margin:auto;width:max-content;display:flex;align-items:center;justify-content:center;column-gap:37px;color:", ";"], theme_get_default()("colors.black"));
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "Noticestyle__H3",
  componentId: "sc-1vk01zv-3"
})(["font-style:normal;font-weight:normal;font-size:var(--fs-16);line-height:24px;letter-spacing:0.05em;color:", ";"], theme_get_default()("colors.black"));
const Button = external_styled_components_default().div.withConfig({
  displayName: "Noticestyle__Button",
  componentId: "sc-1vk01zv-4"
})(["padding:23px 61.5px;font-style:normal;font-weight:bold;font-size:var(--fs-14);line-height:21px;text-align:center;letter-spacing:0.03em;text-transform:capitalize;cursor:pointer;color:", ";background-color:", ";"], theme_get_default()("colors.white"), theme_get_default()("colors.black"));
;// CONCATENATED MODULE: ./components/PrivacyPolicyPage/Notice/index.tsx





const Notice = () => {
  const {
    0: shouldClose,
    1: setShouldClose
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(Notice_style_Div, {
    shouldShowNotice: shouldClose,
    children: /*#__PURE__*/jsx_runtime_.jsx(Notice_style_Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Notice_style_TextBlock, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(H3, {
          children: ["This site uses cookies to improve your user experience.", /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: 'https://www.google.com/search?q=cookies',
            children: "Read More"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
          onClick: () => setShouldClose(true),
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Accept"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const PrivacyPolicyPage_Notice = (Notice);
;// CONCATENATED MODULE: ./pages/privacy_policy/index.tsx












const title = 'privacy policy';
const privacy_policy_text = 'Incora values the confidentiality of your information that is why our privacy policy is oriented at the client’s data safety. We protect the information provided through this website according to the following stances of Incora privacy policy.';

const PrivacyPolicyText = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "What data is collected during the client visit?"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "While browsing our site \u2013 www.incorainc.com, we may collect three types of data:"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Aggregate consumer data \u2013 number of visits per web page or per week."
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "Customer data directly provided by the very client (contact information and name) in the fill-in forms and filled out forms in e-mail messages."
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: "The web pages that you open while navigating the site."
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Incora cares about the customer\u2019s information"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "All information that you indicate at the site is provided directly to the Incora exclusively with no third parties."
    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
      children: "Cookies"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Like any other website, we use \u2018cookies\u2019. Cookies are used to store information about visitors\u2019 preferences, and the pages on the website that the visitor accessed. Collected information is used to optimize the users\u2019 experience by customizing our web page content based on visitors\u2019 browser type and/or other information.        "
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["For more general information on cookies, please read", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: 'https://www.google.com/search?q=cookies',
        children: " What Are Cookies."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      children: "What do we do with your information?"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Incora does not share any information provided by the client with the third parties. This is how Incora uses your information:"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "We use the information that you provide directly to respond to your requests."
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "All information that we take from the e-mail communication, along with the clicks from the hyperlinks and subscriptions, is used to reconstruct the further communication to your preferences."
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Such data as the one collected from the website visits per week and per month is used by our developers to refine the user experience."
    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
      children: "External links on Incora website"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Our site contains the links to the external websites that belong to the third parties and do not fall under the Incora governance. Any information you provide to the external link websites would fall under their own principles of the privacy policy. Incora does not claim any responsibility for the procedures related to the data handling on the independent sites."
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Privacy policy revisions"
    }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
      children: "The Incora privacy policy is regularly revised and the company can modify it with no prior notification."
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "The changes turn effective as soon as they are posted on this page. Using the Incora website, you indicate that you accept and understand the terms and conditions of the Incora privacy policy posted at the time of use."
    })]
  });
};

const PrivacyPolicy = ({
  title,
  text
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Incora | Privacy Policy"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PrivacyPolicyPage_Notice, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
        backgroundColor: theme/* theme.colors.black */.r.colors.black,
        titlesColor: theme/* theme.colors.white */.r.colors.white,
        titles: constants/* titles */.F8,
        children: [/*#__PURE__*/jsx_runtime_.jsx(PrivacyPolicyPage_HeaderPrivacyPolicy, {
          title: title,
          text: text
        }), /*#__PURE__*/jsx_runtime_.jsx(PrivacyPolicyPage_MainInfo, {
          PrivacyPolicyText: PrivacyPolicyText
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {
        policies: constants/* footer.policies */.Mv.policies,
        offices: constants/* footer.offices */.Mv.offices,
        pages: constants/* footer.pages */.Mv.pages,
        followUs: constants/* footer.followUs */.Mv.followUs,
        copyright: constants/* footer.copyright */.Mv.copyright
      })]
    })]
  });
};

PrivacyPolicy.getInitialProps = () => {
  return {
    title,
    text: privacy_policy_text
  };
};

/* harmony default export */ const privacy_policy = (PrivacyPolicy);

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
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,4036,8127], () => (__webpack_exec__(2988)));
module.exports = __webpack_exports__;

})();