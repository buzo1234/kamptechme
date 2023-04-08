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

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({\n        footer: {\n            paddingTop: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            paddingBottom: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0],\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[2])\n        },\n        logo: {\n            maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(200),\n            [theme.fn.smallerThan(\"sm\")]: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        description: {\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(5),\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xs,\n                textAlign: \"center\"\n            }\n        },\n        inner: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            [theme.fn.smallerThan(\"sm\")]: {\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        groups: {\n            display: \"flex\",\n            flexWrap: \"wrap\",\n            [theme.fn.smallerThan(\"sm\")]: {\n                display: \"none\"\n            }\n        },\n        wrapper: {\n            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(160)\n        },\n        link: {\n            display: \"block\",\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[1] : theme.colors.gray[6],\n            fontSize: theme.fontSizes.sm,\n            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(3),\n            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(3),\n            \"&:hover\": {\n                textDecoration: \"underline\"\n            }\n        },\n        title: {\n            fontSize: theme.fontSizes.lg,\n            fontWeight: 700,\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            marginBottom: \"calc(\".concat(theme.spacing.xs, \" / 2)\"),\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        },\n        afterFooter: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            marginTop: theme.spacing.xl,\n            paddingTop: theme.spacing.xl,\n            paddingBottom: theme.spacing.xl,\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.gray[2]),\n            [theme.fn.smallerThan(\"sm\")]: {\n                flexDirection: \"column\"\n            }\n        },\n        social: {\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xs\n            }\n        }\n    }));\nconst Footer = (param)=>{\n    let { data  } = param;\n    _s();\n    const { classes  } = useStyles();\n    const groups = data.map((group)=>{\n        const links = group.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                className: classes.link,\n                component: \"a\",\n                href: link.link,\n                onClick: (event)=>event.preventDefault(),\n                children: link.label\n            }, index, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classes.wrapper,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    className: classes.title,\n                    children: group.title\n                }, void 0, false, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined),\n                links\n            ]\n        }, group.title, true, {\n            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n            lineNumber: 141,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: classes.footer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                className: classes.inner,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.logo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                        src: \"logo.png\",\n                                        width: \"30px\",\n                                        alt: \"logo...\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                        fw: 700,\n                                        style: {\n                                            letterSpacing: \"1.8\"\n                                        },\n                                        children: \"Kamptech\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                size: \"xs\",\n                                color: \"dimmed\",\n                                className: classes.description,\n                                children: \"Designing technology for sustainable\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.groups,\n                        children: groups\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                className: classes.afterFooter,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        children: \"\\xa9 2023 Kamptech.Sol. All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                        spacing: 0,\n                        className: classes.social,\n                        position: \"right\",\n                        noWrap: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandTwitter, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                    lineNumber: 176,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandYoutube, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                    lineNumber: 179,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ActionIcon, {\n                                size: \"lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconBrandInstagram, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                    lineNumber: 182,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Footer, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87d0NBQVFnQyxLQUFJOzs7Ozs7a0RBQzNDLDhEQUFDdEUsK0NBQUlBO3dDQUNIdUUsSUFBSTt3Q0FDSkMsT0FBTzs0Q0FDTEMsZUFBZTt3Q0FDakI7a0RBQ0Q7Ozs7Ozs7Ozs7OzswQ0FJSCw4REFBQ3pFLCtDQUFJQTtnQ0FBQzBFLE1BQUs7Z0NBQUtsQyxPQUFNO2dDQUFTcUIsV0FBV0wsUUFBUTNCLFdBQVc7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FJakUsOERBQUN1Qzt3QkFBSVAsV0FBV0wsUUFBUXJCLE1BQU07a0NBQUdBOzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDbEMsb0RBQVNBO2dCQUFDNEQsV0FBV0wsUUFBUUosV0FBVzs7a0NBQ3ZDLDhEQUFDcEQsK0NBQUlBO3dCQUFDd0MsT0FBTTt3QkFBU2tDLE1BQUs7a0NBQUs7Ozs7OztrQ0FJL0IsOERBQUN2RSxnREFBS0E7d0JBQUNVLFNBQVM7d0JBQUdnRCxXQUFXTCxRQUFRSCxNQUFNO3dCQUFFc0IsVUFBUzt3QkFBUUMsTUFBTTs7MENBQ25FLDhEQUFDMUUscURBQVVBO2dDQUFDd0UsTUFBSzswQ0FDZiw0RUFBQ3BFLGlFQUFnQkE7b0NBQUNvRSxNQUFLO29DQUFVRyxRQUFROzs7Ozs7Ozs7OzswQ0FFM0MsOERBQUMzRSxxREFBVUE7Z0NBQUN3RSxNQUFLOzBDQUNmLDRFQUFDbkUsaUVBQWdCQTtvQ0FBQ21FLE1BQUs7b0NBQVVHLFFBQVE7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQzNFLHFEQUFVQTtnQ0FBQ3dFLE1BQUs7MENBQ2YsNEVBQUNsRSxtRUFBa0JBO29DQUFDa0UsTUFBSztvQ0FBVUcsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkQ7R0FoRU12Qjs7UUFDZ0I3Qzs7O0tBRGhCNkM7QUFrRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeD8wNTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIFRleHQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEFjdGlvbkljb24sXHJcbiAgR3JvdXAsXHJcbiAgSW1hZ2UsXHJcbiAgcmVtLFxyXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgSWNvbkJyYW5kVHdpdHRlcixcclxuICBJY29uQnJhbmRZb3V0dWJlLFxyXG4gIEljb25CcmFuZEluc3RhZ3JhbSxcclxufSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIHBhZGRpbmdUb3A6IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54bH0gKiAyKWAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBgY2FsYygke3RoZW1lLnNwYWNpbmcueGx9ICogMilgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcclxuICAgICAgICA/IHRoZW1lLmNvbG9ycy5kYXJrWzZdXHJcbiAgICAgICAgOiB0aGVtZS5jb2xvcnMuZ3JheVswXSxcclxuICAgIGJvcmRlclRvcDogYCR7cmVtKDEpfSBzb2xpZCAke1xyXG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s1XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXHJcbiAgICB9YCxcclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICBtYXhXaWR0aDogcmVtKDIwMCksXHJcblxyXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiByZW0oNSksXHJcblxyXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54cyxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpbm5lcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcblxyXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwic21cIildOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGdyb3Vwczoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcblxyXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogcmVtKDE2MCksXHJcbiAgfSxcclxuXHJcbiAgbGluazoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgY29sb3I6XHJcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbMV1cclxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzZdLFxyXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5zbSxcclxuICAgIHBhZGRpbmdUb3A6IHJlbSgzKSxcclxuICAgIHBhZGRpbmdCb3R0b206IHJlbSgzKSxcclxuXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubGcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250RmFtaWx5OiBgR3JleWNsaWZmIENGLCAke3RoZW1lLmZvbnRGYW1pbHl9YCxcclxuICAgIG1hcmdpbkJvdHRvbTogYGNhbGMoJHt0aGVtZS5zcGFjaW5nLnhzfSAvIDIpYCxcclxuICAgIGNvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxyXG4gIH0sXHJcblxyXG4gIGFmdGVyRm9vdGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueGwsXHJcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnhsLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZy54bCxcclxuICAgIGJvcmRlclRvcDogYCR7cmVtKDEpfSBzb2xpZCAke1xyXG4gICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1s0XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzJdXHJcbiAgICB9YCxcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhzLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckxpbmtzUHJvcHMge1xyXG4gIGRhdGE6IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsaW5rczogeyBsYWJlbDogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xyXG4gIH1bXTtcclxufVxyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZGF0YSB9OiBGb290ZXJMaW5rc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgZ3JvdXBzID0gZGF0YS5tYXAoKGdyb3VwKSA9PiB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGdyb3VwLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgPFRleHQ8XCJhXCI+XHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICBocmVmPXtsaW5rLmxpbmt9XHJcbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9IGtleT17Z3JvdXAudGl0bGV9PlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2dyb3VwLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICB7bGlua3N9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCJsb2dvLnBuZ1wifSB3aWR0aD17XCIzMHB4XCJ9IGFsdD1cImxvZ28uLi5cIiAvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIGZ3PXs3MDB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMS44XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEthbXB0ZWNoXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvR3JvdXA+XHJcbiAgICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjb2xvcj1cImRpbW1lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIERlc2lnbmluZyB0ZWNobm9sb2d5IGZvciBzdXN0YWluYWJsZSBcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm91cHN9Pntncm91cHN9PC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZnRlckZvb3Rlcn0+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgIMKpIDIwMjMgS2FtcHRlY2guU29sLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWx9IHBvc2l0aW9uPVwicmlnaHRcIiBub1dyYXA+XHJcbiAgICAgICAgICA8QWN0aW9uSWNvbiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgPEljb25CcmFuZFR3aXR0ZXIgc2l6ZT1cIjEuMDVyZW1cIiBzdHJva2U9ezEuNX0gLz5cclxuICAgICAgICAgIDwvQWN0aW9uSWNvbj5cclxuICAgICAgICAgIDxBY3Rpb25JY29uIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8SWNvbkJyYW5kWW91dHViZSBzaXplPVwiMS4wNXJlbVwiIHN0cm9rZT17MS41fSAvPlxyXG4gICAgICAgICAgPC9BY3Rpb25JY29uPlxyXG4gICAgICAgICAgPEFjdGlvbkljb24gc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIDxJY29uQnJhbmRJbnN0YWdyYW0gc2l6ZT1cIjEuMDVyZW1cIiBzdHJva2U9ezEuNX0gLz5cclxuICAgICAgICAgIDwvQWN0aW9uSWNvbj5cclxuICAgICAgICA8L0dyb3VwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZXMiLCJUZXh0IiwiQ29udGFpbmVyIiwiQWN0aW9uSWNvbiIsIkdyb3VwIiwiSW1hZ2UiLCJyZW0iLCJJY29uQnJhbmRUd2l0dGVyIiwiSWNvbkJyYW5kWW91dHViZSIsIkljb25CcmFuZEluc3RhZ3JhbSIsInVzZVN0eWxlcyIsInRoZW1lIiwiZm9vdGVyIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJ4bCIsInBhZGRpbmdCb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsImRhcmsiLCJncmF5IiwiYm9yZGVyVG9wIiwibG9nbyIsIm1heFdpZHRoIiwiZm4iLCJzbWFsbGVyVGhhbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwieHMiLCJ0ZXh0QWxpZ24iLCJpbm5lciIsImp1c3RpZnlDb250ZW50IiwiZ3JvdXBzIiwiZmxleFdyYXAiLCJ3cmFwcGVyIiwid2lkdGgiLCJsaW5rIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRTaXplcyIsInNtIiwidGV4dERlY29yYXRpb24iLCJ0aXRsZSIsImxnIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJtYXJnaW5Cb3R0b20iLCJ3aGl0ZSIsImJsYWNrIiwiYWZ0ZXJGb290ZXIiLCJzb2NpYWwiLCJGb290ZXIiLCJkYXRhIiwiY2xhc3NlcyIsIm1hcCIsImdyb3VwIiwibGlua3MiLCJpbmRleCIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsImhyZWYiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiZGl2Iiwic3JjIiwiYWx0IiwiZnciLCJzdHlsZSIsImxldHRlclNwYWNpbmciLCJzaXplIiwicG9zaXRpb24iLCJub1dyYXAiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer/index.tsx\n"));

/***/ })

});