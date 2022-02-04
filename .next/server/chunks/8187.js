"use strict";
exports.id = 8187;
exports.ids = [8187];
exports.modules = {

/***/ 4716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FAQ)
});

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/ServicePage/FAQ/FAQ.style.tsx



const Div = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__Div",
  componentId: "sc-xvztx8-0"
})([""]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__Wrapper",
  componentId: "sc-xvztx8-1"
})(["max-width:1006px;margin:0 auto;@media only screen and (max-width:", "){width:100%;padding:0 25px;}@media only screen and (max-width:", "){padding:0;}"], theme_get_default()("breakpoints.tabletPro"), theme_get_default()("breakpoints.mobile"));
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__ContentWrapper",
  componentId: "sc-xvztx8-2"
})(["padding:15.3vh 0 15.8vh;display:flex;justify-content:space-between;@media only screen and (max-width:", "){padding:", ";flex-direction:", "}@media only screen and (max-width:", "){padding:", ";flex-direction:column;row-gap:25px;}"], theme_get_default()("breakpoints.tabletPro"), ({
  isFullPage
}) => isFullPage ? '30px 0' : '70px 0 60px', ({
  isFullPage
}) => isFullPage ? 'column' : 'row', theme_get_default()('breakpoints.mobile'), ({
  isFullPage
}) => isFullPage ? '30px 15px' : '53px 15px');
const Text = external_styled_components_default().p.withConfig({
  displayName: "FAQstyle__Text",
  componentId: "sc-xvztx8-3"
})(["font-style:normal;font-weight:normal;font-size:var(--fs-14);line-height:30px;letter-spacing:0.1em;color:", ";transition:all 0.3s linear;@media only screen and (max-width:", "){line-height:27px;}"], ({
  isOpen
}) => isOpen ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black, theme_get_default()("breakpoints.sTablet"));
const Title = external_styled_components_default().p.withConfig({
  displayName: "FAQstyle__Title",
  componentId: "sc-xvztx8-4"
})(["max-width:580px;width:42.46vw;font-style:normal;font-weight:800;font-size:var(--fs-18);line-height:27px;letter-spacing:0.05em;cursor:pointer;@media only screen and (max-width:", "){width:", ";max-width:", ";}@media only screen and (max-width:", "){width:80vw;font-size:var(--fs-16);}"], theme_get_default()("breakpoints.tablet"), ({
  isFullPage
}) => isFullPage ? '100%' : '60vw', ({
  isFullPage
}) => isFullPage ? '100%' : '580px', theme_get_default()("breakpoints.mobile"));
const PlusIconVisible = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__PlusIconVisible",
  componentId: "sc-xvztx8-5"
})(["svg{cursor:pointer;path{fill:", ";}}"], ({
  color
}) => color ? color : '#000');
const MinusIconVisible = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__MinusIconVisible",
  componentId: "sc-xvztx8-6"
})(["margin-top:-10px;svg{cursor:pointer;path{fill:", ";}}"], ({
  color
}) => color ? '#000' : 'color');
const AccordionWrapper = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__AccordionWrapper",
  componentId: "sc-xvztx8-7"
})(["display:flex;flex-direction:column;row-gap:21px;padding:", ";max-width:745px;width:", ";color:", ";background-color:", ";border-bottom:", ";@media only screen and (max-width:", "){width:", ";max-width:", ";padding:", ";color:", ";}@media only screen and (max-width:", "){width:", ";padding:", ";}@media only screen and (max-width:", "){width:100%;padding:", ";row-gap:15px;color:", ";}"], ({
  isOpen
}) => isOpen ? '50px' : '30px 50px', ({
  isFullPage
}) => isFullPage ? '100%' : '54.75vw', ({
  isOpen
}) => isOpen ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black, ({
  isOpen
}) => isOpen ? theme/* theme.colors.black */.r.colors.black : 'none', ({
  lastBlock
}) => lastBlock ? 'none' : '1px solid #EFEFEF', theme_get_default()("breakpoints.tablet"), ({
  isFullPage
}) => isFullPage ? '100%' : '70vw', ({
  isFullPage
}) => isFullPage ? '100%' : '745px', ({
  isFullPage
}) => isFullPage ? '30px 0' : '30px', ({
  textColor,
  isOpen,
  isFullPage
}) => textColor ? textColor : isFullPage ? theme/* theme.colors.white */.r.colors.white : isOpen ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black, theme_get_default()("breakpoints.sTablet"), ({
  isFullPage
}) => isFullPage ? '100%' : '65', ({
  isFullPage
}) => isFullPage ? '25px 0' : '25px', theme_get_default()('breakpoints.mobile'), ({
  isFullPage
}) => isFullPage ? '20px 0' : '20px', ({
  textColor,
  isOpen
}) => textColor ? textColor : isOpen ? theme/* theme.colors.white */.r.colors.white : theme/* theme.colors.black */.r.colors.black);
const Accordion = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__Accordion",
  componentId: "sc-xvztx8-8"
})(["display:flex;justify-content:space-between;align-items:center;column-gap:30px;"]);
const TextBlock = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__TextBlock",
  componentId: "sc-xvztx8-9"
})(["height:max-content;display:flex;flex-direction:column;"]);
const FAQWrapper = external_styled_components_default().div.withConfig({
  displayName: "FAQstyle__FAQWrapper",
  componentId: "sc-xvztx8-10"
})(["display:flex;flex-direction:column;&:last-child{border:none;}"]);
const H2 = external_styled_components_default().h2.withConfig({
  displayName: "FAQstyle__H2",
  componentId: "sc-xvztx8-11"
})(["font-style:normal;font-weight:800;font-size:var(--fs-36);line-height:54px;@media only screen and (max-width:", "){line-height:40px;}letter-spacing:0.05em;text-transform:uppercase;"], theme_get_default()('breakpoints.mobile'));
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/plusIcon.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPlusIcon = function SvgPlusIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 13,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 5.454H8.046V.5H4.954v4.954H0v3.092h4.954V13.5h3.092V8.546H13V5.454Z",
    fill: "#000"
  })));
};

