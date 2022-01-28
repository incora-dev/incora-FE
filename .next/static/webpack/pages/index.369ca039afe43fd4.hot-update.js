"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/mainMenu/mainMenu.tsx":
/*!******************************************!*\
  !*** ./components/mainMenu/mainMenu.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation */ \"./components/mainMenu/navigation/navigation.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/styles.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _HoverElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HoverElements */ \"./components/mainMenu/HoverElements/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BurgerMenuButton */ \"./components/BurgerMenuButton/index.tsx\");\n/* harmony import */ var _services_context_mainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/context/mainMenu */ \"./services/context/mainMenu.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/mainMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getLogo(titlesColor) {\n  var colorBlack = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.colors.black;\n  var colorWhite = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.colors.white;\n\n  if (titlesColor === colorWhite) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.IncoraLogo, {\n      src: \"/logo.svg\",\n      alt: \"Incora logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this);\n  }\n\n  if (titlesColor === colorBlack) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.IncoraLogo, {\n      src: \"/logoBlack.svg\",\n      alt: \"Incora logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this);\n  }\n}\n\n;\nfunction MainMenu(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      onHoverElement = _useState[0],\n      setOnHoverElement = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      onSelectedMenu = _useState2[0],\n      setOnSelectedMenu = _useState2[1];\n\n  var titles = props.titles,\n      backgroundColor = props.backgroundColor,\n      titlesColor = props.titlesColor,\n      children = props.children,\n      _props$positionType = props.positionType,\n      positionType = _props$positionType === void 0 ? 'sticky' : _props$positionType;\n  var logo = getLogo(titlesColor);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  var node = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_services_context_mainMenu__WEBPACK_IMPORTED_MODULE_7__.MenuContext),\n      isMenuOpen = _useContext.isMenuOpen,\n      toggleMenuMode = _useContext.toggleMenuMode;\n\n  useOnClickOutside(node, function () {\n    if (isMenuOpen) {\n      toggleMenuMode();\n    }\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Div, {\n    ref: node,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n      backgroundColor: backgroundColor,\n      positionType: positionType,\n      titlesColor: titlesColor,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Block, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: '/',\n            children: logo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 11\n          }, this), isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, this)\n          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            titles: titles,\n            titlesColor: titlesColor,\n            setOnHoverElement: setOnHoverElement,\n            onSelectedMenu: onSelectedMenu,\n            setOnSelectedMenu: setOnSelectedMenu,\n            backgroundColor: backgroundColor\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.HoverMenu, {\n          isShow: Boolean(onHoverElement),\n          titlesColor: titlesColor,\n          onMouseLeave: function onMouseLeave() {\n            setOnHoverElement(null);\n            setOnSelectedMenu(null);\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_HoverElements__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: onHoverElement,\n            titleColor: titlesColor,\n            setOnHoverElement: setOnHoverElement,\n            setOnSelectedMenu: setOnSelectedMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MainMenu, \"ixqPbHtINCW/hkTOcHtGlAw8kI0=\", false, function () {\n  return [useOnClickOutside];\n});\n\n_c = MainMenu;\n\nfunction useOnClickOutside(node, arg1) {\n  throw new Error(\"Function not implemented.\");\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbk1lbnUvbWFpbk1lbnUudHN4PzYwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1lbnUgfSBmcm9tIFwiQGludGVyZmFjZXNcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL25hdmlnYXRpb24vbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgV3JhcHBlciwgQmxvY2ssIEhvdmVyTWVudSwgRGl2LCBJbmNvcmFMb2dvLCBDb250ZW50V3JhcHBlciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb3ZlckVsZW1lbnRzIGZyb20gXCIuL0hvdmVyRWxlbWVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIYW1idXJnZXJCdXR0b24gZnJvbSBcIi4uL0J1cmdlck1lbnVCdXR0b25cIjtcbmltcG9ydCB7IFNpZGVNZW51IH0gZnJvbSBcIi4vc2lkZU1haW5NZW51XCI7XG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb250ZXh0L21haW5NZW51XCI7XG5cbmZ1bmN0aW9uIGdldExvZ28odGl0bGVzQ29sb3I6IHN0cmluZykge1xuICBjb25zdCBjb2xvckJsYWNrID0gdGhlbWUuY29sb3JzLmJsYWNrO1xuICBjb25zdCBjb2xvcldoaXRlID0gdGhlbWUuY29sb3JzLndoaXRlO1xuICAgIGlmICh0aXRsZXNDb2xvciA9PT0gY29sb3JXaGl0ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEluY29yYUxvZ28gc3JjPVwiL2xvZ28uc3ZnXCIgYWx0PVwiSW5jb3JhIGxvZ29cIi8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHRpdGxlc0NvbG9yID09PSBjb2xvckJsYWNrKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5jb3JhTG9nbyBzcmM9XCIvbG9nb0JsYWNrLnN2Z1wiIGFsdD1cIkluY29yYSBsb2dvXCIgLz5cbiAgICAgIClcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTWVudShwcm9wczogSU1lbnUpIHtcbiAgY29uc3QgW29uSG92ZXJFbGVtZW50LCBzZXRPbkhvdmVyRWxlbWVudF0gPSB1c2VTdGF0ZTxudWxsIHwgc3RyaW5nPihudWxsKTtcbiAgY29uc3QgW29uU2VsZWN0ZWRNZW51LCBzZXRPblNlbGVjdGVkTWVudV0gPSB1c2VTdGF0ZTxudWxsIHwgc3RyaW5nPihudWxsKTtcbiAgY29uc3QgeyB0aXRsZXMsIGJhY2tncm91bmRDb2xvciwgdGl0bGVzQ29sb3IsIGNoaWxkcmVuLCBwb3NpdGlvblR5cGUgPSAnc3RpY2t5JyB9ID0gcHJvcHM7XG4gIGNvbnN0IGxvZ28gPSBnZXRMb2dvKHRpdGxlc0NvbG9yKTtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigpO1xuXG4gIGNvbnN0IG5vZGUgPSB1c2VSZWY8UmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pj4oKTtcbiAgY29uc3QgeyBpc01lbnVPcGVuLCB0b2dnbGVNZW51TW9kZSB9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dCk7XG4gIHVzZU9uQ2xpY2tPdXRzaWRlKG5vZGUsICgpID0+IHtcbiAgICBpZiAoaXNNZW51T3Blbikge1xuICAgICAgdG9nZ2xlTWVudU1vZGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9ICt0aGVtZS5icmVha3BvaW50cy5tb2JpbGUucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSBtb2JpbGVXaWR0aCA+IHdpZHRoO1xuICAgIHNldElzTW9iaWxlKGlzTW9iaWxlKTtcbiAgfSxbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IHJlZj17bm9kZX0+XG4gICAgICA8V3JhcHBlclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgcG9zaXRpb25UeXBlPXtwb3NpdGlvblR5cGV9XG4gICAgICAgIHRpdGxlc0NvbG9yPXt0aXRsZXNDb2xvcn1cbiAgICAgID5cbiAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICB7bG9nb31cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbi8+XG4gICAgICAgICAgICAgIHsvKiA8U2lkZU1lbnUgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IFxuICAgICAgICAgICAgICAgIHRpdGxlc0NvbG9yPXt0aXRsZXNDb2xvcn0gXG4gICAgICAgICAgICAgICAgdGl0bGVzPXt0aXRsZXN9IFxuICAgICAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50PXtzZXRPbkhvdmVyRWxlbWVudH0gXG4gICAgICAgICAgICAgICAgb25TZWxlY3RlZE1lbnU9e29uU2VsZWN0ZWRNZW51fSBcbiAgICAgICAgICAgICAgICBzZXRPblNlbGVjdGVkTWVudT17c2V0T25TZWxlY3RlZE1lbnV9IC8+ICovfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSBcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgIHRpdGxlcz17dGl0bGVzfVxuICAgICAgICAgICAgICB0aXRsZXNDb2xvcj17dGl0bGVzQ29sb3J9XG4gICAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50PXtzZXRPbkhvdmVyRWxlbWVudH1cbiAgICAgICAgICAgICAgb25TZWxlY3RlZE1lbnU9e29uU2VsZWN0ZWRNZW51fVxuICAgICAgICAgICAgICBzZXRPblNlbGVjdGVkTWVudT17c2V0T25TZWxlY3RlZE1lbnV9XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEhvdmVyTWVudVxuICAgICAgICAgIGlzU2hvdz17Qm9vbGVhbihvbkhvdmVyRWxlbWVudCl9XG4gICAgICAgICAgdGl0bGVzQ29sb3I9e3RpdGxlc0NvbG9yfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQobnVsbCk7XG4gICAgICAgICAgICBzZXRPblNlbGVjdGVkTWVudShudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhvdmVyRWxlbWVudHNcbiAgICAgICAgICAgIHRpdGxlPXtvbkhvdmVyRWxlbWVudH1cbiAgICAgICAgICAgIHRpdGxlQ29sb3I9e3RpdGxlc0NvbG9yfVxuICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQ9e3NldE9uSG92ZXJFbGVtZW50fVxuICAgICAgICAgICAgc2V0T25TZWxlY3RlZE1lbnU9e3NldE9uU2VsZWN0ZWRNZW51fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSG92ZXJNZW51PlxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICA8L0Rpdj5cbiAgKTtcbn1cbmZ1bmN0aW9uIHVzZU9uQ2xpY2tPdXRzaWRlKG5vZGU6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8dW5kZWZpbmVkPiwgYXJnMTogKCkgPT4gdm9pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xufVxuXG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIldyYXBwZXIiLCJCbG9jayIsIkhvdmVyTWVudSIsIkRpdiIsIkluY29yYUxvZ28iLCJDb250ZW50V3JhcHBlciIsInRoZW1lIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb3ZlckVsZW1lbnRzIiwiTGluayIsIkhhbWJ1cmdlckJ1dHRvbiIsIk1lbnVDb250ZXh0IiwiZ2V0TG9nbyIsInRpdGxlc0NvbG9yIiwiY29sb3JCbGFjayIsImNvbG9ycyIsImJsYWNrIiwiY29sb3JXaGl0ZSIsIndoaXRlIiwiTWFpbk1lbnUiLCJwcm9wcyIsIm9uSG92ZXJFbGVtZW50Iiwic2V0T25Ib3ZlckVsZW1lbnQiLCJvblNlbGVjdGVkTWVudSIsInNldE9uU2VsZWN0ZWRNZW51IiwidGl0bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJwb3NpdGlvblR5cGUiLCJsb2dvIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm5vZGUiLCJpc01lbnVPcGVuIiwidG9nZ2xlTWVudU1vZGUiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZVdpZHRoIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJyZXBsYWNlIiwiQm9vbGVhbiIsImFyZzEiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/mainMenu.tsx\n");

/***/ })

});