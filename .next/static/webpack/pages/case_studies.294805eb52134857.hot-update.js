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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/navigation/styles.tsx\");\n/* harmony import */ var _ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ButtonWithArrow */ \"./components/ButtonWithArrow/index.tsx\");\n/* harmony import */ var _public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/navArrow.svg */ \"./public/navArrow.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BurgerMenuButton */ \"./components/BurgerMenuButton/index.tsx\");\n/* harmony import */ var _sideMainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sideMainMenu */ \"./components/mainMenu/sideMainMenu/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/navigation/navigation.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Navigation(_ref) {\n  _s();\n\n  var _this = this;\n\n  var titles = _ref.titles,\n      titlesColor = _ref.titlesColor,\n      setOnHoverElement = _ref.setOnHoverElement,\n      onSelectedMenu = _ref.onSelectedMenu,\n      setOnSelectedMenu = _ref.setOnSelectedMenu,\n      backgroundColor = _ref.backgroundColor;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedTitle = _useState[0],\n      setSelectedTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      urlTitle = _useState2[0],\n      setUrlTitle = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      isMobile = _useState3[0],\n      setIsMobile = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var width = window.innerWidth;\n    var mobileWidth = +_styles_theme__WEBPACK_IMPORTED_MODULE_5__.theme.breakpoints.mobile.replace('px', '');\n    var isMobile = mobileWidth > width;\n    setIsMobile(isMobile);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUrlTitle(titles.find(function (title) {\n      return window.location.pathname.includes(title.toLowerCase());\n    }));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {\n    color: titlesColor,\n    children: titles.map(function (title, index) {\n      var shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;\n\n      if (title === \"Services\" || title === \"Expertise\" || title === \"Company\") {\n        if (!isMobile) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n            shouldAddLine: shouldAddLine,\n            onMouseEnter: function onMouseEnter() {\n              setOnHoverElement(title);\n              setSelectedTitle(title);\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.PositionArrow, {\n              color: titlesColor,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public_navArrow_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this);\n        } else {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_BurgerMenuButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_sideMainMenu__WEBPACK_IMPORTED_MODULE_7__.SideMenu, {\n              backgroundColor: backgroundColor,\n              titlesColor: \"\",\n              children: undefined,\n              titles: []\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true);\n        }\n      }\n\n      if (title === 'Contact Us') {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonWithArrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          buttonLabel: 'Contact Us',\n          redirectTo: '/contacts',\n          padding: '11.5px 14.5px;'\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this);\n      }\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Ul, {\n        shouldAddLine: shouldAddLine,\n        onMouseEnter: function onMouseEnter() {\n          setOnHoverElement(title);\n          setSelectedTitle(title);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return setOnSelectedMenu(null);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Li, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\".concat(title.toLowerCase()),\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"1Jwd0RakRANFBCy5XE2lcbVVXBs=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2EsVUFBVCxPQU9FO0FBQUE7O0FBQUE7O0FBQUEsTUFOQUMsTUFNQSxRQU5BQSxNQU1BO0FBQUEsTUFMQUMsV0FLQSxRQUxBQSxXQUtBO0FBQUEsTUFKQUMsaUJBSUEsUUFKQUEsaUJBSUE7QUFBQSxNQUhBQyxjQUdBLFFBSEFBLGNBR0E7QUFBQSxNQUZBQyxpQkFFQSxRQUZBQSxpQkFFQTtBQUFBLE1BREFDLGVBQ0EsUUFEQUEsZUFDQTs7QUFDQSxrQkFBMENYLCtDQUFRLENBQWdCLElBQWhCLENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWlDYiwrQ0FBUSxDQUE0QixJQUE1QixDQUF6QztBQUFBLE1BQVFjLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQWdDZiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9nQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTW1CLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDbkIsMkVBQUEsQ0FBaUMsSUFBakMsRUFBdUMsRUFBdkMsQ0FBckI7QUFDQSxRQUFNYyxRQUFRLEdBQUdLLFdBQVcsR0FBR0gsS0FBL0I7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxHQUxRLEVBS1AsRUFMTyxDQUFUO0FBT0FqQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGdCLElBQUFBLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDbUIsSUFBUCxDQUFZLFVBQUNDLEtBQUQ7QUFBQSxhQUFXUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0gsS0FBSyxDQUFDSSxXQUFOLEVBQWxDLENBQVg7QUFBQSxLQUFaLENBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRXZCLFdBQVo7QUFBQSxjQUNHRCxNQUFNLENBQUN5QixHQUFQLENBQVcsVUFBQ0wsS0FBRCxFQUFnQk0sS0FBaEIsRUFBa0M7QUFDNUMsVUFBTUMsYUFBYSxHQUFHckIsYUFBYSxLQUFLYyxLQUFsQixJQUEyQmpCLGNBQWMsS0FBS2lCLEtBQTlDLElBQXVEQSxLQUFLLEtBQUtaLFFBQXZGOztBQUVBLFVBQ0VZLEtBQUssS0FBSyxVQUFWLElBQ0FBLEtBQUssS0FBSyxXQURWLElBRUFBLEtBQUssS0FBSyxTQUhaLEVBSUU7QUFDQSxZQUFJLENBQUNWLFFBQUwsRUFBZTtBQUNiLDhCQUNFLDhEQUFDLHVDQUFEO0FBQ0UseUJBQWEsRUFBRWlCLGFBRGpCO0FBR0Usd0JBQVksRUFBRSx3QkFBTTtBQUNsQnpCLGNBQUFBLGlCQUFpQixDQUFDa0IsS0FBRCxDQUFqQjtBQUNBYixjQUFBQSxnQkFBZ0IsQ0FBQ2EsS0FBRCxDQUFoQjtBQUNELGFBTkg7QUFBQSxvQ0FRRSw4REFBQyx1Q0FBRDtBQUFBLHdCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFVRSw4REFBQyxrREFBRDtBQUFlLG1CQUFLLEVBQUVuQixXQUF0QjtBQUFBLHFDQUNFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUEsYUFFT3lCLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWdCRCxTQWpCRCxNQWlCTztBQUNMLDhCQUNFO0FBQUEsb0NBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQVUsNkJBQWUsRUFBRXJCLGVBQTNCO0FBQTRDLHlCQUFXLEVBQUUsRUFBekQ7QUFBNkQsc0JBQVEsRUFBRXVCLFNBQXZFO0FBQWtGLG9CQUFNLEVBQUU7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLDBCQURGO0FBTUQ7QUFDRjs7QUFFRCxVQUFJUixLQUFLLEtBQUssWUFBZCxFQUE0QjtBQUMxQiw0QkFDRSw4REFBQyx3REFBRDtBQUVFLHFCQUFXLEVBQUUsWUFGZjtBQUdFLG9CQUFVLEVBQUUsV0FIZDtBQUlFLGlCQUFPLEVBQUU7QUFKWCxXQUNPTSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFRRDs7QUFFRCwwQkFDRSw4REFBQyx1Q0FBRDtBQUNFLHFCQUFhLEVBQUVDLGFBRGpCO0FBR0Usb0JBQVksRUFBRSx3QkFBTTtBQUNsQnpCLFVBQUFBLGlCQUFpQixDQUFDa0IsS0FBRCxDQUFqQjtBQUNBYixVQUFBQSxnQkFBZ0IsQ0FBQ2EsS0FBRCxDQUFoQjtBQUNELFNBTkg7QUFRRSxvQkFBWSxFQUFFO0FBQUEsaUJBQU1oQixpQkFBaUIsQ0FBQyxJQUFELENBQXZCO0FBQUEsU0FSaEI7QUFBQSwrQkFVRSw4REFBQyx1Q0FBRDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksYUFBTWdCLEtBQUssQ0FBQ0ksV0FBTixFQUFOLENBQVY7QUFBQSxzQkFDR0o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLFNBRU9NLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELEtBaEVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUVEOztHQTVGUTNCOztLQUFBQTtBQThGVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5NZW51L25hdmlnYXRpb24vbmF2aWdhdGlvbi50c3g/NDNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOYXYsXG4gIFVsLFxuICBMaSxcbiAgUG9zaXRpb25BcnJvd1xufSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IElOYXZpZ2F0aW9uIH0gZnJvbSBcIkBpbnRlcmZhY2VzXCI7XG5pbXBvcnQgQnV0dG9uV2l0aEFycm93IGZyb20gXCIuLi8uLi9CdXR0b25XaXRoQXJyb3dcIjtcbmltcG9ydCBBcnJvdyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL25hdkFycm93LnN2Z1wiXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IEhhbWJ1cmdlckJ1dHRvbiBmcm9tIFwiLi4vLi4vQnVyZ2VyTWVudUJ1dHRvblwiO1xuaW1wb3J0IHsgU2lkZU1lbnUgfSBmcm9tIFwiLi4vc2lkZU1haW5NZW51XCI7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oeyBcbiAgdGl0bGVzLCBcbiAgdGl0bGVzQ29sb3IsIFxuICBzZXRPbkhvdmVyRWxlbWVudCwgXG4gIG9uU2VsZWN0ZWRNZW51LCBcbiAgc2V0T25TZWxlY3RlZE1lbnUsIFxuICBiYWNrZ3JvdW5kQ29sb3IgfTogSU5hdmlnYXRpb24pIFxuICB7XG4gIGNvbnN0IFtzZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCAgW3VybFRpdGxlLCBzZXRVcmxUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZTxib29sZWFuPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9ICt0aGVtZS5icmVha3BvaW50cy5tb2JpbGUucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSBtb2JpbGVXaWR0aCA+IHdpZHRoO1xuICAgIHNldElzTW9iaWxlKGlzTW9iaWxlKTtcbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVcmxUaXRsZSh0aXRsZXMuZmluZCgodGl0bGUpID0+IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKSkpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxOYXYgY29sb3I9e3RpdGxlc0NvbG9yfT5cbiAgICAgIHt0aXRsZXMubWFwKCh0aXRsZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpbmUgPSBzZWxlY3RlZFRpdGxlID09PSB0aXRsZSAmJiBvblNlbGVjdGVkTWVudSA9PT0gdGl0bGUgfHwgdGl0bGUgPT09IHVybFRpdGxlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aXRsZSA9PT0gXCJTZXJ2aWNlc1wiIHx8XG4gICAgICAgICAgdGl0bGUgPT09IFwiRXhwZXJ0aXNlXCIgfHxcbiAgICAgICAgICB0aXRsZSA9PT0gXCJDb21wYW55XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCFpc01vYmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFVsXG4gICAgICAgICAgICAgICAgc2hvdWxkQWRkTGluZT17c2hvdWxkQWRkTGluZX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T25Ib3ZlckVsZW1lbnQodGl0bGUpO1xuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZSh0aXRsZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaT57dGl0bGV9PC9MaT5cbiAgXG4gICAgICAgICAgICAgICAgPFBvc2l0aW9uQXJyb3cgY29sb3I9e3RpdGxlc0NvbG9yfT5cbiAgICAgICAgICAgICAgICAgIDxBcnJvdy8+XG4gICAgICAgICAgICAgICAgPC9Qb3NpdGlvbkFycm93PlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPFNpZGVNZW51IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSB0aXRsZXNDb2xvcj17XCJcIn0gY2hpbGRyZW49e3VuZGVmaW5lZH0gdGl0bGVzPXtbXX0gLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnQ29udGFjdCBVcycpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbldpdGhBcnJvd1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBidXR0b25MYWJlbD17J0NvbnRhY3QgVXMnfVxuICAgICAgICAgICAgICByZWRpcmVjdFRvPXsnL2NvbnRhY3RzJ31cbiAgICAgICAgICAgICAgcGFkZGluZz17JzExLjVweCAxNC41cHg7J31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFVsXG4gICAgICAgICAgICBzaG91bGRBZGRMaW5lPXtzaG91bGRBZGRMaW5lfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPbkhvdmVyRWxlbWVudCh0aXRsZSk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkVGl0bGUodGl0bGUpO1xuICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPblNlbGVjdGVkTWVudShudWxsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt0aXRsZS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgIDwvVWw+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L05hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIk5hdiIsIlVsIiwiTGkiLCJQb3NpdGlvbkFycm93IiwiQnV0dG9uV2l0aEFycm93IiwiQXJyb3ciLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInRoZW1lIiwiSGFtYnVyZ2VyQnV0dG9uIiwiU2lkZU1lbnUiLCJOYXZpZ2F0aW9uIiwidGl0bGVzIiwidGl0bGVzQ29sb3IiLCJzZXRPbkhvdmVyRWxlbWVudCIsIm9uU2VsZWN0ZWRNZW51Iiwic2V0T25TZWxlY3RlZE1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsInVybFRpdGxlIiwic2V0VXJsVGl0bGUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInJlcGxhY2UiLCJmaW5kIiwidGl0bGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImluZGV4Iiwic2hvdWxkQWRkTGluZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/navigation/navigation.tsx\n");