/* harmony default export */ const plusIcon = (SvgPlusIcon);
;// CONCATENATED MODULE: ./public/icons/minusIcon.svg
var minusIcon_path;

function minusIcon_extends() { minusIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return minusIcon_extends.apply(this, arguments); }



var SvgMinusIcon = function SvgMinusIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", minusIcon_extends({
    width: 13,
    height: 5,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), minusIcon_path || (minusIcon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M13 .954H0v3.092h13V.954Z",
    fill: "#fff"
  })));
};

/* harmony default export */ const minusIcon = (SvgMinusIcon);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ServicePage/FAQ/index.tsx








const getIcon = (blockIndex, index, textColor) => {
  return blockIndex !== index ? /*#__PURE__*/jsx_runtime_.jsx(PlusIconVisible, {
    color: textColor,
    children: /*#__PURE__*/jsx_runtime_.jsx(plusIcon, {})
  }) : /*#__PURE__*/jsx_runtime_.jsx(MinusIconVisible, {
    color: textColor,
    children: /*#__PURE__*/jsx_runtime_.jsx(minusIcon, {})
  });
};

const Description = ({
  items,
  blockIndex,
  setBlockIndex,
  titles,
  content,
  textColor,
  isFullPage
}) => {
  let createDescription;

  if (items) {
    createDescription = items.map((item, index) => {
      const id = item === null || item === void 0 ? void 0 : item.id;
      const title = item === null || item === void 0 ? void 0 : item.title;
      const description = item === null || item === void 0 ? void 0 : item.description;
      const icon = getIcon(blockIndex, index, textColor);
      const openedFAQ = index === blockIndex;

      function onSetBlockIndex() {
        console.log(isFullPage);

        if (blockIndex === index) {
          return setBlockIndex(-1);
        }

        setBlockIndex(index);
      }

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionWrapper, {
        isOpen: openedFAQ,
        lastBlock: index === items.length - 1,
        textColor: textColor,
        isFullPage: isFullPage,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Accordion, {
          onClick: onSetBlockIndex,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
            isFullPage: isFullPage,
            children: title
          }), icon]
        }), index === blockIndex && /*#__PURE__*/jsx_runtime_.jsx(TextBlock, {
          onClick: onSetBlockIndex,
          children: /*#__PURE__*/jsx_runtime_.jsx(Text, {
            isOpen: openedFAQ,
            children: content ? content[index] : description
          })
        })]
      }, id);
    });
  } else {
    createDescription = titles === null || titles === void 0 ? void 0 : titles.map((title, index) => {
      const icon = getIcon(blockIndex, index, textColor);
      const openedFAQ = index === blockIndex;

      function onSetBlockIndex() {
        console.log(isFullPage);

        if (blockIndex === index) {
          return setBlockIndex(-1);
        }

        setBlockIndex(index);
      }

      console.log(isFullPage);
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionWrapper, {
        isOpen: openedFAQ,
        lastBlock: index === titles.length - 1,
        textColor: textColor,
        isFullPage: isFullPage,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Accordion, {
          onClick: onSetBlockIndex,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
            isFullPage: isFullPage,
            children: title
          }), icon]
        }), index === blockIndex && /*#__PURE__*/jsx_runtime_.jsx(TextBlock, {
          onClick: onSetBlockIndex,
          children: /*#__PURE__*/jsx_runtime_.jsx(Text, {
            isOpen: openedFAQ,
            children: content[index]
          })
        })]
      }, title);
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: createDescription
  });
};

