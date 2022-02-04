"use strict";
(() => {
var exports = {};
exports.id = 5669;
exports.ids = [5669,2197];
exports.modules = {

/***/ 6731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./components/ServicePage/HeaderService/index.tsx + 1 modules
var HeaderService = __webpack_require__(6153);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./components/Services/LetsTalk/index.tsx + 1 modules
var LetsTalk = __webpack_require__(4096);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ServicePage/Information/Information.style.tsx


const Div = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Div",
  componentId: "sc-nr0lwc-0"
})(["position:relative;margin-top:-104px;overflow:hidden;"]);
const PositionHexagon1 = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__PositionHexagon1",
  componentId: "sc-nr0lwc-1"
})(["position:absolute;top:-244px;left:117px;"]);
const PositionHexagon2 = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__PositionHexagon2",
  componentId: "sc-nr0lwc-2"
})(["position:absolute;top:-111px;left:-119px;"]);
const PositionHexagon3 = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__PositionHexagon3",
  componentId: "sc-nr0lwc-3"
})(["position:absolute;top:92px;left:-2px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.sTablet'));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Wrapper",
  componentId: "sc-nr0lwc-4"
})(["max-width:1006px;margin:0 auto;"]);
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__TextBlock",
  componentId: "sc-nr0lwc-5"
})(["position:relative;z-index:1;padding:117px 0 120px 0;display:flex;justify-content:space-between;@media only screen and (max-width:", "){padding:60px 25px;column-gap:40px;}@media only screen and (max-width:", "){flex-direction:column;row-gap:30px;}@media only screen and (max-width:", "){padding:53px 15px;}"], theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const Content = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Content",
  componentId: "sc-nr0lwc-6"
})(["min-width:523px;display:flex;flex-direction:column;row-gap:63px;@media only screen and (max-width:", "){min-width:450px;row-gap:40px;}@media only screen and (max-width:", "){min-width:100%;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'));
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__ContentWrapper",
  componentId: "sc-nr0lwc-7"
})(["position:relative;display:flex;flex-direction:column;row-gap:18px;"]);
const H1 = external_styled_components_default().h1.withConfig({
  displayName: "Informationstyle__H1",
  componentId: "sc-nr0lwc-8"
})(["display:block;max-width:396px;font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-64);line-height:96px;letter-spacing:0.05em;color:#000000;@media only screen and (max-width:", "){font-size:var(--fs-40);line-height:60px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-28);line-height:42px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.sTablet'), theme_get_default()('breakpoints.mobile'));
const Sphere = external_styled_components_default().div.withConfig({
  displayName: "Informationstyle__Sphere",
  componentId: "sc-nr0lwc-9"
})(["position:absolute;z-index:-1;top:3px;width:50px;height:50px;border-radius:50%;background:linear-gradient( 132.16deg,#fec506 14.9%,rgba(254,197,6,0.2) 85.57% );@media only screen and (max-width:", "){left:-15px;}"], theme_get_default()('breakpoints.tablet'));
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "Informationstyle__H2",
  componentId: "sc-nr0lwc-10"
})(["margin-top:11px;width:493px;align-self:flex-end;font-family:Poppins;font-style:normal;font-weight:800;font-size:var(--fs-23);line-height:34px;letter-spacing:0.05em;color:#000000;@media only screen and (max-width:", "){width:100%;}@media only screen and (max-width:", "){font-size:var(--fs-20);line-height:30px;}"], theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.tablet'));
const Text = external_styled_components_default().p.withConfig({
  displayName: "Informationstyle__Text",
  componentId: "sc-nr0lwc-11"
})(["max-width:493px;font-family:Poppins;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#454a4d;@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()('breakpoints.tablet'));
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ServicePage/Information/index.tsx









const GetContent = ({
  content
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Content, {
    children: content.map(contentItem => {
      var _contentItem$image, _contentItem$image$da;

      const id = contentItem === null || contentItem === void 0 ? void 0 : contentItem.id;
      const title = contentItem === null || contentItem === void 0 ? void 0 : contentItem.title;
      const description = contentItem === null || contentItem === void 0 ? void 0 : contentItem.description;
      const image = contentItem === null || contentItem === void 0 ? void 0 : (_contentItem$image = contentItem.image) === null || _contentItem$image === void 0 ? void 0 : (_contentItem$image$da = _contentItem$image.data) === null || _contentItem$image$da === void 0 ? void 0 : _contentItem$image$da.attributes;
      const src = constants/* IMAGES_LINK */.rS + (image === null || image === void 0 ? void 0 : image.url);
      const width = image === null || image === void 0 ? void 0 : image.width;
      const height = image === null || image === void 0 ? void 0 : image.height;
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: width && height && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Sphere, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
              loader: () => src,
              src: src,
              width: width,
              height: height,
              alt: "icon"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(H2, {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
            children: description
          })]
        }, id)
      });
    })
  });
};

