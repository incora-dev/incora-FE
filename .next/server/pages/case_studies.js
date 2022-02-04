"use strict";
(() => {
var exports = {};
exports.id = 7614;
exports.ids = [7614,2197];
exports.modules = {

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgHexagonFilled = function SvgHexagonFilled(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 195,
    height: 225,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.297 56.637v112.237L97.454 225l97.158-56.126V56.637L97.454.527.297 56.637Z",
    fill: "#212121"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgHexagonFilled);

/***/ }),

/***/ 1441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gw": () => (/* binding */ CHANGE_CURRENT_GLOBE_POINT),
  "ZL": () => (/* binding */ GET_REVIEWS_SUCCESS),
  "Tn": () => (/* binding */ getReview)
});

// UNUSED EXPORTS: GET_REVIEWS, GET_REVIEWS_FAILURE, changeCurrentGlobePoint

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

/***/ 4208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ case_studies),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: ./components/common/Globe/index.tsx + 2 modules
var Globe = __webpack_require__(4171);
// EXTERNAL MODULE: ./components/Homepage/actions.ts + 1 modules
var actions = __webpack_require__(1441);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Switch/style.ts


const SwitchWrap = external_styled_components_default().div.withConfig({
  displayName: "style__SwitchWrap",
  componentId: "sc-9of5mw-0"
})(["width:232px;height:44px;border-radius:50px;position:relative;background:", ";display:flex;align-items:center;justify-content:space-around;transition:all 0.3s ease-in-out;cursor:pointer;@media only screen and (max-width:", "){width:200px;height:38px;}span{z-index:1;font-weight:500;font-size:var(--fs-14);line-height:21px;letter-spacing:0.05em;text-transform:capitalize;margin:0;}.left{color:", ";}.right{color:", ";}"], ({
  backgroundColor
}) => backgroundColor ? `${backgroundColor}` : theme_get_default()("colors.background"), theme_get_default()('breakpoints.mobile'), ({
  toggle
}) => toggle ? theme_get_default()("colors.font1") : "black", ({
  toggle
}) => toggle ? "black" : theme_get_default()("colors.font1"));
const YellowButton = external_styled_components_default().div.withConfig({
  displayName: "style__YellowButton",
  componentId: "sc-9of5mw-1"
})(["transition:all 0.3s ease-in-out;position:absolute;left:", ";width:50%;height:100%;border-radius:50px;background:", ";"], ({
  toggle
}) => toggle ? "50%" : "0px", theme_get_default()("colors.yellow"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/components/Switch/index.tsx





const Switch = ({
  left,
  right,
  handleValue,
  backgroundColor
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  (0,external_react_.useEffect)(() => {
    handleValue(toggle);
  }, [toggle]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SwitchWrap, {
    toggle: toggle,
    backgroundColor: backgroundColor,
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(YellowButton, {
      toggle: toggle
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "left",
      children: left
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "right",
      children: right
    })]
  });
};

/* harmony default export */ const components_Switch = (Switch);
// EXTERNAL MODULE: ./components/CaseStudies/CaseFilter/components/Tags/index.tsx + 3 modules
var Tags = __webpack_require__(8482);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/style.ts


const CaseFilterWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__CaseFilterWrapper",
  componentId: "sc-1p4hkce-0"
})(["width:100%;height:auto;display:flex;align-items:center;flex-direction:column;padding-top:117px;margin-bottom:21px;background-color:", ";transition:all 0.5s ease-in-out;overflow:hidden;@media only screen and (max-width:", "){max-width:100%;margin:0 auto;padding:50px 25px 0;}@media only screen and (max-width:", "){max-width:100%;padding-top:30px;height:auto;}@media only screen and (max-width:", "){padding-top:30px;}@media only screen and (max-width:", "){padding:20px 15px 0;}"], ({
  filterByFlag
}) => filterByFlag ? (0,theme_get_.themeGet)("colors.black") : (0,theme_get_.themeGet)("colors.white"), (0,theme_get_.themeGet)('breakpoints.mDesk'), (0,theme_get_.themeGet)('breakpoints.smallDesk'), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'));
const FilterWrap = external_styled_components_default().div.withConfig({
  displayName: "style__FilterWrap",
  componentId: "sc-1p4hkce-1"
})(["width:1006px;transition:background-color 0.5s ease-in-out;@media only screen and (max-width:", "){max-width:100%;width:100%;}h1{font-weight:800;font-size:var(--fs-64);line-height:96px;text-transform:capitalize;letter-spacing:3px;margin-bottom:19px;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:58px;}@media only screen and (max-width:", "){line-height:50px;}@media only screen and (max-width:", "){font-size:var(--fs-36);line-height:48px;}@media only screen and (max-width:", "){line-height:34px;font-size:var(--fs-36);margin-bottom:10px;}}p{width:560px;font-size:var(--fs-14);line-height:30px;color:", ";letter-spacing:0.1em;margin-bottom:35px;@media only screen and (max-width:", "){width:80%;}@media only screen and (max-width:", "){width:100%;margin-bottom:20px;}}"], (0,theme_get_.themeGet)("breakpoints.mDesk"), ({
  filterByFlag
}) => filterByFlag ? (0,theme_get_.themeGet)("colors.white") : (0,theme_get_.themeGet)("colors.black"), (0,theme_get_.themeGet)('breakpoints.smallDesk'), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.sTablet'), (0,theme_get_.themeGet)('breakpoints.mobile'), ({
  filterByFlag
}) => filterByFlag ? (0,theme_get_.themeGet)("colors.font2") : (0,theme_get_.themeGet)("colors.font1"), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'));
const FilterSwitchWrap = external_styled_components_default().div.withConfig({
  displayName: "style__FilterSwitchWrap",
  componentId: "sc-1p4hkce-2"
})(["height:44px;display:flex;align-items:center;margin-bottom:50px;> span{font-weight:800;font-size:var(--fs-14);line-height:21px;letter-spacing:0.05em;margin-right:15px;color:", ";}@media only screen and (max-width:", "){margin-bottom:35px;}@media only screen and (max-width:", "){justify-content:space-between;margin-bottom:20px;}"], ({
  filterByFlag
}) => filterByFlag ? (0,theme_get_.themeGet)("colors.white") : (0,theme_get_.themeGet)("colors.black"), (0,theme_get_.themeGet)('breakpoints.tablet'), (0,theme_get_.themeGet)('breakpoints.mobile'));
const GlobeWrap = external_styled_components_default().div.withConfig({
  displayName: "style__GlobeWrap",
  componentId: "sc-1p4hkce-3"
})(["width:100%;@media only screen and (max-width:", "){height:100vh;}"], (0,theme_get_.themeGet)('breakpoints.mobile'));
const GlobeContainer = external_styled_components_default().div.withConfig({
  displayName: "style__GlobeContainer",
  componentId: "sc-1p4hkce-4"
})([".globe{width:100%;max-width:1366px;opacity:0;height:0;overflow:hidden;transition:all 0.5s ease-in-out;}.show{height:450px;opacity:1;}"]);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseFilter/index.tsx












