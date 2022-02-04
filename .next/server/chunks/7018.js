"use strict";
exports.id = 7018;
exports.ids = [7018];
exports.modules = {

/***/ 6676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_RadioButtons)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/RadioButtons/RadioButtons.style.tsx


const ButtonsBlock = external_styled_components_default().div.withConfig({
  displayName: "RadioButtonsstyle__ButtonsBlock",
  componentId: "sc-1u255ft-0"
})(["display:flex;flex-direction:", ";;column-gap:", ";row-gap:", ";flex-wrap:wrap;transition:all 0.3s ease-in-out;@media only screen and (max-width:", "){gap:15px;", "}@media only screen and (max-width:", "){gap:15px;", "}"], ({
  flexDirection
}) => flexDirection, ({
  columnGap
}) => columnGap, ({
  rowGap
}) => rowGap, theme_get_default()('breakpoints.mobile'), ({
  flexDirection
}) => flexDirection === 'row' && (0,external_styled_components_.css)(["flex-wrap:nowrap;overflow-x:scroll;height:59px;align-items:center;"]), theme_get_default()('breakpoints.tablet'), ({
  flexDirection
}) => flexDirection === 'row' && (0,external_styled_components_.css)(["flex-wrap:nowrap;overflow-x:scroll;height:70px;align-items:center;"]));
const RadioButton = external_styled_components_default().div.withConfig({
  displayName: "RadioButtonsstyle__RadioButton",
  componentId: "sc-1u255ft-1"
})(["position:relative;user-select:none;input{width:100px;height:100px;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;display:none;&:checked + label{background:", ";border:", ";color:", ";}}label{position:relative;z-index:1;padding:", ";width:500px;white-space:nowrap;font-style:normal;font-weight:", ";font-size:var(--fs-16);line-height:24px;letter-spacing:0.05em;cursor:", ";color:", ";background:", ";border:", ";&:after{position:absolute;z-index:-1;top:0;left:0;width:0;height:100%;content:'';background-color:", ";transition:width ", ";}&:hover:after{width:100%;}}@media only screen and (max-width:", "){:last-of-type{padding-bottom:0;}}"], ({
  bgColor
}) => bgColor ? bgColor : 'none', ({
  border
}) => border, ({
  textColor
}) => textColor, ({
  padding
}) => padding, ({
  fontWeight
}) => fontWeight, ({
  cursor
}) => cursor, ({
  textColor
}) => textColor, ({
  bgColor
}) => bgColor ? 'none' : bgColor, ({
  border
}) => border, theme_get_default()("colors.yellow"), theme_get_default()("transition.button"), theme_get_default()('breakpoints.mobile'));
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/RadioButtons/index.tsx







