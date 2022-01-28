"use strict";
exports.id = 8417;
exports.ids = [8417];
exports.modules = {

/***/ 8417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Careear_Vacancies)
});

// EXTERNAL MODULE: ./components/Selector/index.tsx + 1 modules
var Selector = __webpack_require__(4268);
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
})(["width:100%;height:99px;display:flex;justify-content:space-between;align-items:center;margin-bottom:91px;"]);
const TextWrap = external_styled_components_default().div.withConfig({
  displayName: "style__TextWrap",
  componentId: "sc-igsfem-1"
})(["width:300px;span{font-weight:800;font-size:var(--fs-14);line-height:21px;text-transform:uppercase;color:", ";margin-bottom:15px;position:relative;top:-10px;left:8px;letter-spacing:", ";}h3{font-weight:800;font-size:var(--fs-21);line-height:31px;text-transform:capitalize;letter-spacing:", ";position:relative;top:3px;left:8px;}"], theme_get_default()("colors.font1"), theme_get_default()("letterSpacing.span"), theme_get_default()("letterSpacing.h1"));
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


const VacanciesWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__VacanciesWrapper",
  componentId: "sc-1e3frxg-0"
})(["width:100%;height:1069px;display:flex;justify-content:center;"]);
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__ContentWrapper",
  componentId: "sc-1e3frxg-1"
})(["width:1006px;h1{font-weight:800;font-size:var(--fs-36);line-height:54px;letter-spacing:", ";margin-bottom:65.5px;}"], theme_get_default()("letterSpacing.h1"));
const ListWrap = external_styled_components_default().div.withConfig({
  displayName: "style__ListWrap",
  componentId: "sc-1e3frxg-2"
})(["display:flex;justify-content:space-between;height:827px;"]);
const Filter = external_styled_components_default().div.withConfig({
  displayName: "style__Filter",
  componentId: "sc-1e3frxg-3"
})(["width:300px;display:flex;flex-flow:column;gap:31px;"]);
const List = external_styled_components_default().div.withConfig({
  displayName: "style__List",
  componentId: "sc-1e3frxg-4"
})(["width:598px;padding-right:39px;"]);
const QuickApplyWrap = external_styled_components_default().div.withConfig({
  displayName: "style__QuickApplyWrap",
  componentId: "sc-1e3frxg-5"
})(["width:100%;margin-top:20px;h2{font-style:normal;font-weight:800;font-size:var(--fs-21);line-height:31px;letter-spacing:", ";margin-bottom:6px;}p{font-size:var(--fs-14);line-height:30px;letter-spacing:", ";color:", ";margin-bottom:20px;}"], theme_get_default()("letterSpacing.span"), theme_get_default()("letterSpacing.span"), theme_get_default()("color.font2"));
// EXTERNAL MODULE: ./public/SmallStar.svg
var SmallStar = __webpack_require__(7234);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./graphql/careers/queries.ts
var queries = __webpack_require__(7929);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Careear/Vacancies/index.tsx













const Vacancies = ({
  currentVacancies,
  specialties,
  technologies
}) => {
  var _data$vacancies;

  const {
    0: specialtyId,
    1: setSpecialtyId
  } = (0,external_react_.useState)(undefined);
  const {
    0: technologyId,
    1: setTechnologyId
  } = (0,external_react_.useState)(undefined);
  const {
    0: limit,
    1: setLimit
  } = (0,external_react_.useState)(4);
  const [getVacanciesList, {
    data,
    loading
  }] = (0,client_.useLazyQuery)(queries/* GET_VACANCIES_LIST */.wA, {
    variables: {
      specialtyId,
      technologyId,
      limit
    },
    fetchPolicy: "network-only"
  });
  const vacancies = data === null || data === void 0 ? void 0 : (_data$vacancies = data.vacancies) === null || _data$vacancies === void 0 ? void 0 : _data$vacancies.data;
  (0,external_react_.useEffect)(() => {
    getVacanciesList();
  }, [limit]);
  const {
    intro,
    filterText1,
    filterText2,
    header,
    text,
    buttonText
  } = currentVacancies;
  const vacanciesCards = vacancies ? vacancies.map(vacancy => {
    var _vacancy$attributes, _vacancy$attributes2, _vacancy$attributes3, _vacancy$attributes3$, _vacancy$attributes3$2, _vacancy$attributes4, _vacancy$attributes4$, _vacancy$attributes4$2;

    const id = vacancy.id;
    const url = (_vacancy$attributes = vacancy.attributes) === null || _vacancy$attributes === void 0 ? void 0 : _vacancy$attributes.url;
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
  }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: "Not found"
  });
  const specialtiesOptions = specialties.data.map(specialty => {
    var _specialty$attributes;

    const id = specialty.id || "";
    const name = ((_specialty$attributes = specialty.attributes) === null || _specialty$attributes === void 0 ? void 0 : _specialty$attributes.name) || "";
    return {
      value: id,
      name
    };
  });
  const technologiesOptions = technologies.data.map(technology => {
    var _technology$attribute;

    const id = technology.id || "";
    const name = ((_technology$attribute = technology.attributes) === null || _technology$attribute === void 0 ? void 0 : _technology$attribute.name) || "";
    return {
      value: id,
      name
    };
  });
  return /*#__PURE__*/jsx_runtime_.jsx(VacanciesWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: intro
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListWrap, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Filter, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Selector/* default */.Z, {
            value: specialtyId,
            setValue: setSpecialtyId,
            placeholder: filterText1,
            options: specialtiesOptions,
            icon: SmallStar/* default */.Z
          }), /*#__PURE__*/jsx_runtime_.jsx(Selector/* default */.Z, {
            value: specialtyId,
            setValue: setTechnologyId,
            placeholder: filterText2,
            options: technologiesOptions,
            icon: SmallStar/* default */.Z
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
              onClick: () => getVacanciesList()
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(List, {
          children: vacanciesCards
        })]
      })]
    })
  });
};

/* harmony default export */ const Careear_Vacancies = (Vacancies);

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
  query GetVacancy($url: String) {
    vacancies(filters: { url: { eq: $url } }) {
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
  query GetVacanciesList($specialtyId: ID, $technologyId: ID, $limit: Int) {
    vacancies(
      pagination: { limit: $limit }
      filters: {
        filter_specialities: { id: { eq: $specialtyId } }
        filter_technologies: { id: { eq: $technologyId } }
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