const Information = ({
  content
}) => {
  const {
    intro,
    items
  } = content;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBlock, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(H1, {
          children: intro
        }), /*#__PURE__*/jsx_runtime_.jsx(GetContent, {
          content: items
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PositionHexagon1, {
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
    })]
  });
};

/* harmony default export */ const ServicePage_Information = (Information);
;// CONCATENATED MODULE: ./components/ServicePage/BestSuitedFor/BestSuitedFor.style.tsx


const BestSuitedFor_style_Div = external_styled_components_default().div.withConfig({
  displayName: "BestSuitedForstyle__Div",
  componentId: "sc-185mwq9-0"
})(["color:#ffffff;background:#181819;"]);
const BestSuitedFor_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "BestSuitedForstyle__Wrapper",
  componentId: "sc-185mwq9-1"
})(["padding-top:119px;@media only screen and (max-width:", "){padding:80px 25px 0;}@media only screen and (max-width:", "){padding:55px 15px 0;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.mobile"));
const BestSuitedFor_style_H1 = external_styled_components_default().h1.withConfig({
  displayName: "BestSuitedForstyle__H1",
  componentId: "sc-185mwq9-2"
})(["max-width:1006px;margin:0 auto;font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;"], theme_get_default()("breakpoints.mobile"));
const BestSuitedFor_style_Content = external_styled_components_default().div.withConfig({
  displayName: "BestSuitedForstyle__Content",
  componentId: "sc-185mwq9-3"
})(["min-height:50vh;max-width:1006px;padding:63px 0 158px 0;margin:0 auto;position:relative;display:flex;column-gap:58px;row-gap:70px;flex-wrap:wrap;justify-content:center;@media only screen and (max-width:", "){min-height:fit-content;padding:63px 0 120px 0;left:0;column-gap:40px;row-gap:45px;}@media only screen and (max-width:", "){padding:40px 0 100px 0;justify-content:flex-start;}@media only screen and (max-width:", "){column-gap:0;}@media only screen and (max-width:", "){flex-direction:column;padding:25px 0 60px 0;row-gap:15px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.mobile"));
const BestSuitedFor_style_ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "BestSuitedForstyle__ContentWrapper",
  componentId: "sc-185mwq9-4"
})(["position:relative;display:flex;svg{transform:rotate(195deg);@media only screen and (max-width:", "){width:50px;}}opacity:", ";transition:opacity ", ";transition-delay:", ";"], theme_get_default()("breakpoints.mobile"), ({
  animation
}) => animation ? "1" : "0", theme_get_default()("transition.button"), ({
  delay
}) => `${delay}ms`);
const BestSuitedFor_style_Text = external_styled_components_default().p.withConfig({
  displayName: "BestSuitedForstyle__Text",
  componentId: "sc-185mwq9-5"
})(["position:relative;top:51px;right:25px;max-width:229px;font-style:normal;font-weight:bold;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;text-transform:capitalize;@media only screen and (max-width:", "){font-size:var(--fs-16);max-width:154px;}@media only screen and (max-width:", "){max-width:290px;}"], theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.mobile"));
const PositionDots = external_styled_components_default().div.withConfig({
  displayName: "BestSuitedForstyle__PositionDots",
  componentId: "sc-185mwq9-6"
})(["position:absolute;top:29px;left:38px;transform:rotate(60deg);@media only screen and (max-width:", "){top:23px;left:29px;}"], theme_get_default()("breakpoints.mobile"));
// EXTERNAL MODULE: ./public/loading1.svg
var loading1 = __webpack_require__(8855);
// EXTERNAL MODULE: ./utils/letter.utils.tsx
var letter_utils = __webpack_require__(7138);
// EXTERNAL MODULE: ./components/Homepage/Cooperate/elements/dots/dots.tsx + 2 modules
var dots = __webpack_require__(2015);
;// CONCATENATED MODULE: ./components/ServicePage/BestSuitedFor/index.tsx










const BestSuitedFor_GetContent = ({
  labels,
  onBlockEnter = false
}) => {
  const createLabels = labels.map((label, index) => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BestSuitedFor_style_ContentWrapper, {
      animation: onBlockEnter,
      delay: index * 200,
      children: [/*#__PURE__*/jsx_runtime_.jsx(PositionDots, {
        children: /*#__PURE__*/jsx_runtime_.jsx(dots/* default */.Z, {
          numberOfDots: 5,
          dotColor: theme/* theme.colors.white */.r.colors.white,
          animation: onBlockEnter,
          rowGap: "7px"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(loading1/* default */.Z, {
          width: "87",
          height: "87",
          viewBox: "0 0 96 96"
        }), /*#__PURE__*/jsx_runtime_.jsx(BestSuitedFor_style_Text, {
          children: label === null || label === void 0 ? void 0 : label.title
        })]
      })]
    }, label === null || label === void 0 ? void 0 : label.id);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createLabels
  });
};

