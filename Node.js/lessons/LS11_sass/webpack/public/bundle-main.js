/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _header = __webpack_require__(/*! ./modules/header */ \"./modules/header/index.js\");\n\nvar _main = __webpack_require__(/*! ./modules/main */ \"./modules/main/index.js\");\n\nvar _footer = __webpack_require__(/*! ./modules/footer */ \"./modules/footer/index.js\");\n\n__webpack_require__(/*! ./app.scss */ \"./app.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)('body').append(_header.header, _main.main, _footer.footer);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app.scss?");

/***/ }),

/***/ "./modules/elementBuilder.js":
/*!***********************************!*\
  !*** ./modules/elementBuilder.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.builder = undefined;\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar builder = exports.builder = function builder() {\n\tvar tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n\tvar className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\tvar content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n\n\tvar element = (0, _jquery2.default)('<' + tagName + '></' + tagName + '>');\n\telement.addClass(className);\n\telement.html(content);\n\n\treturn element;\n};\n\n//# sourceURL=webpack:///./modules/elementBuilder.js?");

/***/ }),

/***/ "./modules/footer/footer.js":
/*!**********************************!*\
  !*** ./modules/footer/footer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.footer = undefined;\n\nvar _elementBuilder = __webpack_require__(/*! ../elementBuilder */ \"./modules/elementBuilder.js\");\n\n__webpack_require__(/*! ./footer.scss */ \"./modules/footer/footer.scss\");\n\nvar html = '<p>NamiDorama 2020 (c)</p>';\n\nvar footer = exports.footer = (0, _elementBuilder.builder)('footer', 'footer', html);\n\n//# sourceURL=webpack:///./modules/footer/footer.js?");

/***/ }),

/***/ "./modules/footer/footer.scss":
/*!************************************!*\
  !*** ./modules/footer/footer.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/footer/footer.scss?");

/***/ }),

/***/ "./modules/footer/index.js":
/*!*********************************!*\
  !*** ./modules/footer/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _footer = __webpack_require__(/*! ./footer */ \"./modules/footer/footer.js\");\n\nObject.keys(_footer).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _footer[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./modules/footer/index.js?");

/***/ }),

/***/ "./modules/header/header.js":
/*!**********************************!*\
  !*** ./modules/header/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.header = undefined;\n\nvar _elementBuilder = __webpack_require__(/*! ../elementBuilder */ \"./modules/elementBuilder.js\");\n\n__webpack_require__(/*! ./header.scss */ \"./modules/header/header.scss\");\n\nvar html = '<a href=\"/\">Logo</a>';\n\nvar header = exports.header = (0, _elementBuilder.builder)('header', 'header', html);\n\n//# sourceURL=webpack:///./modules/header/header.js?");

/***/ }),

/***/ "./modules/header/header.scss":
/*!************************************!*\
  !*** ./modules/header/header.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/header/header.scss?");

/***/ }),

/***/ "./modules/header/index.js":
/*!*********************************!*\
  !*** ./modules/header/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _header = __webpack_require__(/*! ./header */ \"./modules/header/header.js\");\n\nObject.keys(_header).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _header[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./modules/header/index.js?");

/***/ }),

/***/ "./modules/main/index.js":
/*!*******************************!*\
  !*** ./modules/main/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _main = __webpack_require__(/*! ./main */ \"./modules/main/main.js\");\n\nObject.keys(_main).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _main[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./modules/main/index.js?");

/***/ }),

/***/ "./modules/main/main.js":
/*!******************************!*\
  !*** ./modules/main/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.main = undefined;\n\nvar _elementBuilder = __webpack_require__(/*! ../elementBuilder */ \"./modules/elementBuilder.js\");\n\n__webpack_require__(/*! ./main.scss */ \"./modules/main/main.scss\");\n\nvar date = new Date();\nvar nowDate = date.toLocaleString('ru', { day: 'numeric', month: \"long\", year: 'numeric' });\n\nvar html = '\\n\\t<h2>This is main block</h2>\\n\\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at doloribus ea itaque natus \\n\\tnumquam, odit omnis, praesentium qui quia quidem quis quos repellat tempora, velit vero voluptatem? Earum\\n\\t facere iusto nam praesentium saepe vero? Ad, consectetur corporis fugit necessitatibus possimus quam rem \\n\\t repellat rerum velit vitae. Aliquid asperiores aspernatur at beatae consectetur culpa cum cupiditate debitis\\n\\t  delectus deleniti distinctio dolorem doloremque earum eius est facere fuga harum, illo illum inventore, \\n\\t  ipsam, magnam maiores minus molestiae nam necessitatibus nobis officia officiis pariatur perferendis quasi\\n\\t   quisquam recusandae rerum sapiente similique velit veniam. Atque dicta ducimus ipsum quae quos reprehenderit \\n\\t   tempore veniam vero.</p>\\n\\t   <p>Ab accusantium aperiam assumenda atque consequatur deleniti deserunt dicta doloremque \\n\\t   dolores eaque est ex harum id inventore iusto labore molestias nam nesciunt nihil, nobis odio omnis optio \\n\\t   perferendis provident quaerat quas quis quod reiciendis sapiente similique sit soluta, tempora totam ullam \\n\\t   veniam voluptatem voluptates. </p>\\n\\t   <p>Assumenda beatae, commodi dolorum esse ipsum laboriosam maxime minima officia \\n\\t   optio pariatur perferendis quae quam, quis sed similique unde, velit. Ab accusantium, adipisci cupiditate \\n\\t   dignissimos dolore earum eligendi, enim error exercitationem facilis fuga fugit iure magni maiores mollitia \\n\\t   non odit omnis perspiciatis, quas rem rerum saepe sequi suscipit tempora temporibus veniam voluptatem! Ipsum \\n\\t   veniam, voluptatum!</p>\\n\\t<p class=\"date\">' + nowDate + '</p>\\n';\n\nvar main = exports.main = (0, _elementBuilder.builder)('main', 'main', html);\n\n//# sourceURL=webpack:///./modules/main/main.js?");

/***/ }),

/***/ "./modules/main/main.scss":
/*!********************************!*\
  !*** ./modules/main/main.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/main/main.scss?");

/***/ })

/******/ });