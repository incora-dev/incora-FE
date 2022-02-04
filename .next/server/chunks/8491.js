"use strict";
exports.id = 8491;
exports.ids = [8491];
exports.modules = {

/***/ 7234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSmallStar = function SvgSmallStar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m7.5.602 2.202 4.765L15 5.95l-3.938 3.527 1.073 5.125L7.5 12.017l-4.635 2.585 1.073-5.125L0 5.95l5.298-.583L7.5.602Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSmallStar);

/***/ }),

/***/ 8491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Careear_Vacancies)
});

// EXTERNAL MODULE: ./components/Button/index.tsx + 1 modules
var Button = __webpack_require__(3727);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Careear/Vacancies/components/VacancyCard/style.ts


const VacancyCardWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__VacancyCardWrapper",
  componentId: "sc-igsfem-0"
})(["width:100%;height:99px;display:flex;justify-content:space-between;align-items:center;margin-bottom:91px;@media only screen and (max-width:", "){margin-bottom:30px;}@media only screen and (max-width:", "){margin-bottom:25px;height:auto;}@media only screen and (max-width:", "){flex-direction:column;align-items:flex-start;}button{@media only screen and (max-width:", "){height:45px;width:140px;}}"], theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"), theme_get_default()("breakpoints.smallDesk"));
const TextWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TextWrap",
  componentId: "sc-igsfem-1"
})(["width:300px;@media only screen and (max-width:", "){margin-bottom:5px;;}@media only screen and (max-width:", "){width:100%;}span{font-weight:800;font-size:var(--fs-14);line-height:21px;text-transform:uppercase;color:", ";margin-bottom:15px;position:relative;top:-10px;left:8px;letter-spacing:", ";@media only screen and (max-width:", "){top:0;left:0;}}h3{font-weight:800;font-size:var(--fs-21);line-height:31px;text-transform:capitalize;letter-spacing:", ";position:relative;top:3px;left:8px;@media only screen and (max-width:", "){font-size:20px;}@media only screen and (max-width:", "){font-size:16px;line-height:22px;}@media only screen and (max-width:", "){font-size:14px;letter-spacing:1px;line-height:20px;margin-bottom:10px;left:0;margin-top:5px;}}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"), theme_get_default()("colors.font1"), theme_get_default()("letterSpacing.span"), theme_get_default()("breakpoints.tablet"), theme_get_default()("letterSpacing.h1"), theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.smallDesk"), theme_get_default()("breakpoints.tablet"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Careear/Vacancies/components/VacancyCard/index.tsx






const VacancyCard = ({
  technology,
  specialty,
  url,
  isHot
}) => {
  const isHotCondition = isHot && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: "\uD83D\uDD25 "
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(VacancyCardWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextWrap, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: technology
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: [isHotCondition, specialty]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      width: 180,
      height: 67,
      link: url,
      label: "view job"
    })]
  });
};

/* harmony default export */ const components_VacancyCard = (VacancyCard);
;// CONCATENATED MODULE: ./components/Careear/Vacancies/style.ts


