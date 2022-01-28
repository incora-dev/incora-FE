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

/***/ "./components/mainMenu/navigation/navigation.tsx":
/*!*******************************************************!*\
  !*** ./components/mainMenu/navigation/navigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BurgerMenuButton */ \"./components/BurgerMenuButton/index.tsx\");\n/* harmony import */ var _sideMainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sideMainMenu */ \"./components/mainMenu/sideMainMenu/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu,\n      backgroundColor = _ref.backgroundColor;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: !isMobile ? titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n          shouldAddLine: shouldAddLine,\n          onMouseEnter: function onMouseEnter() {\n            setOnHoverElement(title);\n            setSelectedTitle(title);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n            color: titlesColor,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 17\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 15\n        }, _this);\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }, _this);\n    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_sideMainMenu__WEBPACK_IMPORTED_MODULE_7__.SideMenu, {\n        backgroundColor: backgroundColor,\n        titlesColor: \"\",\n        children: undefined,\n        titles: []\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"1Jwd0RakRANFBCy5XE2lcbVVXBs=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2EsVUFBVCxPQU9FO0FBQUE7O0FBQUE7O0FBQUEsTUFOQUMsTUFNQSxRQU5BQSxNQU1BO0FBQUEsTUFMQUMsV0FLQSxRQUxBQSxXQUtBO0FBQUEsTUFKQUMsaUJBSUEsUUFKQUEsaUJBSUE7QUFBQSxNQUhBQyxjQUdBLFFBSEFBLGNBR0E7QUFBQSxNQUZBQyxpQkFFQSxRQUZBQSxpQkFFQTtBQUFBLE1BREFDLGVBQ0EsUUFEQUEsZUFDQTs7QUFDQSxrQkFBMENYLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDYiwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFjLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTW1CLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDbkIsMkVBQUEsQ0FBaUMsSUFBakMsRUFBdUMsRUFBdkMsQ0FBckI7QUFDQSxRQUFNYyxRQUFRLEdBQUdLLFdBQVcsR0FBR0gsS0FBL0I7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxHQUxRLEVBS1AsRUFMTyxDQUFUO0FBT0FqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGdCLElBQUFBLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDbUIsSUFBUCxDQUFZLFVBQUNDLEtBQUQ7QUFBQSxhQUFXUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0gsS0FBSyxDQUFDSSxXQUFOLEVBQWxDLENBQVg7QUFBQSxLQUFaLENBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRXZCLFdBQVo7QUFBQSxjQUNHLENBQUNTLFFBQUQsR0FFQ1YsTUFBTSxDQUFDeUIsR0FBUCxDQUFXLFVBQUNMLEtBQUQsRUFBZ0JNLEtBQWhCLEVBQWtDO0FBQzdDLFVBQU1DLGFBQWEsR0FBR3JCLGFBQWEsS0FBS2MsS0FBbEIsSUFBMkJqQixjQUFjLEtBQUtpQixLQUE5QyxJQUF1REEsS0FBSyxLQUFLWixRQUF2Rjs7QUFFQSxVQUNFWSxLQUFLLEtBQUssVUFBVixJQUNBQSxLQUFLLEtBQUssV0FEVixJQUVBQSxLQUFLLEtBQUssU0FIWixFQUlFO0FBQ0UsNEJBQ0UsOERBQUMsdUNBQUQ7QUFDRSx1QkFBYSxFQUFFTyxhQURqQjtBQUdFLHNCQUFZLEVBQUUsd0JBQU07QUFDbEJ6QixZQUFBQSxpQkFBaUIsQ0FBQ2tCLEtBQUQsQ0FBakI7QUFDQWIsWUFBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxXQU5IO0FBQUEsa0NBUUUsOERBQUMsdUNBQUQ7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBVUUsOERBQUMsa0RBQUQ7QUFBZSxpQkFBSyxFQUFFbkIsV0FBdEI7QUFBQSxtQ0FDRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBLFdBRU95QixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFnQkg7O0FBRUQsVUFBSU4sS0FBSyxLQUFLLFlBQWQsRUFBNEI7QUFDMUIsNEJBQ0UsOERBQUMsd0RBQUQ7QUFFRSxxQkFBVyxFQUFFLFlBRmY7QUFHRSxvQkFBVSxFQUFFLFdBSGQ7QUFJRSxpQkFBTyxFQUFFO0FBSlgsV0FDT00sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQ7O0FBRUQsMEJBQ0UsOERBQUMsdUNBQUQ7QUFDRSxxQkFBYSxFQUFFQyxhQURqQjtBQUdFLG9CQUFZLEVBQUUsd0JBQU07QUFDbEJ6QixVQUFBQSxpQkFBaUIsQ0FBQ2tCLEtBQUQsQ0FBakI7QUFDQWIsVUFBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxTQU5IO0FBUUUsb0JBQVksRUFBRTtBQUFBLGlCQUFNaEIsaUJBQWlCLENBQUMsSUFBRCxDQUF2QjtBQUFBLFNBUmhCO0FBQUEsK0JBVUUsOERBQUMsdUNBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLGFBQU1nQixLQUFLLENBQUNJLFdBQU4sRUFBTixDQUFWO0FBQUEsc0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixTQUVPTSxLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxLQXZEQyxDQUZELGdCQTREQztBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLG1EQUFEO0FBQVUsdUJBQWUsRUFBRXJCLGVBQTNCO0FBQTRDLG1CQUFXLEVBQUUsRUFBekQ7QUFBNkQsZ0JBQVEsRUFBRXVCLFNBQXZFO0FBQWtGLGNBQU0sRUFBRTtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxRUQ7O0dBNUZRN0I7O0tBQUFBO0FBOEZULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbk1lbnUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnRzeD80M2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5hdixcbiAgVWwsXG4gIExpLFxuICBQb3NpdGlvbkFycm93XG59IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSU5hdmlnYXRpb24gfSBmcm9tIFwiQGludGVyZmFjZXNcIjtcbmltcG9ydCBCdXR0b25XaXRoQXJyb3cgZnJvbSBcIi4uLy4uL0J1dHRvbldpdGhBcnJvd1wiO1xuaW1wb3J0IEFycm93IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvbmF2QXJyb3cuc3ZnXCJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgSGFtYnVyZ2VyQnV0dG9uIGZyb20gXCIuLi8uLi9CdXJnZXJNZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBTaWRlTWVudSB9IGZyb20gXCIuLi9zaWRlTWFpbk1lbnVcIjtcblxuZnVuY3Rpb24gTmF2aWdhdGlvbih7IFxuICB0aXRsZXMsIFxuICB0aXRsZXNDb2xvciwgXG4gIHNldE9uSG92ZXJFbGVtZW50LCBcbiAgb25TZWxlY3RlZE1lbnUsIFxuICBzZXRPblNlbGVjdGVkTWVudSwgXG4gIGJhY2tncm91bmRDb2xvciB9OiBJTmF2aWdhdGlvbikgXG4gIHtcbiAgY29uc3QgW3NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0ICBbdXJsVGl0bGUsIHNldFVybFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gK3RoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICBjb25zdCBpc01vYmlsZSA9IG1vYmlsZVdpZHRoID4gd2lkdGg7XG4gICAgc2V0SXNNb2JpbGUoaXNNb2JpbGUpO1xuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVybFRpdGxlKHRpdGxlcy5maW5kKCh0aXRsZSkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKHRpdGxlLnRvTG93ZXJDYXNlKCkpKSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdiBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAgeyFpc01vYmlsZSBcbiAgICAgID8gKFxuICAgICAgICB0aXRsZXMubWFwKCh0aXRsZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpbmUgPSBzZWxlY3RlZFRpdGxlID09PSB0aXRsZSAmJiBvblNlbGVjdGVkTWVudSA9PT0gdGl0bGUgfHwgdGl0bGUgPT09IHVybFRpdGxlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aXRsZSA9PT0gXCJTZXJ2aWNlc1wiIHx8XG4gICAgICAgICAgdGl0bGUgPT09IFwiRXhwZXJ0aXNlXCIgfHxcbiAgICAgICAgICB0aXRsZSA9PT0gXCJDb21wYW55XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VWxcbiAgICAgICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpPnt0aXRsZX08L0xpPlxuICBcbiAgICAgICAgICAgICAgICA8UG9zaXRpb25BcnJvdyBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAgICAgICAgICAgICAgPEFycm93Lz5cbiAgICAgICAgICAgICAgICA8L1Bvc2l0aW9uQXJyb3c+XG4gICAgICAgICAgICAgIDwvVWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnQ29udGFjdCBVcycpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbldpdGhBcnJvd1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBidXR0b25MYWJlbD17J0NvbnRhY3QgVXMnfVxuICAgICAgICAgICAgICByZWRpcmVjdFRvPXsnL2NvbnRhY3RzJ31cbiAgICAgICAgICAgICAgcGFkZGluZz17JzExLjVweCAxNC41cHg7J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFVsXG4gICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkVGl0bGUodGl0bGUpO1xuICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPblNlbGVjdGVkTWVudShudWxsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt0aXRsZS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgIDwvVWw+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgKVxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPlxuICAgICAgICAgIDxTaWRlTWVudSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gdGl0bGVzQ29sb3I9e1wiXCJ9IGNoaWxkcmVuPXt1bmRlZmluZWR9IHRpdGxlcz17W119IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L05hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIk5hdiIsIlVsIiwiTGkiLCJQb3NpdGlvbkFycm93IiwiQnV0dG9uV2l0aEFycm93IiwiQXJyb3ciLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInRoZW1lIiwiSGFtYnVyZ2VyQnV0dG9uIiwiU2lkZU1lbnUiLCJOYXZpZ2F0aW9uIiwidGl0bGVzIiwidGl0bGVzQ29sb3IiLCJzZXRPbkhvdmVyRWxlbWVudCIsIm9uU2VsZWN0ZWRNZW51Iiwic2V0T25TZWxlY3RlZE1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsInVybFRpdGxlIiwic2V0VXJsVGl0bGUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInJlcGxhY2UiLCJmaW5kIiwidGl0bGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImluZGV4Iiwic2hvdWxkQWRkTGluZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ })

});