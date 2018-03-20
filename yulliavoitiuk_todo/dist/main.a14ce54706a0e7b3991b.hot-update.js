webpackHotUpdate("main",{

/***/ "./Navigation.js":
/*!***********************!*\
  !*** ./Navigation.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar Navigation = exports.Navigation = function Navigation() {\n\treturn React.createElement(\n\t\t\"nav\",\n\t\tnull,\n\t\tReact.createElement(\n\t\t\t\"ul\",\n\t\t\tnull,\n\t\t\tReact.createElement(\n\t\t\t\t\"li\",\n\t\t\t\tnull,\n\t\t\t\t\"Home\"\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t\"li\",\n\t\t\t\tnull,\n\t\t\t\t\"Pages\"\n\t\t\t)\n\t\t)\n\t);\n};\n\n//# sourceURL=webpack:///./Navigation.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Navigation = __webpack_require__(/*! ./Navigation */ \"./Navigation.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar time = new Date().toLocaleTimeString();\nvar component = _react2.default.createElement(\n\t'div',\n\tnull,\n\t_react2.default.createElement(\n\t\t'h1',\n\t\tnull,\n\t\t'Hello, React! ',\n\t\ttime\n\t),\n\t_react2.default.createElement(_Navigation.Navigation, null)\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})