const Block = external_styled_components_default().div.withConfig({
  displayName: "style__Block",
  componentId: "sc-1e3frxg-0"
})([""]);
const VacanciesWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__VacanciesWrapper",
  componentId: "sc-1e3frxg-1"
})(["width:100%;display:flex;justify-content:center;padding-bottom:120px;@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){padding-bottom:0;}@media only screen and (max-width:", "){padding:0 15px;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrapper",
  componentId: "sc-1e3frxg-2"
})(["width:1006px;@media only screen and (max-width:", "){width:100%;padding-top:50px;padding-bottom:0;}@media only screen and (max-width:", "){padding-top:20px;}h1{font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:", ";margin-bottom:65.5px;@media only screen and (max-width:", "){margin-top:20px;margin-bottom:20px;}@media only screen and (max-width:", "){font-size:24px;line-height:35px;}}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.mobile"), theme_get_default()("letterSpacing.h1"), theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.mobile"));
const ListWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ListWrap",
  componentId: "sc-1e3frxg-3"
})(["display:flex;justify-content:space-between;@media only screen and (max-width:", "){height:auto;}@media only screen and (max-width:", "){flex-direction:column;margin-bottom:15px;}"], theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.tablet"));
const PositionFilter = external_styled_components_default().div.withConfig({
  displayName: "style__PositionFilter",
  componentId: "sc-1e3frxg-4"
})(["z-index:1;position:sticky;top:150px;align-self:flex-start;h1{text-transform:capitalize;margin-bottom:56px;letter-spacing:0.05em;@media only screen and (max-width:", "){margin-bottom:30px;}@media only screen and (max-width:", "){font-size:var(--fs-24);line-height:35px;}@media only screen and (max-width:", "){margin-bottom:10px;}}@media only screen and (max-width:", "){width:100%;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.mobile"), theme_get_default()("breakpoints.tablet"));
const Filter = external_styled_components_default().div.withConfig({
  displayName: "style__Filter",
  componentId: "sc-1e3frxg-5"
})(["width:300px;display:flex;flex-flow:column;gap:21px;@media only screen and (max-width:", "){width:100%;display:flex;}.selector-wrapper{@media only screen and (max-width:", "){width:calc((100% - 20px) / 2);}@media only screen and (max-width:", "){width:100%;}}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.sTablet"));
const FilterBlock = external_styled_components_default().div.withConfig({
  displayName: "style__FilterBlock",
  componentId: "sc-1e3frxg-6"
})(["display:flex;flex-direction:column;gap:21px;@media only screen and (max-width:", "){display:flex;justify-content:space-between;}@media only screen and (max-width:", "){display:flex;flex-direction:column;}"], theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.sTablet"));
const List = external_styled_components_default().div.withConfig({
  displayName: "style__List",
  componentId: "sc-1e3frxg-7"
})(["margin-top:122px;width:598px;padding-right:39px;@media only screen and (max-width:", "){padding-right:0;padding-left:20px;}@media only screen and (max-width:", "){padding-left:0;}@media only screen and (max-width:", "){width:100%;margin-top:50px;}@media only screen and (max-width:", "){padding-top:10px;margin-top:20px;}"], theme_get_default()("breakpoints.mDesk"), theme_get_default()("breakpoints.smallDesk"), theme_get_default()("breakpoints.tablet"), theme_get_default()("breakpoints.mobile"));
const QuickApplyWrap = external_styled_components_default().div.withConfig({
  displayName: "style__QuickApplyWrap",
  componentId: "sc-1e3frxg-8"
})(["width:100%;margin-top:29px;@media only screen and (max-width:", "){margin-bottom:40px;}@media only screen and (max-width:", "){margin-bottom:20px;margin-top:0;}h2{font-style:normal;font-weight:800;font-size:var(--fs-21);line-height:31px;letter-spacing:", ";margin-bottom:6px;@media only screen and (max-width:", "){font-size:var(--fs-18);line-height:27px;}}p{font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";margin-bottom:20px;@media only screen and (max-width:", "){line-height:27px;}}button{@media only screen and (max-width:", "){height:45px;}}"], theme_get_default()("breakpoints.smallDesk"), theme_get_default()("breakpoints.tablet"), theme_get_default()("letterSpacing.span"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("color.font2"), theme_get_default()("breakpoints.sTablet"), theme_get_default()("breakpoints.tablet"));
// EXTERNAL MODULE: ./public/SmallStar.svg
var SmallStar = __webpack_require__(7234);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/SVG/technologies.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgTechnologies = function SvgTechnologies(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 15,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12.985 4.848H8.96l-2.014 3.54 2.014 3.54h4.026L15 8.389l-2.014-3.54ZM2.013 8.78 0 12.32l2.013 3.54H6.04l2.014-3.54L6.04 8.78H2.013ZM6.04 7.94 8.054 4.4 6.04.86H2.013L0 4.4l2.013 3.54H6.04Z",
    fill: "#FEC506"
  })));
};

