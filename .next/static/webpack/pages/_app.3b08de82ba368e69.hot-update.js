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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({\n        footer: {\n            paddingTop: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            paddingBottom: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[6] : theme.colors.gray[0],\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[5] : theme.colors.gray[2])\n        },\n        logo: {\n            maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(200),\n            [theme.fn.smallerThan(\"sm\")]: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        description: {\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(5),\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xs,\n                textAlign: \"center\"\n            }\n        },\n        inner: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            [theme.fn.smallerThan(\"sm\")]: {\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            }\n        },\n        groups: {\n            display: \"flex\",\n            flexWrap: \"wrap\",\n            [theme.fn.smallerThan(\"sm\")]: {\n                display: \"none\"\n            }\n        },\n        wrapper: {\n            width: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(160)\n        },\n        link: {\n            display: \"block\",\n            color: theme.colorScheme === \"dark\" ? theme.colors.dark[1] : theme.colors.gray[6],\n            fontSize: theme.fontSizes.sm,\n            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(3),\n            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(3),\n            \"&:hover\": {\n                textDecoration: \"underline\"\n            }\n        },\n        title: {\n            fontSize: theme.fontSizes.lg,\n            fontWeight: 700,\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            marginBottom: \"calc(\".concat(theme.spacing.xs, \" / 2)\"),\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black\n        },\n        afterFooter: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            marginTop: theme.spacing.xl,\n            paddingTop: theme.spacing.xl,\n            paddingBottom: theme.spacing.xl,\n            borderTop: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(1), \" solid \").concat(theme.colorScheme === \"dark\" ? theme.colors.dark[4] : theme.colors.gray[2]),\n            [theme.fn.smallerThan(\"sm\")]: {\n                flexDirection: \"column\"\n            }\n        },\n        social: {\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xs\n            }\n        }\n    }));\nconst Footer = (param)=>{\n    let { data  } = param;\n    _s();\n    const { classes  } = useStyles();\n    const groups = data.map((group)=>{\n        const links = group.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                className: classes.link,\n                component: \"a\",\n                href: link.link,\n                onClick: (event)=>event.preventDefault(),\n                children: link.label\n            }, index, false, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classes.wrapper,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    className: classes.title,\n                    children: group.title\n                }, void 0, false, {\n                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined),\n                links\n            ]\n        }, group.title, true, {\n            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n            lineNumber: 142,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: classes.footer,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: classes.inner,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.logo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                        src: \"logo.png\",\n                                        width: \"30px\",\n                                        alt: \"logo...\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        fw: 700,\n                                        style: {\n                                            letterSpacing: \"1.8\"\n                                        },\n                                        children: \"Kamptech\"\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                size: \"xs\",\n                                color: \"dimmed\",\n                                className: classes.description,\n                                children: \"Designing technology for sustainable future!\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.groups,\n                        children: groups\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: classes.afterFooter,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        children: \"\\xa9 2023 Kamptech.Sol. All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                        spacing: 0,\n                        className: classes.social,\n                        position: \"right\",\n                        noWrap: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {\n                            size: \"lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconBrandInstagram, {\n                                    size: \"1.05rem\",\n                                    stroke: 1.5\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                                    lineNumber: 185,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                            lineNumber: 182,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\kamptech\\\\kamptech\\\\src\\\\components\\\\Footer\\\\index.tsx\",\n        lineNumber: 150,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Footer, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQVkvQixPQUFPO3dDQUFRZ0MsS0FBSTs7Ozs7O2tEQUMzQyw4REFBQ3JFLCtDQUFJQTt3Q0FDSHNFLElBQUk7d0NBQ0pDLE9BQU87NENBQ0xDLGVBQWU7d0NBQ2pCO2tEQUNEOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUN4RSwrQ0FBSUE7Z0NBQUN5RSxNQUFLO2dDQUFLbEMsT0FBTTtnQ0FBU3FCLFdBQVdMLFFBQVEzQixXQUFXOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBSWpFLDhEQUFDdUM7d0JBQUlQLFdBQVdMLFFBQVFyQixNQUFNO2tDQUFHQTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ2pDLG9EQUFTQTtnQkFBQzJELFdBQVdMLFFBQVFKLFdBQVc7O2tDQUN2Qyw4REFBQ25ELCtDQUFJQTt3QkFBQ3VDLE9BQU07d0JBQVNrQyxNQUFLO2tDQUFLOzs7Ozs7a0NBSS9CLDhEQUFDdEUsZ0RBQUtBO3dCQUFDUyxTQUFTO3dCQUFHZ0QsV0FBV0wsUUFBUUgsTUFBTTt3QkFBRXNCLFVBQVM7d0JBQVFDLE1BQU07a0NBT25FLDRFQUFDekUscURBQVVBOzRCQUFDdUUsTUFBSzs7OENBQ2YsOERBQUNsRSxrREFBSUE7Ozs7OzhDQUVMLDhEQUFDRCxtRUFBa0JBO29DQUFDbUUsTUFBSztvQ0FBVUcsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkQ7R0FsRU12Qjs7UUFDZ0I3Qzs7O0tBRGhCNkM7QUFvRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeD8wNTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlU3R5bGVzLFxyXG4gIFRleHQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEFjdGlvbkljb24sXHJcbiAgR3JvdXAsXHJcbiAgSW1hZ2UsXHJcbiAgcmVtLFxyXG59IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgSWNvbkJyYW5kVHdpdHRlcixcclxuICBJY29uQnJhbmRZb3V0dWJlLFxyXG4gIEljb25CcmFuZEluc3RhZ3JhbSxcclxufSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgcGFkZGluZ1RvcDogYGNhbGMoJHt0aGVtZS5zcGFjaW5nLnhsfSAqIDIpYCxcclxuICAgIHBhZGRpbmdCb3R0b206IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54bH0gKiAyKWAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgID8gdGhlbWUuY29sb3JzLmRhcmtbNl1cclxuICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxyXG4gICAgYm9yZGVyVG9wOiBgJHtyZW0oMSl9IHNvbGlkICR7XHJcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzVdIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cclxuICAgIH1gLFxyXG4gIH0sXHJcblxyXG4gIGxvZ286IHtcclxuICAgIG1heFdpZHRoOiByZW0oMjAwKSxcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHJlbSg1KSxcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnhzLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGlubmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZ3JvdXBzOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuXHJcbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiByZW0oMTYwKSxcclxuICB9LFxyXG5cclxuICBsaW5rOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBjb2xvcjpcclxuICAgICAgdGhlbWUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiXHJcbiAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1sxXVxyXG4gICAgICAgIDogdGhlbWUuY29sb3JzLmdyYXlbNl0sXHJcbiAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxyXG4gICAgcGFkZGluZ1RvcDogcmVtKDMpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogcmVtKDMpLFxyXG5cclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRGYW1pbHk6IGBHcmV5Y2xpZmYgQ0YsICR7dGhlbWUuZm9udEZhbWlseX1gLFxyXG4gICAgbWFyZ2luQm90dG9tOiBgY2FsYygke3RoZW1lLnNwYWNpbmcueHN9IC8gMilgLFxyXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLndoaXRlIDogdGhlbWUuYmxhY2ssXHJcbiAgfSxcclxuXHJcbiAgYWZ0ZXJGb290ZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54bCxcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcueGwsXHJcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nLnhsLFxyXG4gICAgYm9yZGVyVG9wOiBgJHtyZW0oMSl9IHNvbGlkICR7XHJcbiAgICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzRdIDogdGhlbWUuY29sb3JzLmdyYXlbMl1cclxuICAgIH1gLFxyXG5cclxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInNtXCIpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzb2NpYWw6IHtcclxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbihcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyTGlua3NQcm9wcyB7XHJcbiAgZGF0YToge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGxpbmtzOiB7IGxhYmVsOiBzdHJpbmc7IGxpbms6IHN0cmluZyB9W107XHJcbiAgfVtdO1xyXG59XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBkYXRhIH06IEZvb3RlckxpbmtzUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBncm91cHMgPSBkYXRhLm1hcCgoZ3JvdXApID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gZ3JvdXAubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICA8VGV4dDxcImFcIj5cclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgIGhyZWY9e2xpbmsubGlua31cclxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgID5cclxuICAgICAgICB7bGluay5sYWJlbH1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0ga2V5PXtncm91cC50aXRsZX0+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57Z3JvdXAudGl0bGV9PC9UZXh0PlxyXG4gICAgICAgIHtsaW5rc31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcImxvZ28ucG5nXCJ9IHdpZHRoPXtcIjMwcHhcIn0gYWx0PVwibG9nby4uLlwiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgZnc9ezcwMH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIxLjhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS2FtcHRlY2hcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Hcm91cD5cclxuICAgICAgICAgIDxUZXh0IHNpemU9XCJ4c1wiIGNvbG9yPVwiZGltbWVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgRGVzaWduaW5nIHRlY2hub2xvZ3kgZm9yIHN1c3RhaW5hYmxlIGZ1dHVyZSFcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm91cHN9Pntncm91cHN9PC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZnRlckZvb3Rlcn0+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgIMKpIDIwMjMgS2FtcHRlY2guU29sLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPEdyb3VwIHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWx9IHBvc2l0aW9uPVwicmlnaHRcIiBub1dyYXA+XHJcbiAgICAgICAgICB7LyogPEFjdGlvbkljb24gc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIDxJY29uQnJhbmRUd2l0dGVyIHNpemU9XCIxLjA1cmVtXCIgc3Ryb2tlPXsxLjV9IC8+XHJcbiAgICAgICAgICA8L0FjdGlvbkljb24+XHJcbiAgICAgICAgICA8QWN0aW9uSWNvbiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgPEljb25CcmFuZFlvdXR1YmUgc2l6ZT1cIjEuMDVyZW1cIiBzdHJva2U9ezEuNX0gLz5cclxuICAgICAgICAgIDwvQWN0aW9uSWNvbj4gKi99XHJcbiAgICAgICAgICA8QWN0aW9uSWNvbiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPEljb25CcmFuZEluc3RhZ3JhbSBzaXplPVwiMS4wNXJlbVwiIHN0cm9rZT17MS41fSAvPlxyXG4gICAgICAgICAgPC9BY3Rpb25JY29uPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIlRleHQiLCJDb250YWluZXIiLCJBY3Rpb25JY29uIiwiR3JvdXAiLCJJbWFnZSIsInJlbSIsIkljb25CcmFuZEluc3RhZ3JhbSIsIkxpbmsiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwieGwiLCJwYWRkaW5nQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwiZ3JheSIsImJvcmRlclRvcCIsImxvZ28iLCJtYXhXaWR0aCIsImZuIiwic21hbGxlclRoYW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsInhzIiwidGV4dEFsaWduIiwiaW5uZXIiLCJqdXN0aWZ5Q29udGVudCIsImdyb3VwcyIsImZsZXhXcmFwIiwid3JhcHBlciIsIndpZHRoIiwibGluayIsImNvbG9yIiwiZm9udFNpemUiLCJmb250U2l6ZXMiLCJzbSIsInRleHREZWNvcmF0aW9uIiwidGl0bGUiLCJsZyIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwibWFyZ2luQm90dG9tIiwid2hpdGUiLCJibGFjayIsImFmdGVyRm9vdGVyIiwic29jaWFsIiwiRm9vdGVyIiwiZGF0YSIsImNsYXNzZXMiLCJtYXAiLCJncm91cCIsImxpbmtzIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJocmVmIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsYWJlbCIsImRpdiIsInNyYyIsImFsdCIsImZ3Iiwic3R5bGUiLCJsZXR0ZXJTcGFjaW5nIiwic2l6ZSIsInBvc2l0aW9uIiwibm9XcmFwIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/index.tsx\n"));

/***/ })

});