const BestSuitedFor = ({
  title,
  info
}) => {
  const {
    0: onBlock,
    1: setOnBlock
  } = (0,external_react_.useState)(false);
  const titleFirstLetterBig = (0,letter_utils/* firstLetterBig */.o)(title);
  return /*#__PURE__*/jsx_runtime_.jsx(BestSuitedFor_style_Div, {
    onMouseEnter: () => setOnBlock(true),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BestSuitedFor_style_Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BestSuitedFor_style_H1, {
        children: titleFirstLetterBig
      }), /*#__PURE__*/jsx_runtime_.jsx(BestSuitedFor_style_Content, {
        children: /*#__PURE__*/jsx_runtime_.jsx(BestSuitedFor_GetContent, {
          labels: info,
          onBlockEnter: onBlock
        })
      })]
    })
  });
};

/* harmony default export */ const ServicePage_BestSuitedFor = (BestSuitedFor);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./graphql/services/queries.ts
var queries = __webpack_require__(8365);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
;// CONCATENATED MODULE: ./components/ServicePage/WorkflowSetUp/WorkflowSetUp.style.tsx


const WorkflowSetUp_style_Div = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__Div",
  componentId: "sc-3tyoks-0"
})(["color:#000000;padding:15.6vh 0 18.2vh;display:flex;flex-direction:column;row-gap:50px;@media only screen and (max-width:", "){padding:60px 0 80px;}@media only screen and (max-width:", "){row-gap:30px;}@media only screen and (max-width:", "){padding:50px 0 50px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const WorkflowSetUp_style_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__Wrapper",
  componentId: "sc-3tyoks-1"
})(["max-width:1006px;width:100%;margin:0 auto;@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.mobile"));
const WorkflowSetUp_style_Content = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__Content",
  componentId: "sc-3tyoks-2"
})(["padding:0;display:flex;column-gap:50px;overflow:scroll;max-width:calc((100vw - 1006px) / 2 + 1006px);margin-left:calc((100vw - 1006px) / 2);&::-webkit-scrollbar{display:none;}@media only screen and (max-width:", "){overflow:initial;padding:0 25px;flex-wrap:wrap;row-gap:40px;}@media only screen and (max-width:", "){flex-direction:column;row-gap:30px;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.mobile"));
const WorkflowSetUp_style_ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__ContentWrapper",
  componentId: "sc-3tyoks-3"
})(["padding:40px 40px 50px 40px;max-width:573px;display:flex;flex-direction:column;row-gap:11px;background:#FBFBFB;&:last-child{margin-right:50px;}@media only screen and (max-width:", "){padding:0;width:calc(50% - 30px);background:", ";&:last-child{margin-right:0;}}@media only screen and (max-width:", "){padding:0;width:100%;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("colors.white"), theme_get_default()("breakpoints.sTablet"));
const Title = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__Title",
  componentId: "sc-3tyoks-4"
})(["display:flex;flex-direction:column;align-items:flex-start;@media only screen and (max-width:", "){display:flex;align-items:flex-start;min-height:60px;}@media only screen and (max-width:", "){min-height:auto;}img{display:block;position:relative;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.sTablet"));
const TitleContent = external_styled_components_default().div.withConfig({
  displayName: "WorkflowSetUpstyle__TitleContent",
  componentId: "sc-3tyoks-5"
})(["display:flex;margin-top:8px;"]);
const WorkflowSetUp_style_H1 = external_styled_components_default().h1.withConfig({
  displayName: "WorkflowSetUpstyle__H1",
  componentId: "sc-3tyoks-6"
})(["font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;"], theme_get_default()('breakpoints.mobile'));
const WorkflowSetUp_style_H2 = external_styled_components_default().h2.withConfig({
  displayName: "WorkflowSetUpstyle__H2",
  componentId: "sc-3tyoks-7"
})(["margin-left:5px;display:inline-block;font-style:normal;font-weight:800;font-size:var(--fs-23);line-height:34px;letter-spacing:0.05em;@media only screen and (max-width:", "){font-size:var(--fs-18);}"], theme_get_default()('breakpoints.mobile'));
const WorkflowSetUp_style_Number = external_styled_components_default().h2.withConfig({
  displayName: "WorkflowSetUpstyle__Number",
  componentId: "sc-3tyoks-8"
})(["display:inline-block;font-weight:800;font-size:var(--fs-23);line-height:34px;letter-spacing:0.05em;color:#FEC506;@media only screen and (max-width:", "){font-size:var(--fs-18);}"], theme_get_default()('breakpoints.mobile'));
const WorkflowSetUp_style_Text = external_styled_components_default().p.withConfig({
  displayName: "WorkflowSetUpstyle__Text",
  componentId: "sc-3tyoks-9"
})(["width:36vw;max-width:493px;font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:#000000;@media only screen and (max-width:", "){width:100%;}@media only screen and (max-width:", "){line-height:27px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()('breakpoints.mobile'));
;// CONCATENATED MODULE: ./components/ServicePage/WorkflowSetUp/index.tsx








const WorkflowSetUp_GetContent = ({
  content
}) => {
  const createContent = content.map((item, index) => {
    var _item$image, _item$image$data;

    const id = item === null || item === void 0 ? void 0 : item.id;
    const title = item === null || item === void 0 ? void 0 : item.title;
    const description = item === null || item === void 0 ? void 0 : item.description;
    const icon = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : (_item$image$data = _item$image.data) === null || _item$image$data === void 0 ? void 0 : _item$image$data.attributes;
    const src = constants/* IMAGES_LINK */.rS + (icon === null || icon === void 0 ? void 0 : icon.url);
    const width = icon === null || icon === void 0 ? void 0 : icon.width;
    const height = icon === null || icon === void 0 ? void 0 : icon.height;
    const numberTitle = index < 10 ? `0${index + 1}.` : `${index + 1}.`;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: width && height && /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkflowSetUp_style_ContentWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            loader: () => src,
            src: src,
            width: width,
            height: height,
            alt: "icon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleContent, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_Number, {
              children: numberTitle
            }), /*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_H2, {
              children: title
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_Text, {
          children: description
        })]
      }, id)
    });
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createContent
  });
};

const WorkflowSetUp = ({
  title,
  content
}) => {
  const titleFirstLetterBig = (0,letter_utils/* firstLetterBig */.o)(title);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(WorkflowSetUp_style_Div, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_Wrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_H1, {
        children: titleFirstLetterBig
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_style_Content, {
      children: /*#__PURE__*/jsx_runtime_.jsx(WorkflowSetUp_GetContent, {
        content: content
      })
    })]
  });
};