/* harmony default export */ const SVG_technologies = (SvgTechnologies);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./graphql/careers/queries.ts
var queries = __webpack_require__(7929);
// EXTERNAL MODULE: ./components/FormClassic/FormSelect/index.tsx + 1 modules
var FormSelect = __webpack_require__(6074);
// EXTERNAL MODULE: ./constants/routes.ts
var routes = __webpack_require__(1624);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx + 2 modules
var Loader = __webpack_require__(3535);
;// CONCATENATED MODULE: ./components/Careear/Vacancies/index.tsx
















const Vacancies = ({
  currentVacancies,
  specialties,
  technologies
}) => {
  var _data$vacancies;

  const {
    0: specialty,
    1: setSpeciality
  } = (0,external_react_.useState)(undefined);
  const {
    0: technology,
    1: setTechnology
  } = (0,external_react_.useState)(undefined);
  const [getVacanciesList, {
    data,
    loading
  }] = (0,client_.useLazyQuery)(queries/* GET_VACANCIES_LIST */.wA);
  const vacancies = data === null || data === void 0 ? void 0 : (_data$vacancies = data.vacancies) === null || _data$vacancies === void 0 ? void 0 : _data$vacancies.data;
  (0,external_react_.useEffect)(() => {
    getVacanciesList({
      variables: {
        specialty,
        technology
      }
    });
  }, []);
  const {
    intro,
    header,
    text,
    buttonText
  } = currentVacancies;
  const vacanciesCards = vacancies && vacancies.map(vacancy => {
    var _vacancy$attributes, _vacancy$attributes2, _vacancy$attributes3, _vacancy$attributes3$, _vacancy$attributes3$2, _vacancy$attributes4, _vacancy$attributes4$, _vacancy$attributes4$2;

    const id = vacancy.id;
    const url = routes/* ROUTES.COMPANY.DEFAULT */.Z.COMPANY.DEFAULT + `${(_vacancy$attributes = vacancy.attributes) === null || _vacancy$attributes === void 0 ? void 0 : _vacancy$attributes.url}/${id}`;
    const isHot = ((_vacancy$attributes2 = vacancy.attributes) === null || _vacancy$attributes2 === void 0 ? void 0 : _vacancy$attributes2.isHot) || false;
    const technology = (_vacancy$attributes3 = vacancy.attributes) === null || _vacancy$attributes3 === void 0 ? void 0 : (_vacancy$attributes3$ = _vacancy$attributes3.filter_technologies) === null || _vacancy$attributes3$ === void 0 ? void 0 : (_vacancy$attributes3$2 = _vacancy$attributes3$.data[0].attributes) === null || _vacancy$attributes3$2 === void 0 ? void 0 : _vacancy$attributes3$2.name;
    const specialty = (_vacancy$attributes4 = vacancy.attributes) === null || _vacancy$attributes4 === void 0 ? void 0 : (_vacancy$attributes4$ = _vacancy$attributes4.filter_specialities) === null || _vacancy$attributes4$ === void 0 ? void 0 : (_vacancy$attributes4$2 = _vacancy$attributes4$.data[0].attributes) === null || _vacancy$attributes4$2 === void 0 ? void 0 : _vacancy$attributes4$2.name;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: url && specialty && technology && /*#__PURE__*/jsx_runtime_.jsx(components_VacancyCard, {
        technology: technology,
        specialty: specialty,
        url: url,
        isHot: isHot
      }, id)
    });
  });
  const specialtiesOptions = specialties.data.map(specialty => {
    var _specialty$attributes;

    const name = ((_specialty$attributes = specialty.attributes) === null || _specialty$attributes === void 0 ? void 0 : _specialty$attributes.name) || "";
    return name;
  });
  const technologiesOptions = technologies.data.map(technology => {
    var _technology$attribute;

    const name = ((_technology$attribute = technology.attributes) === null || _technology$attribute === void 0 ? void 0 : _technology$attribute.name) || "";
    return name;
  });

  const vacanciesCondition = () => {
    if (vacancies && vacancies.length <= 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "No vacancies founded"
      });
    } else if (vacancies && !loading) {
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: vacanciesCards
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {});
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(VacanciesWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ContentWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListWrap, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(PositionFilter, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: intro
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Filter, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterBlock, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(FormSelect/* default */.Z, {
                fields: specialtiesOptions,
                formTheme: false,
                setSelectedPurpose: setSpeciality,
                placeHolder: "speciality",
                Icon: SmallStar/* default */.Z
              }), /*#__PURE__*/jsx_runtime_.jsx(FormSelect/* default */.Z, {
                fields: technologiesOptions,
                formTheme: false,
                setSelectedPurpose: setTechnology,
                placeHolder: "technology",
                Icon: SVG_technologies
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuickApplyWrap, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: header
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: text
              }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                textColor: theme/* theme.colors.white */.r.colors.white,
                backgroundColor: theme/* theme.colors.black */.r.colors.black,
                width: 180,
                height: 67,
                label: buttonText,
                arrow: theme/* theme.colors.white */.r.colors.white,
                onClick: () => getVacanciesList({
                  variables: {
                    specialty,
                    technology
                  }
                })
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(List, {
          children: vacanciesCondition()
        })]
      })
    })
  });
};

