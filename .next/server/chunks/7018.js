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
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(4575);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(9099);
var theme_get_default = /*#__PURE__*/__webpack_require__.n(theme_get_);
;// CONCATENATED MODULE: ./components/RadioButtons/RadioButtons.style.tsx



const ButtonsBlock = external_styled_components_default().div.withConfig({
  displayName: "RadioButtonsstyle__ButtonsBlock",
  componentId: "sc-1u255ft-0"
})(["display:flex;flex-direction:", ";;column-gap:", ";row-gap:", ";flex-wrap:wrap;transition:all 0.3s ease-in-out;@media only screen and (max-width:", "){gap:30px;flex-direction:column;}"], ({
  flexDirection
}) => flexDirection, ({
  columnGap
}) => columnGap, ({
  rowGap
}) => rowGap, theme/* theme.breakpoints.mobile */.r.breakpoints.mobile);
const RadioButton = external_styled_components_default().div.withConfig({
  displayName: "RadioButtonsstyle__RadioButton",
  componentId: "sc-1u255ft-1"
})(["input{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;display:none;&:checked + label{background:", ";border:", ";color:", ";}}label{padding:", ";width:500px;white-space:nowrap;font-style:normal;font-weight:", ";font-size:var(--fs-16);line-height:24px;letter-spacing:0.05em;cursor:", ";color:", ";background:", ";border:", ";&:hover{box-shadow:", ";-webkit-transition:ease-in-out 0.3s;-moz-transition:ease-in-out 0.3s;}}"], ({
  bgColor
}) => bgColor ? bgColor : 'none', ({
  border
}) => border, ({
  textColor
}) => theme/* theme.colors.black */.r.colors.black, ({
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
}) => border, ({
  isHover
}) => isHover ? `inset 200px 0 0 0 #ffcf22` : `inset 200px 0 0 0 ${theme_get_default()('color.yellow')}`);
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
  fontWeight = 'normal',
  padding,
  flexDirection = 'row',
  columnGap = '18px',
  rowGap = '0',
  isHover = true,
  cursor = 'pointer'
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ButtonsBlock, {
    flexDirection: flexDirection,
    columnGap: columnGap,
    rowGap: rowGap,
    children: labels.map(({
      title,
      id
    }, index) => {
      console.log(index, currentIndex);
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(RadioButton, {
        bgColor: bgColor,
        border: border,
        textColor: textColor,
        fontWeight: fontWeight,
        padding: padding,
        isHover: isHover,
        cursor: cursor,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "radio",
          value: title,
          id: id,
          onChange: event => {
            if (preventChange) {
              event.preventDefault();
              return;
            }

            if (onChange) {
              onChange(index);
            }
          },
          checked: index === currentIndex
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          htmlFor: id,
          children: title
        })]
      }, id);
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
})(["width:23px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;"]);
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
  bgColor
}) => /*#__PURE__*/jsx_runtime_.jsx(MenuBlock, {
  children: /*#__PURE__*/jsx_runtime_.jsx(MenuLabel, {
    bgColor: bgColor,
    children: /*#__PURE__*/jsx_runtime_.jsx(RadioButtons/* default */.Z, {
      padding: '8px 30px',
      labels: labels,
      currentIndex: currentSlide,
      bgColor: theme/* theme.colors.yellow */.r.colors.yellow,
      border: theme/* theme.colors.yellow */.r.colors.yellow,
      textColor: theme/* theme.colors.white */.r.colors.white,
      rowGap: '28.5px',
      flexDirection: 'column',
      isHover: false,
      preventChange: true,
      fontWeight: '700',
      cursor: 'default'
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
})(["display:flex;position:relative;height:calc(100vh - 105px);"]);
const SliderContent = external_styled_components_default().div.withConfig({
  displayName: "style__SliderContent",
  componentId: "sc-1j428t9-1"
})(["max-width:", ";margin:0 auto;position:relative;"], ({
  maxWidth
}) => maxWidth ? `${maxWidth}px` : '1166px');
const SliderContainer = external_styled_components_default().div.withConfig({
  displayName: "style__SliderContainer",
  componentId: "sc-1j428t9-2"
})(["background:", ";"], ({
  bgColor
}) => bgColor || `${theme_get_default()("colors.white")}`);
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
  const position = stickyTopPosition || `calc((100vh - ${MENU_HEIGHT}px) / 2 - ${scrollItemHeight / 2}px)`;
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
        //@ts-ignore
        return /*#__PURE__*/jsx_runtime_.jsx(VerticalFullPageSlider_TextElement, {
          currentSlide: currentSection,
          labels: slides
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
    if (scrollBlockPosition === "fixed" || currentSection === slides.length - 1) return "auto";
    return position;
  };

  const getBottomPosition = () => {
    if (scrollBlockPosition === "fixed") return position;

    if (currentSection === slides.length - 1) {
      if (stickyTopPosition) return `calc(100vh - ${stickyTopPosition + MENU_HEIGHT + scrollItemHeight}px)`;
      return position;
    }

    return "auto";
  };

  return /*#__PURE__*/jsx_runtime_.jsx(SliderContainer, {
    bgColor: bgColor,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SliderContent, {
      maxWidth: maxWidth,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
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
        }, `slide-${index}`))
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