/***/ }),

/***/ "./components/mainMenu/sideMainMenu/index.tsx":
/*!****************************************************!*\
  !*** ./components/mainMenu/sideMainMenu/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenu\": function() { return /* binding */ SideMenu; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/context/mainMenu */ \"./services/context/mainMenu.tsx\");\n/* harmony import */ var _mainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainMenu */ \"./components/mainMenu/mainMenu.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/mainMenu/sideMainMenu/styles.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/incora website/incora-FE/components/mainMenu/sideMainMenu/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar titles = [\"Services\", \"Expertise\", \"Case Studies\", \"Company\", \"Insights\", \"Contact Us\"];\nvar SideMenu = function SideMenu(_ref) {\n  _s();\n\n  var backgroundColor = _ref.backgroundColor,\n      titlesColor = _ref.titlesColor,\n      children = _ref.children;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_services_context_mainMenu__WEBPACK_IMPORTED_MODULE_1__.MenuContext),\n      isMenuOpen = _useContext.isMenuOpen;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n    open: isMenuOpen,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mainMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      backgroundColor: backgroundColor,\n      titlesColor: titlesColor,\n      children: children,\n      titles: titles\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SideMenu, \"AgFn8K/yZAq5NVmSeJSS48O7ADg=\");\n\n_c = SideMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUVBOztBQUVBLElBQU1LLE1BQU0sR0FBRyxDQUNiLFVBRGEsRUFFYixXQUZhLEVBR2IsY0FIYSxFQUliLFNBSmEsRUFLYixVQUxhLEVBTWIsWUFOYSxDQUFmO0FBV08sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FJWDtBQUFBOztBQUFBLE1BSFRDLGVBR1MsUUFIVEEsZUFHUztBQUFBLE1BRlRDLFdBRVMsUUFGVEEsV0FFUztBQUFBLE1BRFRDLFFBQ1MsUUFEVEEsUUFDUzs7QUFDWCxvQkFBdUJSLGlEQUFVLENBQUNDLG1FQUFELENBQWpDO0FBQUEsTUFBUVEsVUFBUixlQUFRQSxVQUFSOztBQUVBLHNCQUNFLDhEQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFFQSxVQUFaO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFDRSxxQkFBZSxFQUFFSCxlQURuQjtBQUVFLGlCQUFXLEVBQUVDLFdBRmY7QUFHRSxjQUFRLEVBQUVDLFFBSFo7QUFJRSxZQUFNLEVBQUVKO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBakJNOztHQUFNQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluTWVudS9zaWRlTWFpbk1lbnUvaW5kZXgudHN4PzliYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2NvbnRleHQvbWFpbk1lbnUnO1xuaW1wb3J0IGFycm93IGZyb20gJy4uL2Fycm93LnN2Zyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi4vbWFpbk1lbnUnO1xuaW1wb3J0IHsgSU1lbnUgfSBmcm9tICdAaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCB0aXRsZXMgPSBbXG4gIFwiU2VydmljZXNcIixcbiAgXCJFeHBlcnRpc2VcIixcbiAgXCJDYXNlIFN0dWRpZXNcIixcbiAgXCJDb21wYW55XCIsXG4gIFwiSW5zaWdodHNcIixcbiAgXCJDb250YWN0IFVzXCIsXG5dO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJTWVudSB7fVxuXG5leHBvcnQgY29uc3QgU2lkZU1lbnUgPSAoeyBcbiAgICBiYWNrZ3JvdW5kQ29sb3IsIFxuICAgIHRpdGxlc0NvbG9yLFxuICAgIGNoaWxkcmVuXG59OlByb3BzICkgPT4ge1xuICBjb25zdCB7IGlzTWVudU9wZW4gfSA9IHVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgb3Blbj17aXNNZW51T3Blbn0+XG4gICAgICA8TWFpbk1lbnUgXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSBcbiAgICAgICAgdGl0bGVzQ29sb3I9e3RpdGxlc0NvbG9yfSBcbiAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufSBcbiAgICAgICAgdGl0bGVzPXt0aXRsZXN9XG4gICAgICAgIC8+XG4gICAgPC9NZW51PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIk1lbnVDb250ZXh0IiwiTWFpbk1lbnUiLCJNZW51IiwidGl0bGVzIiwiU2lkZU1lbnUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZXNDb2xvciIsImNoaWxkcmVuIiwiaXNNZW51T3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/sideMainMenu/index.tsx\n");