const CaseFilter = ({
  filterByFlag,
  setFilterByFlag,
  title,
  description,
  setCurrentIndustryTag,
  industries
}) => {
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    dispatch(actions/* getReview.success */.Tn.success()); // replace real backend data later
  }, []);

  const handleSwitchValue = value => {
    setFilterByFlag(value);
  };

  const switchBackgroundColorCondition = filterByFlag ? theme/* theme.colors.background2 */.r.colors.background2 : undefined;

  const tagsCondition = !filterByFlag && industries && /*#__PURE__*/jsx_runtime_.jsx(Tags/* default */.Z, {
    setCurrentIndustryTag: setCurrentIndustryTag,
    labels: industries
  });

  const globeCondition = /*#__PURE__*/jsx_runtime_.jsx(Globe/* default */.Z, {
    reviewIndex: 0,
    points: []
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CaseFilterWrapper, {
    filterByFlag: filterByFlag,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterWrap, {
      filterByFlag: filterByFlag,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      }), !isMobile && !isTablet && !isSmallTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterSwitchWrap, {
        filterByFlag: filterByFlag,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "filter by"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Switch, {
          left: "industries",
          right: "countries",
          backgroundColor: switchBackgroundColorCondition,
          handleValue: handleSwitchValue
        })]
      }), tagsCondition]
    }), /*#__PURE__*/jsx_runtime_.jsx(GlobeContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `globe ${filterByFlag && !isMobile && "show"}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(GlobeWrap, {
          children: globeCondition
        })
      })
    })]
  });
};

/* harmony default export */ const CaseStudies_CaseFilter = (CaseFilter);
// EXTERNAL MODULE: ./components/Footer/index.tsx + 4 modules
var Footer = __webpack_require__(5574);
// EXTERNAL MODULE: ./components/mainMenu/mainMenu.tsx + 26 modules
var mainMenu = __webpack_require__(2308);
// EXTERNAL MODULE: ./components/FormClassic/index.tsx + 3 modules
var FormClassic = __webpack_require__(3478);
;// CONCATENATED MODULE: ./components/CaseStudies/LetsReachOut/style.ts


const LetsReactOutWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__LetsReactOutWrapper",
  componentId: "sc-qtqgjd-0"
})(["width:100%;background-color:", ";display:flex;justify-content:center;overflow:hidden;@media only screen and (max-width:", "){padding:0 30px 53px;height:auto;}@media only screen and (max-width:", "){padding:0 15px;height:auto;}a{margin-top:16px;}"], theme_get_default()("colors.black"), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.mobile'));
const ContentWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrap",
  componentId: "sc-qtqgjd-1"
})(["width:1033px;padding-top:140px;padding-bottom:176px;padding-left:12px;position:relative;@media only screen and (max-width:", "){padding-bottom:50px;}@media only screen and (max-width:", "){max-width:100%;width:100%;padding:100px 25px 50px;}@media only screen and (max-width:", "){padding:53px 0 0;}@media only screen and (max-width:", "){padding-top:40px;}> h1{font-weight:800;font-size:var(--fs-64);letter-spacing:0.05em;text-transform:capitalize;color:", ";@media only screen and (max-width:", "){font-size:var(--fs-48);line-height:58px;}@media only screen and (max-width:", "){font-size:var(--fs-36);}}> span{font-weight:800;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;color:", ";}.hex{position:absolute;right:-12px;top:135px;@media only screen and (max-width:", "){transform:scale(0.7);right:-90px;}@media only screen and (max-width:", "){right:-108px;top:132px;}@media only screen and (max-width:", "){display:none;}}.semicircle{position:absolute;right:-63px;top:94px;@media only screen and (max-width:", "){right:-1px;}@media only screen and (max-width:", "){right:-32px;}@media only screen and (max-width:", "){display:none;}}"], theme_get_default()("breakpoints.mediumDesk"), theme_get_default()("breakpoints.mDesk"), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'), theme_get_default()("colors.white"), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'), theme_get_default()("colors.white"), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.smallDesk'), theme_get_default()('breakpoints.mobile'));
const UploadBox = external_styled_components_default().div.withConfig({
  displayName: "style__UploadBox",
  componentId: "sc-qtqgjd-2"
})(["width:400px;height:74px;margin-top:44px;margin-bottom:35px;border:1px solid ", ";background-color:", ";display:flex;justify-content:center;align-items:center;@media only screen and (max-width:", "){margin:30px 0;}@media only screen and (max-width:", "){width:100%;}> span{font-weight:600;font-size:var(--fs-14);line-height:21px;text-align:center;letter-spacing:0.05em;color:", ";}"], theme_get_default()("colors.grey2"), theme_get_default()("colors.background3"), theme_get_default()('breakpoints.tablet'), theme_get_default()('breakpoints.mobile'), theme_get_default()("colors.yellow"));
// EXTERNAL MODULE: ./public/SVG/hexagon1.svg
var hexagon1 = __webpack_require__(4109);
;// CONCATENATED MODULE: ./public/SVG/whiteSemicircle.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgWhiteSemicircle = function SvgWhiteSemicircle(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 54,
    height: 109,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m53.45 108.123.022-21.029a32.853 32.853 0 0 1-31.944-32.881 32.852 32.852 0 0 1 32.02-32.807L53.569.377A53.888 53.888 0 0 0 .492 54.212a53.899 53.899 0 0 0 52.958 53.911Z",
    fill: "#fff"
  })));
};

/* harmony default export */ const whiteSemicircle = (SvgWhiteSemicircle);
// EXTERNAL MODULE: ./components/FormClassic/FilesUploader/index.tsx + 1 modules
var FilesUploader = __webpack_require__(7864);
;// CONCATENATED MODULE: ./components/CaseStudies/LetsReachOut/index.tsx










const uploadFilesLabel = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Upload a file"
    }), " or drag and drop here"]
  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "We accept PDF, DOC, DOCX, JPG and PNG files."
  })]
});

const LetsReachOut = ({
  contactUs
}) => {
  const {
    0: inputSelectedFile,
    1: setSelectedFile
  } = (0,external_react_.useState)(null);
  const {
    title,
    subtitle
  } = contactUs;
  return /*#__PURE__*/jsx_runtime_.jsx(LetsReactOutWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: subtitle
      }), /*#__PURE__*/jsx_runtime_.jsx(FilesUploader/* default */.Z, {
        inputHeight: '103px',
        padding: '15px 30px',
        filesLabel: uploadFilesLabel(),
        formTheme: true,
        setSelectedFile: setSelectedFile
      }), /*#__PURE__*/jsx_runtime_.jsx(FormClassic/* default */.Z, {
        buttonLabel: "send",
        formBlack: true,
        selectedFiles: inputSelectedFile
      }), /*#__PURE__*/jsx_runtime_.jsx(hexagon1/* default */.Z, {
        className: "hex"
      }), /*#__PURE__*/jsx_runtime_.jsx(whiteSemicircle, {
        className: "semicircle"
      })]
    })
  });
};

/* harmony default export */ const CaseStudies_LetsReachOut = (LetsReachOut);
// EXTERNAL MODULE: ./graphql/caseStudies/queries.ts
var queries = __webpack_require__(5130);
// EXTERNAL MODULE: ./pages/404.tsx + 3 modules
var _404 = __webpack_require__(6652);
// EXTERNAL MODULE: ./graphql/client.ts
var graphql_client = __webpack_require__(6557);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx + 2 modules
var Loader = __webpack_require__(3535);
// EXTERNAL MODULE: ./components/Homepage/EmbodiedIdeas/index.tsx + 15 modules
var EmbodiedIdeas = __webpack_require__(2910);
;// CONCATENATED MODULE: ./components/CaseStudies/Projects/style.ts

const ProjectsWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ProjectsWrapper",
  componentId: "sc-1nyvcbj-0"
})(["width:100%;min-height:250px;padding-top:50px;"]);
const NoCasesFounded = external_styled_components_default().div.withConfig({
  displayName: "style__NoCasesFounded",
  componentId: "sc-1nyvcbj-1"
})(["width:100%;display:flex;justify-content:center;"]);
;// CONCATENATED MODULE: ./components/CaseStudies/Projects/index.tsx








const Projects = ({
  industry
}) => {
  var _data$projects;

  const {
    data,
    loading
  } = (0,client_.useQuery)(queries/* GET_PROJECTS */.fM, {
    variables: {
      industry
    }
  });
  const projects = data === null || data === void 0 ? void 0 : (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : _data$projects.data;

  const renderCondition = () => {
    if (projects && projects.length <= 0) {
      return /*#__PURE__*/jsx_runtime_.jsx(NoCasesFounded, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "No cases founded"
        })
      });
    } else if (projects && !loading) {
      return /*#__PURE__*/jsx_runtime_.jsx(EmbodiedIdeas/* default */.Z, {
        projects: projects,
        bgColor: theme/* theme.colors.white */.r.colors.white,
        elementsColor: theme/* theme.colors.yellow */.r.colors.yellow,
        disablePadding: true,
        disableSeeMore: true
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {});
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(ProjectsWrapper, {
    children: renderCondition()
  });
};

/* harmony default export */ const CaseStudies_Projects = (Projects);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./public/SVG/technologies/react.svg
var react = __webpack_require__(348);
// EXTERNAL MODULE: ./constants/index.ts + 9 modules
var constants = __webpack_require__(3656);
;// CONCATENATED MODULE: ./pages/case_studies/index.tsx
















const titles = ["Services", "Expertise", "Case Studies", "Company", "Insights", "Contact Us"];

const CaseStudies = ({
  data,
  networkStatus
}) => {
  var _data$caseStudiesPage, _data$caseStudiesPage2, _data$industries, _entry$SEO, _entry$SEO2, _entry$SEO3, _entry$SEO4, _entry$SEO4$ogImage, _entry$SEO4$ogImage$d, _entry$SEO4$ogImage$d2, _entry$SEO5, _entry$SEO5$ogImage, _entry$SEO5$ogImage$d, _entry$SEO5$ogImage$d2;

  const {
    0: currentIndustryTag,
    1: setCurrentIndustryTag
  } = (0,external_react_.useState)("all");
  const industry = currentIndustryTag === "all" ? undefined : currentIndustryTag;
  const entry = data === null || data === void 0 ? void 0 : (_data$caseStudiesPage = data.caseStudiesPage) === null || _data$caseStudiesPage === void 0 ? void 0 : (_data$caseStudiesPage2 = _data$caseStudiesPage.data) === null || _data$caseStudiesPage2 === void 0 ? void 0 : _data$caseStudiesPage2.attributes;
  const industries = data === null || data === void 0 ? void 0 : (_data$industries = data.industries) === null || _data$industries === void 0 ? void 0 : _data$industries.data;
  const seoTitle = entry === null || entry === void 0 ? void 0 : (_entry$SEO = entry.SEO) === null || _entry$SEO === void 0 ? void 0 : _entry$SEO.ogTitle;
  const seoKeywords = entry === null || entry === void 0 ? void 0 : (_entry$SEO2 = entry.SEO) === null || _entry$SEO2 === void 0 ? void 0 : _entry$SEO2.keywords;
  const seoDescription = entry === null || entry === void 0 ? void 0 : (_entry$SEO3 = entry.SEO) === null || _entry$SEO3 === void 0 ? void 0 : _entry$SEO3.description;
  const seoImage = (entry === null || entry === void 0 ? void 0 : (_entry$SEO4 = entry.SEO) === null || _entry$SEO4 === void 0 ? void 0 : (_entry$SEO4$ogImage = _entry$SEO4.ogImage) === null || _entry$SEO4$ogImage === void 0 ? void 0 : (_entry$SEO4$ogImage$d = _entry$SEO4$ogImage.data) === null || _entry$SEO4$ogImage$d === void 0 ? void 0 : (_entry$SEO4$ogImage$d2 = _entry$SEO4$ogImage$d.attributes) === null || _entry$SEO4$ogImage$d2 === void 0 ? void 0 : _entry$SEO4$ogImage$d2.url) !== undefined && `${constants/* IMAGES_LINK */.rS}${entry === null || entry === void 0 ? void 0 : (_entry$SEO5 = entry.SEO) === null || _entry$SEO5 === void 0 ? void 0 : (_entry$SEO5$ogImage = _entry$SEO5.ogImage) === null || _entry$SEO5$ogImage === void 0 ? void 0 : (_entry$SEO5$ogImage$d = _entry$SEO5$ogImage.data) === null || _entry$SEO5$ogImage$d === void 0 ? void 0 : (_entry$SEO5$ogImage$d2 = _entry$SEO5$ogImage$d.attributes) === null || _entry$SEO5$ogImage$d2 === void 0 ? void 0 : _entry$SEO5$ogImage$d2.url}`;
  const {
    0: filterByFlag,
    1: setFilterByFlag
  } = (0,external_react_.useState)(false);
  const {
    black,
    white
  } = theme/* theme.colors */.r.colors;
  const menuBackgroundCondition = filterByFlag ? black : white;
  const titlesColorCondition = filterByFlag ? white : black;
  const renderCondition = entry && industries;
  if (networkStatus !== 7) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
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
        backgroundColor: menuBackgroundCondition,
        titlesColor: titlesColorCondition,
        titles: titles,
        children: [/*#__PURE__*/jsx_runtime_.jsx(CaseStudies_CaseFilter, {
          industries: industries,
          filterByFlag: filterByFlag,
          setFilterByFlag: setFilterByFlag,
          title: entry.title,
          description: entry.description,
          setCurrentIndustryTag: setCurrentIndustryTag
        }), /*#__PURE__*/jsx_runtime_.jsx(CaseStudies_Projects, {
          industry: industry
        }), /*#__PURE__*/jsx_runtime_.jsx(CaseStudies_LetsReachOut, {
          contactUs: entry.contactUs
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
      })]
    })
  });
};

async function getServerSideProps() {
  const client = (0,graphql_client/* initializeApollo */["in"])();
  const {
    data,
    networkStatus
  } = await client.query({
    query: queries/* GET_CASE_STUDIES */.VI
  });
  return {
    props: {
      data,
      networkStatus
    }
  };
}
/* harmony default export */ const case_studies = (CaseStudies);

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

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,8040,6604,6652,6557,4109,6074,3478,7305,2910,4171,5130,7814], () => (__webpack_exec__(4208)));
module.exports = __webpack_exports__;

})();