/* harmony default export */ const Careear_Vacancies = (Vacancies);

/***/ }),

/***/ 3535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Loader)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Loader/style.ts

const LoaderWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__LoaderWrapper",
  componentId: "sc-x41l1c-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
;// CONCATENATED MODULE: ./public/RhombusLoader.gif
/* harmony default export */ const RhombusLoader = ({"src":"/_next/static/media/RhombusLoader.20ac072e.gif","height":64,"width":64});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Loader/index.tsx





const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(LoaderWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
      src: RhombusLoader.src,
      width: RhombusLoader.width,
      height: RhombusLoader.height,
      alt: "loader"
    })
  });
};

/* harmony default export */ const common_Loader = (Loader);

/***/ }),

/***/ 1624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  EXPERTISE: {
    TECHNOLOGIES: "/expertise/technologies/"
  },
  CASE_STUDIES: "/case_studies/",
  SERVICES: "/services/",
  INSIGHTS: "/insights/",
  CONTACTS: "/contacts/",
  COMPANY: {
    DEFAULT: "/company/",
    ABOUT: "/about/",
    CAREER: "/career/",
    SEND_CV: "send_cv"
  }
};

/***/ }),

/***/ 7929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uz": () => (/* binding */ GET_CAREERS_PAGE),
/* harmony export */   "a1": () => (/* binding */ GET_VACANCY),
/* harmony export */   "wA": () => (/* binding */ GET_VACANCIES_LIST)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CAREERS_PAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetCareersPage {
    careersPage(publicationState: LIVE) {
      data {
        attributes {
          banner {
            title
            description
            button {
              url
              label
            }
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          process {
            intro
            items {
              id
              title
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              description
            }
          }
          currentVacancies {
            intro
            filterText1
            filterText2
            header
            text
            buttonText
          }

          ourBenefits {
            intro
            items {
              id
              title
              description
              image {
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
          }

          SEO {
            ogTitle
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            description
            ogDescription
          }
        }
      }
    }

    filterSpecialities {
      data {
        id
        attributes {
          name
        }
      }
    }
    filterTechnologies {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
const GET_VACANCY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetVacancy($id: ID) {
    vacancy(id: $id) {
      data {
        attributes {
          description
          currentVacancies {
            intro
            filterText1
            filterText2
            header
            text
            buttonText
          }
          filter_technologies {
            data {
              attributes {
                name
              }
            }
          }
          SEO {
            ogTitle
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            description
            ogDescription
          }
        }
      }
    }

    filterSpecialities {
      data {
        id
        attributes {
          name
        }
      }
    }
    filterTechnologies {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
const GET_VACANCIES_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetVacanciesList($specialty: String, $technology: String) {
    vacancies(
      filters: {
        filter_specialities: { name: { eq: $specialty } }
        filter_technologies: { name: { eq: $technology } }
      }
    ) {
      data {
        id
        attributes {
          url
          isHot
          filter_technologies {
            data {
              id
              attributes {
                name
              }
            }
          }
          filter_specialities {
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
`;

/***/ })

};
;