/* harmony default export */ const ServicePage_WorkflowSetUp = (WorkflowSetUp);
// EXTERNAL MODULE: ./components/ServicePage/FAQ/index.tsx + 3 modules
var FAQ = __webpack_require__(4716);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx + 15 modules
var EmbodiedIdeas = __webpack_require__(2910);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
;// CONCATENATED MODULE: ./pages/services/[services]/[id].tsx





















const colorWhite = theme/* theme.colors.white */.r.colors.white;
const colorBlack = theme/* theme.colors.black */.r.colors.black;

const Service = ({
  data,
  networkStatus
}) => {
  var _data$service, _data$service$data, _entry$projects, _entry$icon$data, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2, _data$service2;

  const entry = (_data$service = data.service) === null || _data$service === void 0 ? void 0 : (_data$service$data = _data$service.data) === null || _data$service$data === void 0 ? void 0 : _data$service$data.attributes;
  const content = entry === null || entry === void 0 ? void 0 : entry.whyDoYouNeed;
  const bestSuitedFor = entry === null || entry === void 0 ? void 0 : entry.bestSuitedFor;
  const workflow = entry === null || entry === void 0 ? void 0 : entry.workflow;
  const faqIntro = entry === null || entry === void 0 ? void 0 : entry.faq.intro;
  const faqItems = entry === null || entry === void 0 ? void 0 : entry.faq.items;
  const projects = entry === null || entry === void 0 ? void 0 : (_entry$projects = entry.projects) === null || _entry$projects === void 0 ? void 0 : _entry$projects.data;
  const icon = entry === null || entry === void 0 ? void 0 : (_entry$icon$data = entry.icon.data) === null || _entry$icon$data === void 0 ? void 0 : _entry$icon$data.attributes;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  const {
    0: menuColor,
    1: setMenuColor
  } = (0,external_react_.useState)(isMobile || isTablet || isSmallTablet ? colorBlack : "none");

  const handleScroll = () => {
    window.scrollY >= 20 ? setMenuColor(colorBlack) : setMenuColor("none");
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuColorCondition = isMobile || isTablet || isSmallTablet ? colorBlack : menuColor;
  const renderCondition = entry && content && bestSuitedFor && workflow && faqIntro && faqItems && projects && icon;
  if (networkStatus !== 7 || ((_data$service2 = data.service) === null || _data$service2 === void 0 ? void 0 : _data$service2.data) === null) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
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
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(mainMenu/* default */.Z, {
          backgroundColor: menuColorCondition,
          titlesColor: colorWhite,
          titles: constants/* titles */.F8,
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderService/* default */.Z, {
            title: entry.name,
            titleSize: "48px",
            text: entry.description,
            textWidth: "657px",
            icon: icon
          }), /*#__PURE__*/jsx_runtime_.jsx(ServicePage_Information, {
            content: content
          }), /*#__PURE__*/jsx_runtime_.jsx(ServicePage_BestSuitedFor, {
            title: bestSuitedFor === null || bestSuitedFor === void 0 ? void 0 : bestSuitedFor.intro,
            info: bestSuitedFor === null || bestSuitedFor === void 0 ? void 0 : bestSuitedFor.items
          }), /*#__PURE__*/jsx_runtime_.jsx(ServicePage_WorkflowSetUp, {
            title: workflow.intro,
            content: workflow.items
          }), /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas/* default */.Z, {
            bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
            elementsColor: theme/* theme.colors.black */.r.colors.black,
            projects: projects,
            disablePadding: true,
            disableSeeMore: true
          }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* default */.Z, {
            title: faqIntro,
            items: faqItems
          }), /*#__PURE__*/jsx_runtime_.jsx(LetsTalk/* default */.Z, {
            flexDirection: "column-reverse",
            title: "Ready to Start?",
            text: "Get everything you need for the project initiation."
          })]
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
    query: queries/* GET_SERVICE */.D,
    variables: {
      id: id
    }
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const _id_ = (Service);

/***/ }),

/***/ 7138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ firstLetterBig)
/* harmony export */ });
const firstLetterBig = title => title ? title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase() : '';

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
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,7305,9210,2910,9064,4096,6153,8187], () => (__webpack_exec__(6731)));
module.exports = __webpack_exports__;

})();