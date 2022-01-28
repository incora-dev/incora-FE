"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/case_studies",{

/***/ "./components/mainMenu/navigation/navigation.tsx":
/*!*******************************************************!*\
  !*** ./components/mainMenu/navigation/navigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BurgerMenuButton */ \"./components/BurgerMenuButton/index.tsx\");\n/* harmony import */ var _sideMainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sideMainMenu */ \"./components/mainMenu/sideMainMenu/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu,\n      backgroundColor = _ref.backgroundColor;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: !isMobile ? titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        if (!isMobile) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n            shouldAddLine: shouldAddLine,\n            onMouseEnter: function onMouseEnter() {\n              setOnHoverElement(title);\n              setSelectedTitle(title);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n              color: titlesColor,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this);\n        }\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 11\n      }, _this);\n    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_sideMainMenu__WEBPACK_IMPORTED_MODULE_7__.SideMenu, {\n        backgroundColor: backgroundColor,\n        titlesColor: \"\",\n        children: undefined,\n        titles: []\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"1Jwd0RakRANFBCy5XE2lcbVVXBs=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2EsVUFBVCxPQU9FO0FBQUE7O0FBQUE7O0FBQUEsTUFOQUMsTUFNQSxRQU5BQSxNQU1BO0FBQUEsTUFMQUMsV0FLQSxRQUxBQSxXQUtBO0FBQUEsTUFKQUMsaUJBSUEsUUFKQUEsaUJBSUE7QUFBQSxNQUhBQyxjQUdBLFFBSEFBLGNBR0E7QUFBQSxNQUZBQyxpQkFFQSxRQUZBQSxpQkFFQTtBQUFBLE1BREFDLGVBQ0EsUUFEQUEsZUFDQTs7QUFDQSxrQkFBMENYLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDYiwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFjLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTW1CLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDbkIsMkVBQUEsQ0FBaUMsSUFBakMsRUFBdUMsRUFBdkMsQ0FBckI7QUFDQSxRQUFNYyxRQUFRLEdBQUdLLFdBQVcsR0FBR0gsS0FBL0I7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxHQUxRLEVBS1AsRUFMTyxDQUFUO0FBT0FqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGdCLElBQUFBLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDbUIsSUFBUCxDQUFZLFVBQUNDLEtBQUQ7QUFBQSxhQUFXUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0gsS0FBSyxDQUFDSSxXQUFOLEVBQWxDLENBQVg7QUFBQSxLQUFaLENBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRXZCLFdBQVo7QUFBQSxjQUNHLENBQUNTLFFBQUQsR0FFQ1YsTUFBTSxDQUFDeUIsR0FBUCxDQUFXLFVBQUNMLEtBQUQsRUFBZ0JNLEtBQWhCLEVBQWtDO0FBQzdDLFVBQU1DLGFBQWEsR0FBR3JCLGFBQWEsS0FBS2MsS0FBbEIsSUFBMkJqQixjQUFjLEtBQUtpQixLQUE5QyxJQUF1REEsS0FBSyxLQUFLWixRQUF2Rjs7QUFFQSxVQUNFWSxLQUFLLEtBQUssVUFBVixJQUNBQSxLQUFLLEtBQUssV0FEVixJQUVBQSxLQUFLLEtBQUssU0FIWixFQUlFO0FBQ0EsWUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYiw4QkFDRSw4REFBQyx1Q0FBRDtBQUNFLHlCQUFhLEVBQUVpQixhQURqQjtBQUdFLHdCQUFZLEVBQUUsd0JBQU07QUFDbEJ6QixjQUFBQSxpQkFBaUIsQ0FBQ2tCLEtBQUQsQ0FBakI7QUFDQWIsY0FBQUEsZ0JBQWdCLENBQUNhLEtBQUQsQ0FBaEI7QUFDRCxhQU5IO0FBQUEsb0NBUUUsOERBQUMsdUNBQUQ7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBVUUsOERBQUMsa0RBQUQ7QUFBZSxtQkFBSyxFQUFFbkIsV0FBdEI7QUFBQSxxQ0FDRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBLGFBRU95QixLQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFnQkQ7QUFDRjs7QUFFRCxVQUFJTixLQUFLLEtBQUssWUFBZCxFQUE0QjtBQUMxQiw0QkFDRSw4REFBQyx3REFBRDtBQUVFLHFCQUFXLEVBQUUsWUFGZjtBQUdFLG9CQUFVLEVBQUUsV0FIZDtBQUlFLGlCQUFPLEVBQUU7QUFKWCxXQUNPTSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFRRDs7QUFFRCwwQkFDRSw4REFBQyx1Q0FBRDtBQUNFLHFCQUFhLEVBQUVDLGFBRGpCO0FBR0Usb0JBQVksRUFBRSx3QkFBTTtBQUNsQnpCLFVBQUFBLGlCQUFpQixDQUFDa0IsS0FBRCxDQUFqQjtBQUNBYixVQUFBQSxnQkFBZ0IsQ0FBQ2EsS0FBRCxDQUFoQjtBQUNELFNBTkg7QUFRRSxvQkFBWSxFQUFFO0FBQUEsaUJBQU1oQixpQkFBaUIsQ0FBQyxJQUFELENBQXZCO0FBQUEsU0FSaEI7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksYUFBTWdCLEtBQUssQ0FBQ0ksV0FBTixFQUFOLENBQVY7QUFBQSxzQkFDR0o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLFNBRU9NLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELEtBekRDLENBRkQsZ0JBOERDO0FBQUEsOEJBQ1EsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSLGVBRVEsOERBQUMsbURBQUQ7QUFBVSx1QkFBZSxFQUFFckIsZUFBM0I7QUFBNEMsbUJBQVcsRUFBRSxFQUF6RDtBQUE2RCxnQkFBUSxFQUFFdUIsU0FBdkU7QUFBa0YsY0FBTSxFQUFFO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUjtBQUFBO0FBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVFRDs7R0E5RlE3Qjs7S0FBQUE7QUFnR1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluTWVudS9uYXZpZ2F0aW9uL25hdmlnYXRpb24udHN4PzQzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTmF2LFxuICBVbCxcbiAgTGksXG4gIFBvc2l0aW9uQXJyb3dcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBJTmF2aWdhdGlvbiB9IGZyb20gXCJAaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEJ1dHRvbldpdGhBcnJvdyBmcm9tIFwiLi4vLi4vQnV0dG9uV2l0aEFycm93XCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9uYXZBcnJvdy5zdmdcIlxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBIYW1idXJnZXJCdXR0b24gZnJvbSBcIi4uLy4uL0J1cmdlck1lbnVCdXR0b25cIjtcbmltcG9ydCB7IFNpZGVNZW51IH0gZnJvbSBcIi4uL3NpZGVNYWluTWVudVwiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKHsgXG4gIHRpdGxlcywgXG4gIHRpdGxlc0NvbG9yLCBcbiAgc2V0T25Ib3ZlckVsZW1lbnQsIFxuICBvblNlbGVjdGVkTWVudSwgXG4gIHNldE9uU2VsZWN0ZWRNZW51LCBcbiAgYmFja2dyb3VuZENvbG9yIH06IElOYXZpZ2F0aW9uKSBcbiAge1xuICBjb25zdCBbc2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgIFt1cmxUaXRsZSwgc2V0VXJsVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgbW9iaWxlV2lkdGggPSArdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gbW9iaWxlV2lkdGggPiB3aWR0aDtcbiAgICBzZXRJc01vYmlsZShpc01vYmlsZSk7XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXJsVGl0bGUodGl0bGVzLmZpbmQoKHRpdGxlKSA9PiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXModGl0bGUudG9Mb3dlckNhc2UoKSkpKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TmF2IGNvbG9yPXt0aXRsZXNDb2xvcn0+XG4gICAgICB7IWlzTW9iaWxlIFxuICAgICAgPyAoXG4gICAgICAgIHRpdGxlcy5tYXAoKHRpdGxlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGluZSA9IHNlbGVjdGVkVGl0bGUgPT09IHRpdGxlICYmIG9uU2VsZWN0ZWRNZW51ID09PSB0aXRsZSB8fCB0aXRsZSA9PT0gdXJsVGl0bGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRpdGxlID09PSBcIlNlcnZpY2VzXCIgfHxcbiAgICAgICAgICB0aXRsZSA9PT0gXCJFeHBlcnRpc2VcIiB8fFxuICAgICAgICAgIHRpdGxlID09PSBcIkNvbXBhbnlcIlxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VWxcbiAgICAgICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpPnt0aXRsZX08L0xpPlxuICBcbiAgICAgICAgICAgICAgICA8UG9zaXRpb25BcnJvdyBjb2xvcj17dGl0bGVzQ29sb3J9PlxuICAgICAgICAgICAgICAgICAgPEFycm93Lz5cbiAgICAgICAgICAgICAgICA8L1Bvc2l0aW9uQXJyb3c+XG4gICAgICAgICAgICAgIDwvVWw+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJ0NvbnRhY3QgVXMnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25XaXRoQXJyb3dcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9eydDb250YWN0IFVzJ31cbiAgICAgICAgICAgICAgcmVkaXJlY3RUbz17Jy9jb250YWN0cyd9XG4gICAgICAgICAgICAgIHBhZGRpbmc9eycxMS41cHggMTQuNXB4Oyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxVbFxuICAgICAgICAgICAgc2hvdWxkQWRkTGluZT17c2hvdWxkQWRkTGluZX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQodGl0bGUpO1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T25TZWxlY3RlZE1lbnUobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICA8L1VsPlxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIClcbiAgICAgIDogKFxuICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxIYW1idXJnZXJCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8U2lkZU1lbnUgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IHRpdGxlc0NvbG9yPXtcIlwifSBjaGlsZHJlbj17dW5kZWZpbmVkfSB0aXRsZXM9e1tdfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9OYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJOYXYiLCJVbCIsIkxpIiwiUG9zaXRpb25BcnJvdyIsIkJ1dHRvbldpdGhBcnJvdyIsIkFycm93IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ0aGVtZSIsIkhhbWJ1cmdlckJ1dHRvbiIsIlNpZGVNZW51IiwiTmF2aWdhdGlvbiIsInRpdGxlcyIsInRpdGxlc0NvbG9yIiwic2V0T25Ib3ZlckVsZW1lbnQiLCJvblNlbGVjdGVkTWVudSIsInNldE9uU2VsZWN0ZWRNZW51IiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJ1cmxUaXRsZSIsInNldFVybFRpdGxlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1vYmlsZVdpZHRoIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJyZXBsYWNlIiwiZmluZCIsInRpdGxlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJpbmRleCIsInNob3VsZEFkZExpbmUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ })

});