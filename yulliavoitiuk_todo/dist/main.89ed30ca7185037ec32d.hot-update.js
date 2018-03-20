webpackHotUpdate("main",{

/***/ "./Navigation/Navigation.js":
/*!**********************************!*\
  !*** ./Navigation/Navigation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Navigation = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./navigation.scss */ \"./Navigation/navigation.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navigation = exports.Navigation = function Navigation() {\n\treturn _react2.default.createElement(\n\t\t'nav',\n\t\t{ className: 'main-nav' },\n\t\t_react2.default.createElement(\n\t\t\t'ul',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'li',\n\t\t\t\tnull,\n\t\t\t\t'Home'\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'li',\n\t\t\t\tnull,\n\t\t\t\t'Pages'\n\t\t\t)\n\t\t)\n\t);\n};\n\n//# sourceURL=webpack:///./Navigation/Navigation.js?");

/***/ }),

/***/ "./Navigation/index.js":
/*!*****************************!*\
  !*** ./Navigation/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Navigation = __webpack_require__(/*! ./Navigation */ \"./Navigation/Navigation.js\");\n\nObject.keys(_Navigation).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Navigation[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Navigation/index.js?");

/***/ }),

/***/ "./Navigation/navigation.scss":
/*!************************************!*\
  !*** ./Navigation/navigation.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Navigation/navigation.scss?");

/***/ })

})