/***/ }),

/***/ "./components/mainMenu/sideMainMenu/styles.tsx":
/*!*****************************************************!*\
  !*** ./components/mainMenu/sideMainMenu/styles.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_Documents_incora_website_incora_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _templateObject;\n\n\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"styles__Menu\",\n  componentId: \"sc-l72254-0\"\n})([\"position:absolute;top:0px;left:0px;bottom:0px;z-index:293;display:block;width:400px;max-width:100%;margin-top:0px;padding-top:100px;padding-right:0px;align-items:stretch;background-color:#001698;transform:translateX(-100%);transition:all 0.3s cubic-bezier(0.645,0.045,0.355,1);\", \"\"], function (props) {\n  return props.open && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject || (_templateObject = (0,_Users_user_Documents_incora_website_incora_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      transform: translateX(0);\\n    \"])));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9zdHlsZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFNTyxJQUFNRSxJQUFJLEdBQUdGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtTQWlCYixVQUFDSSxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDQyxJQUFOLElBQ0FKLHNEQURBLCtQQURBO0FBQUEsQ0FqQmEsQ0FBViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5NZW51L3NpZGVNYWluTWVudS9zdHlsZXMudHN4PzA0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIElNZW51IHtcbiAgb3BlbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAyOTM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2OTg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAkeyhwcm9wczogSU1lbnUpICA9PlxuICAgIHByb3BzLm9wZW4gJiZcbiAgICBjc3NgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgYH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiTWVudSIsIm5hdiIsInByb3BzIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainMenu/sideMainMenu/styles.tsx\n");

/***/ })

});