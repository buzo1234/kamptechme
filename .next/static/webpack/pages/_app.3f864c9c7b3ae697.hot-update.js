"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/index.tsx":
/*!*******************************!*\
  !*** ./src/layouts/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.tsx\");\n/* harmony import */ var _components_Footer_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer/data */ \"./src/components/Footer/data.ts\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n\n\n\n\nconst navData = {\n    links: [\n        {\n            link: \"/\",\n            label: \"Home\"\n        },\n        {\n            link: \"/\",\n            label: \"Products\",\n            links: [\n                {\n                    link: \"#air_purification\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconBuildingCarousel,\n                    label: \"Air Purification\"\n                },\n                {\n                    link: \"#water_solutions\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconDropletFilled,\n                    label: \"Water Solutions\"\n                },\n                {\n                    link: \"#\",\n                    icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconCpu,\n                    label: \"IT Solutions\"\n                }\n            ]\n        },\n        {\n            link: \"/about\",\n            label: \"About us\"\n        },\n        {\n            link: \"/contact\",\n            label: \"Contact us\"\n        }\n    ]\n};\nfunction Layout(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Navbar, {\n                links: navData.links\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                data: _components_Footer_data__WEBPACK_IMPORTED_MODULE_2__.data.data\n            }, void 0, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\layouts\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUNFO0FBQ3VDO0FBS3ZGLE1BQU1NLFVBQVU7SUFDZEMsT0FBTztRQUNMO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1lBQ1BGLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05FLE1BQU1OLHFFQUFvQkE7b0JBQzFCSyxPQUFPO2dCQUNUO2dCQUNBO29CQUNFRCxNQUFNO29CQUNORSxNQUFNUCxrRUFBaUJBO29CQUN2Qk0sT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkUsTUFBTUwsd0RBQU9BO29CQUNiSSxPQUFPO2dCQUNUO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7S0FDRDtBQUNIO0FBQ2UsU0FBU0UsT0FBTyxLQUF5QixFQUFFO1FBQTNCLEVBQUVDLFNBQVEsRUFBZSxHQUF6QjtJQUM3QixxQkFDRTs7MEJBQ0UsOERBQUNaLCtDQUFNQTtnQkFBQ08sT0FBT0QsUUFBUUMsS0FBSzs7Ozs7OzBCQUM1Qiw4REFBQ007MEJBQU1EOzs7Ozs7MEJBQ1AsOERBQUNYLCtDQUFNQTtnQkFBQ0MsTUFBTUEsOERBQVM7Ozs7Ozs7O0FBRzdCLENBQUM7S0FSdUJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL2luZGV4LnRzeD85Y2YzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhciwgRm9vdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXIvZGF0YVwiO1xyXG5pbXBvcnQgeyBJY29uRHJvcGxldEZpbGxlZCwgSWNvbkJ1aWxkaW5nQ2Fyb3VzZWwsSWNvbkNwdSAgfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xyXG5cclxudHlwZSBMYXlvdXRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5jb25zdCBuYXZEYXRhID0ge1xyXG4gIGxpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgbGFiZWw6IFwiUHJvZHVjdHNcIixcclxuICAgICAgbGlua3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsaW5rOiBcIiNhaXJfcHVyaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICBpY29uOiBJY29uQnVpbGRpbmdDYXJvdXNlbCxcclxuICAgICAgICAgIGxhYmVsOiBcIkFpciBQdXJpZmljYXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxpbms6IFwiI3dhdGVyX3NvbHV0aW9uc1wiLFxyXG4gICAgICAgICAgaWNvbjogSWNvbkRyb3BsZXRGaWxsZWQsXHJcbiAgICAgICAgICBsYWJlbDogXCJXYXRlciBTb2x1dGlvbnNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxpbms6IFwiI1wiLFxyXG4gICAgICAgICAgaWNvbjogSWNvbkNwdSxcclxuICAgICAgICAgIGxhYmVsOiBcIklUIFNvbHV0aW9uc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsaW5rOiBcIi9hYm91dFwiLFxyXG4gICAgICBsYWJlbDogXCJBYm91dCB1c1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGluazogXCIvY29udGFjdFwiLFxyXG4gICAgICBsYWJlbDogXCJDb250YWN0IHVzXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgbGlua3M9e25hdkRhdGEubGlua3N9IC8+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDxGb290ZXIgZGF0YT17ZGF0YS5kYXRhfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiZGF0YSIsIkljb25Ecm9wbGV0RmlsbGVkIiwiSWNvbkJ1aWxkaW5nQ2Fyb3VzZWwiLCJJY29uQ3B1IiwibmF2RGF0YSIsImxpbmtzIiwibGluayIsImxhYmVsIiwiaWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/index.tsx\n"));

/***/ })

});