const RadioButtons = ({
  labels,
  currentIndex,
  onChange,
  preventChange,
  bgColor = theme/* theme.colors.white */.r.colors.white,
  border = theme/* theme.colors.yellow */.r.colors.yellow,
  textColor = theme/* theme.colors.black */.r.colors.black,
  fontWeight = "normal",
  padding,
  flexDirection = "row",
  columnGap = "18px",
  rowGap = "0",
  isHover = true,
  cursor = "pointer",
  prefixForId
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ButtonsBlock, {
    flexDirection: flexDirection,
    columnGap: columnGap,
    rowGap: rowGap,
    children: labels.map(({
      id,
      attributes
    }, index) => {
      const idWithPrefix = `${prefixForId}${id}`;
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: (attributes === null || attributes === void 0 ? void 0 : attributes.name) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(RadioButton, {
          bgColor: bgColor,
          border: border,
          textColor: textColor,
          fontWeight: fontWeight,
          padding: padding,
          isHover: isHover,
          cursor: cursor,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "radio",
            value: attributes.name,
            id: idWithPrefix,
            onChange: event => {
              console.log(111, index);

              if (preventChange) {
                event.preventDefault();
                return;
              }

              console.log(currentIndex);

              if (onChange) {
                onChange(index);
              }
            },
            checked: index === currentIndex
          }), /*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: idWithPrefix,
            children: attributes === null || attributes === void 0 ? void 0 : attributes.name
          })]
        }, id)
      });
    })
  });
};

/* harmony default export */ const components_RadioButtons = (RadioButtons);

/***/ }),

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_VerticalFullPageSlider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./constants/global.ts
const MENU_HEIGHT = 104;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/NumberElement/style.ts


const Div = external_styled_components_default().div.withConfig({
  displayName: "style__Div",
  componentId: "sc-136po4q-0"
})(["width:23px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;@media only screen and (max-width:", "){display:none;}"], theme_get_default()('breakpoints.tabletPro'));
const TopText = external_styled_components_default().p.withConfig({
  displayName: "style__TopText",
  componentId: "sc-136po4q-1"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:20px;line-height:30px;letter-spacing:0.05em;text-transform:uppercase;"]);
const BottomText = external_styled_components_default().p.withConfig({
  displayName: "style__BottomText",
  componentId: "sc-136po4q-2"
})(["font-family:Poppins;font-style:normal;font-weight:800;font-size:14px;line-height:21px;letter-spacing:0.05em;text-transform:uppercase;"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "style__Line",
  componentId: "sc-136po4q-3"
})(["height:50px;width:1px;background-color:", ";"], theme_get_default()("colors.yellow2"));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/NumberElement/index.tsx




const NumberElement = ({
  currentNumber,
  numberOfSlides
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Div, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(TopText, {
    children: `0${currentNumber}`
  }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(BottomText, {
    children: `0${numberOfSlides}`
  })]
});

/* harmony default export */ const VerticalFullPageSlider_NumberElement = (NumberElement);
// EXTERNAL MODULE: ./components/RadioButtons/index.tsx + 1 modules
var RadioButtons = __webpack_require__(6676);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/TextElement/style.ts

;
const MenuBlock = external_styled_components_default().div.withConfig({
  displayName: "style__MenuBlock",
  componentId: "sc-1xn6it1-0"
})(["min-width:307px;position:relative;top:9px;left:-30px;display:flex;flex-direction:column;row-gap:13px;"]);
const MenuLabel = external_styled_components_default().button.withConfig({
  displayName: "style__MenuLabel",
  componentId: "sc-1xn6it1-1"
})(["font-style:normal;font-weight:bold;font-size:16px;line-height:24px;text-align:left;letter-spacing:0.05em;border:none;background:", ";transition:all 0.3s ease-in-out;"], ({
  bgColor
}) => bgColor || 'none');
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/TextElement/index.tsx





;

const TextElement = ({
  labels,
  currentSlide,
  bgColor,
  onChange
}) => /*#__PURE__*/jsx_runtime_.jsx(MenuBlock, {
  children: /*#__PURE__*/jsx_runtime_.jsx(MenuLabel, {
    bgColor: bgColor,
    children: /*#__PURE__*/jsx_runtime_.jsx(RadioButtons/* default */.Z, {
      padding: "8px 30px",
      labels: labels,
      currentIndex: currentSlide,
      bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
      border: theme/* theme.colors.yellow */.r.colors.yellow,
      textColor: theme/* theme.colors.white */.r.colors.white,
      rowGap: "28.5px",
      flexDirection: "column",
      isHover: false,
      preventChange: false,
      fontWeight: '700',
      cursor: 'default',
      onChange: onChange,
      prefixForId: 'services'
    })
  })
});

/* harmony default export */ const VerticalFullPageSlider_TextElement = (TextElement);
// EXTERNAL MODULE: ./components/common/VerticalFullPageSlider/types.ts
var types = __webpack_require__(8740);
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/style.ts


;
;
const Slide = external_styled_components_default().div.withConfig({
  displayName: "style__Slide",
  componentId: "sc-1j428t9-0"
})(["display:flex;position:relative;height:calc(100vh - 105px);@media only screen and (max-width:", "){height:max-content;}"], theme_get_default()('breakpoints.tabletPro'));
const SliderContent = external_styled_components_default().div.withConfig({
  displayName: "style__SliderContent",
  componentId: "sc-1j428t9-1"
})(["max-width:", ";margin:0 auto;position:relative;@media only screen and (max-width:", "){max-width:100%;}@media only screen and (max-width:", "){padding:0 25px;}@media only screen and (max-width:", "){max-width:100%;padding:0 15px;}.scroll-item-container{@media only screen and (max-width:", "){left:15px;}}"], ({
  maxWidth
}) => maxWidth ? `${maxWidth}px` : '1166px', theme_get_default()('breakpoints.mediumDesk'), theme_get_default()('breakpoints.tabletPro'), theme_get_default()('breakpoints.mobile'), theme_get_default()('breakpoints.mediumDesk'));
const SliderContainer = external_styled_components_default().div.withConfig({
  displayName: "style__SliderContainer",
  componentId: "sc-1j428t9-2"
})(["overflow:hidden;background:", ";"], ({
  bgColor
}) => bgColor || `${theme_get_default()("colors.white")}`);
// EXTERNAL MODULE: ./services/hooks.tsx
var hooks = __webpack_require__(9639);
;// CONCATENATED MODULE: ./components/common/VerticalFullPageSlider/index.tsx











function VerticalFullPageSlider({
  slides,
  scrollListType = types/* ScrollListTypes.NUMBER */.p.NUMBER,
  renderSlide,
  bgColor,
  stickyTopPosition,
  maxWidth
}) {
  const {
    0: scrollItemHeight,
    1: setScrollItemHeight
  } = (0,external_react_.useState)(0);
  const {
    isMobile,
    isTablet,
    isSmallTablet
  } = (0,hooks/* useIsMobile */.d)(); // const [position, setPosition] = useState<string | number>('20vh');

  const position = stickyTopPosition || `calc((100vh - ${MENU_HEIGHT}px) / 2 - ${scrollItemHeight / 2}px)`; // useEffect(() => {
  //   if (isMobile !== undefined && isTablet !== undefined) {
  //     const position =
  //       stickyTopPosition ||
  //         `calc((${isMobile || isTablet || isSmallTablet ? '50vh' : '100vh'} - ${isMobile || isTablet || isSmallTablet ? '650px' : MENU_HEIGHT}px) / 2 - ${scrollItemHeight / 2}px)`;
  //     console.log(isMobile);
  //     setPosition(position);
  //   }
  // }, [isMobile, isTablet, isSmallTablet]);
  //   `calc((${isMobile ? "50vh" : "100vh"} - ${
  //     isMobile ? "650px" : MENU_HEIGHT
  //   }px) / 2 - ${scrollItemHeight / 2}px)`;
  // console.log(isMobile);
  // setPosition(position);
  // }
  // }, [isMobile]);

  const {
    0: lastScrollTop,
    1: setLastScrollTop
  } = (0,external_react_.useState)(0);
  const {
    0: currentSection,
    1: setCurrentSection
  } = (0,external_react_.useState)(0);
  const {
    0: scrollBlockPosition,
    1: setScrollBlockPosition
  } = (0,external_react_.useState)("absolute");
  const handleScroll = (0,external_react_.useCallback)(event => {
    var _document$getElementB, _allSlides$currentSec, _allSlides, _allSlides2;

    const allSlides = document.querySelectorAll(".slide");
    setScrollItemHeight(((_document$getElementB = document.getElementById("scroll-item")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getBoundingClientRect().height) || 0);
    const offset = window.pageYOffset;
    const direction = lastScrollTop < offset ? "down" : "up";
    const scrollTopPosition = (_allSlides$currentSec = allSlides[currentSection]) === null || _allSlides$currentSec === void 0 ? void 0 : _allSlides$currentSec.getBoundingClientRect().top;

    if (currentSection === 0 && scrollTopPosition > MENU_HEIGHT || currentSection === allSlides.length - 1 && scrollTopPosition < MENU_HEIGHT) {
      setScrollBlockPosition("absolute");
    } else {
      setScrollBlockPosition("fixed");
    }

    if (direction === "down" && ((_allSlides = allSlides[currentSection + 1]) === null || _allSlides === void 0 ? void 0 : _allSlides.getBoundingClientRect().top) < 250) {
      setCurrentSection(Math.min(currentSection + 1, allSlides.length - 1));
    }

    if (direction === "up" && ((_allSlides2 = allSlides[currentSection - 1]) === null || _allSlides2 === void 0 ? void 0 : _allSlides2.getBoundingClientRect().top) > -250) {
      setCurrentSection(Math.max(currentSection - 1, 0));
    }

    setLastScrollTop(offset);
  }, [currentSection, lastScrollTop]);
  (0,external_react_.useEffect)(() => {
    window.onscroll = handleScroll;
  }, [handleScroll]);

  const renderScrollItem = () => {
    switch (scrollListType) {
      case types/* ScrollListTypes.NUMBER */.p.NUMBER:
        return /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider_NumberElement, {
          currentNumber: currentSection + 1,
          numberOfSlides: slides.length
        });

      case types/* ScrollListTypes.STRING */.p.STRING:
        return /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider_TextElement, {
          currentSlide: currentSection,
          labels: slides,
          bgColor: theme/* theme.colors.black */.r.colors.black
        });

      default:
        return /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider_NumberElement, {
          currentNumber: currentSection + 1,
          numberOfSlides: slides.length
        });
    }
  };

  const getTopPosition = () => {
    if (stickyTopPosition && scrollBlockPosition === "fixed") return `${stickyTopPosition + MENU_HEIGHT}px`;
    if (scrollBlockPosition === "fixed" || currentSection === slides.length - 1) if (scrollBlockPosition === "fixed" || currentSection === slides.length - 1) // return `calc((${isMobile || isTablet || isSmallTablet ? '50vh' : '100vh'} - ${isMobile || isTablet || isSmallTablet ? '650px' : MENU_HEIGHT}px) / 2 - ${scrollItemHeight / 2}px)`;
      return "auto"; // return `calc((${isMobile ? "50vh" : "100vh"} - ${
    //   isMobile ? "650px" : MENU_HEIGHT
    // }px) / 2 - ${scrollItemHeight / 2}px)`;

    return position;
  };

  const getBottomPosition = () => {
    if (scrollBlockPosition === "fixed") return position;

    if (currentSection === slides.length - 1) {
      if (stickyTopPosition) return `calc(${isMobile || isTablet || isSmallTablet ? "50vh" : "100vh"} - ${// return `calc(${isMobile ? "50vh" : "100vh"} - ${
      stickyTopPosition + MENU_HEIGHT + scrollItemHeight}px)`;
      return position;
    }

    return "auto";
  };

  return /*#__PURE__*/jsx_runtime_.jsx(SliderContainer, {
    bgColor: bgColor,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SliderContent, {
      maxWidth: maxWidth,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "scroll-item-container",
        style: {
          position: scrollBlockPosition === "absolute" ? "absolute" : "fixed",
          bottom: getBottomPosition(),
          top: getTopPosition()
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "scroll-item",
          children: renderScrollItem()
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: slides.map((slide, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "slide",
          children: /*#__PURE__*/jsx_runtime_.jsx(Slide, {
            children: renderSlide(slide, index)
          })
        }, `slide${index}`))
      })]
    })
  });
}

/* harmony default export */ const common_VerticalFullPageSlider = (VerticalFullPageSlider);

/***/ }),

/***/ 8740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ScrollListTypes)
/* harmony export */ });
let ScrollListTypes;

(function (ScrollListTypes) {
  ScrollListTypes["NUMBER"] = "number";
  ScrollListTypes["STRING"] = "string";
})(ScrollListTypes || (ScrollListTypes = {}));

;

/***/ })

};
;