const Faq = ({
  title,
  items,
  titles,
  content,
  textColor,
  isFullPage
}) => {
  const {
    0: blockIndex,
    1: setBlockIndex
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(Div, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
        isFullPage: isFullPage,
        children: [!isFullPage ? /*#__PURE__*/jsx_runtime_.jsx(H2, {
          children: title
        }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), /*#__PURE__*/jsx_runtime_.jsx(FAQWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Description, {
            items: items,
            blockIndex: blockIndex,
            setBlockIndex: setBlockIndex,
            titles: titles,
            content: content,
            textColor: textColor,
            isFullPage: isFullPage
          })
        })]
      })
    })
  });
};

/* harmony default export */ const FAQ = (Faq);

/***/ }),

/***/ 8365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ GET_SERVICES_PAGE),
/* harmony export */   "D": () => (/* binding */ GET_SERVICE)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_SERVICES_PAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetServicesPage {
    servicesPage {
      data {
        attributes {
          banner {
            title
            description
          }
          services {
            data {
              id
              attributes {
                url
                outcomes
                name
                estimatedTime
                descriptionForServicesPage
              }
            }
          }
          techStack {
            title
            tech_stacks {
              data {
                id
                attributes {
                  name
                  description
                  technologies {
                    data {
                      id
                      attributes {
                        Technology_name
                        url
                        icon {
                          data {
                            attributes {
                              url
                              width
                              height
                            }
                          }
                        }
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
const GET_SERVICE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetService($id: ID) {
    service(id: $id) {
      data {
        attributes {
          name
          description

          icon {
            data {
              id
              attributes {
                url
                width
                height
              }
            }
          }
          whyDoYouNeed {
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
          bestSuitedFor {
            intro
            items {
              id
              title
            }
          }
          workflow {
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
          projects {
            data {
              id
              attributes {
                url
                name
                description
                technologies {
                  data {
                    id
                    attributes {
                      Technology_name
                      url
                    }
                  }
                }
                featuredImage {
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
          faq {
            intro
            items {
              id
              title
              description
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

/***/ })

};
;