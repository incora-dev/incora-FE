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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation */ \"./components/mainMenu/navigation/navigation.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/styles.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _HoverElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HoverElements */ \"./components/mainMenu/HoverElements/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/mainMenu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction getLogo(titlesColor) {\n  var colorBlack = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.colors.black;\n  var colorWhite = _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.colors.white;\n\n  if (titlesColor === colorWhite) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.IncoraLogo, {\n      src: \"/logo.svg\",\n      alt: \"Incora logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this);\n  }\n\n  if (titlesColor === colorBlack) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.IncoraLogo, {\n      src: \"/logoBlack.svg\",\n      alt: \"Incora logo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this);\n  }\n}\n\n;\nfunction MainMenu(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      onHoverElement = _useState[0],\n      setOnHoverElement = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      onSelectedMenu = _useState2[0],\n      setOnSelectedMenu = _useState2[1];\n\n  var titles = props.titles,\n      backgroundColor = props.backgroundColor,\n      titlesColor = props.titlesColor,\n      children = props.children,\n      _props$positionType = props.positionType,\n      positionType = _props$positionType === void 0 ? 'sticky' : _props$positionType;\n  var logo = getLogo(titlesColor);\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Div, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n      backgroundColor: backgroundColor,\n      positionType: positionType,\n      titlesColor: titlesColor,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Block, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: '/',\n            children: logo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 11\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            titles: titles,\n            titlesColor: titlesColor,\n            setOnHoverElement: setOnHoverElement,\n            onSelectedMenu: onSelectedMenu,\n            setOnSelectedMenu: setOnSelectedMenu,\n            backgroundColor: backgroundColor\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.HoverMenu, {\n          isShow: Boolean(onHoverElement),\n          titlesColor: titlesColor,\n          onMouseLeave: function onMouseLeave() {\n            setOnHoverElement(null);\n            setOnSelectedMenu(null);\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_HoverElements__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            title: onHoverElement,\n            titleColor: titlesColor,\n            setOnHoverElement: setOnHoverElement,\n            setOnSelectedMenu: setOnSelectedMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MainMenu, \"b4bC075cw4qVRnd46ot/wGJtPNo=\");\n\n_c = MainMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L21haW5NZW51LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNhLE9BQVQsQ0FBaUJDLFdBQWpCLEVBQXNDO0FBQ3BDLE1BQU1DLFVBQVUsR0FBR1IsNkRBQW5CO0FBQ0EsTUFBTVcsVUFBVSxHQUFHWCw2REFBbkI7O0FBQ0UsTUFBSU8sV0FBVyxLQUFLSSxVQUFwQixFQUFnQztBQUM5Qix3QkFDRSw4REFBQywrQ0FBRDtBQUFZLFNBQUcsRUFBQyxXQUFoQjtBQUE0QixTQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBR0Q7O0FBRUQsTUFBSUosV0FBVyxLQUFLQyxVQUFwQixFQUFnQztBQUM5Qix3QkFDRSw4REFBQywrQ0FBRDtBQUFZLFNBQUcsRUFBQyxnQkFBaEI7QUFBaUMsU0FBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUdEO0FBQ0o7O0FBQUE7QUFFYyxTQUFTSyxRQUFULENBQWtCQyxLQUFsQixFQUFnQztBQUFBOztBQUM3QyxrQkFBNENYLCtDQUFRLENBQWdCLElBQWhCLENBQXBEO0FBQUEsTUFBT1ksY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsbUJBQTRDYiwrQ0FBUSxDQUFnQixJQUFoQixDQUFwRDtBQUFBLE1BQU9jLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLE1BQVFDLE1BQVIsR0FBb0ZMLEtBQXBGLENBQVFLLE1BQVI7QUFBQSxNQUFnQkMsZUFBaEIsR0FBb0ZOLEtBQXBGLENBQWdCTSxlQUFoQjtBQUFBLE1BQWlDYixXQUFqQyxHQUFvRk8sS0FBcEYsQ0FBaUNQLFdBQWpDO0FBQUEsTUFBOENjLFFBQTlDLEdBQW9GUCxLQUFwRixDQUE4Q08sUUFBOUM7QUFBQSw0QkFBb0ZQLEtBQXBGLENBQXdEUSxZQUF4RDtBQUFBLE1BQXdEQSxZQUF4RCxvQ0FBdUUsUUFBdkU7QUFDQSxNQUFNQyxJQUFJLEdBQUdqQixPQUFPLENBQUNDLFdBQUQsQ0FBcEI7O0FBQ0EsbUJBQWdDSiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9xQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBdkIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXdCLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDN0IsMkVBQUEsQ0FBaUMsSUFBakMsRUFBdUMsRUFBdkMsQ0FBckI7QUFDQSxRQUFNd0IsUUFBUSxHQUFHSyxXQUFXLEdBQUdILEtBQS9CO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsR0FMUSxFQUtQLEVBTE8sQ0FBVDtBQU9BLHNCQUNFLDhEQUFDLHdDQUFEO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFDRSxxQkFBZSxFQUFFSixlQURuQjtBQUVFLGtCQUFZLEVBQUVFLFlBRmhCO0FBR0UsaUJBQVcsRUFBRWYsV0FIZjtBQUFBLDZCQUtBLDhEQUFDLG1EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMENBQUQ7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUUsR0FBWjtBQUFBLHNCQUNHZ0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsOERBQUQ7QUFDRSxrQkFBTSxFQUFFSixNQURWO0FBRUUsdUJBQVcsRUFBRVosV0FGZjtBQUdFLDZCQUFpQixFQUFFUyxpQkFIckI7QUFJRSwwQkFBYyxFQUFFQyxjQUpsQjtBQUtFLDZCQUFpQixFQUFFQyxpQkFMckI7QUFNRSwyQkFBZSxFQUFFRTtBQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWVFLDhEQUFDLDhDQUFEO0FBQ0UsZ0JBQU0sRUFBRWEsT0FBTyxDQUFDbEIsY0FBRCxDQURqQjtBQUVFLHFCQUFXLEVBQUVSLFdBRmY7QUFHRSxzQkFBWSxFQUFFLHdCQUFNO0FBQ2xCUyxZQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FFLFlBQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRCxXQU5IO0FBQUEsaUNBUUUsOERBQUMsc0RBQUQ7QUFDRSxpQkFBSyxFQUFFSCxjQURUO0FBRUUsc0JBQVUsRUFBRVIsV0FGZDtBQUdFLDZCQUFpQixFQUFFUyxpQkFIckI7QUFJRSw2QkFBaUIsRUFBRUU7QUFKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0NFLDhEQUFDLG1EQUFEO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRDRDs7R0ExRHVCUjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluTWVudS9tYWluTWVudS50c3g/NjA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWVudSB9IGZyb20gXCJAaW50ZXJmYWNlc1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBCbG9jaywgSG92ZXJNZW51LCBEaXYsIEluY29yYUxvZ28sIENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb3ZlckVsZW1lbnRzIGZyb20gXCIuL0hvdmVyRWxlbWVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gZ2V0TG9nbyh0aXRsZXNDb2xvcjogc3RyaW5nKSB7XG4gIGNvbnN0IGNvbG9yQmxhY2sgPSB0aGVtZS5jb2xvcnMuYmxhY2s7XG4gIGNvbnN0IGNvbG9yV2hpdGUgPSB0aGVtZS5jb2xvcnMud2hpdGU7XG4gICAgaWYgKHRpdGxlc0NvbG9yID09PSBjb2xvcldoaXRlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5jb3JhTG9nbyBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJJbmNvcmEgbG9nb1wiLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodGl0bGVzQ29sb3IgPT09IGNvbG9yQmxhY2spIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbmNvcmFMb2dvIHNyYz1cIi9sb2dvQmxhY2suc3ZnXCIgYWx0PVwiSW5jb3JhIGxvZ29cIiAvPlxuICAgICAgKVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5NZW51KHByb3BzOiBJTWVudSkge1xuICBjb25zdCBbb25Ib3ZlckVsZW1lbnQsIHNldE9uSG92ZXJFbGVtZW50XSA9IHVzZVN0YXRlPG51bGwgfCBzdHJpbmc+KG51bGwpO1xuICBjb25zdCBbb25TZWxlY3RlZE1lbnUsIHNldE9uU2VsZWN0ZWRNZW51XSA9IHVzZVN0YXRlPG51bGwgfCBzdHJpbmc+KG51bGwpO1xuICBjb25zdCB7IHRpdGxlcywgYmFja2dyb3VuZENvbG9yLCB0aXRsZXNDb2xvciwgY2hpbGRyZW4sIHBvc2l0aW9uVHlwZSA9ICdzdGlja3knIH0gPSBwcm9wcztcbiAgY29uc3QgbG9nbyA9IGdldExvZ28odGl0bGVzQ29sb3IpO1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gK3RoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IG1vYmlsZVdpZHRoID4gd2lkdGg7XG4gICAgc2V0SXNNb2JpbGUoaXNNb2JpbGUpO1xuICB9LFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXY+XG4gICAgICA8V3JhcHBlclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgcG9zaXRpb25UeXBlPXtwb3NpdGlvblR5cGV9XG4gICAgICAgIHRpdGxlc0NvbG9yPXt0aXRsZXNDb2xvcn1cbiAgICAgID5cbiAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICB7bG9nb31cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgICAgIHRpdGxlcz17dGl0bGVzfVxuICAgICAgICAgICAgdGl0bGVzQ29sb3I9e3RpdGxlc0NvbG9yfVxuICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQ9e3NldE9uSG92ZXJFbGVtZW50fVxuICAgICAgICAgICAgb25TZWxlY3RlZE1lbnU9e29uU2VsZWN0ZWRNZW51fVxuICAgICAgICAgICAgc2V0T25TZWxlY3RlZE1lbnU9e3NldE9uU2VsZWN0ZWRNZW51fVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxIb3Zlck1lbnVcbiAgICAgICAgICBpc1Nob3c9e0Jvb2xlYW4ob25Ib3ZlckVsZW1lbnQpfVxuICAgICAgICAgIHRpdGxlc0NvbG9yPXt0aXRsZXNDb2xvcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50KG51bGwpO1xuICAgICAgICAgICAgc2V0T25TZWxlY3RlZE1lbnUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIb3ZlckVsZW1lbnRzXG4gICAgICAgICAgICB0aXRsZT17b25Ib3ZlckVsZW1lbnR9XG4gICAgICAgICAgICB0aXRsZUNvbG9yPXt0aXRsZXNDb2xvcn1cbiAgICAgICAgICAgIHNldE9uSG92ZXJFbGVtZW50PXtzZXRPbkhvdmVyRWxlbWVudH1cbiAgICAgICAgICAgIHNldE9uU2VsZWN0ZWRNZW51PXtzZXRPblNlbGVjdGVkTWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hvdmVyTWVudT5cbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgPC9EaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIldyYXBwZXIiLCJCbG9jayIsIkhvdmVyTWVudSIsIkRpdiIsIkluY29yYUxvZ28iLCJDb250ZW50V3JhcHBlciIsInRoZW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvdmVyRWxlbWVudHMiLCJMaW5rIiwiZ2V0TG9nbyIsInRpdGxlc0NvbG9yIiwiY29sb3JCbGFjayIsImNvbG9ycyIsImJsYWNrIiwiY29sb3JXaGl0ZSIsIndoaXRlIiwiTWFpbk1lbnUiLCJwcm9wcyIsIm9uSG92ZXJFbGVtZW50Iiwic2V0T25Ib3ZlckVsZW1lbnQiLCJvblNlbGVjdGVkTWVudSIsInNldE9uU2VsZWN0ZWRNZW51IiwidGl0bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJwb3NpdGlvblR5cGUiLCJsb2dvIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZVdpZHRoIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJyZXBsYWNlIiwiQm9vbGVhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/mainMenu.tsx\n");

/***/ })

});