/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu/MenuSection.jsx":
/*!*****************************************!*\
  !*** ./components/Menu/MenuSection.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kit_Documents_MERN_Fiasco_Restaurant_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Menu.module.css */ \"./styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db.json */ \"./db.json\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem */ \"./components/Menu/MenuItem.jsx\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Categories */ \"./components/Menu/Categories.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kit/Documents/MERN/Fiasco-Restaurant/components/Menu/MenuSection.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MenuSection() {\n  _s();\n\n  var _this = this;\n\n  var allCategories = ['all'].concat((0,_home_kit_Documents_MERN_Fiasco_Restaurant_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(new Set(_db_json__WEBPACK_IMPORTED_MODULE_3__.menuItems.map(function (item) {\n    return item.category;\n  }))));\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_db_json__WEBPACK_IMPORTED_MODULE_3__.menuItems),\n      menuItems = _useState[0],\n      setMenuItems = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(allCategories),\n      categories = _useState2[0];\n\n  var filterMenu = function filterMenu(category) {\n    if (category === 'all') {\n      setMenuItems(_db_json__WEBPACK_IMPORTED_MODULE_3__.menuItems);\n    } else {\n      var newItems = _db_json__WEBPACK_IMPORTED_MODULE_3__.menuItems.filter(function (item) {\n        return item.category === category;\n      });\n      setMenuItems(newItems);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n    id: \"menu\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n        children: \"Our Menu\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_5__.default, {\n          categories: categories,\n          filterMenu: filterMenu\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuContainer),\n        children: [menuItems.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_4__.default, {\n            title: item.title,\n            image: item.image,\n            price: item.price\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, _this);\n        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(MenuSection, \"WsG6S82Jchvj7/FTDvZofeC7rYQ=\");\n\n_c = MenuSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L01lbnVTZWN0aW9uLmpzeD8xNjM2Il0sIm5hbWVzIjpbIk1lbnVTZWN0aW9uIiwiYWxsQ2F0ZWdvcmllcyIsIlNldCIsImRhdGEiLCJpdGVtIiwiY2F0ZWdvcnkiLCJ1c2VTdGF0ZSIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsImNhdGVnb3JpZXMiLCJmaWx0ZXJNZW51IiwibmV3SXRlbXMiLCJzdHlsZXMiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaW1hZ2UiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFFbEMsTUFBTUMsYUFBYSxJQUFJLEtBQUosc0pBQWMsSUFBSUMsR0FBSixDQUFRQyxtREFBQSxDQUFtQixVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxRQUFmO0FBQUEsR0FBbkIsQ0FBUixDQUFkLEVBQW5COztBQUZrQyxrQkFHQUMsK0NBQVEsQ0FBQ0gsK0NBQUQsQ0FIUjtBQUFBLE1BRzNCSSxTQUgyQjtBQUFBLE1BR2hCQyxZQUhnQjs7QUFBQSxtQkFJYkYsK0NBQVEsQ0FBQ0wsYUFBRCxDQUpLO0FBQUEsTUFJM0JRLFVBSjJCOztBQU1sQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxRQUFELEVBQWM7QUFDN0IsUUFBR0EsUUFBUSxLQUFLLEtBQWhCLEVBQXNCO0FBQ2xCRyxrQkFBWSxDQUFDTCwrQ0FBRCxDQUFaO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsVUFBTVEsUUFBUSxHQUFHUixzREFBQSxDQUFzQixVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDQyxRQUFMLEtBQWtCQSxRQUE1QjtBQUFBLE9BQXRCLENBQWpCO0FBQ0FHLGtCQUFZLENBQUNHLFFBQUQsQ0FBWjtBQUNIO0FBQ0osR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMscUVBQWhCO0FBQTZCLE1BQUUsRUFBQyxNQUFoQztBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQSx1RUFBaEI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU1JO0FBQUssZUFBUyxFQUFFQSwwRUFBaEI7QUFBQSw4QkFDSTtBQUFBLCtCQUNJLDhEQUFDLGdEQUFEO0FBQ0ksb0JBQVUsRUFBRUgsVUFEaEI7QUFFSSxvQkFBVSxFQUFFQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBT0k7QUFBSyxpQkFBUyxFQUFFRSw4RUFBaEI7QUFBQSxtQkFDQ0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQ1QsSUFBRCxFQUFPVSxLQUFQO0FBQUEsOEJBQ1gsOERBQUMsOENBQUQ7QUFFSSxpQkFBSyxFQUFFVixJQUFJLENBQUNXLEtBRmhCO0FBR0ksaUJBQUssRUFBRVgsSUFBSSxDQUFDWSxLQUhoQjtBQUlJLGlCQUFLLEVBQUVaLElBQUksQ0FBQ2E7QUFKaEIsYUFDU0gsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBZCxDQURELGVBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDs7R0EzQ3VCZCxXOztLQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NZW51L01lbnVTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9NZW51Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vZGIuanNvbic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSc7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL0NhdGVnb3JpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51U2VjdGlvbigpIHtcblxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbJ2FsbCcsIC4uLm5ldyBTZXQoZGF0YS5tZW51SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5KSldO1xuICAgIGNvbnN0IFttZW51SXRlbXMsIHNldE1lbnVJdGVtc10gPSB1c2VTdGF0ZShkYXRhLm1lbnVJdGVtcyk7XG4gICAgY29uc3QgW2NhdGVnb3JpZXNdID0gdXNlU3RhdGUoYWxsQ2F0ZWdvcmllcyk7XG5cbiAgICBjb25zdCBmaWx0ZXJNZW51ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKGNhdGVnb3J5ID09PSAnYWxsJyl7XG4gICAgICAgICAgICBzZXRNZW51SXRlbXMoZGF0YS5tZW51SXRlbXMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gZGF0YS5tZW51SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG4gICAgICAgICAgICBzZXRNZW51SXRlbXMobmV3SXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fSBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8aDQ+T3VyIE1lbnU8L2g0PlxuICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9kaXQsIG51bGxhLjwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNZW51PXtmaWx0ZXJNZW51fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu/MenuSection.jsx\n");

/***/ })

});